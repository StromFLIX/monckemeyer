<script setup>
const milestones = [
  { year: '1879',     text: 'Wilhelm Jonas gründet ein Fachgeschäft für Drechslereiartikel, Pfeifen und Schirme in der Hamelner Fischpfortenstraße.' },
  { year: 'um 1900',  text: 'Umzug in die Hauptgeschäftslage Osterstraße – erst Nr. 4, später in die Nr. 7. Dort ist Mönckemeyer bis heute.' },
  { year: 'Dieter M.', text: 'Aus dem 17&nbsp;m² „großen" Schirmfachgeschäft wird das führende Lederwaren-Haus am Platz – auf über 250&nbsp;m².' },
  { year: 'Heute',    text: 'Dennis Mönckemeyer führt das Familienunternehmen in 5. Generation. Tradition, Hameln und persönlicher Service – das bleibt.' }
]

const photos = [
  { src: '/hist/osterstrasse-1900.jpg', caption: 'Osterstraße um 1900', alt: 'Historische Aufnahme der Osterstraße in Hameln' },
  { src: '/hist/fachwerk.jpg',          caption: 'Hamelner Fachwerk',   alt: 'Fachwerkhäuser in der Hamelner Altstadt' },
  { src: '/hist/rattenfaenger.jpg',     caption: 'Der Rattenfänger',    alt: 'Rattenfänger von Hameln in historischem Gewand' }
]
</script>

<template>
  <section id="geschichte" class="relative py-20 md:py-28 bg-cream border-y border-line overflow-hidden">
    <div class="relative max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <!-- Text / Timeline -->
      <div class="lg:col-span-7 min-w-0">
        <span class="eyebrow">aus Hameln, für Hameln</span>
        <h2 class="section-title">Fünf Generationen Taschen-Geschichte.</h2>
        <p class="mt-4 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
          Mönckemeyer ist nicht „irgendein Laden". Wir gehören in die Hamelner Altstadt – seit 145&nbsp;Jahren.
        </p>

        <ol class="mt-10 md:mt-12 relative border-l border-line ml-2 space-y-8 md:space-y-10">
          <li v-for="m in milestones" :key="m.year" class="pl-6 md:pl-8 relative">
            <span class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent"></span>
            <div class="text-xs font-semibold uppercase tracking-eyebrow text-accent">{{ m.year }}</div>
            <p class="mt-1.5 text-sm md:text-base text-ink/85 leading-relaxed" v-html="m.text"></p>
          </li>
        </ol>

        <figure class="mt-12 md:mt-14 border-l-2 border-accent pl-5 md:pl-6 max-w-xl">
          <blockquote class="font-display text-xl md:text-2xl text-ink leading-snug">
            „Hier macht Shoppen Spaß."
          </blockquote>
          <figcaption class="mt-2 text-sm text-muted">— Dennis Mönckemeyer, Geschäftsführer</figcaption>
        </figure>
      </div>

      <!-- Bildergalerie – cleaner Stack -->
      <aside class="lg:col-span-5 order-first lg:order-none min-w-0">
        <!-- Desktop: gestapelt -->
        <div class="hidden lg:flex flex-col gap-4 sticky top-24">
          <figure v-for="p in photos" :key="p.src" class="overflow-hidden rounded-2xl bg-paper">
            <img :src="p.src" :alt="p.alt" loading="lazy" class="block w-full h-56 object-cover" />
            <figcaption class="text-xs text-muted py-2 px-3 border-t border-line">{{ p.caption }}</figcaption>
          </figure>
        </div>

        <!-- Mobile / Tablet: horizontaler Scroll-Strip -->
        <div class="lg:hidden -mx-4">
          <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 pt-2 px-4 hist-scroll touch-pan-x"
               style="-webkit-overflow-scrolling: touch;">
            <figure v-for="p in photos" :key="p.src"
                    class="shrink-0 snap-center w-[72vw] sm:w-[55vw] max-w-[320px] overflow-hidden rounded-2xl bg-paper">
              <img :src="p.src" :alt="p.alt" loading="lazy" class="block w-full h-48 sm:h-56 object-cover" />
              <figcaption class="text-xs text-muted py-2 px-3 border-t border-line">{{ p.caption }}</figcaption>
            </figure>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hist-scroll {
  scrollbar-width: thin;
  scrollbar-color: #c9bfa9 transparent;
}
.hist-scroll::-webkit-scrollbar { height: 6px; }
.hist-scroll::-webkit-scrollbar-thumb { background: #c9bfa9; border-radius: 3px; }
</style>
