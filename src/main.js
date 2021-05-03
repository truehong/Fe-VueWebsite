import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../src/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
