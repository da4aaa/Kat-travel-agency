import type {Metadata} from 'next';
import {DM_Sans, Playfair_Display} from 'next/font/google';

import './globals.css';

const display = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap'
});

const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  // TODO: Replace with the production domain once known
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Kat B. | Private Tour Guide in Playa del Carmen, Mexico',
  description:
    "Private tours in Playa del Carmen, Tulum, Cobá & the Riviera Maya. Cenotes, Mayan ruins, jungle adventures. English, Spanish & Russian-speaking guide."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
