import Vue from 'vue'
import App from './App.vue'

import zdUI from '../packages/index.js'
Vue.use(zdUI)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
