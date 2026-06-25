<script setup>
import { consent, grantConsent, denyConsent } from '../consent'
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0">
    <div v-if="consent === null"
         role="dialog" aria-live="polite" aria-label="Hinweis zur Webanalyse"
         class="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div class="max-w-3xl mx-auto bg-ink text-paper rounded-2xl shadow-card border border-paper/10 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div class="flex-1 text-sm leading-relaxed text-paper/85">
          <p class="font-display text-base font-medium text-paper mb-1">Darf's ein bisschen Statistik sein?</p>
          Wir nutzen <strong>Umami</strong> – eine datenschutzfreundliche, cookielose Webanalyse mit
          anonymisierter Aufzeichnung der Nutzung, um die Seite zu verbessern. Du entscheidest.
          Mehr dazu in der
          <a href="#/datenschutz" class="underline hover:text-accent transition-colors">Datenschutzerklärung</a>.
        </div>
        <div class="flex gap-3 shrink-0">
          <button @click="denyConsent"
                  class="px-4 py-2 rounded-full text-sm font-medium border border-paper/25 text-paper/80 hover:border-paper/60 hover:text-paper transition-colors">
            Ablehnen
          </button>
          <button @click="grantConsent"
                  class="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-paper hover:bg-accentDark transition-colors">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
