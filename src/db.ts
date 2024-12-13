import { PGlite } from "@electric-sql/pglite";
import { fuzzystrmatch } from "@electric-sql/pglite/contrib/fuzzystrmatch";
import { drizzle } from "drizzle-orm/pglite";
import { migrate as drizzleMigrate } from "drizzle-orm/postgres-js/migrator";
import { seed } from "drizzle-seed";
import * as schema from "./schema";

const pg = new PGlite({
  extensions: { fuzzystrmatch },
});

export const db = drizzle(pg);

export const migrate = async () => {
  await drizzleMigrate(db, {
    migrationsFolder: `${__dirname}/../drizzle`,
  });
};

export const migrateAndSeed = async () => {
  await migrate();

  await seed(db, schema);
};
