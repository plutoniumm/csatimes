import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import { firestorePlugin } from 'vuefire'
import '../registerServiceWorker'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'

/* eslint-disable */
if ( process.env.VUE_APP_BUILD_VERSION ) {
  const message = `%c${ 'Build_information:' }\n %c${ 'Version' }: %c${ VERSION },\n %c${ 'Timestamp' }: %c${ TIMESTAMP },\n %c${ 'Commit' }: %c${ COMMIT }`
  console.info(
    message,
    'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;',
  )
}

Vue.use( VuesticPlugin )
Vue.use( firestorePlugin )
Vue.use( VueCarousel )
Vue.use( ColorThemePlugin, {
  // override colors here.
} )

new Vue( {
  created () { AOS.init() },
  el: '#app',
  router,
  store,
  render: h => h( App ),
} ).$mount( '#app' )
