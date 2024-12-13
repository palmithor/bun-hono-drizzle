import { PGlite } from "@electric-sql/pglite";
import { fuzzystrmatch } from "@electric-sql/pglite/contrib/fuzzystrmatch";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { seed } from "drizzle-seed";
import * as schema from "./schema";

const pg = new PGlite({
	extensions: { fuzzystrmatch },
});

export const db = drizzle(pg);

export const migrateAndSeed = async () => {
	await migrate(db, {
		migrationsFolder: `${__dirname}/../drizzle`,
	});

	await seed(db, schema);
};
