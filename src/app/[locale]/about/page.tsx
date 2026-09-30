import type { Metadata } from 'next';
import Link from 'next/link';
import { locales, tools, ui, SITE, type L } from '@/lib/i18n';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const l = (await params).locale as L;
  const t = ui[l];
  return {
    title: t.aboutTitle,
    description: t.aboutBody,
    alternates: { canonical: `/${l}/about`, languages: { fa: '/fa/about', en: '/en/about', 'x-default': '/fa/about' } },
    openGraph: { title: t.aboutTitle, description: t.aboutBody, url: `${SITE}/${l}/about`, siteName: 'Qelvexa' },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const l = (await params).locale as L;
  const t = ui[l];

  const ld = {
    '@context': 'https://schema.org', '@type': 'AboutPage', name: t.aboutTitle, url: `${SITE}/${l}/about`,
    about: {
      '@type': 'Organization', name: 'Qelvexa', url: SITE, description: t.aboutBody,
      knowsAbout: tools.map((x) => x[l].h1),
    },
  };

  return (
    <article className="max-w-2xl py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav aria-label="breadcrumb" className="mb-4 text-sm text-mute">
        <Link href={`/${l}`} className="hover:text-fg">{t.home}</Link>
        <span className="mx-2">/</span>
        <span>{t.about}</span>
      </nav>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.about}</h1>
      <p className="mt-5 leading-8 text-mute">{t.aboutBody}</p>
      <p className="mt-5 leading-8 text-mute">{t.aboutMission}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {t.aboutValues.map((v) => (
          <div key={v.t} className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="font-bold">{v.t}</h2>
            <p className="mt-2 text-sm text-mute">{v.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 leading-8 text-mute">{t.aboutClosing}</p>
      <div className="mt-10 flex flex-wrap gap-2">
        {tools.map((x) => (
          <Link key={x.slug} href={`/${l}/tools/${x.slug}`} className="btn text-sm">{x[l].h1}</Link>
        ))}
      </div>
    </article>
  );
}
