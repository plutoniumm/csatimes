<template>
  <div class="flex xs-12">
    <!-- SUPER INPUT FIREBASE -->
    <div class="row" style="justify-content: center;">
      <va-card
        title="Grievances"
        style="background: #ffdcab; text-align: center; justify-content: center;"
      >
        <div class="row align--center" style="justify-content: center; overflow: hidden;">
          <fieldset>
            <va-toggle v-model="toggle" label="Send Anonymously" />
          </fieldset>
          <div class="flex xs6">
            <va-select v-model="perPage" label="Type" :options="perPageOptions" noClear />
          </div>
          <form @submit.prevent="executer()">
            <div class="row">
              <div class="flex xs12">
                <div class="flex">
                  <span class="xs12">Write to us!</span>
                </div>
                <div class="flex">
                  <va-input v-model="description" placeholder="Tell us your grievance" />
                </div>
                <div class="d-flex justify--center mt-3">
                  <va-button type="submit" class="my-0">Submit</va-button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </va-card>
    </div>

    <va-card>
      <va-card v-for="issue in grievances" :key="issue">
        <va-card>
          <h2>{{ issue.type }}</h2>
          <div>{{ issue.description }}</div>
          {{ issue.issueid }}, {{ issue.status }}
        </va-card>
      </va-card>
    </va-card>
    <br>
    <br>
    <div class="row" style="justify-content: center;">
    <va-card
      overlay
      v-for="person in people"
      :key="person"
      stripe="danger"
      titleOnImage
      :image="person.picture"
      style="width: 30%; margin: 1rem;"
    >
      <va-badge slot="header">{{ person.name }}</va-badge>
      <div>Whitsunday Island, Whitsunday Islands</div>
      <va-badge>{{ person.post }}</va-badge>
    </va-card>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import data from './data.json'
import firebase from 'firebase'
import './toast/ToastPositionPicker'

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
const staticdb = firebase.firestore()

export default {
  name: 'cards',
  data () {
    return {
      people: data,
      appBanners: false,
      banners: false,
      notifications: true,
      perPage: 'Complaint',
      perPageOptions: ['Complaint', 'FAQ', 'RTI'],
      toggle: true,
      faq: '',
      title: '',
      description: '',
      sender: 'Anonymous',
      grievances: [],
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
    executer () {
      const issueid = Date.now()
        .toString()
        .slice(4)
      if (this.toggle === false) {
        this.sender = this.$forexam
        staticdb
          .collection('Store')
          .doc('Grievances')
          .collection(this.sender)
          .add({
            type: this.perPage,
            description: this.description,
            status: false,
            issueid: issueid,
          })
          .then(res => {
            this.launchToast(
              'Your Response has been submitted!',
              'fa-check-circle',
            )
            this.description = ''
          })
          .catch(error => {
            console.error(error)
          })
      } else {
        this.sender = 'Anonymous'
      }
      staticdb
        .collection('Save')
        .doc(this.perPage)
        .collection(this.sender)
        .add({
          description: this.description,
          student: this.sender,
          status: false,
          issueid: issueid,
        })
        .then(res => {
          this.launchToast('Thank You for letting us Know!', 'fa-check-circle')
          this.description = ''
        })
        .catch(error => {
          console.error(error)
          this.launchToast('Error! Please Try Again Later', 'fa-bug')
        })
    },
  },
  firestore () {
    return {
      grievances: staticdb
        .collection('Store')
        .doc('Grievances')
        .collection(this.$forexam),
    }
  },
}
</script>
<style lang='scss'>
body {
  background-color: #f7ecdb;
}
</style>
