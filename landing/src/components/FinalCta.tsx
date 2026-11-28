import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Copy, Download, Lock, ShieldCheck, Unlock } from 'lucide-react';

interface BrowserCta {
  label: string;
  href: string;
  external?: boolean;
}

interface FinalCtaPillar {
  readonly title: string;
  readonly detail: string;
}

interface FinalCtaCopy {
  readonly title: string;
  readonly desc: string;
  readonly pillars: readonly FinalCtaPillar[];
  readonly primaryFallback: string;
  readonly secondaryCta: string;
  readonly secondaryHref: string;
  readonly privacyCta: string;
  readonly privacyHref: string;
}

interface FinalCtaProps {
  t: FinalCtaCopy;
  primaryLink: string;
  browserCtas: Record<string, BrowserCta>;
  locale?: 'en' | 'zh';
}

const BROWSER_ICONS: Record<string, string> = {
  chrome: '/icons/chrome.svg',
  edge: '/icons/edge.svg',
  firefox: '/icons/firefox.svg',
  safari: '/icons/safari.svg',
};

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

const PILLAR_ICONS = [ShieldCheck, Lock, Unlock];

export function FinalCta({ t, primaryLink, browserCtas, locale = 'en' }: FinalCtaProps) {
  const [ctaLabel, setCtaLabel] = useState<string>(t.primaryFallback);
  const [ctaHref, setCtaHref] = useState<string>(primaryLink);
  const [ctaExternal, setCtaExternal] = useState(true);
  const [browserIcon, setBrowserIcon] = useState<string | null>('/icons/chrome.svg');
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    const browser = detectBrowser();
    setBrowserIcon(BROWSER_ICONS[browser] ?? '/icons/chrome.svg');
    const matched = browserCtas[browser] ?? browserCtas.default;
    if (matched) {
      setCtaLabel(matched.label);
      setCtaHref(matched.href);
      setCtaExternal(matched.external !== false);
    }
  }, [browserCtas]);

  const handleCopyLink = async () => {
    const url = locale === 'zh' ? 'https://ophel.app/zh/download/' : 'https://ophel.app/download/';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = t.secondaryHref;
    }
  };

  return (
    <section
      id="install"
      className="final-cta-section relative z-10 border-t border-[color:var(--line)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="final-cta-panel grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[color:var(--ink-strong)] sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[color:var(--text-muted)]">
              {t.desc}
            </p>

            <ul className="mt-6 space-y-4">
              {t.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] ?? ShieldCheck;
                return (
                  <li key={pillar.title} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-tint)] text-[color:var(--accent-strong)]"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <strong className="block text-sm font-bold text-[color:var(--ink-strong)]">
                        {pillar.title}
                      </strong>
                      <p className="mt-0.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                        {pillar.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3.5 border-t border-[color:var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {isMobile ? (
              <button
                type="button"
                onClick={handleCopyLink}
                className="hero-primary-btn w-full justify-center sm:w-auto"
              >
                {copied ? (
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <span>
                  {copied
                    ? locale === 'zh'
                      ? '已复制安装链接'
                      : 'Link copied!'
                    : locale === 'zh'
                      ? '复制链接到电脑安装'
                      : 'Copy link for desktop'}
                </span>
              </button>
            ) : (
              <a
                href={ctaHref}
                {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hero-primary-btn group w-full justify-center sm:w-auto"
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
            )}

            <a
              href={t.secondaryHref}
              className="hero-secondary-btn w-full justify-center sm:w-auto"
            >
              <span>{t.secondaryCta}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={t.privacyHref}
              className="mt-1 inline-flex min-h-[38px] items-center text-sm font-semibold text-[color:var(--accent-strong)] underline decoration-[color:var(--line-strong)] underline-offset-4 transition-colors hover:text-[color:var(--ink-strong)]"
            >
              {t.privacyCta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
