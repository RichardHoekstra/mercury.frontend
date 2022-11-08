import { PrismaClient } from "@prisma/client";
import { Pool, PoolClient } from "pg";

import { env } from "../../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// this function exposes the pool, while handling the connection itself
export async function withConnection<T>(
  callback: (poolClient: PoolClient) => Promise<T>
) {
  let poolClient: PoolClient | null = null;

  try {
    poolClient = await pool.connect();
    const output = await callback(poolClient);
    return output;
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    if (poolClient) {
      poolClient.release();
    }
  }
}
