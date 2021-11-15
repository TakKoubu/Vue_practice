// import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: {
        template: '<div><p class="font-weight-medium text-center text-sm-h2">Welcome to my portfolio page!!</p></div>'
      }
    }
  ]
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#inspire')
