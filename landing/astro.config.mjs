// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
// 纯静态输出 —— Cloudflare Pages 无需适配器即可部署
const lastmod = () => new Date().toISOString();

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
      // 为各页面设置爬取优先级与更新频率
      serialize(item) {
        // 首页最高优先级，每周更新
        if (item.url === 'https://ophel.app/' || item.url === 'https://ophel.app/zh/') {
          return {
            ...item,
            changefreq: ChangeFreqEnum.WEEKLY,
            priority: 1.0,
            lastmod: lastmod(),
          };
        }
        // changelog 页面月度更新
        if (item.url.includes('/changelog')) {
          return {
            ...item,
            changefreq: ChangeFreqEnum.MONTHLY,
            priority: 0.8,
            lastmod: lastmod(),
          };
        }
        // download 页面较稳定
        if (item.url.includes('/download')) {
          return {
            ...item,
            changefreq: ChangeFreqEnum.MONTHLY,
            priority: 0.9,
            lastmod: lastmod(),
          };
        }
        // 隐私政策极少变更
        if (item.url.includes('/privacy')) {
          return {
            ...item,
            changefreq: ChangeFreqEnum.YEARLY,
            priority: 0.3,
            lastmod: lastmod(),
          };
        }
        // 其余页面默认
        return {
          ...item,
          changefreq: ChangeFreqEnum.MONTHLY,
          priority: 0.6,
          lastmod: lastmod(),
        };
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
