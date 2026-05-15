<script setup>
import { ref, computed } from 'vue'
const vendor = '?vendor_permalink%5B%5D=moenckemeyer-taschen-und-reise'
const base = 'https://moenckemeyer.bagmondo.de'
const shopUrl = base + '/products' + vendor

const items = [
  { key: 'accessoires', title: 'Accessoires',           desc: 'Geldbörsen, Etuis, Gürtel und Schirme – von Secrid bis Knirps.', href: base + '/accessoires'             + vendor, color: 'bg-teal',        text: 'text-plaster' },
  { key: 'koffer',      title: 'Koffer & Reisetaschen', desc: 'Hartschalenkoffer, Trolleys & Weekender – Samsonite, Travelite & Co.', href: base + '/koffer-und-reisetaschen' + vendor, color: 'bg-plaster',     text: 'text-timber'  },
  { key: 'taschen',     title: 'Taschen',               desc: 'PICARD, SURI FREY, Braun Büffel – für Damen und Herren.',       href: base + '/taschen'                 + vendor, color: 'bg-plasterDark', text: 'text-timber'  },
  { key: 'rucks',       title: 'Rucksäcke',             desc: 'Schule, Uni, Stadt & Outdoor – satch, Ergobag, CABAIA und mehr.', href: base + '/rucksaecke'              + vendor, color: 'bg-tealDark',    text: 'text-plaster' },
  { key: 'fashion',     title: 'Fashion & Lifestyle',   desc: 'Reisenthel & Co. – Shopper, Tücher und Lifestyle-Begleiter.',  href: base + '/fashion-und-lifestyle'   + vendor, color: 'bg-teal',        text: 'text-plaster' },
  { key: 'freizeit',    title: 'Freizeit',              desc: 'Stockschirme von Doppler, Einkaufstrolleys & Outdoor-Begleiter.', href: base + '/freizeit'                + vendor, color: 'bg-plaster',     text: 'text-timber'  }
]

const expanded = ref(false)
// Auf Mobile: vorerst nur 4 anzeigen. Auf sm+ immer alle.
const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches
const visibleItems = computed(() => (expanded.value || !isMobileRef.value) ? items : items.slice(0, 4))
import { onMounted, onUnmounted } from 'vue'
const isMobileRef = ref(false)
const updateIsMobile = () => { isMobileRef.value = isMobile() }
onMounted(() => { updateIsMobile(); window.addEventListener('resize', updateIsMobile) })
onUnmounted(() => window.removeEventListener('resize', updateIsMobile))
</script>

<template>
  <section id="sortiment" class="relative py-14 md:py-28">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="max-w-2xl">
        <span class="eyebrow">unser Sortiment</span>
        <h2 class="section-title">Was bei uns in den Regalen steht.</h2>
        <p class="mt-4 text-base md:text-lg text-timber/80">
          Internationale Top-Labels und moderne Klassiker. Was fehlt, beschaffen wir.
        </p>
      </div>

      <div class="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        <a v-for="it in visibleItems" :key="it.key"
           :href="it.href" target="_blank" rel="noopener"
           :class="['group relative min-w-0 rounded-xl border-2 border-timber overflow-hidden p-4 md:p-6 min-h-[120px] md:min-h-[180px] flex flex-col justify-between transition-transform hover:-translate-y-1', it.color, it.text]"
           :style="{ boxShadow: '5px 5px 0 0 #2a1a12' }">
          <h3 class="font-display text-lg sm:text-xl md:text-2xl font-black leading-tight break-words hyphens-auto" lang="de">{{ it.title }}</h3>
          <div>
            <p class="text-sm opacity-90 hidden md:block">{{ it.desc }}</p>
            <div class="mt-2 md:mt-3 flex items-center gap-2 font-semibold text-sm">
              im Shop ansehen
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <!-- Mobile: Mehr-anzeigen-Toggle -->
      <div v-if="isMobileRef && !expanded" class="mt-5 sm:hidden text-center">
        <button @click="expanded = true" class="btn-secondary">
          Alle {{ items.length }} Kategorien anzeigen
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <p class="mt-8 md:mt-10 text-center font-hand text-xl md:text-2xl text-timber/70">
        … und sehr viel mehr vor Ort in der Osterstraße&nbsp;7.
      </p>
    </div>
  </section>
</template>
