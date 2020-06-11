import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import VueClipboard from 'vue-clipboard2'
import { firestorePlugin } from 'vuefire'
import '../registerServiceWorker'
import AOS from 'aos'
import 'aos/dist/aos.css'

if (process.env.VUE_APP_BUILD_VERSION) {
  // eslint-disable-next-line
  const message = `%c${ 'Build_information:' }\n %c${ 'Version' }: %c${ VERSION },\n %c${ 'Timestamp' }: %c${ TIMESTAMP },\n %c${ 'Commit' }: %c${ COMMIT }`
  // eslint-disable-next-line
  console.info(
    message,
    'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;',
  )
}

Vue.use(VuesticPlugin)
Vue.use(VueClipboard)
Vue.use(firestorePlugin)
Vue.use(ColorThemePlugin, {
  // override colors here.
})

/* eslint-disable no-new */
new Vue({
  created () { AOS.init() },
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
