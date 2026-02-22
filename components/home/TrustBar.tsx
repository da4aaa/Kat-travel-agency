import {useTranslations} from 'next-intl';
import {MapPin, Star, Users, Languages} from 'lucide-react';

export function TrustBar() {
  const t = useTranslations();

  const items = [
    {
      icon: Star,
      title: t('trust.rating.title'),
      subtitle: t('trust.rating.subtitle')
    },
    {
      icon: Languages,
      title: t('trust.languages.title'),
      subtitle: t('trust.languages.subtitle')
    },
    {icon: Users, title: t('trust.private.title'), subtitle: t('trust.private.subtitle')},
    {icon: MapPin, title: t('trust.based.title'), subtitle: t('trust.based.subtitle')}
  ];

  return (
    <section id="trust" className="border-y border-text/10 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-2xl bg-white/55 p-4 backdrop-blur-sm border border-text/10"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text">{item.title}</div>
                  <div className="text-xs text-text-muted">{item.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

