import React, { useState, useMemo } from 'react';
import { buildMarqueeRows, type Review } from '../lib/reviews';

// ─── Colour palette for letter-fallback avatars ───────────────────────────
const AVATAR_COLORS = [
  '#6366f1',
  '#8b5cf6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#ef4444',
  '#14b8a6',
];

function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

// ─── Single review card ───────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  const [avatarError, setAvatarError] = useState(false);
  const showFallback = !review.avatar || avatarError;

  return (
    <div className="reviews-card" aria-label={`Review by ${review.name}`}>
      {/* Header: avatar + name + stars */}
      <div className="reviews-card-header">
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
            alt={review.name}
            width={40}
            height={40}
            className="reviews-avatar"
            onError={() => setAvatarError(true)}
            loading="lazy"
          />
        )}
        <div className="reviews-meta">
          <span className="reviews-name">{review.name}</span>
          <span className="reviews-stars" aria-label="5 stars">
            ★★★★★
          </span>
        </div>
      </div>

      {/* Review text — 4-line clamp */}
      <p className="reviews-text">{review.text}</p>
    </div>
  );
}

// ─── Marquee row ──────────────────────────────────────────────────────────
interface MarqueeRowProps {
  items: Review[];
  direction: 'left' | 'right';
  duration: number; // seconds
}

function MarqueeRow({ items, direction, duration }: MarqueeRowProps) {
  // Duplicate for seamless loop
  const track = [...items, ...items];

  return (
    <div className="reviews-row-outer" aria-hidden="true">
      <div
        className={`reviews-track reviews-track-${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────
interface ReviewsMarqueeProps {
  title: string;
  subtitle: string;
}

export function ReviewsMarquee({ title, subtitle }: ReviewsMarqueeProps) {
  // useMemo keeps the shuffle stable across React re-renders
  const [row1, row2] = useMemo(() => buildMarqueeRows(), []);

  return (
    <section className="reviews-section" id="reviews" aria-label="User reviews">
      {/* Section heading */}
      <div className="reviews-heading">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">{title}</h2>
        <p className="text-lg text-zinc-400">{subtitle}</p>
      </div>

      {/* Marquee rows */}
      <div className="reviews-marquee-wrapper">
        <MarqueeRow items={row1} direction="left" duration={350} />
        <MarqueeRow items={row2} direction="right" duration={420} />
      </div>
    </section>
  );
}
