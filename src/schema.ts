import {
	boolean,
	integer,
	jsonb,
	numeric,
	pgTable,
	primaryKey,
	serial,
	text,
	timestamp,
	unique,
	uniqueIndex,
} from "drizzle-orm/pg-core";

export const User = pgTable(
	"user",
	{
		id: serial("id").primaryKey(),
		name: text("name").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => [],
);

export const Organization = pgTable(
	"organization",
	{
		id: serial("id").primaryKey(),
		name: text("name").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => [],
);

export const OrganizationMembership = pgTable(
	"organization_membership",
	{
		id: serial("id").primaryKey(),
		userId: integer("user_id")
			.notNull()
			.references(() => User.id, {
				onDelete: "cascade",
			}),
		organizationId: integer("organization_id")
			.notNull()
			.references(() => User.id, {
				onDelete: "cascade",
			}),
		role: text("role", { enum: ["admin", "member"] }).notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => [
		unique("organization_membership_uq").on(table.userId, table.organizationId),
	],
);
