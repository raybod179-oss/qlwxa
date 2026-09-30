import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { locales, SITE, ui, type L } from '@/lib/i18n';
import '../globals.css';

export const dynamicParams = false;
export const viewport: Viewport = { themeColor: '#0d0f14', width: 'device-width', initialScale: 1, viewportFit: 'cover' };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const l = (await params).locale as L;
  return {
    metadataBase: new URL(SITE),
    title: { default: `Qelvexa | ${ui[l]?.tagline}`, template: '%s | Qelvexa' },
    description: ui[l]?.sub,
    manifest: '/manifest.webmanifest',
    appleWebApp: { capable: true, title: 'Qelvexa', statusBarStyle: 'black-translucent' },
    openGraph: { siteName: 'Qelvexa', type: 'website', locale: l === 'fa' ? 'fa_IR' : 'en_US' },
    icons: {
      icon: [
        { url: '/qer.png', type: 'image/png', sizes: '512x512' },
        { url: '/favicon.ico' },
        { url: '/icon-192.png', sizes: '192x192' },
      ],
      apple: '/apple-icon.png',
      other: [{ rel: 'mask-icon', url: '/qer.png' }],
    },
    other: { 'msapplication-TileImage': '/qer.png', 'msapplication-TileColor': '#0d0f14' },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as L)) notFound();
  const l = locale as L;
  return (
    <html lang={l} dir={l === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}" }} />
      </head>
      <body>
        <Header l={l} />
        <main className="mx-auto max-w-5xl px-5 pb-20">{children}</main>
        <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm text-mute" dir="ltr">© 2026 Qelvexa</footer>
      </body>
    </html>
  );
}
