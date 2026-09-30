import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Tool from '@/components/Tool';
import { locales, tools, ui, SITE, type L } from '@/lib/i18n';

type P = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return locales.flatMap((locale) => tools.map((x) => ({ locale, slug: x.slug }))); }

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await params;
  const x = tools.find((t) => t.slug === slug);
  if (!x) return {};
  const l = locale as L;
  const p = `/tools/${slug}`;
  return {
    title: x[l].title,
    description: x[l].desc,
    keywords: x[l].keywords,
    alternates: { canonical: `/${l}${p}`, languages: { fa: `/fa${p}`, en: `/en${p}`, 'x-default': `/fa${p}` } },
    openGraph: { title: x[l].title, description: x[l].desc, url: `${SITE}/${l}${p}`, siteName: 'Qelvexa', locale: l === 'fa' ? 'fa_IR' : 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title: x[l].title, description: x[l].desc },
  };
}

export default async function ToolPage({ params }: P) {
  const { locale, slug } = await params;
  const x = tools.find((t) => t.slug === slug);
  if (!x) notFound();
  const l = locale as L;
  const t = ui[l];
  const c = x[l];
  const p = `/tools/${slug}`;

  const appLd = {
    '@context': 'https://schema.org', '@type': 'WebApplication', name: `Qelvexa — ${c.h1}`, description: c.desc,
    url: `${SITE}/${l}${p}`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', inLanguage: l,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const crumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}/${l}` },
      { '@type': 'ListItem', position: 2, name: c.h1, item: `${SITE}/${l}${p}` },
    ],
  };

  return (
    <article className="max-w-3xl py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />

      <nav aria-label="breadcrumb" className="mb-4 text-sm text-mute">
        <Link href={`/${l}`} className="hover:text-fg">{t.home}</Link>
        <span className="mx-2">/</span>
        <span>{c.h1}</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.h1}</h1>
      <p className="mb-8 mt-3 text-mute">{c.desc}</p>

      <Tool slug={slug} l={l} />

      <h2 className="mt-12 text-xl font-bold">{t.how}</h2>
      <ol className="mt-3 list-decimal space-y-1 ps-6 text-mute">{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <p className="mt-6 text-mute">{t.privacy}</p>

      <p className="mt-10 leading-8 text-mute">{c.intro}</p>

      <h2 className="mt-12 text-xl font-bold">{t.faqTitle}</h2>
      <div className="mt-4 space-y-5">
        {c.faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-1 text-mute">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-bold">{t.allTools}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {tools.filter((o) => o.slug !== slug).map((o) => (
          <Link key={o.slug} href={`/${l}/tools/${o.slug}`} className="btn text-sm">{o[l].h1}</Link>
        ))}
      </div>
    </article>
  );
}
