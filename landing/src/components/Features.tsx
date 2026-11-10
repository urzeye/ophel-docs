import React, { useEffect, useRef, useState } from 'react';
import {
  BookmarkCheck,
  FolderKanban,
  Image as ImageIcon,
  ListTree,
  Palette,
  Pause,
  Play,
  RotateCcw,
  Search,
} from 'lucide-react';

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
  stillImage: string;
  stillAlt: string;
}

const DURATION_SEC = 24.6;

const CHAPTERS: Record<Locale, WorkbenchChapter[]> = {
  en: [
    {
      id: 'outline-tree',
      tag: 'Outline · H1–H6',
      timeRange: '00:00 – 00:06',
      startSec: 0,
      endSec: 6.2,
      title: 'Long answers become a navigable map',
      desc: 'Ophel parses every user prompt and AI heading in real time. Drag the 6-level depth slider to fold nested subsections or jump straight to any architectural decision.',
      highlights: ['H1–H6 depth slider', 'Turn-by-turn anchor jump', 'Live word & turn counter'],
      stillImage: '/images/product/outline-en.png',
      stillAlt: 'Ophel real-time outline panel beside an AI conversation',
    },
    {
      id: 'inline-search',
      tag: 'Filter & Bookmark',
      timeRange: '00:06 – 00:14',
      startSec: 6.2,
      endSec: 13.8,
      title: 'Filter 100-screen threads in milliseconds',
      desc: 'Type a keyword right inside the outline bar to isolate matching headings and code blocks, or star critical paragraphs as persistent bookmarks you can revisit in one click.',
      highlights: [
        'Instant inline filtering',
        'Starred section bookmarks',
        'One-click section copy',
      ],
      stillImage: '/images/product/outline-en.png',
      stillAlt: 'Ophel outline search filtering headings in real time',
    },
    {
      id: 'folders-prompts',
      tag: 'Folders & Prompts',
      timeRange: '00:14 – 00:21',
      startSec: 13.8,
      endSec: 21.0,
      title: 'Chats and prompts stay organized by project',
      desc: 'Switch tabs in the same panel to file conversations into nested folders with custom tags, or insert structured {{variable}} prompt templates without leaving the page.',
      highlights: [
        'Folders + multi-tag filter',
        '{{Variable}} prompt templates',
        'Sequential prompt queue',
      ],
      stillImage: '/images/product/conversation-en.png',
      stillAlt: 'Ophel conversation folders and prompt library workspace',
    },
    {
      id: 'theme-morph',
      tag: '24 Themes · Zen',
      timeRange: '00:21 – 00:24',
      startSec: 21.0,
      endSec: DURATION_SEC,
      title: 'Radial dark/light transitions across 24 themes',
      desc: 'Toggle between 12 light and 12 dark themes with a smooth circular View Transition anchored to your cursor — paired with Widescreen and distraction-free Zen Mode.',
      highlights: [
        '12 light + 12 dark presets',
        'Alt/Option + D quick toggle',
        'Smart panel avoidance',
      ],
      stillImage: '/images/product/prompt-en.png',
      stillAlt: 'Ophel theme customization and prompt workbench',
    },
  ],
  zh: [
    {
      id: 'outline-tree',
      tag: '大纲树 · H1–H6',
      timeRange: '00:00 – 00:06',
      startSec: 0,
      endSec: 6.2,
      title: '超长回复实时生成可折叠目录树',
      desc: 'Ophel 实时提取每一轮提问与 AI 回复中的 H1–H6 标题层级。拖动 6 级深度滑块即可一键收起细节，在万字长文中精准定位任意章节。',
      highlights: ['1–6 级标题深度滑块', '提问与章节双向锚点跳转', '实时字数与轮次统计'],
      stillImage: '/images/product/outline-zh.png',
      stillAlt: 'Ophel 在长 AI 对话旁显示实时大纲目录树',
    },
    {
      id: 'inline-search',
      tag: '内联过滤与书签',
      timeRange: '00:06 – 00:14',
      startSec: 6.2,
      endSec: 13.8,
      title: '在百屏对话中毫秒级筛选与星标收藏',
      desc: '在大纲搜索框输入关键词（如 kafka），即可实时高亮并过滤出对应章节；点击星标即可将关键结论存为书签，随时一键回溯。',
      highlights: ['关键词实时过滤高亮', '星标书签只看重点', '单节内容一键复制'],
      stillImage: '/images/product/outline-zh.png',
      stillAlt: 'Ophel 大纲内联关键词搜索与星标书签筛选',
    },
    {
      id: 'folders-prompts',
      tag: '文件夹与词库',
      timeRange: '00:14 – 00:21',
      startSec: 13.8,
      endSec: 21.0,
      title: '对话归档与 Prompt 模板在同一面板协同',
      desc: '无需离开当前聊天页，切换标签即可把散落对话归入项目文件夹与多维标签，或从词库一键插入带 {{变量}} 的结构化提示词。',
      highlights: [
        '文件夹 + 标签双维整理',
        '{{变量}} 模板填空与划词引用',
        '链式 Prompt 队列自动发送',
      ],
      stillImage: '/images/product/conversation-zh.png',
      stillAlt: 'Ophel 对话文件夹与标签管理面板',
    },
    {
      id: 'theme-morph',
      tag: '24 套主题与禅模式',
      timeRange: '00:21 – 00:24',
      startSec: 21.0,
      endSec: DURATION_SEC,
      title: '24 套主题与丝滑圆形扩散暗色切换',
      desc: '点击顶栏月亮图标或按 Alt/Option + D，界面将从点击处平滑扩散切换深浅主题；配合宽屏调节与面板智能避让，拒绝挤压原生页面。',
      highlights: ['12 浅 + 12 深预置主题', '点击原点圆形扩散动画', '页面宽度调节与禅模式'],
      stillImage: '/images/product/prompt-zh.png',
      stillAlt: 'Ophel 主题切换与 Prompt 词库预览',
    },
  ],
};

const UI_COPY = {
  en: {
    stageTitle: 'Ophel Live Workbench · Real Screen Recording',
    modeVideo: 'Live Video (24s)',
    modeStill: 'HD UI Snapshot',
    play: 'Play',
    pause: 'Pause',
    restart: 'Replay',
    jumpPrompt: 'Click any chapter or timeline bar to jump to that workflow moment',
    ledgerHeading: 'Complete Capability Specification',
    ledgerSub:
      'Every tool runs locally inside your browser via Shadow DOM isolation — consistent across all 32 supported AI sites.',
    docsCta: 'Read full feature documentation →',
    docsHref: 'https://ophel.app/docs',
  },
  zh: {
    stageTitle: 'Ophel 实机工作台 · 真实录屏演示',
    modeVideo: '实机录屏 (24s)',
    modeStill: '高清界面截图',
    play: '播放',
    pause: '暂停',
    restart: '重播',
    jumpPrompt: '点击左侧任意章节或顶部进度条，可直接跳转至对应实机演示片段',
    ledgerHeading: '核心能力规格一览',
    ledgerSub:
      '所有组件均基于 Shadow DOM 隔离渲染并 100% 本地存储，在全部 32+ 个 AI 站点保持一致体验。',
    docsCta: '查看完整功能文档 →',
    docsHref: 'https://ophel.app/docs/zh/introduction',
  },
} as const;

const CHAPTER_ICONS = [ListTree, Search, FolderKanban, Palette];

export function Features({ featuresTitle, featuresSubtitle, items, locale = 'en' }: FeaturesProps) {
  const chapters = CHAPTERS[locale];
  const ui = UI_COPY[locale];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageContainerRef = useRef<HTMLDivElement | null>(null);
  const chapterRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeChapter, setActiveChapter] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'video' | 'still'>('video');
  const [reducedMotion, setReducedMotion] = useState(false);

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

  // Pause video when workbench scrolls out of viewport
  useEffect(() => {
    const node = stageContainerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const video = videoRef.current;
        if (!video || viewMode !== 'video') return;
        if (entry?.isIntersecting) {
          if (!reducedMotion) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reducedMotion, viewMode]);

  // Sync active chapter when user scrolls through chapter cards on desktop
  useEffect(() => {
    const nodes = chapterRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.chapterIndex);
            if (!Number.isNaN(idx)) {
              setActiveChapter((prev) => {
                if (prev !== idx && videoRef.current && viewMode === 'video') {
                  const targetChapter = chapters[idx];
                  if (
                    targetChapter &&
                    (videoRef.current.currentTime < targetChapter.startSec ||
                      videoRef.current.currentTime > targetChapter.endSec)
                  ) {
                    videoRef.current.currentTime = targetChapter.startSec;
                  }
                }
                return idx;
              });
            }
          }
        }
      },
      {
        rootMargin: '-28% 0px -45% 0px',
        threshold: 0.25,
      },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [chapters, viewMode]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const t = video.currentTime;
    setCurrentTime(t);

    const matchedIndex = chapters.findIndex((c) => t >= c.startSec && t < c.endSec);
    if (matchedIndex !== -1 && matchedIndex !== activeChapter) {
      setActiveChapter(matchedIndex);
    }
  };

  const selectChapter = (idx: number) => {
    const target = chapters[idx];
    if (!target) return;
    setActiveChapter(idx);
    if (videoRef.current) {
      videoRef.current.currentTime = target.startSec;
      setCurrentTime(target.startSec);
      if (viewMode === 'video' && !reducedMotion) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setViewMode('video');
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    setViewMode('video');
    video.currentTime = 0;
    setCurrentTime(0);
    setActiveChapter(0);
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const currentChapter = chapters[activeChapter] ?? chapters[0];

  return (
    <section id="features" className="features-shell relative z-10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section Header — No banned eyebrow kicker above h2 */}
        <div className="section-heading">
          <h2>{featuresTitle}</h2>
          <p>{featuresSubtitle}</p>
        </div>

        {/* Overdrive Direction C: Sticky Chapter-Synced Workbench */}
        <div
          ref={stageContainerRef}
          className="workbench-layout mt-12 grid items-start gap-8 lg:grid-cols-[minmax(300px,0.35fr)_minmax(0,0.65fr)] lg:gap-9"
        >
          {/* Left column: Scrollable / clickable workflow chapters */}
          <div
            className="workbench-chapters order-2 lg:order-1 flex flex-col gap-3.5"
            role="tablist"
          >
            {chapters.map((chapter, idx) => {
              const Icon = CHAPTER_ICONS[idx % CHAPTER_ICONS.length] ?? BookmarkCheck;
              const isSelected = idx === activeChapter;

              // Calculate chapter progress percentage
              let progressPct = 0;
              if (viewMode === 'video') {
                if (idx < activeChapter) progressPct = 100;
                else if (idx === activeChapter) {
                  const span = Math.max(0.1, chapter.endSec - chapter.startSec);
                  progressPct = Math.min(
                    100,
                    Math.max(0, ((currentTime - chapter.startSec) / span) * 100),
                  );
                }
              } else if (isSelected) {
                progressPct = 100;
              }

              return (
                <button
                  key={chapter.id}
                  ref={(el) => {
                    chapterRefs.current[idx] = el;
                  }}
                  data-chapter-index={idx}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => selectChapter(idx)}
                  className={`workbench-chapter-card text-left transition-all ${
                    isSelected ? 'workbench-chapter-active' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[color:var(--accent-strong)]">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{chapter.tag}</span>
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[color:var(--text-faint)] tabular-nums">
                      {chapter.timeRange}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-extrabold leading-snug text-[color:var(--ink-strong)] sm:text-xl">
                    {chapter.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {chapter.desc}
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {chapter.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-[color:var(--line)] bg-[color:var(--paper)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--ink-muted)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Chapter progress bar */}
                  <div
                    className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[color:var(--line)]"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full rounded-full bg-[color:var(--accent)] transition-[width] duration-150 ease-out"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right column: Sticky Interactive Video & Snapshot Stage */}
          <div className="workbench-stage-sticky order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="workbench-frame">
              {/* Top Console Chrome */}
              <div className="workbench-chrome">
                <div className="flex items-center gap-2">
                  <span className="window-dot bg-[#e56b55]" />
                  <span className="window-dot bg-[#e8b339]" />
                  <span className="window-dot bg-[#3ca873]" />
                  <span className="ml-2 hidden font-mono text-xs font-semibold text-[#c5d4e3] sm:inline">
                    {ui.stageTitle}
                  </span>
                </div>

                {/* Controls: Video / Still toggle + Play/Pause */}
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex rounded-full border border-[rgba(155,180,200,0.2)] bg-[#0c1420] p-0.5">
                    <button
                      type="button"
                      onClick={() => setViewMode('video')}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
                        viewMode === 'video'
                          ? 'bg-[#198c86] text-white'
                          : 'text-[#9bb0c3] hover:text-white'
                      }`}
                    >
                      <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                      <span>{ui.modeVideo}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode('still');
                        videoRef.current?.pause();
                        setIsPlaying(false);
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
                        viewMode === 'still'
                          ? 'bg-[#198c86] text-white'
                          : 'text-[#9bb0c3] hover:text-white'
                      }`}
                    >
                      <ImageIcon className="h-3 w-3" aria-hidden="true" />
                      <span>{ui.modeStill}</span>
                    </button>
                  </div>

                  {viewMode === 'video' && (
                    <>
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(155,180,200,0.22)] bg-[#0c1420] text-[#e2ecf5] transition-colors hover:border-[#6fe3db] hover:text-white"
                        aria-label={isPlaying ? ui.pause : ui.play}
                        title={isPlaying ? ui.pause : ui.play}
                      >
                        {isPlaying ? (
                          <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={restartVideo}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(155,180,200,0.22)] bg-[#0c1420] text-[#e2ecf5] transition-colors hover:border-[#6fe3db] hover:text-white"
                        aria-label={ui.restart}
                        title={ui.restart}
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Viewport Stage */}
              <div className="workbench-viewport relative overflow-hidden bg-[#0a101a]">
                <video
                  ref={videoRef}
                  width="1200"
                  height="676"
                  className={`block aspect-[1200/676] w-full object-contain ${
                    viewMode === 'video' ? 'block' : 'hidden'
                  }`}
                  poster="/media/ophel-demo-poster.webp"
                  muted
                  playsInline
                  loop
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={togglePlay}
                >
                  <source src="/media/ophel-demo.webm" type="video/webm" />
                  <source src="/media/ophel-demo.mp4" type="video/mp4" />
                </video>

                {viewMode === 'still' && (
                  <img
                    src={currentChapter.stillImage}
                    alt={currentChapter.stillAlt}
                    width="1280"
                    height="800"
                    className="block aspect-[1200/676] w-full object-cover object-right-top"
                  />
                )}
              </div>

              {/* Segmented Timeline Scrubber Bar */}
              <div className="workbench-scrubber-bar">
                <div className="grid grid-cols-4 gap-2">
                  {chapters.map((chapter, idx) => {
                    const isSelected = idx === activeChapter;
                    return (
                      <button
                        key={chapter.id}
                        type="button"
                        onClick={() => selectChapter(idx)}
                        className={`group flex flex-col gap-1.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                          isSelected
                            ? 'bg-[rgba(25,140,134,0.22)] text-white'
                            : 'text-[#9bb0c3] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
                        }`}
                      >
                        <span className="truncate font-mono text-[11px] font-bold">
                          {chapter.tag}
                        </span>
                        <span className="truncate text-xs font-medium opacity-85">
                          {chapter.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-center font-mono text-[11px] text-[#869eb3]">
                  {ui.jumpPrompt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Specification Ledger (replaces generic 6-card grid scaffold) */}
        <div className="capability-ledger mt-20">
          <div className="flex flex-col justify-between gap-4 border-b border-[color:var(--line-strong)] pb-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-[color:var(--ink-strong)] sm:text-3xl">
                {ui.ledgerHeading}
              </h3>
              <p className="mt-2 max-w-[64ch] text-sm text-[color:var(--text-muted)] sm:text-base">
                {ui.ledgerSub}
              </p>
            </div>
            <a
              href={ui.docsHref}
              className="shrink-0 font-mono text-xs font-bold text-[color:var(--accent-strong)] underline decoration-[color:var(--line-strong)] underline-offset-4 transition-colors hover:text-[color:var(--ink-strong)]"
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
                <div className="flex items-center justify-between gap-3">
                  <dt className="font-display text-lg font-extrabold text-[color:var(--ink-strong)]">
                    {item.title}
                  </dt>
                  {item.code && (
                    <span className="shrink-0 rounded border border-[color:var(--line-strong)] bg-[color:var(--surface-tint)] px-2 py-0.5 font-mono text-[11px] font-bold text-[color:var(--accent-strong)]">
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
