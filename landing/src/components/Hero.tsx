import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FolderKanban,
  LayoutList,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CHROME_STORE_URL, EDGE_STORE_URL, FIREFOX_STORE_URL, GREASYFORK_URL } from '../i18n';

interface BrowserCta {
  label: string;
  href: string;
  external?: boolean;
}

interface HeroProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  primaryLink: string;
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

function isMobileDevice(): boolean {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

const BROWSER_ICONS: Record<string, string> = {
  chrome: '/icons/chrome.svg',
  edge: '/icons/edge.svg',
  firefox: '/icons/firefox.svg',
  safari: '/icons/safari.svg',
};

const PLATFORM_STRIP: Array<{
  label: string;
  icon: string;
  inverted?: boolean;
}> = [
  { label: 'ChatGPT', icon: '/icons/chatgpt.png', inverted: true },
  { label: 'Gemini', icon: '/icons/gemini.png' },
  { label: 'Claude', icon: '/icons/claude.svg' },
  { label: 'Notebook', icon: '/icons/notebook.png' },
  { label: 'DeepSeek', icon: '/icons/deepseek.svg' },
  { label: 'Kimi', icon: '/icons/kimi.png' },
];

const text = {
  en: {
    live: 'Latest release',
    openSource: 'Free & Open Source (GPLv3)',
    localFirst: '100% local · Zero telemetry',
    ecosystemSummary: 'Built-in AI platforms & extensible Site Packs',
    watchDemo: 'Watch 24s demo',
    morePlatforms: 'All supported sites →',
    browsersLabel: 'Also on:',
    safariNote: 'Safari (macOS Beta)',
    mobileHint: 'Desktop browser extension',
    copyDesktopLink: 'Copy link for desktop',
    copiedLink: 'Link copied!',
    tabsLabel: 'Ophel side panel views',
    previewTabs: [
      {
        id: 'outline',
        label: 'Live Outline',
        caption: 'H1–H6 tree, inline search & return anchors',
        image: '/images/product/outline-en.webp',
        alt: 'Ophel Atlas side panel generating a real-time outline beside an AI chat',
      },
      {
        id: 'folders',
        label: 'Chat Folders',
        caption: 'Project folders, tags & multi-workspace isolation',
        image: '/images/product/conversation-en.webp',
        alt: 'Ophel Atlas chat folder and tag management panel',
      },
      {
        id: 'prompts',
        label: 'Prompt Library',
        caption: 'Variable templates, quick quote & prompt queues',
        image: '/images/product/prompt-en.webp',
        alt: 'Ophel Atlas structured prompt library and variable template modal',
      },
    ],
  },
  zh: {
    live: '最新发布',
    openSource: 'GPLv3 开源免费 · 零账号',
    localFirst: '100% 本地存储 · 零遥测',
    ecosystemSummary: '内置主流平台与持续扩展的站点适配包',
    watchDemo: '看 24 秒实机演示',
    morePlatforms: '全部支持站点 →',
    browsersLabel: '支持渠道：',
    safariNote: 'Safari (实验版)',
    mobileHint: '适用于电脑端浏览器',
    copyDesktopLink: '复制链接到电脑安装',
    copiedLink: '已复制安装链接',
    tabsLabel: 'Ophel 面板视图切换',
    previewTabs: [
      {
        id: 'outline',
        label: '实时大纲',
        caption: '多级标题树、内联检索与锚点回溯',
        image: '/images/product/outline-zh.webp',
        alt: 'Ophel Atlas 在 AI 对话旁生成实时大纲的侧边面板',
      },
      {
        id: 'folders',
        label: '对话文件夹',
        caption: '按项目归档、多标签过滤与工作区隔离',
        image: '/images/product/conversation-zh.webp',
        alt: 'Ophel Atlas 对话文件夹与标签管理面板',
      },
      {
        id: 'prompts',
        label: 'Prompt 词库',
        caption: '变量填空模板、划词引用与队列发送',
        image: '/images/product/prompt-zh.webp',
        alt: 'Ophel Atlas 结构化 Prompt 词库与模板预览',
      },
    ],
  },
} as const;

export function Hero({
  titleLine1,
  titleLine2,
  description,
  primaryCta,
  primaryLink,
  alternateInstallLabel,
  alternateInstallLink,
  browserCtas,
  version,
  locale = 'en',
}: HeroProps) {
  const [ctaLabel, setCtaLabel] = useState(primaryCta);
  const [ctaHref, setCtaHref] = useState(primaryLink);
  const [ctaExternal, setCtaExternal] = useState(true);
  const [browserIcon, setBrowserIcon] = useState<string | null>('/icons/chrome.svg');
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mobile = isMobileDevice();
    setIsMobile(mobile);
    const browser = detectBrowser();
    setBrowserIcon(BROWSER_ICONS[browser] ?? '/icons/chrome.svg');
    const cta = browserCtas?.[browser] ?? browserCtas?.default;
    if (cta) {
      setCtaLabel(cta.label);
      setCtaHref(cta.href);
      setCtaExternal(cta.external !== false);
    }
  }, [browserCtas]);

  const copy = text[locale];
  const activePreview = copy.previewTabs[activeTabIndex] ?? copy.previewTabs[0];
  const TAB_ICONS = [LayoutList, FolderKanban, Sparkles];

  const safariHref = `${alternateInstallLink}#safari`;
  const browserTargets = [
    {
      id: 'chrome',
      name: 'Chrome',
      icon: '/icons/chrome.svg',
      href: CHROME_STORE_URL,
      external: true,
    },
    { id: 'edge', name: 'Edge', icon: '/icons/edge.svg', href: EDGE_STORE_URL, external: true },
    {
      id: 'firefox',
      name: 'Firefox',
      icon: '/icons/firefox.svg',
      href: FIREFOX_STORE_URL,
      external: true,
    },
    {
      id: 'safari',
      name: copy.safariNote,
      icon: '/icons/safari.svg',
      href: safariHref,
      external: false,
    },
    {
      id: 'userscript',
      name: 'Userscript',
      icon: '/icons/tampermonkey.svg',
      href: GREASYFORK_URL,
      external: true,
    },
  ];

  const titleMarkPhrases =
    locale === 'zh'
      ? titleLine2.split('、').map((part, i, arr) => (i < arr.length - 1 ? `${part}、` : part))
      : [titleLine2];

  const handleCopyDesktopLink = async () => {
    const url = locale === 'zh' ? 'https://ophel.app/zh/download/' : 'https://ophel.app/download/';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = alternateInstallLink;
    }
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    const total = copy.previewTabs.length;
    let nextIdx: number | null = null;
    if (e.key === 'ArrowRight') nextIdx = (idx + 1) % total;
    else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + total) % total;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = total - 1;

    if (nextIdx !== null) {
      e.preventDefault();
      setActiveTabIndex(nextIdx);
      tabRefs.current[nextIdx]?.focus();
    }
  };

  return (
    <section className="hero-shell relative isolate overflow-hidden px-4 pb-12 pt-5 sm:px-6 sm:pt-12 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12">
        {/* Left column: Headline, focused CTAs, concise browser links & trust strip */}
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

          <p className="mt-3.5 max-w-[58ch] text-[0.95rem] leading-[1.65] text-[color:var(--text-muted)] sm:mt-5 sm:text-[1.1rem] sm:leading-[1.72]">
            {description}
          </p>

          {/* Primary + secondary action pair */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3">
            {isMobile ? (
              <>
                <button
                  type="button"
                  onClick={handleCopyDesktopLink}
                  className="hero-primary-btn group"
                >
                  {copied ? (
                    <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                  )}
                  <span>{copied ? copy.copiedLink : copy.copyDesktopLink}</span>
                </button>
                <a className="hero-secondary-btn group" href="#features">
                  <Play
                    className="h-4 w-4 shrink-0 fill-current text-[color:var(--accent-strong)]"
                    aria-hidden="true"
                  />
                  <span>{copy.watchDemo}</span>
                </a>
              </>
            ) : (
              <>
                <a
                  className="hero-primary-btn group"
                  href={ctaHref}
                  {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {browserIcon ? (
                    <img src={browserIcon} alt="" width="20" height="20" className="shrink-0" />
                  ) : (
                    <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
                  )}
                  <span>{ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a className="hero-secondary-btn group" href="#features">
                  <Play
                    className="h-4 w-4 shrink-0 fill-current text-[color:var(--accent-strong)]"
                    aria-hidden="true"
                  />
                  <span>{copy.watchDemo}</span>
                </a>
              </>
            )}
          </div>

          {/* Grounded open-source & local-first trust strip */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[color:var(--ink-muted)] sm:mt-5 sm:gap-x-5">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0 text-[color:var(--ok)]"
                aria-hidden="true"
              />
              <span>{version ? `v${version}` : copy.live}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-[color:var(--ok)]"
                aria-hidden="true"
              />
              <span>{copy.openSource}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span>{copy.localFirst}</span>
            </span>
          </div>

          {/* Browser channels row (hidden on narrow mobile to keep product preview above the fold) */}
          <div className="mt-5 hidden flex-wrap items-center gap-2 border-t border-[color:var(--line)] pt-4 sm:flex">
            <span className="text-xs font-semibold text-[color:var(--text-muted)]">
              {copy.browsersLabel}
            </span>
            {browserTargets.map((target) => (
              <a
                key={target.id}
                href={target.href}
                {...(target.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="browser-pill"
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
        </div>

        {/* Right column: Clean single-frame 3-tab product stage (no faux macOS dots or nested cards) */}
        <div className="hero-product">
          <div className="product-window">
            <div className="product-window-bar">
              <div
                className="flex w-full items-center justify-between gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--background)] p-1 sm:w-auto sm:justify-start"
                role="tablist"
                aria-label={copy.tabsLabel}
              >
                {copy.previewTabs.map((tab, idx) => {
                  const Icon = TAB_ICONS[idx] ?? LayoutList;
                  const isActive = idx === activeTabIndex;
                  return (
                    <button
                      key={tab.id}
                      id={`hero-tab-${tab.id}`}
                      ref={(el) => {
                        tabRefs.current[idx] = el;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="hero-preview-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveTabIndex(idx)}
                      onKeyDown={(e) => handleTabKeyDown(e, idx)}
                      className={`inline-flex min-h-[34px] flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-xs font-bold transition-colors sm:flex-none sm:gap-1.5 sm:px-3 ${
                        isActive
                          ? 'bg-[color:var(--ink-strong)] text-white shadow-sm'
                          : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink-strong)]'
                      }`}
                    >
                      <Icon
                        className="hidden h-3.5 w-3.5 shrink-0 sm:inline-block"
                        aria-hidden="true"
                      />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id="hero-preview-panel"
              role="tabpanel"
              aria-labelledby={`hero-tab-${activePreview.id}`}
              className="product-stage"
            >
              <img
                src={activePreview.image}
                alt={activePreview.alt}
                width="1280"
                height="800"
                className="product-shot"
                decoding="async"
                fetchPriority="high"
              />

              <p className="product-caption">
                <strong className="font-mono text-xs font-bold text-[color:var(--accent-strong)]">
                  {activePreview.label}
                </strong>
                <span aria-hidden="true" className="text-[color:var(--line-strong)]">
                  ·
                </span>
                <span className="text-xs font-medium text-[color:var(--ink-muted)]">
                  {activePreview.caption}
                </span>
              </p>
            </div>
          </div>

          {/* Supported platform badges (non-outbound so visitors stay on the landing page) */}
          <div className="platform-strip" aria-label={copy.ecosystemSummary}>
            {PLATFORM_STRIP.map((platform) => (
              <span className="platform-strip-item" key={platform.label}>
                <span
                  className={`inline-flex h-4 w-4 shrink-0 items-center justify-center ${
                    platform.inverted ? 'rounded-full bg-[color:var(--ink-strong)] p-0.5' : ''
                  }`}
                  aria-hidden="true"
                >
                  <img
                    src={platform.icon}
                    alt=""
                    width="15"
                    height="15"
                    className={platform.inverted ? '[filter:brightness(0)_invert(1)]' : ''}
                  />
                </span>
                <span>{platform.label}</span>
              </span>
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
