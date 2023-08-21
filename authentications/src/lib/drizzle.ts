import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, varchar, serial } from "drizzle-orm/pg-core";
// import { serial } from "drizzle-orm/mysql-core";

export const userPage = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", {
    length: 50,
  }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  password: varchar("password", { length: 100 }).notNull(),
});

export const db = drizzle(sql);
