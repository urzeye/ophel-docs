// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// 纯静态输出 —— Cloudflare Pages 无需适配器即可部署
export default defineConfig({
	output: 'static',
	site: 'https://ophel.app',
});
