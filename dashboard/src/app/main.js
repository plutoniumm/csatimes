import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'
import VueMoment from 'vue-moment'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import VueClipboard from 'vue-clipboard2'
import '../metrics'
import { firestorePlugin } from 'vuefire'
import '../registerServiceWorker'

import * as firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyBeX0IUMosV9uoXtcjLKpNFjb6wbJbyCHA',
  authDomain: 'csatimesmini.firebaseapp.com',
  databaseURL: 'https://csatimesmini.firebaseio.com',
  projectId: 'csatimesmini',
  storageBucket: 'csatimesmini.appspot.com',
  messagingSenderId: '698625993551',
  appId: '1:698625993551:web:3a5d2070968c0b9457f33a',
  measurementId: 'G-Y12HTWVH87',
}
firebase.initializeApp(config)
Vue.prototype.$staticdb = firebase.firestore()

// const settings = {
//   timestampsInSnapshots: true,
// }
// staticdb.settings(settings)

if (process.env.VUE_APP_BUILD_VERSION) {
  // eslint-disable-next-line
  const message = `%c${'Build_information:'}\n %c${'Version'}: %c${VERSION},\n %c${'Timestamp'}: %c${TIMESTAMP},\n %c${'Commit'}: %c${COMMIT}`
  // eslint-disable-next-line
  console.info(
    message,
    'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;', 'color: red;', 'color: blue;',
  )
}

Vue.use(VuesticPlugin)
Vue.use(VueClipboard)
Vue.use(VueMoment)
Vue.use(firestorePlugin)
Vue.use(ColorThemePlugin, {
  // override colors here.
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // firebaseApp,
  render: h => h(App),
}).$mount('#app')
