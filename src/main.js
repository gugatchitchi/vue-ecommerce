import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHandPaper,  faShoppingBag, faTimes, faSearch, faMapMarkerAlt, faHeart, faArrowLeft, faArrowRight, faTruck, faVial, faSurprise} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faHandPaper, faShoppingBag, faTimes, faSearch, faMapMarkerAlt, faHeart, faArrowLeft, faArrowRight, faTruck, faVial, faSurprise)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
