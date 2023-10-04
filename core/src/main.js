import { createApp } from 'vue'
import App from './components/app.vue'
import { store } from './store.js'

window.AppCore = function AppCore(config = {}) {
  store.config = config
  createApp(App).mount('#app')
}

export default window.AppCore;
