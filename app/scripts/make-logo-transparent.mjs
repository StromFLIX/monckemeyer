// Macht Weiß im Logo transparent und speichert als PNG.
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'

const input = '/home/stromflix/development/moenckemeyer/logo_original.jpg'
const out   = '/home/stromflix/development/moenckemeyer/app/public/logo.png'

const img = sharp(input).ensureAlpha()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
// Threshold: alles über ~235 in allen Kanälen -> transparent
// dazwischen weich überblenden (235..250) für sauberen Rand
for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i+1], b = data[i+2]
  const m = Math.min(r, g, b)          // wie nah am Weiß
  if (m >= 250) {
    data[i+3] = 0
  } else if (m >= 225) {
    // sanfter Übergang
    const a = Math.round(255 * (250 - m) / 25)
    data[i+3] = a
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(out)

console.log('wrote', out)
