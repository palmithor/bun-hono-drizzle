import { Hono } from "hono";
import { app } from "./app";
import { migrateAndSeed } from "./db";

await migrateAndSeed();

export default {
  port: 7777,
  fetch: app.fetch,
};
