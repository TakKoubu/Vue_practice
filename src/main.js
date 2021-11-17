// import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faWrench, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faWrench, faAppleAlt, faVuejs)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#inspire')
