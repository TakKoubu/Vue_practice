import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
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
