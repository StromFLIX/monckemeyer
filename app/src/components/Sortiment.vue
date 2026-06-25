<script setup>
const vendor = '?vendor_permalink%5B%5D=moenckemeyer-taschen-und-reise'
const base = 'https://moenckemeyer.bagmondo.de'
const shopUrl = base + '/products' + vendor

const items = [
  { key: 'taschen',     title: 'Taschen',                desc: 'PICARD, SURI FREY, Braun Büffel – für Damen und Herren.',                href: base + '/taschen'                 + vendor },
  { key: 'koffer',      title: 'Koffer & Reisetaschen',  desc: 'Hartschalenkoffer, Trolleys & Weekender – Samsonite, Travelite & Co.',   href: base + '/koffer-und-reisetaschen' + vendor },
  { key: 'rucks',       title: 'Rucksäcke',              desc: 'Schule, Uni, Stadt & Outdoor – satch, Ergobag, CABAIA und mehr.',       href: base + '/rucksaecke'              + vendor },
  { key: 'accessoires', title: 'Accessoires',            desc: 'Geldbörsen, Etuis, Gürtel und Schirme – von Secrid bis Knirps.',         href: base + '/accessoires'             + vendor },
  { key: 'fashion',     title: 'Fashion & Lifestyle',    desc: 'Reisenthel & Co. – Shopper, Tücher und Lifestyle-Begleiter.',           href: base + '/fashion-und-lifestyle'   + vendor },
  { key: 'freizeit',    title: 'Freizeit',               desc: 'Stockschirme von Doppler, Einkaufstrolleys & Outdoor-Begleiter.',        href: base + '/freizeit'                + vendor }
]
</script>

<template>
  <section id="sortiment" class="relative py-20 md:py-28 bg-paper border-t border-line">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="max-w-2xl">
        <span class="eyebrow">Sortiment</span>
        <h2 class="section-title">Was bei uns in den Regalen steht.</h2>
        <p class="mt-4 text-base md:text-lg text-muted leading-relaxed">
          Internationale Top-Labels und moderne Klassiker. Was fehlt, beschaffen wir.
        </p>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a v-for="it in items" :key="it.key"
           :href="it.href" target="_blank" rel="noopener"
           data-umami-event="sortiment-kategorie" :data-umami-event-kategorie="it.title"
           class="group relative min-w-0 bg-paper border border-line rounded-2xl p-6 md:p-7 flex flex-col gap-3 transition-all duration-200 hover:border-ink hover:shadow-card">
          <h3 class="font-display text-xl md:text-2xl font-medium text-ink leading-tight">{{ it.title }}</h3>
          <p class="text-sm text-muted leading-relaxed">{{ it.desc }}</p>
          <div class="mt-auto pt-3 flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-accentDark transition-colors">
            im Shop ansehen
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
      </div>

      <div class="mt-12 text-center">
        <a :href="shopUrl" target="_blank" rel="noopener" class="btn-ghost"
           data-umami-event="shop-cta" data-umami-event-location="sortiment-alle-marken">
          Alle Marken im Shop ansehen
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <p class="mt-4 text-sm text-muted">
          … und sehr viel mehr vor Ort in der Osterstraße&nbsp;7.
        </p>
      </div>
    </div>
  </section>
</template>
