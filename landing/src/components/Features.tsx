import React from 'react';
import { Cloud, FolderKanban, Layers3, LayoutList, Palette, Search, Sparkles } from 'lucide-react';

type Locale = 'en' | 'zh';

interface FeatureItem {
  title: string;
  desc: string;
}

interface FeaturesProps {
  featuresTitle: string;
  featuresSubtitle: string;
  items: FeatureItem[];
  locale?: Locale;
}

const text = {
  en: {
    kicker: 'What changes after install',
    productTour: [
      {
        title: 'Long answers become a map',
        desc: 'Ophel reads headings in real time and builds a clickable outline beside the chat.',
        image: '/images/product/outline-en.png',
        alt: 'Ophel outline panel next to a long AI conversation',
      },
      {
        title: 'Conversations stop scattering',
        desc: 'Folders, tags, search, and batch operations turn AI history into a reusable workspace.',
        image: '/images/product/conversation-en.png',
        alt: 'Ophel conversation folder management panel',
      },
      {
        title: 'Prompts become shared assets',
        desc: 'Save structured prompts, browse categories, and insert the right template without leaving the AI site.',
        image: '/images/product/prompt-en.png',
        alt: 'Ophel prompt library panel with a prompt preview',
      },
    ],
    matrixLabel: 'Capability map',
  },
  zh: {
    kicker: '安装后，工作流会发生什么变化',
    productTour: [
      {
        title: '长回答变成地图',
        desc: 'Ophel 实时读取标题结构，并在对话旁生成可点击的大纲。',
        image: '/images/product/outline-zh.png',
        alt: 'Ophel 在长 AI 对话旁显示大纲面板',
      },
      {
        title: '对话不再散落',
        desc: '文件夹、标签、搜索和批量操作，把 AI 历史整理成可复用工作区。',
        image: '/images/product/conversation-zh.png',
        alt: 'Ophel 会话文件夹管理面板',
      },
      {
        title: 'Prompt 变成资产',
        desc: '保存结构化提示词，按分类浏览，并在 AI 网站内直接插入模板。',
        image: '/images/product/prompt-zh.png',
        alt: 'Ophel Prompt 词库面板和提示词预览',
      },
    ],
    matrixLabel: '能力地图',
  },
} as const;

const ICONS = [LayoutList, FolderKanban, Sparkles, Search, Palette, Cloud];

export function Features({ featuresTitle, featuresSubtitle, items, locale = 'en' }: FeaturesProps) {
  const copy = text[locale];

  return (
    <section id="features" className="features-shell relative z-10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="section-heading">
          <p className="section-kicker">{copy.kicker}</p>
          <h2>{featuresTitle}</h2>
          <p>{featuresSubtitle}</p>
        </div>

        <div className="tour-grid">
          {copy.productTour.map((feature, index) => (
            <article className="tour-card" key={feature.title}>
              <div className="tour-card-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
              <div className="tour-shot-frame">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  loading="eager"
                  width="1280"
                  height="800"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="feature-matrix" aria-label={copy.matrixLabel}>
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length] ?? Layers3;
            return (
              <article className="feature-cell" key={item.title}>
                <div className="feature-icon">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
