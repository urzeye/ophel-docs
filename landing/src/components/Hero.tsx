import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  Download,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface BrowserCta {
  label: string;
  href: string;
}

interface HeroProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryLink: string;
  secondaryLink: string;
  alternateInstallLabel: string;
  alternateInstallLink: string;
  browserCtas?: Record<string, BrowserCta>;
  version?: string;
  locale?: 'en' | 'zh';
}

function detectBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox/')) return 'firefox';
  if (ua.includes('Edg/')) return 'edge';
  if (ua.includes('Chrome/')) return 'chrome';
  return 'default';
}

const BROWSER_ICONS: Record<string, string> = {
  chrome: '/icons/chrome.svg',
  edge: '/icons/edge.svg',
  firefox: '/icons/firefox.svg',
};

const PLATFORM_STRIP = [
  { label: 'ChatGPT', icon: '/icons/chatgpt.png', href: 'https://chatgpt.com' },
  { label: 'Claude', icon: '/icons/claude.svg', href: 'https://claude.ai' },
  { label: 'Gemini', icon: '/icons/gemini.png', href: 'https://gemini.google.com' },
  { label: 'DeepSeek', icon: '/icons/deepseek.svg', href: 'https://chat.deepseek.com' },
  { label: 'Kimi', icon: '/icons/kimi.png', href: 'https://www.kimi.com' },
];

const text = {
  en: {
    eyebrow: 'Browser extension for serious AI work',
    live: 'is live',
    dashboard: 'Live outline',
    panel: 'Ophel panel',
    workflow: 'Reading a long research thread',
    command: 'Jump to reusable prompt snippets',
    browserSupport: 'Chrome, Edge, Firefox and Tampermonkey',
    localFirst: 'Local-first data',
    morePlatforms: '+ 10 more',
    screenshotAlt:
      'Ophel Atlas side panel generating a real-time outline beside an AI conversation',
    stats: [
      ['15', 'AI platforms'],
      ['3', 'navigation layers'],
      ['0', 'required accounts'],
    ],
    rail: [
      ['Outline', 'Jump through long replies by heading.', '/icons/outline.svg'],
      ['Folders', 'Keep chats grouped by project.', '/icons/folder.svg'],
      ['Prompts', 'Reuse structured prompt templates.', '/icons/prompt-library.svg'],
    ],
  },
  zh: {
    eyebrow: '为高频 AI 工作流设计的浏览器扩展',
    live: '已发布',
    dashboard: '实时大纲',
    panel: 'Ophel 面板',
    workflow: '正在阅读长研究对话',
    command: '跳转到可复用 Prompt 片段',
    browserSupport: '支持 Chrome、Edge、Firefox 与油猴脚本',
    localFirst: '数据本地优先',
    morePlatforms: '+ 10 个平台',
    screenshotAlt: 'Ophel Atlas 在 AI 对话旁生成实时大纲的侧边面板',
    stats: [
      ['15', 'AI 平台'],
      ['3', '导航层级'],
      ['0', '必需账号'],
    ],
    rail: [
      ['大纲', '按标题跳转长回复。', '/icons/outline.svg'],
      ['文件夹', '按项目整理对话。', '/icons/folder.svg'],
      ['Prompt', '复用结构化提示词模板。', '/icons/prompt-library.svg'],
    ],
  },
} as const;

export function Hero({
  titleLine1,
  titleLine2,
  description,
  primaryCta,
  secondaryCta,
  primaryLink,
  secondaryLink,
  alternateInstallLabel,
  alternateInstallLink,
  browserCtas,
  version,
  locale = 'en',
}: HeroProps) {
  const [ctaLabel, setCtaLabel] = useState(primaryCta);
  const [ctaHref, setCtaHref] = useState(primaryLink);
  const [browserIcon, setBrowserIcon] = useState<string | null>(null);

  useEffect(() => {
    const browser = detectBrowser();
    setBrowserIcon(BROWSER_ICONS[browser] ?? null);
    const cta = browserCtas?.[browser] ?? browserCtas?.default;
    if (cta) {
      setCtaLabel(cta.label);
      setCtaHref(cta.href);
    }
  }, [browserCtas]);

  const copy = text[locale];
  const screenshot = `/images/product/outline-${locale}.png`;
  const titleAccentParts =
    locale === 'zh'
      ? titleLine2.split('、')
      : titleLine2
          .split(', ')
          .map((part, index, parts) => `${part}${index < parts.length - 1 ? ',' : ''}`);

  return (
    <section className="hero-shell relative isolate overflow-hidden px-5 pb-20 pt-20 sm:px-6 lg:px-8">
      <div className="hero-grid-bg" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:min-h-[760px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        <div className="hero-copy">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-muted)] px-3 py-1.5 text-xs font-semibold uppercase text-[color:var(--accent-strong)]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{copy.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            <span>{titleLine1}</span>
            {titleAccentParts.map((part) => (
              <span className="hero-title-mark" key={part}>
                {part}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[660px] text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
            {description}
          </p>

          <div className="hero-cta-block mt-8">
            <div className="hero-cta-row">
              <div className="hero-install-stack">
                <a className="hero-primary-btn group" href={ctaHref}>
                  {browserIcon ? (
                    <img src={browserIcon} alt="" width="19" height="19" className="shrink-0" />
                  ) : (
                    <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
                  )}
                  <span>{ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a className="hero-alt-install" href={alternateInstallLink}>
                  <Boxes className="h-3.5 w-3.5" aria-hidden="true" />
                  {alternateInstallLabel}
                </a>
              </div>

              <a className="hero-secondary-btn group" href={secondaryLink}>
                <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{secondaryCta}</span>
              </a>
            </div>
          </div>

          <div className="mt-9 grid max-w-[540px] grid-cols-3 gap-2">
            {copy.stats.map(([value, label]) => (
              <div className="hero-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-[color:var(--text-faint)]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3 py-1.5">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--ok)]" aria-hidden="true" />
              Ophel {version ? `v${version} ${copy.live}` : copy.live}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--surface-muted)] px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-[color:var(--ok)]" aria-hidden="true" />
              {copy.localFirst}
            </span>
          </div>
        </div>

        <div className="hero-product" aria-label={copy.screenshotAlt}>
          <div className="product-window">
            <div className="product-window-bar">
              <div className="flex items-center gap-2">
                <span className="window-dot bg-[#ff6b57]" />
                <span className="window-dot bg-[#f7c948]" />
                <span className="window-dot bg-[#48c78e]" />
              </div>
              <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--ink-muted)]">
                {copy.dashboard}
              </span>
            </div>

            <div className="product-stage">
              <img
                src={screenshot}
                alt={copy.screenshotAlt}
                width="1280"
                height="800"
                className="product-shot"
                decoding="async"
              />
              <div className="product-command">
                <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{copy.command}</span>
              </div>
              <div className="product-panel-card">
                <span>{copy.panel}</span>
                <strong>{copy.workflow}</strong>
              </div>
            </div>
          </div>

          <div className="product-rail">
            {copy.rail.map(([title, desc, icon]) => {
              return (
                <div className="rail-card" key={title}>
                  <img className="rail-card-icon" src={icon} alt="" width="18" height="18" />
                  <div>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="platform-strip" aria-label={copy.browserSupport}>
            {PLATFORM_STRIP.map((platform) => (
              <a
                className="platform-strip-item"
                href={platform.href}
                key={platform.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={platform.icon} alt="" width="18" height="18" loading="lazy" />
                {platform.label}
              </a>
            ))}
            <a className="platform-strip-more" href="#platforms">
              {copy.morePlatforms}
            </a>
          </div>

          <div className="mt-4 flex justify-center sm:justify-start">
            <a
              className="hero-tooltivity-link"
              href="https://tooltivity.com/extensions/ophel"
              target="_blank"
              rel="noopener noreferrer"
              title="Reviewed and tested by Tooltivity"
              aria-label="Ophel Atlas: AI Chat Organizer review on Tooltivity (opens in new tab)"
            >
              <img
                src="https://tooltivity.com/api/widgets/embed-image/v1/featured.svg?extension=ophel&theme=light"
                alt="Tooltivity - Tested and reviewed by Tooltivity"
                width="180"
                height="40"
                className="hero-tooltivity-image"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
