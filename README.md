# Ophel Atlas documentation

This repository contains the public documentation, landing site, and routing worker for [Ophel Atlas](https://github.com/urzeye/ophel).

Ophel Atlas is a browser extension and userscript that turns AI chat conversations into structured, navigable knowledge. This repo documents how to install, configure, troubleshoot, and understand the product.

## What is in this repo

```text
.
├── docs.json                 # Mintlify documentation configuration
├── *.mdx                     # English Mintlify documentation pages
├── zh/*.mdx                  # Chinese Mintlify documentation pages
├── scripts/
│   └── sync-changelog.mjs    # Syncs changelog pages from the ophel repo
├── landing/                  # Astro landing site for ophel.app
└── worker/                   # Cloudflare Worker router for /docs and landing traffic
```

## Documentation site

The root of this repository is a Mintlify documentation project.

Important files:

- `docs.json` defines navigation, theme, search, footer links, and language structure.
- `installation.mdx`, `introduction.mdx`, `faq.mdx`, and feature pages contain English documentation.
- `zh/` contains the Chinese documentation pages.
- `changelog.mdx` and `zh/changelog.mdx` are generated from the main `ophel` repository changelog.

Preview the docs locally from the repository root:

```bash
mint dev
```

Validate the Mintlify build:

```bash
mint validate
```

Check links:

```bash
mint broken-links
```

## Landing site

The `landing/` directory contains the Astro landing site used for the non-docs pages on `ophel.app`.

Install dependencies:

```bash
pnpm --dir landing install
```

Start the local landing site:

```bash
pnpm --dir landing dev
```

Build the landing site:

```bash
pnpm --dir landing build
```

Run landing checks:

```bash
pnpm --dir landing typecheck
pnpm --dir landing lint:check
pnpm --dir landing format:check
```

## Changelog sync

The changelog pages are generated from the main Ophel Atlas repository:

- `../ophel/CHANGELOG.md`
- `../ophel/CHANGELOG.zh-CN.md`

Sync from the local `../ophel` checkout:

```bash
node scripts/sync-changelog.mjs --local
```

Sync from GitHub:

```bash
node scripts/sync-changelog.mjs
```

The sync script converts release blocks into Mintlify `<Update>` sections. It also normalizes MDX-sensitive content, including HTML comments and GitHub issue references such as `#123`.

Do not manually edit `changelog.mdx` or `zh/changelog.mdx` for changelog content. Update the source changelog in the main `ophel` repository, then rerun the sync script.

## Cloudflare Worker

The `worker/` directory contains a small Cloudflare Worker that routes production traffic:

- `/docs` is proxied to the Mintlify deployment.
- `/images/icons/*` root requests are redirected under `/docs`.
- All other paths are proxied to the Cloudflare Pages landing deployment.

Run the worker locally:

```bash
pnpm --dir worker install
pnpm --dir worker dev
```

Type-check the worker:

```bash
pnpm --dir worker typecheck
```

Deploy the worker:

```bash
pnpm --dir worker deploy
```

## Recommended workflow

For documentation-only edits:

```bash
mint validate
```

For landing page edits:

```bash
pnpm --dir landing typecheck
pnpm --dir landing build
```

For changelog updates:

```bash
node scripts/sync-changelog.mjs --local
mint validate
pnpm --dir landing build
```

For worker edits:

```bash
pnpm --dir worker typecheck
```

## Writing guidelines

- Write in clear, direct English unless editing Chinese pages.
- Use active voice and address the reader as "you".
- Keep headings in sentence case.
- Use code formatting for file names, commands, paths, settings, and key names.
- Keep documentation focused on user-facing behavior and support workflows.

## Related repositories

- Main extension repository: <https://github.com/urzeye/ophel>
- Issues and feature requests: <https://github.com/urzeye/ophel/issues>
