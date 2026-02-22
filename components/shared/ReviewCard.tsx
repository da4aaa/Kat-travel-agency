import type {Review} from '@/data/reviews';

import {Star} from 'lucide-react';

export function ReviewCard({review}: {review: Review}) {
  return (
    <article className="h-full rounded-2xl border border-text/10 bg-white/70 backdrop-blur-sm p-6 shadow-[0_16px_40px_rgba(28,28,26,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-text">{review.name}</div>
          <div className="text-xs text-text-muted">{review.date}</div>
        </div>
        <div
          className="flex items-center gap-1 text-gold"
          aria-label={`${review.rating} star rating`}
        >
          {Array.from({length: review.rating}).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-text/90">“{review.quote}”</p>

      <div className="mt-5 text-xs text-text-muted">
        Source: {review.source}
      </div>
    </article>
  );
}

