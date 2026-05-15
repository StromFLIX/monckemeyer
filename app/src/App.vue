<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Sortiment from './components/Sortiment.vue'
import Geschichte from './components/Geschichte.vue'
import Service from './components/Service.vue'
import Besuch from './components/Besuch.vue'
import Social from './components/Social.vue'
import FooterBar from './components/FooterBar.vue'
import ImpressumPage from './components/ImpressumPage.vue'
import DatenschutzPage from './components/DatenschutzPage.vue'

const year = new Date().getFullYear()
const hash = ref(window.location.hash)
const onHash = () => { hash.value = window.location.hash }
onMounted(() => window.addEventListener('hashchange', onHash))
onUnmounted(() => window.removeEventListener('hashchange', onHash))

const route = computed(() => {
  if (hash.value === '#/impressum')   return 'impressum'
  if (hash.value === '#/datenschutz') return 'datenschutz'
  return 'home'
})

watch(route, () => window.scrollTo(0, 0))
</script>

<template>
  <Header />
  <main>
    <template v-if="route === 'home'">
      <Hero />
      <Sortiment />
      <Geschichte />
      <Service />
      <Besuch />
      <Social />
    </template>
    <ImpressumPage   v-else-if="route === 'impressum'" />
    <DatenschutzPage v-else-if="route === 'datenschutz'" />
  </main>
  <FooterBar :year="year" />
</template>
