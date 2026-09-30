import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Qelvexa — Free PDF & Image Tools', short_name: 'Qelvexa',
    description: 'Fast, private, browser-only PDF and image tools. No upload, no sign-up.',
    start_url: '/fa', scope: '/', display: 'standalone', orientation: 'portrait-primary',
    background_color: '#0d0f14', theme_color: '#0d0f14',
    categories: ['productivity', 'utilities'],
    icons: [
      { src: '/qer.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
