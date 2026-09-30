'use client';
import { useState } from 'react';
import { ui, type L } from '@/lib/i18n';
import { g2j, j2g } from '@/lib/jalali';

const blob = (b: Uint8Array, type: string) => new Blob([b as unknown as BlobPart], { type });
type Out = { url: string; name: string };
const FA_DIGITS = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
const faNum = (n: number, l: L) => l === 'fa' ? String(n).replace(/\d/g, (d) => FA_DIGITS[+d]) : String(n);

export default function Tool({ slug, l }: { slug: string; l: L }) {
  const t = ui[l];
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState('');
  const [q, setQ] = useState(0.7);
  const [out, setOut] = useState<Out | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [w, setW] = useState(800);
  const [h, setH] = useState(600);
  const [fmt, setFmt] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/jpeg');
  const [dMode, setDMode] = useState<'toG' | 'toJ'>('toG');
  const [y, setY] = useState(1403);
  const [mo, setMo] = useState(1);
  const [d, setD] = useState(1);
  const [dateRes, setDateRes] = useState('');

  const isQr = slug === 'qr-code';
  const isDate = slug === 'date-converter';
  const multi = slug === 'merge-pdf' || slug === 'image-to-pdf';
  const needsFile = !isQr && !isDate;

  async function loadImage(f: File) {
    const bmp = await createImageBitmap(f);
    const c = document.createElement('canvas');
    c.width = bmp.width; c.height = bmp.height;
    c.getContext('2d')!.drawImage(bmp, 0, 0);
    return c;
  }

  function runDate() {
    if (dMode === 'toG') {
      const [gy, gm, gd] = j2g(y, mo, d);
      setDateRes(`${faNum(gy, l)}/${faNum(gm, l)}/${faNum(gd, l)}`);
    } else {
      const [jy, jm, jd] = g2j(y, mo, d);
      setDateRes(`${faNum(jy, l)}/${faNum(jm, l)}/${faNum(jd, l)}`);
    }
  }

  async function run() {
    setErr(''); setOut(null);
    if (needsFile && !files.length) { setErr(t.need); return; }
    if (isQr && !text.trim()) { setErr(t.need); return; }
    setBusy(true);
    try {
      if (slug === 'merge-pdf') {
        const { PDFDocument } = await import('pdf-lib');
        const doc = await PDFDocument.create();
        for (const f of files) {
          const src = await PDFDocument.load(await f.arrayBuffer());
          (await doc.copyPages(src, src.getPageIndices())).forEach((p) => doc.addPage(p));
        }
        setOut({ url: URL.createObjectURL(blob(await doc.save(), 'application/pdf')), name: 'merged.pdf' });
      } else if (slug === 'split-pdf') {
        const { PDFDocument } = await import('pdf-lib');
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        const n = src.getPageCount();
        const s = Math.max(1, Math.min(from, n)) - 1;
        const e = Math.max(1, Math.min(to, n)) - 1;
        const doc = await PDFDocument.create();
        const idx = Array.from({ length: Math.abs(e - s) + 1 }, (_, i) => Math.min(s, e) + i);
        (await doc.copyPages(src, idx)).forEach((p) => doc.addPage(p));
        setOut({ url: URL.createObjectURL(blob(await doc.save(), 'application/pdf')), name: `split-${from}-${to}.pdf` });
      } else if (slug === 'image-to-pdf') {
        const { PDFDocument } = await import('pdf-lib');
        const doc = await PDFDocument.create();
        for (const f of files) {
          const c = await loadImage(f);
          const x = c.getContext('2d')!;
          const jpg = await new Promise<Blob>((ok, no) => c.toBlob((b) => (b ? ok(b) : no(new Error('canvas'))), 'image/jpeg', 0.92));
          void x;
          const img = await doc.embedJpg(await jpg.arrayBuffer());
          doc.addPage([img.width, img.height]).drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        }
        setOut({ url: URL.createObjectURL(blob(await doc.save(), 'application/pdf')), name: 'images.pdf' });
      } else if (slug === 'compress-image') {
        const compress = (await import('browser-image-compression')).default;
        const r = await compress(files[0], { initialQuality: q, maxWidthOrHeight: 4096, maxSizeMB: 50, useWebWorker: true });
        setOut({ url: URL.createObjectURL(r), name: `compressed-${files[0].name}` });
      } else if (slug === 'resize-image') {
        const src = await loadImage(files[0]);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d')!.drawImage(src, 0, 0, w, h);
        const b = await new Promise<Blob>((ok, no) => c.toBlob((x) => (x ? ok(x) : no(new Error('canvas'))), 'image/png'));
        setOut({ url: URL.createObjectURL(b), name: 'resized.png' });
      } else if (slug === 'convert-image') {
        const src = await loadImage(files[0]);
        const b = await new Promise<Blob>((ok, no) => src.toBlob((x) => (x ? ok(x) : no(new Error('canvas'))), fmt, 0.92));
        const ext = fmt === 'image/png' ? 'png' : fmt === 'image/webp' ? 'webp' : 'jpg';
        setOut({ url: URL.createObjectURL(b), name: `converted.${ext}` });
      } else if (isQr) {
        const QR = (await import('qrcode')).default;
        setOut({ url: await QR.toDataURL(text.trim(), { width: 1024, margin: 2 }), name: 'qr.png' });
      }
    } catch { setErr(t.fail); }
    setBusy(false);
  }

  if (isDate) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
        <div className="mb-4 flex gap-2 text-sm">
          <button onClick={() => setDMode('toG')} className="btn" style={dMode === 'toG' ? { borderColor: 'var(--accent)' } : {}}>{t.shamsi} → {t.gregorian}</button>
          <button onClick={() => setDMode('toJ')} className="btn" style={dMode === 'toJ' ? { borderColor: 'var(--accent)' } : {}}>{t.gregorian} → {t.shamsi}</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <label className="text-sm text-mute">{t.year}<input type="number" value={y} onChange={(e) => setY(+e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-bg p-2" /></label>
          <label className="text-sm text-mute">{t.month}<input type="number" min={1} max={12} value={mo} onChange={(e) => setMo(+e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-bg p-2" /></label>
          <label className="text-sm text-mute">{t.day}<input type="number" min={1} max={31} value={d} onChange={(e) => setD(+e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-bg p-2" /></label>
        </div>
        <button onClick={runDate} className="btn-primary mt-5">{t.convert}</button>
        {dateRes && <p className="mt-5 text-2xl font-bold" dir="ltr">{dateRes}</p>}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
      {isQr ? (
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={t.qrPh} rows={3} dir="auto"
          className="w-full rounded-xl border border-line bg-bg p-4" />
      ) : (
        <label className="relative flex min-h-36 cursor-pointer items-center justify-center rounded-xl border border-dashed border-line p-6 text-center text-mute hover:border-accent">
          <input type="file" multiple={multi} accept={slug === 'merge-pdf' || slug === 'split-pdf' ? 'application/pdf' : 'image/*'}
            onChange={(e) => { setFiles(Array.from(e.target.files ?? [])); setOut(null); }}
            className="absolute inset-0 cursor-pointer opacity-0" />
          {files.length ? <span dir="auto">{files.map((f) => f.name).join(' ، ')}</span> : t.drop}
        </label>
      )}
      {slug === 'compress-image' && (
        <label className="mt-4 flex items-center gap-3 text-sm text-mute">{t.quality}
          <input type="range" min={0.3} max={0.95} step={0.05} value={q} onChange={(e) => setQ(+e.target.value)} className="accent-[var(--accent)]" />
          {Math.round(q * 100)}%
        </label>
      )}
      {slug === 'split-pdf' && (
        <div className="mt-4 flex gap-4 text-sm text-mute">
          <label>{t.from}<input type="number" min={1} value={from} onChange={(e) => setFrom(+e.target.value)} className="ms-2 w-20 rounded-lg border border-line bg-bg p-2" /></label>
          <label>{t.to}<input type="number" min={1} value={to} onChange={(e) => setTo(+e.target.value)} className="ms-2 w-20 rounded-lg border border-line bg-bg p-2" /></label>
        </div>
      )}
      {slug === 'resize-image' && (
        <div className="mt-4 flex gap-4 text-sm text-mute">
          <label>{t.width}<input type="number" min={1} value={w} onChange={(e) => setW(+e.target.value)} className="ms-2 w-24 rounded-lg border border-line bg-bg p-2" /></label>
          <label>{t.height}<input type="number" min={1} value={h} onChange={(e) => setH(+e.target.value)} className="ms-2 w-24 rounded-lg border border-line bg-bg p-2" /></label>
        </div>
      )}
      {slug === 'convert-image' && (
        <label className="mt-4 block text-sm text-mute">{t.format}
          <select value={fmt} onChange={(e) => setFmt(e.target.value as typeof fmt)} className="ms-2 rounded-lg border border-line bg-bg p-2">
            <option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option>
          </select>
        </label>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button onClick={run} disabled={busy} className="btn-primary">{busy ? t.busy : t.run}</button>
        {out && <a href={out.url} download={out.name} className="btn-primary" style={{ background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{t.download}</a>}
      </div>
      {err && <p role="alert" className="mt-3 text-sm text-red-400">{err}</p>}
      {isQr && out && <img src={out.url} alt="QR" width={220} height={220} className="mt-5 rounded-lg bg-white p-2" />}
      {slug === 'convert-image' && out && <img src={out.url} alt="" className="mt-5 max-h-64 rounded-lg" />}
    </div>
  );
}
