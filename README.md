# Ophel Atlas Documentation

This repository contains the public documentation, marketing landing site, and routing worker for [Ophel Atlas](https://github.com/urzeye/ophel).

- Website: <https://ophel.app>
- Documentation (English): <https://ophel.app/docs>
- Documentation (中文): <https://ophel.app/docs/zh>

Ophel Atlas is a browser extension and userscript that adds a real-time outline, chat folders and tags, prompt templates, multi-format export, and global search to 16 built-in AI chat platforms plus community Site Packs.

## Repository layout

```text
.
├── docs.json                  # Mintlify navigation, theme, redirects, and i18n config
├── custom.css                 # Custom Mintlify layout, card, and width-switcher styles
├── content-width.js           # Client-side content width switcher & single-page sidebar layout
├── index.mdx / *.mdx          # English Mintlify documentation pages
├── zh/                        # Chinese Mintlify documentation pages (mirrored structure)
├── snippets/                  # Shared MDX components (icon, shortcut, docs-video, theme-preset-grid)
├── images/                    # Screenshots, icons (synced with ophel), and panel media
├── scripts/
│   └── sync-changelog.mjs     # Generates changelog.mdx and zh/changelog.mdx from the ophel repo
├── landing/                   # Astro landing site for ophel.app
└── worker/                    # Cloudflare Worker router for /docs and landing traffic
```

## Documentation site (Mintlify)

The repository root is a [Mintlify](https://mintlify.com) project.

Key files:

- `docs.json` defines navigation, theme, search, redirects, footer links, and `en` / `zh` language trees.
- `index.mdx` (`Introduction`), `installation.mdx`, `panel-overview.mdx`, `features/`, `enhancements/`, `customization/`, `data/`, `faq.mdx`, and `troubleshooting.mdx` hold the English docs.
- `zh/` mirrors the same pages in Chinese (internal links in `zh/*.mdx` must start with `/zh/`).
- `snippets/` provides reusable MDX components:
  - `icon.jsx` — inline `/images/icons/*` SVG/PNG icons with `/docs` subpath handling.
  - `shortcut.jsx` — cross-platform Windows/Linux & macOS keyboard shortcut badges.
  - `docs-video.jsx` — MP4 video wrapper with `/docs` subpath handling.
  - `theme-preset-grid.jsx` — visual grid of all 24 built-in theme presets.
- `changelog.mdx` and `zh/changelog.mdx` are generated from the main `ophel` repository.

Preview locally from the repository root:

```bash
mint dev
```

Validate build, links (including anchors), and accessibility:

```bash
mint validate
mint broken-links --check-anchors
mint a11y
```

## Landing site (Astro)

The `landing/` directory contains the Astro site serving the non-docs pages on `ophel.app` (including `/`, `/zh/`, `/download/`, `/zh/download/`, and `/uninstall/`).

```bash
pnpm --dir landing install
pnpm --dir landing dev
```

Run checks and build:

```bash
pnpm --dir landing typecheck
pnpm --dir landing format:check
pnpm --dir landing build
```

## Changelog sync

`changelog.mdx` and `zh/changelog.mdx` are generated from the main `ophel` repository:

- `../ophel/CHANGELOG.md`
- `../ophel/CHANGELOG.zh-CN.md`

Sync from a local `../ophel` checkout:

```bash
node scripts/sync-changelog.mjs --local
```

Sync from GitHub (also runs via `.github/workflows/sync-changelog.yml`):

```bash
node scripts/sync-changelog.mjs
```

Do not manually edit `changelog.mdx` or `zh/changelog.mdx`. Update the source changelog in `ophel` and rerun the sync script.

## Cloudflare Worker

The `worker/` directory routes production traffic on `ophel.app`:

- `/docs` and `/docs/*` are proxied to Mintlify, with HTML rewriting for `/images/icons/*` and `/images/panel/*` on `<img>`, `<video>`, and `<source>` elements.
- Root requests to `/images/icons/*` and `/images/panel/*` redirect (`308`) under `/docs`.
- `/.well-known/*` passes through directly.
- All other paths are proxied to the Cloudflare Pages landing deployment.

```bash
pnpm --dir worker install
pnpm --dir worker dev
pnpm --dir worker typecheck
pnpm --dir worker deploy
```

## Uninstall survey

When a user uninstalls the extension, the browser opens `https://ophel.app/uninstall/` (configured via `chrome.runtime.setUninstallURL` in the `ophel` repo with version, browser, language, and install-age query parameters).

- Page source: `landing/src/pages/uninstall/index.astro` (supports all 11 UI languages).
- Submissions go directly to PostHog (`POSTHOG_API_KEY` / `POSTHOG_HOST` at the top of that file) as `uninstall_survey_submitted` events with a random `distinct_id` and no personal identifiers.

## Recommended verification workflow

For documentation edits:

```bash
mint validate
mint broken-links --check-anchors
mint a11y
```

For landing page edits:

```bash
pnpm --dir landing typecheck
pnpm --dir landing format:check
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

## Contributing & style

See [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md) for terminology, bilingual mirroring rules, and verification requirements.

## Related links

- Main repository: <https://github.com/urzeye/ophel>
- Issues & feedback: <https://github.com/urzeye/ophel/issues>
