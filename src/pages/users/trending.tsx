import type { AppRouter } from "../../server/trpc/router/_app";
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  Updater,
} from "@tanstack/react-table";
import type { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { trpc } from "../../utils/trpc";
import { inferElementType } from "../../utils/types";

import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import Link from "next/link";

// Hook
function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
type queryInputType = inferProcedureInput<
  AppRouter["twitterUser"]["getTrending"]
>;
type queryOutputType = inferProcedureOutput<
  AppRouter["twitterUser"]["getTrending"]
>["rows"];
type queryOutputElementType = inferElementType<queryOutputType>;
const Trending: NextPage = () => {
  type intervalOptionType = queryInputType["interval"];
  const intervalOptions: intervalOptionType[] = [
    "1d",
    "3d",
    "7d",
    "30d",
    "90d",
    "180d",
    "365d",
  ];
  const [interval, setInterval] = useState<intervalOptionType>("3d");

  // Table
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });

  const debounceFilters = debounce(
    (filters: Updater<ColumnFiltersState>) => setColumnFilters(filters),
    500
  );
  const debounceSorting = debounce(
    (sorting: Updater<SortingState>) => setSorting(sorting),
    500
  );

  const query = trpc.twitterUser.getTrending.useQuery({
    interval: interval,
    filters: columnFilters.map((x) => {
      return {
        id: x.id,
        value: x.value as (string | null | undefined)[],
      };
    }),
    sorting: sorting.map((x) => {
      return { id: x.id, desc: x.desc };
    }),
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const [data, setData] = useState<queryOutputType>([]);
  useEffect(() => {
    if (query.data) setData(query.data.rows);
  }, [query]);

  useEffect(() => {
    console.log(columnFilters);
  }, [columnFilters]);

  useEffect(() => {
    console.log(sorting);
  }, [sorting]);
  const columns = useMemo<MRT_ColumnDef<queryOutputElementType>[]>(
    () => [
      {
        accessorKey: "weighted_difference",
        header: "Diff. weighted",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "difference",
        header: "Diff.",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "marked_followers_ratio",
        header: "Marked ratio",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{parseFloat(value.toString()).toFixed(5)}</div>;
        },
      },
      {
        accessorKey: "weighted_marked_followers",
        header: "Marked weighted",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "marked_followers",
        header: "Marked",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },

      {
        accessorKey: "username",
        header: "Username",
        enableColumnFilter: false,
        Cell: ({ cell }) => {
          const value = cell?.getValue<string | undefined>();
          if (!value) return <div></div>;
          return (
            <Link href={`/user/${value}`}>
              <a className="visited:text-gray-400">{value}</a>
            </Link>
          );
        },
      },
      {
        accessorKey: "followers_count",
        header: "Followers",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "following_count",
        header: "Following",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "tweet_count",
        header: "Tweets",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const value = cell?.getValue<number | undefined>();
          if (!value) return <div></div>;
          return <div>{value.toLocaleString()}</div>;
        },
      },
      {
        accessorKey: "account_created_at",
        header: "Created at",
        filterVariant: "range",
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>();
          return (
            <div>{`${date.getFullYear().toLocaleString("en-US", {
              minimumIntegerDigits: 4,
              useGrouping: false,
            })}-${(date.getMonth() + 1).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}-${date.getDate().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}`}</div>
          );
        },
      },
    ],

    []
  );

  const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            default: "#111827",
          },
        },
      }),
    [globalTheme]
  );

  return (
    <div className="h-screen">
      <label
        htmlFor="intervals"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Select an option
      </label>
      <select
        id="intervals"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={(e) => setInterval(e.target.value as intervalOptionType)}
      >
        {intervalOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={data} //data is undefined on first render
          initialState={{ showColumnFilters: true }}
          manualFiltering
          manualPagination
          manualSorting
          muiToolbarAlertBannerProps={
            isError
              ? {
                  color: "error",

                  children: "Error loading data",
                }
              : undefined
          }
          onColumnFiltersChange={(filters) => debounceFilters(filters)}
          onGlobalFilterChange={setGlobalFilter}
          onPaginationChange={setPagination}
          onSortingChange={(sorting) => debounceSorting(sorting)}
          // renderTopToolbarCustomActions={() => (
          //     <Tooltip arrow title="Refresh Data">
          //         <IconButton onClick={() => refetch()}>
          //             <RefreshIcon />
          //         </IconButton>
          //     </Tooltip>
          // )}
          rowCount={query.data?.max_results}
          state={{
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            sorting,
            showProgressBars: query.isFetching,
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default Trending;
