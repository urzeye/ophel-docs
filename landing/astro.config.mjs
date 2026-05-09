// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
// 纯静态输出 —— Cloudflare Pages 无需适配器即可部署
export default defineConfig({
  output: 'static',
  site: 'https://ophel.app',

  integrations: [sitemap({
			// 多语言 sitemap：/zh/* 页面标注为 zh-CN，其余为 en-US
			i18n: {
          defaultLocale: 'en',
          locales: {
              en: 'en-US',
              zh: 'zh-CN',
          },
			},
			// 为各页面设置爬取优先级与更新频率
			serialize(item) {
          // 首页最高优先级，每周更新
          if (item.url === 'https://ophel.app/' || item.url === 'https://ophel.app/zh/') {
              return { ...item, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
          }
          // changelog 页面月度更新
          if (item.url.includes('/changelog')) {
              return { ...item, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
          }
          // download 页面较稳定
          if (item.url.includes('/download')) {
              return { ...item, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
          }
          // 隐私政策极少变更
          if (item.url.includes('/privacy')) {
              return { ...item, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
          }
          // 其余页面默认
          return { ...item, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
			},
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});