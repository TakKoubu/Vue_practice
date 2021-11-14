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
      path: '/home',
      component: {
        template: '<div>Homeです</div>'
      }
    }
  ]
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#inspire')
