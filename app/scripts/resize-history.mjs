// Resize history images to web-friendly sizes
import sharp from 'sharp'

const base = '/home/stromflix/development/moenckemeyer/app/public/hist'
const targets = [
  { src: `${base}/osterstrasse-1900.webp`, out: `${base}/osterstrasse-1900.jpg`, w: 800 },
  { src: `${base}/rattenfaenger.jpg`,      out: `${base}/rattenfaenger.jpg`,      w: 800 },
  { src: `${base}/fachwerk.jpg`,           out: `${base}/fachwerk.jpg`,           w: 800 }
]

for (const t of targets) {
  // sharp can't write to same path it's reading from in-place easily; route via buffer
  const buf = await sharp(t.src).resize({ width: t.w, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toBuffer()
  const { writeFileSync } = await import('node:fs')
  writeFileSync(t.out, buf)
  console.log('wrote', t.out, buf.length, 'bytes')
}
