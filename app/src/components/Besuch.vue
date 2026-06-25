<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'

const mapEl = ref(null)
let map

onMounted(() => {
  map = L.map(mapEl.value, { scrollWheelZoom: false, zoomControl: true }).setView([52.1041, 9.3573], 17)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  const mapsUrl = 'https://maps.google.com/?cid=15851398925698667241'

  const icon = L.divIcon({
    className: 'moe-pin',
    html: `
      <a class="moe-pin-inner" href="${mapsUrl}" target="_blank" rel="noopener" title="In Google Maps öffnen" data-umami-event="karte-pin">
        <span class="moe-pin-pill">
          Mönckemeyer
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 17L17 7"/><path d="M9 7h8v8"/>
          </svg>
        </span>
        <span class="moe-pin-arrow"></span>
      </a>`,
    iconSize: [165, 44],
    iconAnchor: [82, 44]
  })
  L.marker([52.1041, 9.3573], { icon, riseOnHover: true }).addTo(map)
})

onUnmounted(() => { if (map) map.remove() })

const hours = [
  { d: 'Montag',     t: '10:00 – 18:00' },
  { d: 'Dienstag',   t: '10:00 – 18:00' },
  { d: 'Mittwoch',   t: '10:00 – 18:00' },
  { d: 'Donnerstag', t: '10:00 – 18:00' },
  { d: 'Freitag',    t: '10:00 – 18:00' },
  { d: 'Samstag',    t: '10:00 – 17:00' },
  { d: 'Sonntag',    t: 'geschlossen', closed: true }
]
const todayIdx = (new Date().getDay() + 6) % 7  // Mo=0 … So=6
const showAllHours = ref(false)
const todayHours = hours[todayIdx]
</script>

<template>
  <section id="besuch" class="relative py-20 md:py-28 bg-cream border-t border-line">
    <div class="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 md:gap-12">
      <div class="lg:col-span-5">
        <span class="eyebrow">Komm vorbei</span>
        <h2 class="section-title">Besuch uns mitten<br/>in der Altstadt.</h2>
        <p class="mt-4 text-base md:text-lg text-muted leading-relaxed">
          Osterstraße 7, direkt in der Hamelner Fußgängerzone – zwischen Fachwerk und Rattenfänger.
        </p>

        <div class="mt-8 bg-paper border border-line rounded-2xl p-5 md:p-6">
          <button
            @click="showAllHours = !showAllHours"
            data-umami-event="oeffnungszeiten-toggle"
            class="w-full flex items-center justify-between text-left">
            <div>
              <h3 class="font-display text-lg md:text-xl font-medium text-ink">Öffnungszeiten</h3>
              <p class="text-sm mt-1">
                <span class="text-muted">heute&nbsp;·</span>
                <span :class="todayHours.closed ? 'text-muted' : 'text-ink font-semibold'">
                  {{ todayHours.t }}
                </span>
              </p>
            </div>
            <svg :class="['w-5 h-5 text-muted transition-transform shrink-0', showAllHours && 'rotate-180']"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <ul v-show="showAllHours" class="mt-4 divide-y divide-line border-t border-line">
            <li v-for="(h, i) in hours" :key="h.d"
                :class="['flex justify-between py-2.5 text-sm md:text-base', i === todayIdx ? 'font-semibold text-accent' : 'text-ink/85']">
              <span>{{ h.d }}</span>
              <span>{{ h.t }}</span>
            </li>
          </ul>
          <p class="mt-3 text-xs text-muted">Onlineshop natürlich 24/7 geöffnet.</p>
        </div>

        <div class="mt-6 space-y-3 text-ink">
          <a href="tel:+495151941390" class="flex items-center gap-3 hover:text-accent transition-colors"
             data-umami-event="kontakt-telefon">
            <span class="w-9 h-9 rounded-full bg-accentSoft text-accent flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
            </span>
            <span class="font-medium">05151 941390</span>
          </a>
          <a href="mailto:info@moenckemeyer.de" class="flex items-center gap-3 hover:text-accent transition-colors"
             data-umami-event="kontakt-email">
            <span class="w-9 h-9 rounded-full bg-accentSoft text-accent flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </span>
            <span class="font-medium">info@moenckemeyer.de</span>
          </a>
          <a href="https://maps.google.com/?cid=15851398925698667241" target="_blank" rel="noopener"
             class="flex items-center gap-3 hover:text-accent transition-colors"
             data-umami-event="kontakt-adresse">
            <span class="w-9 h-9 rounded-full bg-accentSoft text-accent flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
            </span>
            <span class="font-medium">Osterstraße 7, 31785 Hameln</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="overflow-hidden rounded-2xl shadow-card">
          <div ref="mapEl" class="w-full h-[340px] md:h-[540px]"></div>
        </div>
        <p class="mt-3 text-xs text-muted text-right">Karte: © OpenStreetMap-Mitwirkende</p>
      </div>
    </div>
  </section>
</template>
