import { createApp } from 'vue'
import App from './components/app.vue'
import { store } from './store.js'

window.AppCore = function AppCore(config = {}) {
  store.config = config
  const plugin1 = config.modules[0]

  createApp(App).use(plugin1).mount('#app')
}

export default window.AppCore
