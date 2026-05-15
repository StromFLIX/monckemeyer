<script setup>
const socials = [
  { name: 'Instagram', handle: '@moenckemeyer', url: 'https://www.instagram.com/moenckemeyer/', color: 'bg-ratred',  text: 'text-plaster', icon: 'ig' },
  { name: 'Facebook',  handle: '/Moenckemeyer', url: 'https://www.facebook.com/Moenckemeyer',  color: 'bg-teal',    text: 'text-plaster', icon: 'fb' },
  { name: 'YouTube',   handle: 'Mönckemeyer',   url: 'https://www.youtube.com/channel/UCp8vIKDHbaCYCM8pvJJ8opQ', color: 'bg-ratgold', text: 'text-timber', icon: 'yt' }
]
</script>

<template>
  <section id="social" class="py-14 md:py-24 bg-plaster">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="text-center max-w-xl mx-auto">
        <span class="eyebrow">bleib dran</span>
        <h2 class="section-title">Folgt uns für Neues aus dem Laden.</h2>
        <p class="mt-4 text-timber/80">Neue Kollektionen, Aktionen und kleine Geschichten aus der Osterstraße.</p>
      </div>

      <div class="mt-12 grid md:grid-cols-3 gap-5">
        <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener"
           :class="['group relative rounded-xl border-2 border-timber p-7 flex items-center gap-5 hover:-translate-y-1 transition-transform', s.color, s.text]"
           :style="{ boxShadow: '6px 6px 0 0 #2a1a12' }">
          <div class="w-14 h-14 rounded-xl bg-plaster text-timber flex items-center justify-center border-2 border-timber">
            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
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
          <div class="flex-1">
            <div class="font-display text-2xl font-black">{{ s.name }}</div>
            <div class="text-sm opacity-90">{{ s.handle }}</div>
          </div>
          <svg class="w-6 h-6 opacity-80 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
