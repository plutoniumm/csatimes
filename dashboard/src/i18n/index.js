import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.set('en')
