import Vue from 'vue'
import App from './App.vue'
import zdButton from './components/button.vue'
import zdDialog from './components/dialog.vue'
import zdInput from './components/input.vue'
import zdSwitch from './components/switch.vue'
import zdRadio from './components/radio.vue'
import zdRadioGroup from './components/radio-group.vue'
import zdCheckbox from './components/checkbox.vue'
import zdCheckboxGroup from './components/checkboxGroup.vue'
import zdForm from './components/form.vue'
import zdFormItem from './components/form-Item.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false

Vue.component(zdButton.name, zdButton)
Vue.component(zdDialog.name, zdDialog)
Vue.component(zdInput.name, zdInput)
Vue.component(zdSwitch.name, zdSwitch)
Vue.component(zdRadio.name, zdRadio)
Vue.component(zdRadioGroup.name, zdRadioGroup)
Vue.component(zdCheckbox.name, zdCheckbox)
Vue.component(zdCheckboxGroup.name, zdCheckboxGroup)
Vue.component(zdForm.name, zdForm)
Vue.component(zdFormItem.name, zdFormItem)
new Vue({
  render: h => h(App)
}).$mount('#app')
