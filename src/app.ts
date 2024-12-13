import { Hono } from "hono";
import { db } from "./db";
import { User } from "./schema";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  return c.json(await db.select().from(User));
});

export { app };
