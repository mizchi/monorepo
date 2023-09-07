# Monorepo

My monorepo boilerplate.

## Stack

- turborepo
- @turbo/gen
- typescript
- vite/vitest
- biome
- react

## How to use

```bash
# git clone <this> && cd <here>
$ rm -r apps packages # clean for your use

$ pnpm install
$ pnpm build
$ pnpm test
$ pnpm typecheck
$ pnpm format
$ pnpm format:check # run on ci
```

## Generators

```bash
# npm package
$ pnpm gen lib --args mylib #=> packages/mylib
# React lib packages
$ pnpm gen react-lib --args myreactlib #=> packages/myreactlib
# CLI package
$ pnpm gen cli --args mycli #=> packages/mycli
# Vite React App
$ pnpm gen react --args myapp #=> apps/myapp
# Vite / React / PandaCSS / RadixUI
$ pnpm gen panda --args mypanda #=> apps/myapp
# Generate Cloudflare Worker
$ pnpm gen cf-worker --args myworker #=> apps/myworker
```

## Edit template

See `turbo/generators/templates/{generatorName}`

## How to contributes

Add your template under `turbo/generators/templates` and edit `turbo/generators/config.ts`.

Run generators itself.

```bash
$ pnpm zx script/test-gen.mjs
```

## LICENSE

MIT
