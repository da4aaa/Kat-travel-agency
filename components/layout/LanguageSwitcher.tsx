'use client';

import {useLocale} from 'next-intl';

import {usePathname, useRouter} from '@/i18n/navigation';
import {routing, type AppLocale} from '@/i18n/routing';

const labels: Record<AppLocale, string> = {
  en: 'EN',
  es: 'ES',
  ru: 'RU'
};

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex rounded-full bg-white/70 p-1 backdrop-blur-sm border border-text/10"
      aria-label="Language switcher"
      role="group"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => router.replace(pathname, {locale: l})}
            className={[
              'px-2.5 py-1 text-xs tracking-wide rounded-full transition-colors',
              active
                ? 'bg-accent text-white'
                : 'text-text/80 hover:text-text hover:bg-surface'
            ].join(' ')}
            aria-current={active ? 'true' : undefined}
          >
            {labels[l]}
          </button>
        );
      })}
    </div>
  );
}

