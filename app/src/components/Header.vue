<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const open = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const nav = [
  { href: '#sortiment', label: 'Sortiment' },
  { href: '#geschichte', label: 'Geschichte' },
  { href: '#besuch', label: 'Besuch uns' },
  { href: '#kontakt', label: 'Kontakt' }
]
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-40 transition-all duration-200 border-b-2',
      scrolled ? 'bg-plaster/95 backdrop-blur border-timber shadow-soft' : 'bg-plaster border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center gap-4">
      <a href="#top" class="flex items-center gap-3 shrink-0">
        <img src="/logo.png" alt="Mönckemeyer – Taschen & Reise"
             :class="['w-auto transition-all duration-200', scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20']" />
      </a>
      <nav class="hidden md:flex items-center gap-7 mx-auto">
        <a v-for="n in nav" :key="n.href" :href="n.href"
           class="font-semibold text-timber hover:text-tealDark transition-colors relative group">
          {{ n.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full"></span>
        </a>
      </nav>
      <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener"
         class="btn-primary hidden md:inline-flex !py-2 !px-4 text-sm">
        Online-Shop
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <button class="md:hidden ml-auto p-2 -mr-2" @click="open = !open" aria-label="Menü">
        <svg class="w-7 h-7 text-timber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/>
          <path v-else d="M6 6l12 12M18 6l-12 12" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div v-show="open" class="md:hidden border-t-2 border-timber/20 bg-plaster">
      <div class="px-4 py-4 flex flex-col gap-3">
        <a v-for="n in nav" :key="n.href" :href="n.href" @click="open = false"
           class="font-semibold text-timber py-1">{{ n.label }}</a>
        <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener"
           class="btn-primary text-center justify-center mt-1">Online-Shop</a>
      </div>
    </div>
  </header>
  <span id="top"></span>
</template>
