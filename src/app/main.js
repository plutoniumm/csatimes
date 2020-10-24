import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import router from '../router/index'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import { firestorePlugin } from 'vuefire'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'

Vue.use( VuesticPlugin )
Vue.use( firestorePlugin )
Vue.use( VueCarousel )
Vue.use( ColorThemePlugin, {} )

new Vue( {
  created () { AOS.init() },
  el: '#app',
  router,
  render: h => h( App ),
} ).$mount( '#app' )
