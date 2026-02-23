'use client';

import {useEffect, useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Menu, X} from 'lucide-react';

import {Link, usePathname} from '@/i18n/navigation';

import {Button} from '@/components/shared/Button';

function NavLink({
  href,
  children,
  onNavigate
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="text-sm text-text/80 hover:text-text transition-colors px-3 py-1.5 rounded-full hover:bg-white"
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const isHome = useMemo(() => pathname === `/${locale}`, [locale, pathname]);

  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setScrolled(!isHome);
    setOpen(false);
  }, [isHome, pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (!isHome) return;
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow"
      >
        {t('nav.skipToContent')}
      </a>

      <div
        className={[
          'mx-auto max-w-7xl px-6',
          'transition-[background,backdrop-filter,border-color,box-shadow] duration-300'
        ].join(' ')}
      >
        <div
          className={[
            'mt-9 rounded-2xl border',
            scrolled
              ? 'bg-bg/80 backdrop-blur-md border-text/10 shadow-[0_16px_40px_rgba(28,28,26,0.10)]'
              : 'bg-transparent border-transparent'
          ].join(' ')}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="font-serif text-xl tracking-tight text-text"
                aria-label="Kat B. Home"
              >
                Kat B.
              </Link>
              <nav className="hidden md:flex items-center gap-5">
                <NavLink href="/tours">{t('nav.tours')}</NavLink>
                <NavLink href="/services">{t('nav.services')}</NavLink>
                <NavLink href="/about">{t('nav.about')}</NavLink>
                <NavLink href="/#gallery">{t('nav.gallery')}</NavLink>
                <NavLink href="/contact">{t('nav.contact')}</NavLink>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:block">
                <Button size="md">{t('nav.bookNow')}</Button>
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-text/10 bg-white/70 backdrop-blur-sm text-text hover:bg-surface transition-colors"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-3 rounded-xl bg-white/70 backdrop-blur-sm border border-text/10 p-4">
                <NavLink href="/tours" onNavigate={() => setOpen(false)}>
                  {t('nav.tours')}
                </NavLink>
                <NavLink href="/services" onNavigate={() => setOpen(false)}>
                  {t('nav.services')}
                </NavLink>
                <NavLink href="/about" onNavigate={() => setOpen(false)}>
                  {t('nav.about')}
                </NavLink>
                <NavLink href="/#gallery" onNavigate={() => setOpen(false)}>
                  {t('nav.gallery')}
                </NavLink>
                <NavLink href="/contact" onNavigate={() => setOpen(false)}>
                  {t('nav.contact')}
                </NavLink>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="w-full">{t('nav.bookNow')}</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

