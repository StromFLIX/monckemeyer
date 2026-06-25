<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const open = ref(false)
// Hysterese: erst ab 40px scrolled=true, erst unter 10px wieder false
const onScroll = () => {
  const y = window.scrollY
  if (!scrolled.value && y > 40) scrolled.value = true
  else if (scrolled.value && y < 10) scrolled.value = false
}
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
      'sticky top-0 z-40 transition-all duration-200 border-b',
      scrolled ? 'bg-paper/95 backdrop-blur border-line shadow-sm' : 'bg-paper border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center gap-4">
      <a href="#top" class="flex items-center gap-3 shrink-0 origin-left"
         data-umami-event="nav-logo">
        <img src="/logo.png" alt="Mönckemeyer – Taschen & Reise"
             :class="['h-14 md:h-16 w-auto transition-transform duration-200 origin-left', scrolled ? 'scale-[0.85]' : 'scale-100']" />
      </a>
      <nav class="hidden md:flex items-center gap-8 mx-auto">
        <a v-for="n in nav" :key="n.href" :href="n.href"
           class="text-[15px] font-medium text-ink hover:text-accent transition-colors"
           data-umami-event="nav-link" :data-umami-event-target="n.label">
          {{ n.label }}
        </a>
      </nav>
      <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener"
         class="btn-primary hidden md:inline-flex !py-2 !px-4 text-sm"
         data-umami-event="shop-cta" data-umami-event-location="header">
        Online-Shop
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <button class="md:hidden ml-auto p-2 -mr-2" @click="open = !open" aria-label="Menü"
              data-umami-event="mobile-menu-toggle">
        <svg class="w-7 h-7 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/>
          <path v-else d="M6 6l12 12M18 6l-12 12" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div v-show="open" class="md:hidden border-t border-line bg-paper">
      <div class="px-4 py-4 flex flex-col gap-3">
        <a v-for="n in nav" :key="n.href" :href="n.href" @click="open = false"
           class="font-medium text-ink py-1"
           data-umami-event="nav-link-mobile" :data-umami-event-target="n.label">{{ n.label }}</a>
        <a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener"
           class="btn-primary text-center justify-center mt-1"
           data-umami-event="shop-cta" data-umami-event-location="mobile-menu">Online-Shop</a>
      </div>
    </div>
  </header>
  <span id="top"></span>
</template>
