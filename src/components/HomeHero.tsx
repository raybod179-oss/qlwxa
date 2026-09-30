'use client';
import { useState } from 'react';
import Link from 'next/link';
import Tool from '@/components/Tool';
import { tools, ui, type L } from '@/lib/i18n';

export default function HomeHero({ l }: { l: L }) {
  const t = ui[l];
  const [active, setActive] = useState(tools[0].slug);
  const current = tools.find((x) => x.slug === active)!;

  return (
    <>
      <section className="py-10 text-center sm:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-mute">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {t.badge}
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          {t.heroTitle}<br />
          <span style={{ color: 'var(--accent)' }}>{t.heroTitle2}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-mute">{t.heroText}</p>
      </section>

      <section className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex gap-3 sm:grid sm:grid-cols-4">
          {tools.map((x) => (
            <button
              key={x.slug}
              onClick={() => setActive(x.slug)}
              className="flex min-w-32 flex-col items-center gap-1.5 rounded-2xl border p-4 text-center transition-colors sm:min-w-0"
              style={active === x.slug
                ? { borderColor: 'var(--accent)', background: 'color-mix(in srgb, var(--accent) 12%, var(--surface))' }
                : { borderColor: 'var(--line)', background: 'var(--surface)' }}
            >
              <span className="text-2xl" style={{ color: active === x.slug ? 'var(--accent)' : undefined }}>{x.icon}</span>
              <strong className="text-sm">{x[l].h1}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-line bg-surface/50 p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold">{current[l].h1}</h2>
          <Link href={`/${l}/tools/${current.slug}`} className="text-sm text-mute hover:text-fg">{t.viewAll} →</Link>
        </div>
        <Tool slug={active} l={l} />
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-2">
        {tools.map((x) => (
          <Link key={x.slug} href={`/${l}/tools/${x.slug}`} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent">
            <span className="text-xl">{x.icon}</span>
            <span>
              <span className="block font-bold">{x[l].h1}</span>
              <span className="mt-1 block text-sm text-mute">{x[l].desc}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
