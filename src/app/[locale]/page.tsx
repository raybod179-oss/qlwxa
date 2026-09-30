import type { Metadata } from 'next';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import { ui, SITE, type L } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const l = (await params).locale as L;
  const t = ui[l];
  return {
    title: `Qelvexa | ${t.tagline}`,
    description: t.sub,
    alternates: { canonical: `/${l}`, languages: { fa: '/fa', en: '/en', 'x-default': '/fa' } },
    openGraph: { title: `Qelvexa | ${t.tagline}`, description: t.sub, url: `${SITE}/${l}`, siteName: 'Qelvexa', locale: l === 'fa' ? 'fa_IR' : 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title: `Qelvexa | ${t.tagline}`, description: t.sub },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const l = (await params).locale as L;
  const t = ui[l];
  const siteLd = {
    '@context': 'https://schema.org', '@type': 'WebSite', name: 'Qelvexa', url: SITE, inLanguage: [l],
    potentialAction: { '@type': 'SearchAction', target: `${SITE}/${l}/tools/{search_term_string}`, 'query-input': 'required name=search_term_string' },
  };
  const orgLd = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Qelvexa', url: SITE };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <HomeHero l={l} />
      <section className="mt-16 max-w-2xl border-t border-line pt-8">
        <h2 className="text-sm font-bold text-mute">{t.about}</h2>
        <p className="mt-2 text-sm leading-7 text-mute">{t.aboutBody}</p>
        <Link href={`/${l}/about`} className="mt-3 inline-block text-sm" style={{ color: 'var(--accent)' }}>
          {l === 'fa' ? 'بیشتر بدانید ←' : '→ Learn more'}
        </Link>
      </section>
    </>
  );
}
