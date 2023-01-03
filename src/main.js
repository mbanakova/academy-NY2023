import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSmoothScroll, {
  duration: 1300,
  offset: -30,
  updateHistory: false
})
app.mount('#app')