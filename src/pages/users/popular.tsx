import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  Updater,
} from "@tanstack/react-table";
import type { inferProcedureOutput } from "@trpc/server";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { trpc } from "../../utils/trpc";
import type { inferElementType } from "../../utils/types";

import { createTheme, ThemeProvider, useTheme } from "@mui/material";

import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
import type { AppRouter } from "../../server/trpc/router/_app";

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

type queryOutputType = inferProcedureOutput<
  AppRouter["twitterUser"]["getPopular"]
>["rows"];
type queryOutputElementType = inferElementType<queryOutputType>;
const Popular: NextPage = () => {
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

  const query = trpc.twitterUser.getPopular.useQuery({
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

  const columns = useMemo<MRT_ColumnDef<queryOutputElementType>[]>(
    () => [
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

export default Popular;
