<template>
  <va-card
    title="Music Night Recommendations"
    class="flex xs12 sm6"
    data-aos="fade-left"
    style="background-image: linear-gradient(to right, blue, purple); color: white;"
  >
    <form @submit.prevent="musoc()">
      <div class="row">
        <div class="flex xs12">
          <h1>Recommend your song for Musoc to Cover!</h1>
          <div class="flex">
            <va-input v-model="song" placeholder="Ex. Paper Kites by Bharat Rajagopalan" />
            <div class="d-flex justify--center mt-3">
              <va-button type="submit" class="my-0">Edit</va-button>
            </div>
            <hr />
            Your current song: {{ this.recc.description }}
          </div>
        </div>
      </div>
    </form>
  </va-card>
</template>

<script>
import firebase from 'firebase'
import '../csa/toast/ToastPositionPicker'

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
if (!firebase.apps.length) firebase.initializeApp(config)
else firebase.initializeApp(config, 'secondary')
const staticdb = firebase.firestore()

export default {
  name: 'MusocBox',
  data () {
    return {
      song: '',
      recc: [],
      toastText: 'This toast is awesome!',
      toastIcon: 'fa-star-o',
      isToastFullWidth: true,
    }
  },
  methods: {
    launchToast (result, icon) {
      this.showToast(result, {
        icon: icon,
        duration: 2500,
      })
    },
    musoc () {
      staticdb
        .collection('Store')
        .doc('Clubs')
        .collection('Musoc')
        .doc(this.$forexam)
        .set({
          description: this.song,
        })
        .then(res => {
          this.launchToast('Thank You for letting us Know!', 'fa-check-circle')
          this.song = ''
        })
        .catch(error => {
          console.error(error)
          this.launchToast('Error! Please Try Again Later', 'fa-bug')
        })
    },
  },
  firestore () {
    return {
      recc: staticdb
        .collection('Store')
        .doc('Clubs')
        .collection('Musoc')
        .doc(this.$forexam),
    }
  },
}
</script>

<style>
</style>
