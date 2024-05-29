import { Pool } from "pg";
import { dbConfig } from "@/const/dbConfig";
import { sql } from "@vercel/postgres";
import { drizzle as drizzleNode } from "drizzle-orm/node-postgres";
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres";
import { isProd } from "@/const/config";

export const client = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});
// src/db/index.ts

// replace db with, this way we use local DB for DEV and Vercel DB in PROD
export const db = isProd ? drizzleVercel(sql) : drizzleNode(client);
