export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        timber:   '#2a1a12',
        plaster:  '#f6ecd6',
        plasterDark: '#ecdfc1',
        cognac:   '#a0522d',
        cognacDark: '#7a3d20',
        ratred:   '#b3252b',
        ratredDark: '#8c1c21',
        ratgold:  '#e8b923',
        teal:     '#2aa39a',
        ink:      '#1a1208'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive']
      },
      boxShadow: {
        timber: '0 6px 0 0 #2a1a12',
        soft: '0 10px 30px -10px rgba(42,26,18,0.35)'
      }
    }
  },
  plugins: []
}
