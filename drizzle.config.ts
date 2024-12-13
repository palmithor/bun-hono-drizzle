import type { Config } from "drizzle-kit";
export default {
	schema: "./src/schema.ts",
	out: "./drizzle",
	dialect: "postgresql",
	migrations: {
		prefix: "timestamp",
	},
} satisfies Config;
