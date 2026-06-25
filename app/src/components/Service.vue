<script setup>
const services = [
  { title: 'Persönliche Beratung', desc: 'Mitarbeiter, die wissen, worüber sie sprechen.', icon: 'chat' },
  { title: 'Reparatur',            desc: 'Lieblingstasche kaputt? Wir kümmern uns.',        icon: 'wrench' },
  { title: 'Gutscheine',           desc: 'Online oder vor Ort – immer ein gutes Geschenk.', icon: 'gift', href: 'https://www.fettebeute-gutschein.de/moenckemeyer-hameln' },
  { title: 'Sonderbestellung',     desc: 'Was fehlt, beschaffen wir für dich.',             icon: 'search' }
]
</script>

<template>
  <section class="py-20 md:py-24 bg-paper border-t border-line">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="max-w-2xl">
        <span class="eyebrow">Service</span>
        <h2 class="section-title">Mehr als nur Verkauf.</h2>
        <p class="mt-4 text-base md:text-lg text-muted leading-relaxed">
          Beratung, Reparatur und Sonderbestellungen – wir machen das, wofür ein Fachgeschäft da ist.
        </p>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <component v-for="s in services" :key="s.title"
          :is="s.href ? 'a' : 'div'"
          :href="s.href" :target="s.href ? '_blank' : null" :rel="s.href ? 'noopener' : null"
          class="min-w-0 bg-paper border border-line rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 hover:border-ink hover:shadow-card">
          <div class="w-10 h-10 rounded-full bg-accentSoft text-accent flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="s.icon === 'chat'"><path d="M4 5h16v11H8l-4 4Z"/></template>
              <template v-else-if="s.icon === 'wrench'"><path d="M14 7a4 4 0 1 0 5 5l-9 9-3-3 9-9Z"/></template>
              <template v-else-if="s.icon === 'gift'"><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9V21M8 9a3 3 0 1 1 4-3 3 3 0 1 1 4 3"/></template>
              <template v-else><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></template>
            </svg>
          </div>
          <h3 class="font-display text-lg md:text-xl font-medium text-ink leading-tight">{{ s.title }}</h3>
          <p class="text-sm text-muted leading-relaxed">{{ s.desc }}</p>
        </component>
      </div>
    </div>
  </section>
</template>
