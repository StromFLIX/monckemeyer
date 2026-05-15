<template>
  <!-- Dezentes Fachwerk-Pattern als SVG -->
  <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 800" aria-hidden="true">
    <defs>
      <pattern id="timberPattern" x="0" y="0" width="240" height="200" patternUnits="userSpaceOnUse">
        <!-- Horizontalbalken -->
        <rect x="0" y="0" width="240" height="14" fill="#2a1a12" opacity="0.08"/>
        <rect x="0" y="186" width="240" height="14" fill="#2a1a12" opacity="0.08"/>
        <!-- Vertikalstützen -->
        <rect x="0" y="0" width="14" height="200" fill="#2a1a12" opacity="0.08"/>
        <rect x="113" y="0" width="14" height="200" fill="#2a1a12" opacity="0.08"/>
        <rect x="226" y="0" width="14" height="200" fill="#2a1a12" opacity="0.08"/>
        <!-- Diagonalen (Andreaskreuz) -->
        <line x1="14" y1="14" x2="113" y2="186" stroke="#2a1a12" stroke-width="10" opacity="0.06"/>
        <line x1="113" y1="14" x2="14" y2="186" stroke="#2a1a12" stroke-width="10" opacity="0.06"/>
        <line x1="127" y1="14" x2="226" y2="186" stroke="#2a1a12" stroke-width="10" opacity="0.06"/>
        <line x1="226" y1="14" x2="127" y2="186" stroke="#2a1a12" stroke-width="10" opacity="0.06"/>
      </pattern>
    </defs>
    <rect width="1200" height="800" fill="url(#timberPattern)"/>
  </svg>
</template>
