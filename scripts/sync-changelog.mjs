#!/usr/bin/env node
/**
 * sync-changelog.mjs
 * Fetches the bilingual changelog from the ophel repo and converts each
 * language into a Mintlify MDX changelog page.
 *
 * Source files in the ophel repo:
 *   - CHANGELOG.md         (English, default)
 *   - CHANGELOG.zh-CN.md   (Chinese)
 *
 * Output files in this docs repo:
 *   - changelog.mdx        (English)
 *   - zh/changelog.mdx     (Chinese)
 *
 * Usage:
 *   node scripts/sync-changelog.mjs              # fetch from GitHub
 *   node scripts/sync-changelog.mjs --local      # read from local ../ophel/CHANGELOG*.md
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCES = {
	en: {
		url: "https://raw.githubusercontent.com/urzeye/ophel/main/CHANGELOG.md",
		localPath: resolve(__dirname, "../../ophel/CHANGELOG.md"),
		outPath: resolve(ROOT, "changelog.mdx"),
		title: "Changelog",
		description: "All notable changes to Ophel Atlas are documented here.",
	},
	zh: {
		url: "https://raw.githubusercontent.com/urzeye/ophel/main/CHANGELOG.zh-CN.md",
		localPath: resolve(__dirname, "../../ophel/CHANGELOG.zh-CN.md"),
		outPath: resolve(ROOT, "zh/changelog.mdx"),
		title: "更新日志",
		description: "Ophel Atlas 的所有重要更改均记录于此。",
	},
};

const isLocal = process.argv.includes("--local");

// ── Fetch / read source ─────────────────────────────────────────────────────
async function fetchSource(source) {
	if (isLocal) {
		console.log(`Reading ${source.localPath} …`);
		return readFileSync(source.localPath, "utf8");
	}
	console.log(`Fetching ${source.url} …`);
	const res = await fetch(source.url);
	if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	return res.text();
}

// ── Parse into version blocks ───────────────────────────────────────────────
function parseVersions(raw) {
	const lines = raw.split("\n");
	const versions = [];
	let current = null;

	for (const line of lines) {
		const versionMatch = line.match(/^## \[(.+?)\]/);
		if (versionMatch) {
			if (current) versions.push(current);
			current = { label: versionMatch[1], lines: [] };
			continue;
		}
		if (current) {
			// Skip bare --- separators between versions
			if (line.trim() === "---") continue;
			current.lines.push(line);
		}
	}
	if (current) versions.push(current);
	return versions;
}

// ── Normalize Markdown content for MDX ──────────────────────────────────────
function normalizeMdxContent(content) {
	return content.replace(/<!--([\s\S]*?)-->/g, (_, comment) => {
		const safeComment = comment.replace(/\*\//g, "* /").trim();
		return `{/* ${safeComment} */}`;
	});
}

// ── Convert one version to MDX Update block ─────────────────────────────────
function versionToUpdate(version) {
	let body = normalizeMdxContent(version.lines.join("\n").trimEnd());
	const indented = body
		.split("\n")
		.map((l) => (l.trim() === "" ? "" : "  " + l))
		.join("\n");
	return `<Update label="v${version.label}">\n${indented}\n</Update>`;
}

// ── Build MDX file content ───────────────────────────────────────────────────
function buildMdx(versions, title, description) {
	const frontmatter = `---\ntitle: "${title}"\ndescription: "${description}"\n---\n\n`;
	const blocks = versions.map(versionToUpdate).join("\n\n");
	return frontmatter + blocks + "\n";
}

// ── Sync a single language ──────────────────────────────────────────────────
async function syncLanguage(lang, source) {
	const raw = await fetchSource(source);
	const versions = parseVersions(raw).filter(
		(v) => v.label.toLowerCase() !== "unreleased"
	);
	console.log(
		`[${lang}] Parsed ${versions.length} versions (latest: v${versions[0]?.label})`
	);
	const mdx = buildMdx(versions, source.title, source.description);
	mkdirSync(dirname(source.outPath), { recursive: true });
	writeFileSync(source.outPath, mdx, "utf8");
	console.log(`[${lang}] Written: ${source.outPath}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
	for (const [lang, source] of Object.entries(SOURCES)) {
		await syncLanguage(lang, source);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
