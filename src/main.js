import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueScrollTo from 'vue-scrollto'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
