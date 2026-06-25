<script setup>
const socials = [
  { name: 'Instagram', handle: '@moenckemeyer', url: 'https://www.instagram.com/moenckemeyer/', icon: 'ig' },
  { name: 'Facebook',  handle: '/Moenckemeyer', url: 'https://www.facebook.com/Moenckemeyer',  icon: 'fb' },
  { name: 'YouTube',   handle: 'Mönckemeyer',   url: 'https://www.youtube.com/channel/UCp8vIKDHbaCYCM8pvJJ8opQ', icon: 'yt' }
]
</script>

<template>
  <section id="social" class="py-20 md:py-24 bg-paper border-t border-line">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="max-w-2xl">
        <span class="eyebrow">Folgen</span>
        <h2 class="section-title">Neues aus dem Laden.</h2>
        <p class="mt-4 text-base md:text-lg text-muted leading-relaxed">Neue Kollektionen, Aktionen und kleine Geschichten aus der Osterstraße.</p>
      </div>

      <div class="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener"
           data-umami-event="social" :data-umami-event-platform="s.name"
           class="group relative bg-paper border border-line rounded-2xl p-6 flex items-center gap-4 transition-all duration-200 hover:border-ink hover:shadow-card">
          <div class="w-12 h-12 rounded-full bg-accentSoft text-accent flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <template v-if="s.icon === 'ig'">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/>
              </template>
              <template v-else-if="s.icon === 'fb'">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v4h3v8h3Z"/>
              </template>
              <template v-else>
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z"/>
              </template>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-display text-lg font-medium text-ink">{{ s.name }}</div>
            <div class="text-sm text-muted truncate">{{ s.handle }}</div>
          </div>
          <svg class="w-5 h-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
