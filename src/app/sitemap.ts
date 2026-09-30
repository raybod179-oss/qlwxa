import type { MetadataRoute } from 'next';
import { locales, tools, SITE } from '@/lib/i18n';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', ...tools.map((t) => `/tools/${t.slug}`)];
  return locales.flatMap((l) => paths.map((p) => ({
    url: `${SITE}/${l}${p}`, lastModified: new Date(),
    alternates: { languages: { fa: `${SITE}/fa${p}`, en: `${SITE}/en${p}` } },
  })));
}
