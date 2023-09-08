# vsce-base

## Build

```bash
$ pnpm install
$ pnpm build

# Get your vscode marketplace token and set VSCE_PAT="..."
$ pnpm build
$ pnpm package
$ pnpm publish
$ pnpm test
```

## Develop

Open as workspace root `code . --add` && Build(F5)

## Publish

Get persolan access token https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token

```bash
$ cp .env.example .env
```

Edit `.env`

```
VSCE_PAT="<your-token>"
```

Run

```bash
$ pnpm publish
```

## LICENSE

MIT