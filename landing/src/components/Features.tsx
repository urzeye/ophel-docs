import React, { useEffect, useRef, useState } from 'react';
import { Anchor, ListTree, Loader2, Palette, Pause, Play, RotateCcw, Search } from 'lucide-react';
import { TOTAL_SUPPORTED_SITES } from '../lib/supported-platforms';

type Locale = 'en' | 'zh';

interface FeatureItem {
  code?: string;
  title: string;
  desc: string;
}

interface FeaturesProps {
  featuresTitle: string;
  featuresSubtitle: string;
  items: readonly FeatureItem[];
  locale?: Locale;
}

interface WorkbenchChapter {
  id: string;
  tag: string;
  timeRange: string;
  startSec: number;
  endSec: number;
  title: string;
  desc: string;
  highlights: string[];
}

const DURATION_SEC = 24.6;

const CHAPTERS: Record<Locale, WorkbenchChapter[]> = {
  en: [
    {
      id: 'outline-tree',
      tag: 'Live Outline',
      timeRange: '00:00 – 00:08',
      startSec: 0,
      endSec: 8.0,
      title: 'Long answers fold into a clear map',
      desc: 'Ophel parses every prompt and AI heading in real time. Slide the 6-level depth control to collapse nested subsections or jump straight to any section.',
      highlights: ['1–6 heading depth slider', 'One-click section jump', 'Live turn index'],
    },
    {
      id: 'inline-search',
      tag: 'Instant Filter',
      timeRange: '00:08 – 00:14',
      startSec: 8.0,
      endSec: 14.0,
      title: 'Filter hundred-screen threads in milliseconds',
      desc: 'Type a keyword right inside the outline bar (such as “kafka”) to isolate matching headings and locate exact answers without endless scrolling.',
      highlights: ['Real-time keyword filter', 'Instant heading match', 'Zero page lag'],
    },
    {
      id: 'bookmarks-anchor',
      tag: 'Stars & Anchors',
      timeRange: '00:14 – 00:21',
      startSec: 14.0,
      endSec: 21.0,
      title: 'Star key takeaways & jump back with return anchors',
      desc: 'Filter down to starred conclusions, click the bottom return anchor (⚓) to bounce back where you jumped from, or locate your active reading position in one click.',
      highlights: ['Starred-only bookmark view', 'Return anchor (⚓)', 'Locate current spot'],
    },
    {
      id: 'theme-morph',
      tag: '24 Themes',
      timeRange: '00:21 – 00:24',
      startSec: 21.0,
      endSec: DURATION_SEC,
      title: 'Radial dark & light switch across 24 presets',
      desc: 'Click the moon icon (or press Alt/Option + D) for a smooth circular transition from your cursor — with 12 light and 12 dark themes synced to the host page.',
      highlights: ['12 light + 12 dark themes', 'Circular transition', 'Host page theme sync'],
    },
  ],
  zh: [
    {
      id: 'outline-tree',
      tag: '实时目录树',
      timeRange: '00:00 – 00:08',
      startSec: 0,
      endSec: 8.0,
      title: '万字长回复实时折叠成清晰目录',
      desc: '自动提取每轮提问与 AI 回复中的 H1–H6 多级标题。拖动 6 级深度滑块一键收起细节，在长文里精准跳转任意小节。',
      highlights: ['1–6 级标题深度滑块', '提问与章节一键跳转', '长对话实时更新'],
    },
    {
      id: 'inline-search',
      tag: '关键词秒筛',
      timeRange: '00:08 – 00:14',
      startSec: 8.0,
      endSec: 14.0,
      title: '在百屏对话中毫秒级筛出目标章节',
      desc: '直接在大纲搜索框输入关键词（如 kafka），即时过滤匹配标题与段落，不必从头到尾反复上下翻找。',
      highlights: ['关键词实时过滤', '匹配结果直达正文', '不干扰原生对话'],
    },
    {
      id: 'bookmarks-anchor',
      tag: '星标与锚点回溯',
      timeRange: '00:14 – 00:21',
      startSec: 14.0,
      endSec: 21.0,
      title: '星标只看重点，锚点一键回到原阅读位',
      desc: '点亮星标即可只筛选关键结论；跳去查阅前后文后，点击底部锚点（⚓）或「定位当前位置」，瞬间回到刚才的阅读坐标。',
      highlights: ['星标书签只看重点', '底部返回锚点 (⚓)', '一键定位当前阅读位'],
    },
    {
      id: 'theme-morph',
      tag: '24 套主题',
      timeRange: '00:21 – 00:24',
      startSec: 21.0,
      endSec: DURATION_SEC,
      title: '24 套主题与圆形扩散深浅色切换',
      desc: '点击顶栏月亮图标或按 Alt/Option + D，界面从点击位置平滑圆形扩散切换深浅色，内置 12 套浅色与 12 套深色预置主题。',
      highlights: ['12 浅 + 12 深预置主题', '点击处圆形扩散动画', '与宿主页面深浅联动'],
    },
  ],
};

const UI_COPY = {
  en: {
    stageTitle: 'Real recording on DeepSeek · 24s',
    play: 'Play demo video',
    pause: 'Pause demo video',
    restart: 'Replay from start',
    loading: 'Loading demo…',
    tabsLabel: 'Demo chapters',
    jumpPrompt: 'Select any chapter or timeline segment to jump directly to that moment',
    ledgerHeading: 'What Sets Ophel Apart Beyond the Outline',
    ledgerSub: `Designed for daily heavy AI workflows across ${TOTAL_SUPPORTED_SITES}+ supported platforms — fast, private, and free.`,
    docsCta: 'Read full feature documentation →',
    docsHref: 'https://ophel.app/docs',
  },
  zh: {
    stageTitle: 'DeepSeek 真实录屏 · 24 秒',
    play: '播放演示视频',
    pause: '暂停演示视频',
    restart: '从头重播',
    loading: '演示视频加载中…',
    tabsLabel: '实机演示章节',
    jumpPrompt: '点击任意章节卡片或下方进度段，可直接跳到对应实机画面',
    ledgerHeading: '不止大纲：真正拉开体验差距的 6 项核心能力',
    ledgerSub: `覆盖 ${TOTAL_SUPPORTED_SITES}+ 个 AI 平台的日常深度工作流——不卡顿、不登录、数据始终留在你的设备里。`,
    docsCta: '查看完整功能文档 →',
    docsHref: 'https://ophel.app/docs/zh',
  },
} as const;

const CHAPTER_ICONS = [ListTree, Search, Anchor, Palette];

function formatTime(sec: number): string {
  const clamped = Math.max(0, Math.min(DURATION_SEC, sec));
  const whole = Math.floor(clamped);
  return `00:${String(whole).padStart(2, '0')}`;
}

export function Features({ featuresTitle, featuresSubtitle, items, locale = 'en' }: FeaturesProps) {
  const chapters = CHAPTERS[locale];
  const ui = UI_COPY[locale];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageContainerRef = useRef<HTMLDivElement | null>(null);
  const chapterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pendingSeekRef = useRef<number | null>(null);
  const seekLockUntilRef = useRef<number>(0);

  const [activeChapter, setActiveChapter] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasActivatedVideo, setHasActivatedVideo] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyVideoSeek = (video: HTMLVideoElement, targetSec: number) => {
    if (video.readyState >= 1) {
      try {
        video.currentTime = targetSec;
        if (Math.abs(video.currentTime - targetSec) <= 1.2) {
          pendingSeekRef.current = null;
          return;
        }
      } catch {
        // Wait for metadata/canplay
      }
    }
    pendingSeekRef.current = targetSec;
  };

  // Detect prefers-reduced-motion on mount
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      setIsPlaying(false);
      videoRef.current?.pause();
    }
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Load & play video lazily only when workbench enters viewport; pause when offscreen
  useEffect(() => {
    const node = stageContainerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const video = videoRef.current;
        if (!video) return;

        if (entry?.isIntersecting) {
          if (!reducedMotion) {
            if (!hasActivatedVideo) {
              setHasActivatedVideo(true);
              setIsBuffering(true);
            }
            video.play().catch(() => {
              setIsBuffering(false);
            });
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reducedMotion, hasActivatedVideo]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (pendingSeekRef.current !== null) {
      applyVideoSeek(video, pendingSeekRef.current);
    }
  };

  const handleCanPlay = () => {
    setIsBuffering(false);
    const video = videoRef.current;
    if (video && pendingSeekRef.current !== null) {
      applyVideoSeek(video, pendingSeekRef.current);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (pendingSeekRef.current !== null) {
      applyVideoSeek(video, pendingSeekRef.current);
      if (pendingSeekRef.current !== null) return;
    }

    const t = video.currentTime;
    if (Date.now() < seekLockUntilRef.current) {
      setCurrentTime(t);
      return;
    }

    setCurrentTime(t);
    const matchedIndex = chapters.findIndex((c) => t >= c.startSec && t < c.endSec);
    if (matchedIndex !== -1 && matchedIndex !== activeChapter) {
      setActiveChapter(matchedIndex);
    }
  };

  const selectChapter = (idx: number) => {
    const target = chapters[idx];
    if (!target) return;
    seekLockUntilRef.current = Date.now() + 650;
    setActiveChapter(idx);
    setCurrentTime(target.startSec);

    const video = videoRef.current;
    if (!video) return;

    if (!hasActivatedVideo) {
      setHasActivatedVideo(true);
      setIsBuffering(true);
    }

    applyVideoSeek(video, target.startSec);
    if (!reducedMotion) {
      video.play().catch(() => {
        setIsBuffering(false);
      });
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (!hasActivatedVideo) {
        setHasActivatedVideo(true);
        setIsBuffering(true);
      }
      video.play().catch(() => {
        setIsBuffering(false);
      });
    } else {
      video.pause();
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    pendingSeekRef.current = null;
    seekLockUntilRef.current = Date.now() + 450;
    setCurrentTime(0);
    setActiveChapter(0);
    if (!hasActivatedVideo) {
      setHasActivatedVideo(true);
      setIsBuffering(true);
    }
    applyVideoSeek(video, 0);
    video.play().catch(() => {
      setIsBuffering(false);
    });
  };

  const handleChapterKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    const total = chapters.length;
    let nextIdx: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextIdx = (idx + 1) % total;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') nextIdx = (idx - 1 + total) % total;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = total - 1;

    if (nextIdx !== null) {
      e.preventDefault();
      selectChapter(nextIdx);
      chapterRefs.current[nextIdx]?.focus();
    }
  };

  const activeChapterData = chapters[activeChapter] ?? chapters[0];

  return (
    <section
      id="features"
      className="features-shell relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="section-heading">
          <h2>{featuresTitle}</h2>
          <p>{featuresSubtitle}</p>
        </div>

        {/* Sticky Chapter-Synced Video Stage */}
        <div
          ref={stageContainerRef}
          className="workbench-layout mt-10 grid items-start gap-6 sm:mt-12 lg:grid-cols-[minmax(300px,0.36fr)_minmax(0,0.64fr)] lg:gap-8"
        >
          {/* Chapter selector list */}
          <div
            className="workbench-chapters order-2 flex flex-col gap-3 lg:order-1"
            role="tablist"
            aria-label={ui.tabsLabel}
            aria-orientation="vertical"
          >
            {chapters.map((chapter, idx) => {
              const Icon = CHAPTER_ICONS[idx % CHAPTER_ICONS.length] ?? ListTree;
              const isSelected = idx === activeChapter;

              let progressPct = 0;
              if (idx < activeChapter) progressPct = 100;
              else if (idx === activeChapter) {
                const span = Math.max(0.1, chapter.endSec - chapter.startSec);
                progressPct = Math.min(
                  100,
                  Math.max(0, ((currentTime - chapter.startSec) / span) * 100),
                );
              }

              return (
                <button
                  key={chapter.id}
                  id={`demo-tab-${chapter.id}`}
                  ref={(el) => {
                    chapterRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="workbench-stage-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectChapter(idx)}
                  onKeyDown={(e) => handleChapterKeyDown(e, idx)}
                  className={`workbench-chapter-card text-left transition-all ${
                    isSelected ? 'workbench-chapter-active' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[color:var(--accent-strong)]">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{chapter.tag}</span>
                    </span>
                    <span className="font-mono text-xs font-medium text-[color:var(--text-faint)] tabular-nums">
                      {chapter.timeRange}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-[color:var(--ink-strong)]">
                    {chapter.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {chapter.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {chapter.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-[color:var(--line)] bg-[color:var(--paper)] px-2.5 py-0.5 text-xs font-semibold text-[color:var(--ink-muted)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-3.5 h-1 w-full overflow-hidden rounded-full bg-[color:var(--line)]"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full rounded-full bg-[color:var(--accent-strong)] transition-[width] duration-150 ease-out"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Video Stage — No faux macOS dots around a recording that already has its own macOS window */}
          <div
            id="workbench-stage-panel"
            role="tabpanel"
            aria-labelledby={`demo-tab-${activeChapterData.id}`}
            className="workbench-stage-sticky order-1 lg:sticky lg:top-24 lg:order-2"
          >
            <div className="workbench-frame">
              {/* Compact control bar */}
              <div className="workbench-chrome">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`inline-block h-2 w-2 shrink-0 rounded-full ${
                      isPlaying ? 'bg-[#48d1b5]' : 'bg-[#8fa6bd]'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="truncate font-mono text-xs font-semibold text-[#e6eef6]">
                    {ui.stageTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#bfd0e0] tabular-nums">
                    {formatTime(currentTime)} / 00:24
                  </span>

                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(180,206,228,0.28)] bg-[#085d59] text-white transition-colors hover:bg-[#0d7a75]"
                    aria-label={isPlaying ? ui.pause : ui.play}
                    title={isPlaying ? ui.pause : ui.play}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={restartVideo}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(180,206,228,0.28)] bg-[#142338] text-[#e6eef6] transition-colors hover:border-[#6fe3db] hover:text-white"
                    aria-label={ui.restart}
                    title={ui.restart}
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Video Viewport */}
              <div className="workbench-viewport relative overflow-hidden bg-[#0a101a]">
                <video
                  ref={videoRef}
                  width="1200"
                  height="676"
                  className="block aspect-[1200/676] w-full cursor-pointer object-contain"
                  poster="/media/ophel-demo-poster.webp"
                  muted
                  playsInline
                  loop
                  preload="none"
                  onLoadedMetadata={handleLoadedMetadata}
                  onCanPlay={handleCanPlay}
                  onWaiting={() => setIsBuffering(true)}
                  onPlaying={() => {
                    setIsBuffering(false);
                    setIsPlaying(true);
                  }}
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={togglePlay}
                >
                  <source src="/media/ophel-demo.webm" type="video/webm" />
                  <source src="/media/ophel-demo.mp4" type="video/mp4" />
                </video>

                {isBuffering && (
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0c1420]/90 px-3 py-1.5 font-mono text-xs font-semibold text-[#e6eef6] backdrop-blur-sm">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                      <span>{ui.loading}</span>
                    </span>
                  </div>
                )}

                {!isPlaying && !isBuffering && reducedMotion && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute bottom-4 right-4 inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#085d59] px-4 py-2 text-xs font-bold text-white shadow-lg transition-colors hover:bg-[#0d7a75]"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    <span>{ui.play}</span>
                  </button>
                )}
              </div>

              {/* Clean Segmented Timeline Bar (replaces duplicate 4-card truncated text row) */}
              <div className="workbench-scrubber-bar">
                <div className="grid grid-cols-4 gap-2" role="group" aria-label={ui.tabsLabel}>
                  {chapters.map((chapter, idx) => {
                    const isSelected = idx === activeChapter;
                    let fillPct = 0;
                    if (idx < activeChapter) fillPct = 100;
                    else if (idx === activeChapter) {
                      const span = Math.max(0.1, chapter.endSec - chapter.startSec);
                      fillPct = Math.min(
                        100,
                        Math.max(0, ((currentTime - chapter.startSec) / span) * 100),
                      );
                    }
                    return (
                      <button
                        key={chapter.id}
                        type="button"
                        onClick={() => selectChapter(idx)}
                        className="group flex min-h-[38px] flex-col justify-center gap-1.5 rounded-md px-1.5 py-1 text-left transition-colors hover:bg-white/5"
                        aria-label={`${chapter.tag} (${chapter.timeRange})`}
                      >
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(180,206,228,0.2)]">
                          <div
                            className={`h-full rounded-full transition-[width] duration-150 ${
                              isSelected ? 'bg-[#5eead4]' : 'bg-[#6495a8]'
                            }`}
                            style={{ width: `${fillPct}%` }}
                          />
                        </div>
                        <span
                          className={`truncate font-mono text-xs font-semibold ${
                            isSelected ? 'text-white' : 'text-[#b5c9db] group-hover:text-white'
                          }`}
                        >
                          {chapter.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-center text-xs text-[#b5c9db]">{ui.jumpPrompt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Differentiators Specification Ledger */}
        <div className="capability-ledger mt-16 sm:mt-20">
          <div className="flex flex-col justify-between gap-4 border-b border-[color:var(--line-strong)] pb-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-[color:var(--ink-strong)] sm:text-3xl">
                {ui.ledgerHeading}
              </h3>
              <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base">
                {ui.ledgerSub}
              </p>
            </div>
            <a
              href={ui.docsHref}
              className="inline-flex min-h-[38px] shrink-0 items-center font-mono text-xs font-bold text-[color:var(--accent-strong)] underline decoration-[color:var(--line-strong)] underline-offset-4 transition-colors hover:text-[color:var(--ink-strong)]"
            >
              {ui.docsCta}
            </a>
          </div>

          <dl className="grid grid-cols-1 divide-y divide-[color:var(--line)] md:grid-cols-2 md:divide-x">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-2.5 py-6 md:px-6 first:md:pl-0 odd:md:pl-0 even:md:pr-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-display text-lg font-extrabold leading-snug text-[color:var(--ink-strong)]">
                    {item.title}
                  </dt>
                  {item.code && (
                    <span className="shrink-0 rounded border border-[color:var(--line-strong)] bg-[color:var(--surface-tint)] px-2 py-0.5 font-mono text-xs font-bold text-[color:var(--accent-strong)]">
                      {item.code}
                    </span>
                  )}
                </div>
                <dd className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {item.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
