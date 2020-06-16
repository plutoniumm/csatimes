<template>
  <div class="xs12">
    <!-- SUPER INPUT FIREBASE -->
    <div class="row">
      <div class="flex xs12 sm6">
        <va-card title="Write to us!">
          <div class="row align--center">
            <div class="flex xs12 md6">
              <va-toggle v-model="toggle" label="Send Anonymously" />
            </div>
            <div class="flex xs12 md3 offset--md3">
              <va-select v-model="perPage" label="Type" :options="perPageOptions" noClear />
            </div>
          </div>
          <form @submit.prevent="executer()">
            <div class="row">
              <div class="flex xs12">
                <va-input
                  :label="perPage"
                  v-model="description"
                  placeholder="Tell us your grievance"
                />
                <va-button>Submit</va-button>
              </div>
            </div>
          </form>
        </va-card>
      </div>

      <div class="flex xs12 sm6">
        <va-card>
          <div class="flex" v-for="issue in this.grievances" :key="issue">
            <va-card stripe="danger">
              <h2>{{ issue.type }}</h2>
              <div>{{ issue.description }}</div>
              {{ issue.issueid }}, {{ issue.status }}
            </va-card>
          </div>
        </va-card>
      </div>
    </div>

    <va-collapse customHeader>
      <span slot="header">
        <va-button
          color="info"
          icon-right="ion-ios-arrow-down arrow-down"
        >Council of Student Affairs Members</va-button>
      </span>
      <div slot="body" style="height: 272px;">
        <carousel-3d :controls-visible="true">
          <slide v-for="(person,slide) in people" :index="slide" :key="slide">
            <figure>
              <img :src="require('../../assets/pics/'+person.picture)">
              <figcaption style="font-size: 1rem;">
                <span style="font-size: 1.5rem;">{{person.name}}</span> ({{person.post}})
                <br>
                {{person.phone}}
                <br>{{person.address}}@goa.bits-pilani.ac.in
              </figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div>
    </va-collapse>

    <va-collapse customHeader>
      <span slot="header">
        <va-button
          color="info"
          icon-right="ion-ios-arrow-down arrow-down"
        >DisCo</va-button>
      </span>
      <div slot="body" style="height: 272px;"><carousel-3d :controls-visible="true">
        <slide v-for="(person,slide) in people1" :index="slide" :key="slide">
          <figure>
            <img :src="require('../../assets/pics/'+person.picture)">
            <figcaption style="font-size: 1rem;">
              <span style="font-size: 1.5rem;">{{person.name}}</span> ({{person.post}})
              <br>
              {{person.phone}}
              <br>{{person.address}}@goa.bits-pilani.ac.in
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
      </div>
    </va-collapse>

    <va-collapse customHeader>
      <span slot="header">
        <va-button
          color="info"
          icon-right="ion-ios-arrow-down arrow-down"
        >Placement Unit and ICC</va-button>
      </span>
      <div slot="body" style="height: 272px;"><carousel-3d :controls-visible="true">
        <slide v-for="(person,slide) in people2" :index="slide" :key="slide">
          <figure>
            <img :src="require('../../assets/pics/'+person.picture)">
            <figcaption style="font-size: 1rem;">
              <span style="font-size: 1.5rem;">{{person.name}}</span> ({{person.post}})
              <br>
              {{person.phone}}
              <br>{{person.address}}@goa.bits-pilani.ac.in
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
      </div>
    </va-collapse>
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
      toggle: true,
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
        .slice(4)
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
        .collection('Save')
        .doc('Complaint')
        .collection('20180795'),
    }
  },
}
</script>
<style lang='scss'>
body {
  background-color: #8ecffc;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-3d-container figure {
  margin: 0;
}
</style>
