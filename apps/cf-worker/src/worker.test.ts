import { Miniflare } from "miniflare";
import { expect, test } from "vitest";

const dummyScript = `export default {
  async fetch(req) {
    return new Response("ok");
  }
}`;

const mf = new Miniflare({
  workers: [
    {
      modules: true,
      name: "worker",
      script: dummyScript,
      d1Databases: {
        DB: "testdb",
      },
    },
  ],
  d1Persist: false,
  d1Databases: ["testdb"],
});

test("worker", async () => {
  const bindings = await mf.getBindings();
  const db = (await bindings.DB) as D1Database;
  await db.exec(
    "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT)",
  );
  await db.exec("INSERT INTO test (name) VALUES ('test')");
  const result = await db.prepare("SELECT * FROM test").all();
  expect(result.results).toEqual([{ id: 1, name: "test" }]);
});
