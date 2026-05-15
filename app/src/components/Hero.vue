<script setup>
import TimberPattern from './TimberPattern.vue'
</script>

<template>
  <section class="relative overflow-hidden border-b-4 border-timber">
    <TimberPattern />
    <!-- Warmer Verlauf -->
    <div class="absolute inset-0 bg-gradient-to-br from-plaster via-plaster to-plasterDark opacity-90 -z-0"></div>

    <div class="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-14 md:pb-28 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
      <div class="md:col-span-7">
        <span class="eyebrow">seit 1879 · 5. Generation</span>
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.95] text-timber">
          Taschen <span class="text-ratred">&amp;</span> Reise.<br/>
          <span class="relative inline-block">
            Mitten in Hameln.
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

      <!-- Illustration: Koffer + Tasche -->
      <div class="md:col-span-5 relative hidden sm:block">
        <div class="timber-frame p-6 md:p-8 rotate-1">
          <svg viewBox="0 0 320 320" class="w-full h-auto" aria-label="Reisetasche und Koffer">
            <!-- Hintergrundkreis -->
            <circle cx="160" cy="160" r="140" fill="#e8b923" opacity="0.25"/>
            <!-- Koffer -->
            <g transform="translate(40,90)">
              <rect x="0" y="20" width="160" height="120" rx="14" fill="#a0522d" stroke="#2a1a12" stroke-width="4"/>
              <rect x="0" y="60" width="160" height="10" fill="#7a3d20"/>
              <rect x="60" y="0" width="40" height="24" rx="4" fill="none" stroke="#2a1a12" stroke-width="4"/>
              <circle cx="20" cy="150" r="8" fill="#2a1a12"/>
              <circle cx="140" cy="150" r="8" fill="#2a1a12"/>
              <rect x="70" y="80" width="20" height="6" rx="2" fill="#e8b923"/>
            </g>
            <!-- Tasche im Vordergrund -->
            <g transform="translate(150,150)">
              <path d="M10 40 Q 10 20 30 20 L 110 20 Q 130 20 130 40 L 130 120 Q 130 140 110 140 L 30 140 Q 10 140 10 120 Z"
                    fill="#b3252b" stroke="#2a1a12" stroke-width="4"/>
              <path d="M45 22 Q 45 0 70 0 Q 95 0 95 22" fill="none" stroke="#2a1a12" stroke-width="4" stroke-linecap="round"/>
              <rect x="60" y="60" width="20" height="14" rx="3" fill="#e8b923" stroke="#2a1a12" stroke-width="3"/>
            </g>
          </svg>
          <div class="absolute -top-4 -right-4 bg-ratred text-plaster font-hand text-2xl px-4 py-1 rounded-full rotate-6 border-2 border-timber shadow-soft">
            herzlich willkommen!
          </div>
        </div>
      </div>
    </div>

    <!-- Sägezahn-Border unten -->
    <div class="absolute bottom-0 left-0 right-0 h-3 bg-timber"></div>
  </section>
</template>
