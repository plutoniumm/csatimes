<template>
  <div class="xs12">
    <br />
    <br />
    <br />
    <br />
    <!-- SUPER INPUT FIREBASE -->
    <div class="row">
      <div class="flex xs12 sm6">
        <va-card
          title="Write to us!"
          style="background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1)); height: 17em;"
        >
          <div class="row align--center">
            <div class="flex xs12 md6" style="color: #c0c0c0;">
              <va-toggle v-model="toggle" label="(Send Anonymously!)" />
            </div>
            <div class="flex xs12 md3 offset--md3">
              <va-select v-model="perPage" :options="perPageOptions" noClear />
            </div>
          </div>
          <form @submit.prevent="executer()">
            <div class="row">
              <div class="flex xs12">
                <input
                  class="grieve"
                  :label="perPage"
                  v-model="description"
                  placeholder="Tell us your grievance"
                />
                <button class="send">Submit</button>
              </div>
            </div>
          </form>
        </va-card>
      </div>

      <div class="flex xs12 sm6">
        <div class="flex" style="height: 17em; overflow-y: scroll; margin: 0; padding: 0;">
          <va-card class="issues" v-for="issue in this.grievances" :key="issue">
            <div class="mailtop">
              <span>
                <h2>{{ issue.type }}</h2>
              </span>
              <span>
                <strong>ID</strong>
                {{ issue.issueid }}
              </span>
            </div>
            <br />
            <div>{{ issue.description }}</div>
            <br />
            <span>
              <strong>Resolved:</strong>
              {{ issue.status }}
            </span>
          </va-card>
        </div>
      </div>
    </div>

    <va-card
      class="issues flex xs12 sm6"
      title="Disciplinary Committee & ICC"
      style="width: 100%; text-align: center; align-items: center;"
    >
      <carousel
        :per-page="1"
        :centerMode="true"
        :autoplay="1"
        :easing="ease"
        :loop="true"
        :navigationEnabled="true"
        style="float: center;"
      >
        <slide v-for="(person,slide) in people1" :index="slide" :key="slide">
          <va-card style="height: 15em; width: 25em; color: black;">
            <div class="row">
              <div class="flex xs12 sm6">
                <img :src="require('../../assets/pics/'+person.picture)" class="person" />
              </div>
              <div class="flex xs12 sm6" style="float: right; text-align: left; padding: 2em;">
                <h1>
                  <strong>{{person.name}}</strong>
                </h1>
                {{person.post}}
                <br />
                <br />
                <strong>Phone:</strong>
                {{person.phone}}
                <br />
                <strong>Email:</strong>
                {{person.address}}@goa.bits-pilani.ac.in
              </div>
            </div>
          </va-card>
        </slide>
      </carousel>
    </va-card>
  </div>
</template>

<script>
import data from './data.json'
import data1 from './data1.json'
import data2 from './data2.json'
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
      people1: data1,
      people2: data2,
      perPage: 'Complaint',
      perPageOptions: ['Complaint', 'FAQ', 'RTI'],
      toggle: false,
      faq: '',
      title: '',
      description: '',
      sender: 'Anonymous',
      grievances: [],
      toastText: 'This toast is awesome!',
      toastIcon: 'fa-star-o',
    }
  },
  methods: {
    launchToast (result, icon) {
      this.showToast(result, {
        icon: icon,
        duration: 2500,
        fullWidth: true,
      })
    },
    executer () {
      const issueid = Date.now()
        .toString()
        .slice(3, 11)
      if (this.toggle === false) {
        this.sender = '20180795'
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
          type: this.perPage,
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
        .collection('20180795'),
    }
  },
}
</script>
<style lang='scss'>
body {
  background-color: black;
}

.grieve {
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  border: 1px solid rgba($color: #000000, $alpha: 0.01);
  padding: 0.5em;
  height: 2.75em;
  width: 100%;
  border-radius: 0.25em;
  transition: all 0.3s;
}

.grieve:hover {
  background-color: rgba($color: #ffffff, $alpha: 0.95);
  border: 2px solid rgba(0, 122, 255, 0.5);
  transition: all 0.3s;
}

.grieve:focus {
  background-color: rgba($color: #ffffff, $alpha: 1);
  border: 2px solid rgba(0, 122, 255, 1);
  transition: all 0.3s;
}

.send {
  float: right;
  height: 2em;
  width: 6em;
  color: white;
  background-color: rgba(0, 122, 255, 1);
  margin-top: 1.75em;
  border: 1px solid rgba($color: #000000, $alpha: 0.01);
  border-radius: 0.25em;
  transition: all 0.3s;
}

.send:hover {
  cursor: pointer;
  background-color: rgba(10, 132, 255, 1);
  border: 1px solid rgba($color: #ffffff, $alpha: 0.75);
  transition: all 0.3s;
}

.mailtop {
  display: flex;
  justify-content: space-between;
}

.issues {
  color: white;
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  margin-bottom: 1em;
}

.person {
  display: flex;
  width: 7.5em;
  height: 7.5em;
  border-radius: 50%;
  object-fit: cover;
}
</style>
