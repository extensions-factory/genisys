# genisys

> Interactive CLI provisioner — cookiecutter-style wizard with nested recipes for system setup.

**Status:** scaffolding (v0.0.0 — not yet published)

## Usage

```bash
npx genisys              # launch interactive wizard
npx genisys list         # list available recipes
npx genisys info <name>  # show recipe details
npx genisys doctor       # check system state
npx genisys run <name>   # run a specific recipe
```

### Global flags

| Flag | Description |
|------|-------------|
| `--dry-run` | preview changes without applying |
| `-y, --yes` | skip confirmation prompts |
| `-v, --verbose` | verbose output |
| `--no-backup` | skip backup (power users) |

## Install

This package is published to **GitHub Packages**, not npmjs. To install, configure your `.npmrc` first:

```
@extensions-factory:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_PAT>
```

Your GitHub PAT needs the `read:packages` scope. Then install:

```bash
npm install @extensions-factory/genisys
```

> **Note:** GitHub Packages requires authentication even for public packages.

## Design

See [`.skynet/plan/cli-provisioner-design.md`](./.skynet/plan/cli-provisioner-design.md) for the full design document.

## Development

```bash
pnpm install
pnpm dev           # run CLI in watch/dev mode via tsx
pnpm typecheck     # type check without emit
pnpm build         # compile to dist/
```

## License

MIT
