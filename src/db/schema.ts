import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", {length: 10}),
  address: text("address"),
  email: text("email").notNull().unique(),
})
