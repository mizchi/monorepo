#!/usr/bin/env -S deno run -A --ext ts
import { $ } from "npm:zx@7.1.1";

await $`pnpm install`;
await $`pnpm check`;
await $`turbo build test typecheck`;
