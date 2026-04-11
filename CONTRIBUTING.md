# Contributing to genisys

Thanks for your interest! Here's how to contribute safely and get your change released.

## Development

```bash
pnpm install
pnpm dev           # run CLI in watch mode via tsx
pnpm typecheck     # type check without emit
pnpm build         # compile to dist/
pnpm test          # run tests
```

## Creating a changeset

Every user-facing change MUST include a changeset. Run:

```bash
pnpm changeset
```

Then:
1. Pick a bump type (`patch` / `minor` / `major`) following [semver](https://semver.org/).
2. Write a short summary — this becomes the `CHANGELOG.md` entry.
3. Commit the generated `.changeset/*.md` file alongside your code.

### Bump type guide

| Bump | When to use |
|------|-------------|
| `patch` | bug fixes, doc-only changes that clarify behavior, internal refactors |
| `minor` | new commands, new recipes, non-breaking additions |
| `major` | breaking changes to CLI flags, recipe API, or output contract |

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Examples:

- `feat: add doctor command`
- `fix(engine): handle missing rc file gracefully`
- `chore(deps): bump commander to v12`
- `docs: clarify dry-run behavior`

## Release flow

1. Open a PR with your changes + a changeset.
2. When the PR is merged to `main`, the release workflow opens or updates a **"Version Packages"** PR.
3. When the "Version Packages" PR is merged, the release workflow publishes to npm automatically.

You do not publish manually. Releases are strictly CI-driven.
