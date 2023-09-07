type Env = {
  // DB: D1Database
};

async function fetch(req: Request, env: Env): Promise<Response> {
  return new Response("Hello world!");
}

export default {
  fetch,
};
