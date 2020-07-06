<template>
  <va-card
    class="flex xs12 sm6"
    data-aos="fade-left"
    style="background: -webkit-radial-gradient(0% 0%, blue, purple, #ffe5b4); color: white;"
  >
    <form @submit.prevent="musoc()">
      <div class="row">
        <div class="flex xs12">
          <h1>Recommend your song for Musoc to Cover!</h1>
          <br />
          <input v-model="song" placeholder="Ex. Paper Kites by Bharat Rajagopalan" />
          <div class="d-flex mt-3 mailtop">
            <p style="padding: 1em 0.1em;">
              Current Song:
              <span v-if="this.recc.description">{{this.recc.description}}</span>
              <span v-else>None!</span>
            </p>
            <button type="submit" class="musocbtn">Edit</button>
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
      console.log(this.song)
      staticdb
        .collection('Store')
        .doc('Clubs')
        .collection('Musoc')
        .doc('20180795')
        .set({
          description: this.song,
        })
        .then(res => {
          this.launchToast('Thank You for letting us Know!', 'fa-check-circle')
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
        .doc('20180795'),
    }
  },
}
</script>

<style>
.musocbtn {
  border: 1px solid rgba(255, 255, 255, 0.75);
  padding: 1em;
  width: 6em;
  height: 3em;
  color: white;
  border-radius: 0.25em;
  background-color: rgba(0, 122, 255, 1);
  transition: all 0.3s ease;
}

.musocbtn:hover {
  border: 1px solid rgba(255, 255, 255, 1);
  border: 1px solid rgba(white, 1);
  cursor: pointer;
  transition: all 0.3s ease;
}

input {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1em;
  width: 100%;
  color: black;
  border-radius: 0.25em;
  border: 1px solid white;
  backdrop-filter: blur(1em);
  -webkit-backdrop-filter: blur(1em);
  transition: all 0.3s ease;
}

input:focus {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid blue;
  transition: all 0.3s ease;
}

.mailtop {
  display: flex;
  justify-content: space-between;
}
</style>
