// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// 纯静态输出 —— Cloudflare Pages 无需适配器即可部署
export default defineConfig({
	output: 'static',
	site: 'https://ophel.app',
	integrations: [
		sitemap({
			// 多语言 sitemap：/zh/* 页面标注为 zh-CN，其余为 en-US
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					zh: 'zh-CN',
				},
			},
		}),
	],
});
