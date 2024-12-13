import { beforeEach, describe, expect, test } from "bun:test";
import { db, migrate } from "./db";
import { User } from "./schema";
import { seed } from "drizzle-seed";
import { app } from "./app";

describe("app", () => {
  beforeEach(async () => {
    await migrate();
    await db.delete(User);
    await seed(db, { User }, { count: 10 });
  });

  test("should return 10 users", async () => {
    const result = await app.request("/users", { method: "GET" });
    const body = await result.json();
    expect(result.status).toBe(200);
    expect(body.length).toBe(10);
  });
});
