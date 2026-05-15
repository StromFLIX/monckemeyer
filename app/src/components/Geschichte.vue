<script setup>
const milestones = [
  { year: '1879', text: 'Wilhelm Jonas gründet ein Fachgeschäft für Drechslereiartikel, Pfeifen und Schirme in der Hamelner Fischpfortenstraße.' },
  { year: '~1900', text: 'Umzug in die Hauptgeschäftslage Osterstraße – erst Nr. 4, später in die Nr. 7. Dort ist Mönckemeyer bis heute.' },
  { year: 'Dieter Mönckemeyer', text: 'Aus dem 17&nbsp;m² „großen" Schirmfachgeschäft wird das führende Lederwaren-Haus am Platz – auf über 250&nbsp;m².' },
  { year: 'Heute', text: 'Dennis Mönckemeyer führt das Familienunternehmen in 5. Generation. Tradition, Hameln und persönlicher Service – das bleibt.' }
]

const photos = [
  { src: '/hist/osterstrasse-1900.jpg', caption: 'Osterstraße um 1900',  rot: '-rotate-3', alt: 'Historische Aufnahme der Osterstraße in Hameln' },
  { src: '/hist/fachwerk.jpg',          caption: 'Hamelner Fachwerk',    rot: 'rotate-2',  alt: 'Fachwerkhäuser in der Hamelner Altstadt' },
  { src: '/hist/rattenfaenger.jpg',     caption: 'Der Rattenfänger',     rot: '-rotate-2', alt: 'Rattenfänger von Hameln in historischem Gewand' }
]
</script>

<template>
  <section id="geschichte" class="relative py-14 md:py-28 bg-timber text-plaster border-y-4 border-timber overflow-hidden">
    <div class="relative max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12">
      <!-- Text / Timeline -->
      <div class="lg:col-span-7 min-w-0">
        <span class="font-hand text-2xl text-ratgold -rotate-2 inline-block">aus Hameln, für Hameln</span>
        <h2 class="text-3xl md:text-5xl font-display font-black mt-2">Fünf Generationen Taschen-Geschichte.</h2>
        <p class="mt-4 text-plaster/80 max-w-2xl">
          Mönckemeyer ist nicht „irgendein Laden". Wir gehören in die Hamelner Altstadt – seit 145&nbsp;Jahren.
        </p>

        <ol class="mt-10 md:mt-12 relative border-l-2 border-ratgold/60 ml-3 space-y-7 md:space-y-10">
          <li v-for="m in milestones" :key="m.year" class="pl-6 md:pl-8 relative">
            <span class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-ratred border-2 border-ratgold"></span>
            <div class="font-display text-lg md:text-2xl font-black text-ratgold">{{ m.year }}</div>
            <p class="mt-1.5 md:mt-2 text-sm md:text-base text-plaster/90 leading-relaxed" v-html="m.text"></p>
          </li>
        </ol>

        <div class="mt-10 md:mt-14 p-5 md:p-8 border-2 border-ratgold/40 rounded-lg bg-timber/60 inline-block">
          <p class="font-hand text-2xl md:text-3xl text-ratgold">„Hier macht Shoppen Spaß!"</p>
          <p class="mt-2 text-plaster/70 text-xs md:text-sm">— Dennis Mönckemeyer, Geschäftsführer</p>
        </div>
      </div>

      <!-- Polaroid-Galerie -->
      <aside class="lg:col-span-5 order-first lg:order-none min-w-0">
        <!-- Desktop: gestapelte, leicht gedrehte Polaroids -->
        <div class="hidden lg:flex flex-col gap-6 sticky top-24">
          <figure v-for="(p, i) in photos" :key="p.src"
                  :class="['polaroid', p.rot, i % 2 === 0 ? 'self-start' : 'self-end']">
            <img :src="p.src" :alt="p.alt" loading="lazy" class="block w-full h-56 object-cover" />
            <figcaption class="font-hand text-xl text-timber text-center py-2 px-3">{{ p.caption }}</figcaption>
          </figure>
        </div>

        <!-- Mobile / Tablet: horizontaler Scroll-Strip -->
        <div class="lg:hidden -mx-4">
          <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 pt-2 px-4 hist-scroll touch-pan-x"
               style="-webkit-overflow-scrolling: touch;">
            <figure v-for="p in photos" :key="p.src"
                    class="polaroid shrink-0 snap-center w-[72vw] sm:w-[55vw] max-w-[300px]">
              <img :src="p.src" :alt="p.alt" loading="lazy" class="block w-full h-48 sm:h-56 object-cover" />
              <figcaption class="font-hand text-xl text-timber text-center py-2 px-3">{{ p.caption }}</figcaption>
            </figure>
          </div>
          <p class="text-xs text-plaster/50 mt-1 px-4">← wischen für mehr</p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.polaroid {
  background: #f6ecd6;
  padding: 10px 10px 4px;
  border: 2px solid #2a1a12;
  box-shadow: 6px 6px 0 0 rgba(0,0,0,0.5);
  transition: transform 0.25s ease;
}
.polaroid:hover { transform: translateY(-3px) rotate(0deg); }
.hist-scroll {
  scrollbar-width: thin;
  scrollbar-color: #e8b923 transparent;
}
.hist-scroll::-webkit-scrollbar { height: 6px; }
.hist-scroll::-webkit-scrollbar-thumb { background: #e8b923; border-radius: 3px; }
</style>
