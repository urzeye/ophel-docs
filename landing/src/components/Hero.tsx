import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface BrowserCta {
  label: string;
  href: string;
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
  edge: '/icons/chrome.svg',
  firefox: '/icons/firefox.svg',
};

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
}: {
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
}) {
  const [ctaLabel, setCtaLabel] = useState(primaryCta);
  const [ctaHref, setCtaHref] = useState(primaryLink);
  const [browserIcon, setBrowserIcon] = useState<string | null>(null);

  useEffect(() => {
    const browser = detectBrowser();
    setBrowserIcon(BROWSER_ICONS[browser] ?? null);
    if (!browserCtas) return;
    const cta = browserCtas[browser] ?? browserCtas['default'];
    if (cta) {
      setCtaLabel(cta.label);
      setCtaHref(cta.href);
    }
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-32">
      {/* 渐变遮罩背景 */}
      <div className="absolute inset-0 transition-opacity bg-grid-white mask-radial-faded opacity-[0.05]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-neon-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVars} className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-zinc-300 backdrop-blur-md transition-colors hover:bg-white/[0.08]">
            <span className="flex h-2 w-2 rounded-full bg-neon-cyan mr-2 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
            Ophel v1.0.47 is live
          </div>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
        >
          {titleLine1} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white/70 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            {titleLine2}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 mb-12 font-medium leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5"
        >
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a href={ctaHref} className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full min-w-[200px] text-base group">
                {browserIcon && (
                  <img
                    src={browserIcon}
                    alt=""
                    width="18"
                    height="18"
                    className="mr-2 shrink-0"
                    style={{ display: 'inline-block' }}
                  />
                )}
                {ctaLabel}
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </a>
            <a
              href={alternateInstallLink}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <span>{alternateInstallLabel}</span>
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <a href={secondaryLink} className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full min-w-[160px] text-base group">
              <svg
                className="mr-2 h-5 w-5 shrink-0 transition-all opacity-70 group-hover:opacity-100 group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect x="5" y="4" width="14" height="17" rx="2" fill="rgba(255,255,255,0.04)" />
                <path
                  d="M6 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 3H6Z"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 3v4.5A.5.5 0 0 0 14.5 8H19"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12h8M8 16h5"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {secondaryCta}
            </Button>
          </a>
        </motion.div>

        {/* 浏览器/平台支持栏 */}
        <motion.div variants={itemVars} className="mt-20 pt-10 border-t border-white/10 opacity-70">
          <p className="text-xs font-semibold text-zinc-500 mb-6 uppercase tracking-widest">
            Seamlessly integrates with
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-zinc-400 font-medium text-sm md:text-base">
            <span className="hover:text-white transition-colors">ChatGPT</span>
            <span className="hover:text-white transition-colors">Claude</span>
            <span className="hover:text-white transition-colors">Gemini</span>
            <span className="hover:text-white transition-colors">DeepSeek</span>
            <span className="hover:text-white transition-colors">+ 11 more</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
