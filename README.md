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
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/lib-base --type package --name lib --destination=packages/lib
```

### React Library

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/react-lib-base --type package --name react-lib --destination=packages/react-lib
```

### Cli

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/packages/cli-base --type package --name cli --destination=packages/cli
```

### React App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/react-base --type app --name react-app --destination=apps/react-app
```

### React Panda Radix App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/panda-base --type app --name panda-app --destination=apps/panda-app
```

### Cloudflare Workers App

```bash
npx turbo gen workspace --copy https://github.com/mizchi/monorepo/tree/main/apps/cf-workers-base --type app --name cf-worker --destination=apps/cf-worker
```

## LICENSE

MIT
