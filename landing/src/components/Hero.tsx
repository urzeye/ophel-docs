import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  FolderKanban,
  LayoutList,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  CHROME_STORE_URL,
  EDGE_STORE_URL,
  FIREFOX_STORE_URL,
  GITHUB_RELEASES_URL,
  GREASYFORK_URL,
} from '../i18n';

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
  if (
    ua.includes('Safari/') &&
    !ua.includes('Chrome/') &&
    !ua.includes('Chromium/') &&
    !ua.includes('Edg/')
  ) {
    return 'safari';
  }
  if (ua.includes('Chrome/')) return 'chrome';
  return 'default';
}

const BROWSER_ICONS: Record<string, string> = {
  chrome: '/icons/chrome.svg',
  edge: '/icons/edge.svg',
  firefox: '/icons/firefox.svg',
  safari: '/icons/safari.svg',
};

const PLATFORM_STRIP = [
  { label: 'ChatGPT', icon: '/icons/chatgpt.png', href: 'https://chatgpt.com', inverted: true },
  { label: 'Gemini', icon: '/icons/gemini.png', href: 'https://gemini.google.com' },
  { label: 'Claude', icon: '/icons/claude.svg', href: 'https://claude.ai' },
  {
    label: 'Gemini Notebook',
    icon: '/icons/notebook.png',
    href: 'https://notebook.google.com',
    isNew: true,
  },
  { label: 'DeepSeek', icon: '/icons/deepseek.svg', href: 'https://chat.deepseek.com' },
  { label: 'Kimi', icon: '/icons/kimi.png', href: 'https://www.kimi.com' },
];

const text = {
  en: {
    live: 'Latest release',
    localFirst: '100% local-first · Zero telemetry',
    ecosystemSummary: '16 built-in sites + 16 hot-swap Site Packs',
    watchDemo: 'Watch 24s live demo',
    morePlatforms: '+ 26 more sites & packs →',
    newBadge: 'NEW',
    browsersLabel: 'Available on:',
    allDownloads: 'All install options',
    previewTabs: [
      {
        id: 'outline',
        label: 'Live Outline',
        caption: 'H1–H6 tree, inline search & section anchors',
        image: '/images/product/outline-en.png',
        alt: 'Ophel Atlas side panel generating a real-time outline beside an AI chat',
      },
      {
        id: 'folders',
        label: 'Chat Folders',
        caption: 'Nested project folders, tags & batch actions',
        image: '/images/product/conversation-en.png',
        alt: 'Ophel Atlas chat folder and tag management panel',
      },
      {
        id: 'prompts',
        label: 'Prompt Library',
        caption: 'Variable templates, quick quote & prompt chains',
        image: '/images/product/prompt-en.png',
        alt: 'Ophel Atlas structured prompt library and variable template modal',
      },
    ],
  },
  zh: {
    live: '最新发布',
    localFirst: '数据 100% 本地优先 · 零遥测',
    ecosystemSummary: '16 个内置站点 + 16 个热插拔适配包',
    watchDemo: '观看 24 秒实机演示',
    morePlatforms: '+ 26 个站点与适配包 →',
    newBadge: '新增',
    browsersLabel: '支持环境：',
    allDownloads: '全部安装方式',
    previewTabs: [
      {
        id: 'outline',
        label: '实时大纲',
        caption: '多级标题树、内联检索与段落锚点跳转',
        image: '/images/product/outline-zh.png',
        alt: 'Ophel Atlas 在 AI 对话旁生成实时大纲的侧边面板',
      },
      {
        id: 'folders',
        label: '对话文件夹',
        caption: '按项目归档对话、多标签过滤与批量管理',
        image: '/images/product/conversation-zh.png',
        alt: 'Ophel Atlas 对话文件夹与标签管理面板',
      },
      {
        id: 'prompts',
        label: 'Prompt 词库',
        caption: '变量填空模板、划词引用与链式队列发送',
        image: '/images/product/prompt-zh.png',
        alt: 'Ophel Atlas 结构化 Prompt 词库与模板预览',
      },
    ],
  },
} as const;

const BROWSER_TARGETS = [
  { id: 'chrome', name: 'Chrome', icon: '/icons/chrome.svg', href: CHROME_STORE_URL },
  { id: 'edge', name: 'Edge', icon: '/icons/edge.svg', href: EDGE_STORE_URL },
  { id: 'firefox', name: 'Firefox', icon: '/icons/firefox.svg', href: FIREFOX_STORE_URL },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.svg', href: GITHUB_RELEASES_URL },
  {
    id: 'userscript',
    name: 'Tampermonkey',
    icon: '/icons/tampermonkey.svg',
    href: GREASYFORK_URL,
  },
];

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
  const [browserIcon, setBrowserIcon] = useState<string | null>('/icons/chrome.svg');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const browser = detectBrowser();
    setBrowserIcon(BROWSER_ICONS[browser] ?? '/icons/chrome.svg');
    const cta = browserCtas?.[browser] ?? browserCtas?.default;
    if (cta) {
      setCtaLabel(cta.label);
      setCtaHref(cta.href);
    }
  }, [browserCtas]);

  const copy = text[locale];
  const activePreview = copy.previewTabs[activeTabIndex] ?? copy.previewTabs[0];
  const TAB_ICONS = [LayoutList, FolderKanban, Sparkles];

  const titleMarkPhrases =
    locale === 'zh'
      ? titleLine2.split('、').map((part, i, arr) => (i < arr.length - 1 ? `${part}、` : part))
      : [titleLine2];

  return (
    <section className="hero-shell relative isolate overflow-hidden px-5 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-22">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-12">
        {/* Left column: Headline, CTAs, Browser targets & Specification ledger */}
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-title-lead">{titleLine1}</span>
            <span className="hero-title-mark">
              {titleMarkPhrases.map((phrase) => (
                <span key={phrase} className="inline-block">
                  {phrase}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[color:var(--text-muted)] sm:text-[1.125rem] sm:leading-[1.75]">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              className="hero-primary-btn group"
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {browserIcon ? (
                <img src={browserIcon} alt="" width="20" height="20" className="shrink-0" />
              ) : (
                <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
              )}
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>

            <a className="hero-secondary-btn group" href="#features">
              <Play
                className="h-4 w-4 shrink-0 fill-current text-[color:var(--accent-strong)]"
                aria-hidden="true"
              />
              <span>{copy.watchDemo}</span>
            </a>

            <a className="hero-ghost-btn" href={secondaryLink}>
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{secondaryCta}</span>
            </a>
          </div>

          {/* Direct browser & runtime availability bar (includes Safari -> GitHub Releases) */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[color:var(--line)] pt-5">
            <span className="text-xs font-semibold text-[color:var(--text-muted)]">
              {copy.browsersLabel}
            </span>
            {BROWSER_TARGETS.map((target) => (
              <a
                key={target.id}
                href={target.href}
                target="_blank"
                rel="noopener noreferrer"
                className="browser-pill"
                title={target.name}
              >
                <img src={target.icon} alt="" width="15" height="15" className="shrink-0" />
                <span>{target.name}</span>
              </a>
            ))}
            <a href={alternateInstallLink} className="browser-pill-more">
              <span>{alternateInstallLabel}</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          {/* Grounded technical specification strip (replaces generic 3-box metric cards) */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[color:var(--ink-muted)]">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0 text-[color:var(--ok)]"
                aria-hidden="true"
              />
              <span>{version ? `v${version}` : copy.live}</span>
            </span>
            <a
              href="#platforms"
              className="inline-flex items-center gap-1.5 underline decoration-[color:var(--line-strong)] underline-offset-4 transition-colors hover:text-[color:var(--accent-strong)]"
            >
              <span>{copy.ecosystemSummary}</span>
            </a>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-[color:var(--ok)]"
                aria-hidden="true"
              />
              <span>{copy.localFirst}</span>
            </span>
          </div>

          <a
            className="hero-tooltivity-link"
            href="https://tooltivity.com/extensions/ophel"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            title="Reviewed and tested by Tooltivity"
          >
            <img
              src="https://tooltivity.com/api/widgets/embed-image/v1/featured.svg?extension=ophel&theme=light"
              alt="Tooltivity - Tested and reviewed by Tooltivity"
              width="176"
              height="38"
              className="hero-tooltivity-image"
              loading="lazy"
            />
          </a>
        </div>

        {/* Right column: Interactive 3-tab product stage + Ecosystem strip */}
        <div className="hero-product">
          <div className="product-window">
            <div className="product-window-bar">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="window-dot bg-[#e56b55]" />
                <span className="window-dot bg-[#e8b339]" />
                <span className="window-dot bg-[#3ca873]" />
              </div>

              {/* Interactive panel view switcher inside window bar */}
              <div
                className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] p-1"
                role="tablist"
                aria-label="Ophel panel views"
              >
                {copy.previewTabs.map((tab, idx) => {
                  const Icon = TAB_ICONS[idx] ?? LayoutList;
                  const isActive = idx === activeTabIndex;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTabIndex(idx)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[color:var(--ink-strong)] text-white shadow-sm'
                          : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink-strong)]'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="product-stage">
              <img
                src={activePreview.image}
                alt={activePreview.alt}
                width="1280"
                height="800"
                className="product-shot"
                decoding="async"
                fetchPriority="high"
              />

              <div className="product-caption-bar">
                <span className="font-mono text-[11px] font-semibold text-[color:var(--accent-strong)]">
                  {activePreview.label}
                </span>
                <span className="text-xs font-medium text-[color:var(--ink-muted)]">
                  {activePreview.caption}
                </span>
              </div>
            </div>
          </div>

          {/* Supported platform quick strip (includes Gemini Notebook NEW badge) */}
          <div className="platform-strip" aria-label={copy.ecosystemSummary}>
            {PLATFORM_STRIP.map((platform) => (
              <a
                className="platform-strip-item"
                href={platform.href}
                key={platform.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className={`inline-flex h-4 w-4 shrink-0 items-center justify-center ${
                    platform.inverted ? 'rounded-full bg-[color:var(--ink-strong)] p-0.5' : ''
                  }`}
                >
                  <img
                    src={platform.icon}
                    alt=""
                    width="15"
                    height="15"
                    loading="lazy"
                    className={platform.inverted ? '[filter:brightness(0)_invert(1)]' : ''}
                  />
                </span>
                <span>{platform.label}</span>
                {platform.isNew && (
                  <span className="rounded-full bg-[color:var(--surface-tint)] px-1.5 py-0.2 font-mono text-[10px] font-bold text-[color:var(--accent-strong)]">
                    {copy.newBadge}
                  </span>
                )}
              </a>
            ))}
            <a className="platform-strip-more" href="#platforms">
              {copy.morePlatforms}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
