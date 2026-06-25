import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { initConsent } from './consent'

initConsent()
createApp(App).mount('#app')
