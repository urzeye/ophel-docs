import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Pause, Play, Star } from 'lucide-react';
import { CHROME_STORE_URL } from '../i18n';
import { buildMarqueeRows, type Review } from '../lib/reviews';

const AVATAR_COLORS = [
  '#0f766e',
  '#1d4ed8',
  '#b45309',
  '#047857',
  '#4338ca',
  '#be123c',
  '#0369a1',
  '#6d28d9',
];

function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function ReviewCard({
  review,
  starLabel,
  isClone = false,
}: {
  review: Review;
  starLabel: string;
  isClone?: boolean;
}) {
  const [avatarError, setAvatarError] = useState(false);
  const showFallback = !review.avatar || avatarError;

  return (
    <figure className="reviews-card" aria-hidden={isClone || undefined}>
      <figcaption className="reviews-card-header">
        {showFallback ? (
          <div
            className="reviews-avatar reviews-avatar-fallback"
            style={{ backgroundColor: avatarColor(review.name) }}
            aria-hidden="true"
          >
            {review.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <img
            src={review.avatar}
            alt=""
            width={40}
            height={40}
            className="reviews-avatar"
            onError={() => setAvatarError(true)}
            loading="lazy"
          />
        )}
        <div className="reviews-meta">
          <span className="reviews-name">{review.name}</span>
          <span className="reviews-stars" aria-label={starLabel}>
            ★★★★★
          </span>
        </div>
      </figcaption>

      <blockquote className="reviews-text" title={review.text}>
        <p>{review.text}</p>
      </blockquote>
    </figure>
  );
}

interface MarqueeRowProps {
  items: Review[];
  direction: 'left' | 'right';
  duration: number;
  paused: boolean;
  starLabel: string;
}

function MarqueeRow({ items, direction, duration, paused, starLabel }: MarqueeRowProps) {
  return (
    <div className="reviews-row-outer">
      <div
        className={`reviews-track reviews-track-${direction}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((review) => (
          <ReviewCard key={review.id} review={review} starLabel={starLabel} />
        ))}
        {items.map((review) => (
          <ReviewCard
            key={`${review.id}-clone`}
            review={review}
            starLabel={starLabel}
            isClone={true}
          />
        ))}
      </div>
    </div>
  );
}

interface ReviewsMarqueeProps {
  title: string;
  subtitle: string;
  locale?: 'en' | 'zh';
}

const TRUST_COPY = {
  en: {
    sectionLabel: 'User reviews',
    starLabel: '5 out of 5 stars',
    cwsLink: 'Read all reviews on Chrome Web Store',
    githubLink: 'Star on GitHub (GPLv3)',
    pause: 'Pause scrolling',
    resume: 'Resume scrolling',
  },
  zh: {
    sectionLabel: '用户真实评价',
    starLabel: '五星好评（5/5）',
    cwsLink: '前往 Chrome 应用店查看全部评价',
    githubLink: 'GitHub 开源仓库 (GPLv3)',
    pause: '暂停滚动',
    resume: '继续滚动',
  },
} as const;

export function ReviewsMarquee({ title, subtitle, locale = 'en' }: ReviewsMarqueeProps) {
  const [row1, row2] = useMemo(() => buildMarqueeRows(locale), [locale]);
  const copy = TRUST_COPY[locale];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isOffscreen, setIsOffscreen] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setUserPaused(true);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setUserPaused(true);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        setIsOffscreen(!entries[0]?.isIntersecting);
      },
      { threshold: 0.05 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const isPaused = isOffscreen || userPaused;

  return (
    <section
      ref={sectionRef}
      className="reviews-section"
      id="reviews"
      aria-label={copy.sectionLabel}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="reviews-heading">
          <h2 className="mb-3 font-display text-3xl font-extrabold tracking-tight text-[#f3efe6] sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[60ch] text-base leading-relaxed text-[#c3d3e3] sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${CHROME_STORE_URL}/reviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[rgba(155,182,204,0.28)] bg-[rgba(255,255,255,0.06)] px-4 py-2 text-xs font-bold text-[#f3efe6] transition-colors hover:border-[#5eead4] hover:bg-[rgba(255,255,255,0.1)]"
            >
              <Star className="h-3.5 w-3.5 fill-[#f5b841] text-[#f5b841]" aria-hidden="true" />
              <span>{copy.cwsLink}</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#9eb4c8]" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/urzeye/ophel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[rgba(155,182,204,0.22)] bg-transparent px-4 py-2 text-xs font-semibold text-[#c3d3e3] transition-colors hover:border-[#5eead4] hover:text-white"
            >
              <span>{copy.githubLink}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-pressed={userPaused}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[rgba(155,182,204,0.22)] bg-transparent px-3.5 py-2 text-xs font-semibold text-[#c3d3e3] transition-colors hover:border-[#5eead4] hover:text-white"
            >
              {userPaused ? (
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{userPaused ? copy.resume : copy.pause}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="reviews-marquee-wrapper">
        <MarqueeRow
          items={row1}
          direction="left"
          duration={210}
          paused={isPaused}
          starLabel={copy.starLabel}
        />
        <MarqueeRow
          items={row2}
          direction="right"
          duration={240}
          paused={isPaused}
          starLabel={copy.starLabel}
        />
      </div>
    </section>
  );
}
