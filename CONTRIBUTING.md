# Contributing to Ophel Atlas Documentation

Thank you for helping improve the Ophel Atlas documentation and website.

## Before you edit

- Verify every default value, keyboard shortcut, permission, capability, and settings path against the [ophel](https://github.com/urzeye/ophel) source code.
- Keep English (`*.mdx`) and Chinese (`zh/*.mdx`) pages structurally mirrored. Every internal link inside `zh/*.mdx` must start with `/zh/`.
- Do not edit `changelog.mdx` or `zh/changelog.mdx` directly—they are generated from `ophel/CHANGELOG*.md` via `node scripts/sync-changelog.mjs`.
- Follow the terminology and MDX conventions in [AGENTS.md](AGENTS.md).

## Local development

1. Fork and clone this repository, then create a branch for your changes.
2. Install the Mintlify CLI (`npm i -g mint`) and preview docs locally:

   ```bash
   mint dev
   ```

3. If editing the landing site under `landing/`, install dependencies and preview with:

   ```bash
   pnpm --dir landing install
   pnpm --dir landing dev
   ```

## Verification before opening a PR

Run the checks relevant to the files you changed:

- **Docs**:

  ```bash
  mint validate
  mint broken-links --check-anchors
  mint a11y
  ```

- **Landing site**:

  ```bash
  pnpm --dir landing typecheck
  pnpm --dir landing format:check
  pnpm --dir landing build
  ```

- **Cloudflare Worker**:

  ```bash
  pnpm --dir worker typecheck
  ```

## Writing guidelines

- Write clearly and directly in plain language for users.
- Use active voice, second person ("you"), and sentence case headings.
- Keep product terms consistent with the UI labels in `ophel/src/locales/{en,zh-CN}/index.ts` (for example, **Site Packs** / **适配中心**, **Chats** / **对话**, **Global Search** / **全局搜索**).
- Preserve existing frontmatter `icon` and `keywords` fields, avoid putting JSX tags inside Markdown headings, and use `/snippets/icon.jsx`, `/snippets/shortcut.jsx`, and `/snippets/docs-video.jsx` for icons, shortcuts, and MP4 videos.
