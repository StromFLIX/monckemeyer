export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Cleane Neutrale (warm)
        paper:     '#fafaf7',  // sehr leicht warmes Off-White (Haupt-Hintergrund)
        cream:     '#f4eee2',  // sanftes Cream (sekundäre Flächen)
        creamDark: '#e9e1ce',  // etwas dunklere Variante
        ink:       '#1a1410',  // Espresso-Braun für Text
        inkSoft:   '#3a312a',  // wenn etwas weicher gebraucht wird
        muted:     '#6e655c',  // Sekundärtext
        line:      '#e6dfd1',  // Hairline-Borders
        // Akzent (sparsam)
        accent:    '#2f6e6a',  // gedämpftes Petrol
        accentDark:'#214f4c',
        accentSoft:'#e7efed',
        // Legacy-Tokens (werden noch von ein paar Komponenten benutzt, behalten zur Sicherheit)
        timber:    '#2a1a12',
        plaster:   '#f6ecd6',
        plasterDark: '#ecdfc1',
        teal:      '#2aa39a',
        tealDark:  '#1f7c75',
        tealSoft:  '#e0f0ee',
        cognac:    '#a0522d',
        ratred:    '#b3252b',
        ratgold:   '#e8b923'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card:  '0 1px 2px rgba(26,20,16,0.04), 0 8px 24px -12px rgba(26,20,16,0.18)',
        hover: '0 2px 4px rgba(26,20,16,0.06), 0 18px 36px -16px rgba(26,20,16,0.22)'
      },
      letterSpacing: {
        eyebrow: '0.14em'
      }
    }
  },
  plugins: []
}

