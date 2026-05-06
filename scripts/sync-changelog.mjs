#!/usr/bin/env node
/**
 * sync-changelog.mjs
 * Fetches CHANGELOG.md from ophel repo and converts to Mintlify MDX changelog page.
 *
 * Usage:
 *   node scripts/sync-changelog.mjs              # fetch from GitHub
 *   node scripts/sync-changelog.mjs --local      # read from local ../ophel/CHANGELOG.md
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const CHANGELOG_URL =
	"https://raw.githubusercontent.com/urzeye/ophel/main/CHANGELOG.md";
const LOCAL_PATH = resolve(__dirname, "../../ophel/CHANGELOG.md");

const isLocal = process.argv.includes("--local");

// ── Fetch / read source ─────────────────────────────────────────────────────
async function fetchSource() {
	if (isLocal) {
		console.log("Reading local CHANGELOG.md …");
		return readFileSync(LOCAL_PATH, "utf8");
	}
	console.log("Fetching CHANGELOG.md from GitHub …");
	const res = await fetch(CHANGELOG_URL);
	if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	return res.text();
}

// ── Parse into version blocks ───────────────────────────────────────────────
function parseVersions(raw) {
	// Split on ## [ headings (version entries)
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

// ── Convert one version to MDX Update block ─────────────────────────────────
function versionToUpdate(version) {
	// Trim trailing blank lines
	let body = version.lines.join("\n").trimEnd();
	// Indent content by 2 spaces inside Update block for readability
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

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
	const raw = await fetchSource();
	const versions = parseVersions(raw);

	console.log(`Parsed ${versions.length} versions (latest: v${versions[0]?.label})`);

	const enMdx = buildMdx(
		versions,
		"Changelog",
		"All notable changes to Ophel Atlas are documented here."
	);
	const zhMdx = buildMdx(
		versions,
		"更新日志",
		"Ophel Atlas 的所有重要更改均记录于此。"
	);

	writeFileSync(resolve(ROOT, "changelog.mdx"), enMdx, "utf8");
	console.log("Written: changelog.mdx");

	mkdirSync(resolve(ROOT, "zh"), { recursive: true });
	writeFileSync(resolve(ROOT, "zh/changelog.mdx"), zhMdx, "utf8");
	console.log("Written: zh/changelog.mdx");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
