import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import type {TourCategory} from '@/data/tours';

type FilterKey =
  | 'all'
  | 'half-day'
  | 'full-day'
  | 'adventure'
  | 'history-ruins'
  | 'water-cenotes';

const filters: Array<{key: FilterKey; labelKey: string}> = [
  {key: 'all', labelKey: 'tours.filter.all'},
  {key: 'half-day', labelKey: 'tours.filter.halfDay'},
  {key: 'full-day', labelKey: 'tours.filter.fullDay'},
  {key: 'adventure', labelKey: 'tours.filter.adventure'},
  {key: 'history-ruins', labelKey: 'tours.filter.historyRuins'},
  {key: 'water-cenotes', labelKey: 'tours.filter.waterCenotes'}
];

export function TourFilter({active}: {active: TourCategory | null}) {
  const t = useTranslations();

  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {filters.map((f) => {
        const isAll = f.key === 'all';
        const isActive = isAll ? active === null : active === f.key;

        const href = isAll ? '/tours' : `/tours?category=${f.key}`;

        return (
          <Link
            key={f.key}
            href={href}
            className={[
              'rounded-full px-4 py-2 text-sm transition-colors border',
              isActive
                ? 'bg-accent text-white border-accent'
                : 'bg-white/70 backdrop-blur-sm border-text/10 text-text/80 hover:text-text hover:bg-surface'
            ].join(' ')}
            aria-current={isActive ? 'page' : undefined}
          >
            {t(f.labelKey)}
          </Link>
        );
      })}
    </div>
  );
}

