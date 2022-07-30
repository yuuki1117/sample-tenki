import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'Vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.useAttrs(BootstrapVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

createApp(App).mount('#app')
