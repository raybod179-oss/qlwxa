'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ui, type L } from '@/lib/i18n';

export default function Header({ l }: { l: L }) {
  const path = usePathname();
  const t = ui[l];
  const other: L = l === 'fa' ? 'en' : 'fa';
  useEffect(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  }, []);
  const toggle = () => {
    const light = document.documentElement.classList.toggle('light');
    try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch {}
  };
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
      <Link href={`/${l}`} className="text-lg font-bold tracking-tight" dir="ltr">Qelvexa</Link>
      <nav className="flex items-center gap-2 text-sm">
        <Link href={path.replace(/^\/(fa|en)/, `/${other}`)} hrefLang={other} className="btn">{t.lang}</Link>
        <button onClick={toggle} aria-label={t.theme} title={t.theme} className="btn">◐</button>
      </nav>
    </header>
  );
}
