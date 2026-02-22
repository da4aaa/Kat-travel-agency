import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {WhatsAppButton} from '@/components/layout/WhatsAppButton';
import {PageTransition} from '@/components/shared/PageTransition';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  if (!routing.locales.includes(params.locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={params.locale} className="min-h-dvh bg-bg text-text">
        <Navbar />
        <PageTransition>
          <main id="content">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}

