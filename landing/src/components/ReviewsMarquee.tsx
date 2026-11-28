import React, { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { CHROME_STORE_URL } from '../i18n';
import { getCuratedReviews, type Review } from '../lib/reviews';

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

function ReviewCard({ review, starLabel }: { review: Review; starLabel: string }) {
  const [avatarError, setAvatarError] = useState(false);
  const showFallback = !review.avatar || avatarError;

  return (
    <figure className="reviews-card">
      <blockquote className="reviews-text">
        <p>“{review.text}”</p>
      </blockquote>

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
    </figure>
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
    cwsBadge: 'Chrome Web Store · Verified 5-star reviews',
    cwsLink: 'Read all reviews on Chrome Web Store',
    githubLink: 'Star on GitHub (GPLv3)',
  },
  zh: {
    sectionLabel: '用户真实评价',
    starLabel: '五星好评（5/5）',
    cwsBadge: 'Chrome 网上应用店 · 精选真实五星评价',
    cwsLink: '前往 Chrome 应用店查看全部评价',
    githubLink: 'GitHub 开源仓库 (GPLv3)',
  },
} as const;

export function ReviewsMarquee({ title, subtitle, locale = 'en' }: ReviewsMarqueeProps) {
  const curated = getCuratedReviews(locale);
  const copy = TRUST_COPY[locale];

  return (
    <section className="reviews-section" id="reviews" aria-label={copy.sectionLabel}>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="reviews-heading">
          <h2 className="mb-3 font-display text-3xl font-extrabold tracking-tight text-[#f3efe6] sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[60ch] text-base leading-relaxed text-[#c3d3e3] sm:text-lg">
            {subtitle}
          </p>

          {/* Verifiable trust & external store links */}
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
          </div>
        </div>

        <div className="reviews-grid">
          {curated.map((review) => (
            <ReviewCard key={review.id} review={review} starLabel={copy.starLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
