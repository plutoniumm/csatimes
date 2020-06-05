<template>
  <div>
    <div class="dashboard">
      <va-card
        title="Music Night Recommendations"
        style=" text-align: center; justify-content: center; width: 50%;"
        data-aos="fade-left"
      >
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
                  <va-input v-model="song" placeholder="Ex. Paper Kite by Bharat Rajagopalan" />
                  <div class="d-flex justify--center mt-3">
                    <va-button type="submit" class="my-0">Submit</va-button>
                  </div>
                  <hr />Your current song:
                </div>
              </div>
            </div>
          </form>
        </div>
      </va-card>
      <hr />

      <va-card title="News for you" data-aos="fade-up">
        <va-tabs grow v-model="tabsState">
          <va-tab>Campus Updates</va-tab>
          <va-tab>Campus News</va-tab>
        </va-tabs>
        <va-separator />
        <component :is="tabs[tabsState]" @submit="submit" />
      </va-card>
    </div>
  </div>
</template>

<script>
import CampusUpdates from './updates.vue'
import CampusNews from './news.vue'
import firebase from 'firebase'

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
  name: 'dashboard',
  components: {
    CampusUpdates,
    CampusNews,
  },
  data () {
    return {
      tabsState: 1,
      tabs: [
        'CampusUpdates',
        'CampusNews',
      ],
      musoc: 'Default Value',
      song: 'None',
    }
  },
  methods: {
    executer () {
      var dbtracker = 0
      var studtrack = 0
      staticdb.collection('Store').doc('Groups').collection('Musoc').add({
        type: this.perPage,
        description: this.song,
        student: this.$forexam,
      }).then(res => {
        dbtracker = 1
      }).catch(error => {
        dbtracker = 0
        console.log(error)
      })
      staticdb.collection('Save').doc(this.$forexam).collection('Groups').doc('Musoc').set({
        description: this.song,
      }).then(res => {
        dbtracker = 1
      }).catch(error => {
        dbtracker = 0
        console.log(error)
      })
      if (dbtracker * studtrack === 1) {
        console.log('success')
      }
    },
  },
  firestore () {
    return {
      song: staticdb.collection('Save').doc(this.$forexam).collection('Groups').doc('Musoc'),
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: #f7ecdb;
}

.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;
  }
}

.row.row-inside {
  max-width: 20px;
}
</style>
