<template>
  <va-card title="Music Night Recommendations" style="width: 50%;" data-aos="fade-left">
    <div class="row align--center">
      <form @submit.prevent="musoc()">
        <div class="row">
          <div class="flex xs12">
            <div class="flex">
              <span class="xs12">
                Recommend One Song to The Music Society that you would like to see
                them cover in their next event!
              </span>
            </div>
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
    </div>
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
      toastDuration: 2500,
      toastIcon: 'fa-star-o',
      toastPosition: 'top-center',
      isToastFullWidth: true,
    }
  },
  methods: {
    launchToast (result, icon) {
      this.showToast(result, {
        icon: icon,
        position: this.toastPosition,
        duration: this.toastDuration,
        fullWidth: true,
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
