// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueImg from 'v-img'
import VueYoutube from 'vue-youtube'
import VueClipboards from 'vue-clipboards'
import VueMq from 'vue-mq'
import Transitions from 'vue2-transitions'
import VueAnalytics from 'vue-analytics'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueImg)
Vue.use(VueYoutube)
Vue.use(VueClipboards)
Vue.use(VueMq, {
  breakpoints: {
    xs: 400,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
})
Vue.use(Transitions)
Vue.use(VueAnalytics, {
  id: 'UA-11104776-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export const eventBus = new Vue()
