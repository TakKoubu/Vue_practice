import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

var router = new VueRouter(
  {
  routes: [
    path: '/home',
    component: {
      template: '<div>Homeです</div>'
    }
  ]
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#inspire')
