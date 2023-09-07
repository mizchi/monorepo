# Monorepo

My monorepo boilerplate.

## Stack

- turborepo
- @turbo/gen
- typescript
- vite/vitest
- biome
- react

## Use as monorepo base

```bash
$ git clone https://github.com/mizchi/monorepo
# cd <here>
$ rm -r apps packages
$ pnpm install

## Tasks
$ pnpm build
$ pnpm test
$ pnpm typecheck
$ pnpm format
$ pnpm check # biome check on ci
```

## Use pkg with `turbo gen workspace`

Add dependencies

```bash
pnpm add vite vitest typescript -Dw
```

Put `tsconfig.base.jon`

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "NodeNext",
    "allowJs": true,
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["vitest/importMeta"]
  }
}
```

### Npm module

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/lib-base
```

### React Library

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/react-lib-base
```

### Cli

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/cli-base
```

### React App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/react-base
```

### React Panda Radix App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/panda-base
```

### Cloudflare Workers App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/cf-workers-base
```

## LICENSE

MIT
