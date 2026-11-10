import React, { useState, useMemo, useEffect, useRef } from 'react';
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

function ReviewCard({ review }: { review: Review }) {
  const [avatarError, setAvatarError] = useState(false);
  const showFallback = !review.avatar || avatarError;

  return (
    <div className="reviews-card" aria-label={`Review by ${review.name}`}>
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
          <span className="reviews-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </span>
        </div>
      </div>

      <p className="reviews-text">{review.text}</p>
    </div>
  );
}

interface MarqueeRowProps {
  items: Review[];
  direction: 'left' | 'right';
  duration: number;
  paused: boolean;
}

function MarqueeRow({ items, direction, duration, paused }: MarqueeRowProps) {
  const track = [...items, ...items];

  return (
    <div className="reviews-row-outer" aria-hidden="true">
      <div
        className={`reviews-track reviews-track-${direction}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? 'paused' : undefined,
        }}
      >
        {track.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

interface ReviewsMarqueeProps {
  title: string;
  subtitle: string;
}

export function ReviewsMarquee({ title, subtitle }: ReviewsMarqueeProps) {
  const [row1, row2] = useMemo(() => buildMarqueeRows(), []);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isOffscreen, setIsOffscreen] = useState(false);

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

  return (
    <section ref={sectionRef} className="reviews-section" id="reviews" aria-label="User reviews">
      <div className="reviews-heading">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#f3efe6] mb-3">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-[#a4b8ca]">{subtitle}</p>
      </div>

      <div className="reviews-marquee-wrapper">
        <MarqueeRow items={row1} direction="left" duration={340} paused={isOffscreen} />
        <MarqueeRow items={row2} direction="right" duration={400} paused={isOffscreen} />
      </div>
    </section>
  );
}
