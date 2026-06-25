<script setup>
import { onMounted, onUnmounted } from 'vue'
defineProps({ title: { type: String, required: true } })

const back = () => { window.location.hash = '' }
onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <article class="bg-paper border-b border-line">
    <div class="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <a href="#" @click.prevent="back"
         class="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent mb-8 transition-colors">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        zurück zur Startseite
      </a>
      <span class="eyebrow">Rechtliches</span>
      <h1 class="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">{{ title }}</h1>
      <div class="mt-8 prose prose-neutral max-w-none text-ink/85 legal">
        <slot />
      </div>
    </div>
  </article>
</template>

<style scoped>
.legal :deep(h2) {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #1a1410;
}
.legal :deep(h3) {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: 1.15rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1410;
}
.legal :deep(p) { margin: 0.75rem 0; line-height: 1.65; }
.legal :deep(ul) { list-style: disc; padding-left: 1.25rem; margin: 0.75rem 0; }
.legal :deep(li) { margin: 0.25rem 0; }
.legal :deep(a) { color: #2f6e6a; text-decoration: underline; }
.legal :deep(a:hover) { color: #214f4c; }
.legal :deep(strong) { color: #1a1410; }
</style>
