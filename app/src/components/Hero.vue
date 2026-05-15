<script setup>
import TimberPattern from './TimberPattern.vue'
import FachwerkRow from './FachwerkRow.vue'
</script>

<template>
  <section class="relative overflow-hidden border-b-4 border-timber">
    <TimberPattern />
    <!-- Warmer Verlauf -->
    <div class="absolute inset-0 bg-gradient-to-br from-plaster via-plaster to-plasterDark opacity-90 -z-0"></div>

    <div class="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-8 md:pb-12 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
      <div class="md:col-span-7">
        <span class="eyebrow">seit 1879 · 5. Generation</span>
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.95] text-timber">
          Taschen <span class="text-ratred">&amp;</span> Reise.<br/>
          <span class="relative inline-block">
            Im Herzen von Hameln.
            <svg class="absolute -bottom-3 left-0 w-full" height="14" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9 Q 75 1, 150 7 T 298 6" stroke="#e8b923" stroke-width="6" fill="none" stroke-linecap="round"/>
            </svg>
          </span>
        </h1>
        <p class="mt-5 md:mt-6 text-base md:text-xl text-timber/80 max-w-xl">
          Familien­fachgeschäft für Reisegepäck, Rucksäcke und Lederwaren.
          Über <strong>250&nbsp;m²</strong> Auswahl in der Osterstraße.
        </p>

        <div class="mt-6 md:mt-8 flex flex-wrap gap-3">
          <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener" class="btn-primary">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M6 7h12l-1.2 11.1A2 2 0 0 1 14.8 20H9.2a2 2 0 0 1-2-1.9L6 7Z" stroke-linejoin="round"/>
              <path d="M9 7a3 3 0 0 1 6 0" stroke-linecap="round"/>
            </svg>
            Zum Online-Shop
          </a>
          <a href="#besuch" class="btn-secondary">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" stroke-linejoin="round"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Besuch uns in Hameln
          </a>
          <a href="#social" class="btn-ghost">
            Folgt uns
          </a>
        </div>

        <div class="mt-6 md:mt-10 flex items-center gap-4 text-sm text-timber/70">
          <div class="flex -space-x-1">
            <span class="w-3 h-3 rounded-full bg-ratred"></span>
            <span class="w-3 h-3 rounded-full bg-ratgold"></span>
            <span class="w-3 h-3 rounded-full bg-cognac"></span>
            <span class="w-3 h-3 rounded-full bg-teal"></span>
          </div>
          <span class="font-hand text-lg md:text-xl text-timber">heute geöffnet bis 18&nbsp;Uhr</span>
        </div>
      </div>

      <!-- Team-Foto: Polaroid (mobil oben, desktop rechts) -->
      <div class="md:col-span-5 relative order-first md:order-none mx-auto md:mx-0 max-w-[320px] sm:max-w-[420px] md:max-w-none w-full">
        <figure class="polaroid-hero rotate-1">
          <img src="/team/team.jpg" alt="Das Team von Mönckemeyer im Geschäft in der Osterstraße"
               loading="eager" class="block w-full h-auto aspect-[16/10] object-cover" />
          <figcaption class="font-hand text-xl md:text-2xl text-timber text-center pt-2 md:pt-3 pb-1 px-3">
            Familie Mönckemeyer &amp; Team
          </figcaption>
        </figure>
        <div class="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-ratred text-plaster font-hand text-lg md:text-2xl px-3 md:px-4 py-1 rounded-full rotate-6 border-2 border-timber shadow-soft">
          herzlich willkommen!
        </div>
        <div class="absolute -bottom-3 -left-3 bg-ratgold text-timber font-hand text-base md:text-lg px-3 py-1 rounded-full -rotate-3 border-2 border-timber shadow-soft">
          5. Generation
        </div>
      </div>
    </div>

    <!-- Hamelner Fachwerk-Silhouette -->
    <div class="relative -mt-4 sm:-mt-8 md:-mt-10 overflow-hidden">
      <FachwerkRow />
    </div>

    <!-- Sägezahn-Border unten -->
    <div class="absolute bottom-0 left-0 right-0 h-3 bg-timber"></div>
  </section>
</template>

<style scoped>
.polaroid-hero {
  background: #f6ecd6;
  padding: 12px 12px 6px;
  border: 2px solid #2a1a12;
  box-shadow: 10px 10px 0 0 rgba(42,26,18,0.55);
}
</style>
