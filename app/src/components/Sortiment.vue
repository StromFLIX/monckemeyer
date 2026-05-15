<script setup>
import { ref, computed } from 'vue'
const shopUrl = 'https://moenckemeyer.bagmondo.de/products'
const items = [
  { key: 'reise',    title: 'Reisegepäck',  desc: 'Koffer, Trolleys, Weekender – für jede Tour.', color: 'bg-ratred',   text: 'text-plaster' },
  { key: 'rucks',    title: 'Rucksäcke',    desc: 'Stadt, Uni, Outdoor & Business.',              color: 'bg-cognac',   text: 'text-plaster' },
  { key: 'damen',    title: 'Damentaschen', desc: 'Klassiker bis Statement – top Labels.',         color: 'bg-ratgold',  text: 'text-timber'  },
  { key: 'herren',   title: 'Herrentaschen',desc: 'Umhänge-, Kurier- und Schultertaschen.',        color: 'bg-teal',     text: 'text-plaster' },
  { key: 'business', title: 'Business',     desc: 'Aktentaschen, Laptopcases, Organizer.',         color: 'bg-timber',   text: 'text-plaster' },
  { key: 'klein',    title: 'Geldbörsen & Kleinleder', desc: 'Portemonnaies, Etuis, Accessoires.', color: 'bg-plasterDark', text: 'text-timber' }
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
           :href="shopUrl" target="_blank" rel="noopener"
           :class="['group relative rounded-xl border-2 border-timber overflow-hidden p-5 md:p-6 min-h-[120px] md:min-h-[180px] flex flex-col justify-between transition-transform hover:-translate-y-1', it.color, it.text]"
           :style="{ boxShadow: '5px 5px 0 0 #2a1a12' }">
          <h3 class="font-display text-xl md:text-2xl font-black leading-tight">{{ it.title }}</h3>
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
