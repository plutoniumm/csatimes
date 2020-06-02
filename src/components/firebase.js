import firebase from 'firebase'
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

// firebase utils
const staticdb = firebase.firestore()

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true,
}
staticdb.settings(settings)

export {
  staticdb,
}
