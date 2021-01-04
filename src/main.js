import Vue from 'vue'
import App from './App.vue'
import zdButton from './components/button.vue'
import zdDialog from './components/dialog.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false

Vue.component(zdButton.name, zdButton)
Vue.component(zdDialog.name, zdDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
