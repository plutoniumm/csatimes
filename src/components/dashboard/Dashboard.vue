<template>
  <div>
    <div class="dashboard">
      <MusocBox />
      <hr />

      <div data-aos="fade-up">
        <va-tabs grow v-model="tabsState">
          <va-tab>Campus Updates</va-tab>
          <va-tab>Campus News</va-tab>
        </va-tabs>
        <va-separator />
        <component :is="tabs[tabsState]" @submit="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import CampusUpdates from './updates.vue'
import CampusNews from './news.vue'
import MusocBox from './musoc.vue'
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
    MusocBox,
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
}
</script>

<style lang="scss">
body {
  background-color: #ffdcab;
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

.va-card {
  background-color: #f7ecdb;
}

</style>
