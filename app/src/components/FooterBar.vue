<script setup>
defineProps({ year: { type: Number, required: true } })
</script>

<template>
  <footer id="kontakt" class="bg-ink text-paper/85 border-t border-line">
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16 grid md:grid-cols-4 gap-10">
      <div class="md:col-span-2">
        <img src="/logo.png" alt="Mönckemeyer" class="h-12 w-auto"
             style="filter: brightness(0) saturate(100%) invert(98%) sepia(8%) saturate(200%) hue-rotate(355deg) brightness(102%) contrast(95%);" />
        <p class="mt-5 text-paper/70 max-w-md leading-relaxed text-sm">
          Mönckemeyer GmbH – Fachgeschäft für Taschen &amp; Reise, Lederwaren und Beratung. Mitten in Hameln seit 1879.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="https://www.instagram.com/moenckemeyer/" target="_blank" rel="noopener" aria-label="Instagram" data-umami-event="social" data-umami-event-platform="Instagram" data-umami-event-location="footer" class="w-9 h-9 rounded-full border border-paper/20 hover:border-paper/60 hover:text-paper text-paper/70 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/></svg>
          </a>
          <a href="https://www.facebook.com/Moenckemeyer" target="_blank" rel="noopener" aria-label="Facebook" data-umami-event="social" data-umami-event-platform="Facebook" data-umami-event-location="footer" class="w-9 h-9 rounded-full border border-paper/20 hover:border-paper/60 hover:text-paper text-paper/70 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v4h3v8h3Z"/></svg>
          </a>
          <a href="https://www.youtube.com/channel/UCp8vIKDHbaCYCM8pvJJ8opQ" target="_blank" rel="noopener" aria-label="YouTube" data-umami-event="social" data-umami-event-platform="YouTube" data-umami-event-location="footer" class="w-9 h-9 rounded-full border border-paper/20 hover:border-paper/60 hover:text-paper text-paper/70 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-eyebrow text-paper/50">Kontakt</h4>
        <ul class="mt-4 space-y-2 text-paper/80 text-sm">
          <li>Mönckemeyer GmbH</li>
          <li>Osterstr. 7, 31785 Hameln</li>
          <li><a href="tel:+495151941390" class="hover:text-paper transition-colors" data-umami-event="kontakt-telefon" data-umami-event-location="footer">05151 941390</a></li>
          <li><a href="mailto:info@moenckemeyer.de" class="hover:text-paper transition-colors" data-umami-event="kontakt-email" data-umami-event-location="footer">info@moenckemeyer.de</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-eyebrow text-paper/50">Links</h4>
        <ul class="mt-4 space-y-2 text-paper/80 text-sm">
          <li><a href="https://moenckemeyer.bagmondo.de/products" target="_blank" rel="noopener" class="hover:text-paper transition-colors" data-umami-event="shop-cta" data-umami-event-location="footer">Online-Shop</a></li>
          <li><a href="https://www.fettebeute-gutschein.de/moenckemeyer-hameln" target="_blank" rel="noopener" class="hover:text-paper transition-colors" data-umami-event="gutscheine" data-umami-event-location="footer">Gutscheine</a></li>
          <li><a href="#/impressum" class="hover:text-paper transition-colors" data-umami-event="legal" data-umami-event-page="impressum">Impressum</a></li>
          <li><a href="#/datenschutz" class="hover:text-paper transition-colors" data-umami-event="legal" data-umami-event-page="datenschutz">Datenschutz</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-paper/10">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-paper/50">
        <div>© {{ year }} Mönckemeyer GmbH · HRB 100175 · USt-IdNr. DE 115 444 727</div>
        <div>Hameln</div>
      </div>
    </div>
  </footer>
</template>
