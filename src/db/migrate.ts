import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main(){
  console.log("generating migrations...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migrations generated");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(0);
})
