<script setup>
import { computed } from 'vue'

const hours = [
  '10:00 – 18:00', // Mo
  '10:00 – 18:00', // Di
  '10:00 – 18:00', // Mi
  '10:00 – 18:00', // Do
  '10:00 – 18:00', // Fr
  '10:00 – 17:00', // Sa
  null             // So – geschlossen
]

const status = computed(() => {
  const now = new Date()
  const idx = (now.getDay() + 6) % 7 // Mo=0 … So=6
  const range = hours[idx]
  if (!range) return { open: false, label: 'heute geschlossen' }

  const [openStr, closeStr] = range.split('–').map(s => s.trim())
  const toMin = t => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }
  const nowMin = now.getHours() * 60 + now.getMinutes()
  const openMin = toMin(openStr)
  const closeMin = toMin(closeStr)

  if (nowMin < openMin) return { open: false, label: `heute ab ${openStr} Uhr` }
  if (nowMin >= closeMin) return { open: false, label: 'heute geschlossen' }
  return { open: true, label: `heute geöffnet bis ${closeStr.replace(':00', '')}\u00A0Uhr` }
})
</script>

<template>
  <section class="relative bg-paper">
    <div class="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
      <div class="md:col-span-6 order-2 md:order-1">
        <span class="eyebrow">seit 1879 · 5. Generation</span>
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight text-ink">
          Taschen <span class="font-body font-normal text-ink/80">&amp;</span> Reise.<br/>
          <span class="text-muted">Im Herzen von Hameln.</span>
        </h1>
        <p class="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed">
          Familien&shy;fachgeschäft für Reisegepäck, Rucksäcke und Lederwaren.
          Über <span class="text-ink font-semibold">250&nbsp;m²</span> Auswahl mitten in der Osterstraße.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener" class="btn-primary">
            Zum Online-Shop
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#besuch" class="btn-ghost">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" stroke-linejoin="round"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Besuch uns in Hameln
          </a>
        </div>

        <a href="#besuch" class="group mt-8 inline-flex items-center text-sm text-muted hover:text-ink transition-colors">
          <span :class="['inline-block w-2 h-2 rounded-full align-middle mr-2', status.open ? 'bg-accent' : 'bg-muted/50']"></span>
          {{ status.label }}
          <svg class="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Team-Foto: clean, rounded, ohne Frame -->
      <div class="md:col-span-6 order-1 md:order-2">
        <figure class="overflow-hidden rounded-2xl shadow-card">
          <img src="/team/team.jpg"
               alt="Das Team von Mönckemeyer im Geschäft in der Osterstraße"
               loading="eager"
               class="block w-full h-auto aspect-[4/3] object-cover" />
        </figure>
        <p class="mt-3 text-xs text-muted text-center md:text-left">
          Familie Mönckemeyer &amp; Team in der Osterstraße 7
        </p>
      </div>
    </div>
  </section>
</template>
