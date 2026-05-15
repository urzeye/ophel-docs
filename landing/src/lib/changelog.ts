import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Reads the first released version from changelog.mdx at build time.
 * Returns the version string without a leading "v", e.g. "1.0.50".
 * Falls back to an empty string if the file cannot be read.
 */
export function getLatestVersion(): string {
  try {
    const changelogPath = resolve(process.cwd(), '../changelog.mdx');
    const raw = readFileSync(changelogPath, 'utf-8');
    const match = raw.match(/<Update label="v?([^"]+)"/);
    return match?.[1] ?? '';
  } catch {
    return '';
  }
}
