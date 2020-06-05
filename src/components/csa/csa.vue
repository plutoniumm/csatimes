<template>
  <div>
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

    <!-- CSA -->
    <div class="row" style="justify-content: center;">
      <div class="flex xs12 sm6 lg4">
        <va-card style="background: #000000; text-align: center;">
          <h2 style="color: #ffffff;">Council of Student Affairs</h2>
        </va-card>
      </div>
    </div>
    <template v-for="customer in customers">
      <div :key="item + customer.name" style="display: inline-block;" class="row align--center">
        <div style="justify-content: center;">
          <div class="flex" style="justify-content: center;">
            <div class="card" style="margin: 1rem; justify-content: center;">
              <div class="imgBx">
                <img :src="require('../../assets/pics/' + customer.picture)" :alt="customer.name" />
              </div>
              <div class="details">
                <h2>
                  {{ customer.name }}
                  <br />
                  <span>({{ customer.post }})</span>
                </h2>
                {{ customer.address }}
                <br />
                {{ customer.phone }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
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
      customers: data,
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
.cards-container {
  .va-card {
    margin: 0;
    height: 100%;

    .heading {
      font-size: 2.5rem;
      justify-content: center;
      display: flex;
    }

    .va-card {
      margin: 0;
      text-align: center;
      height: 100%;
    }
  }
}

body {
  background-color: #f7ecdb;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
}

.card {
  position: relative;
  width: 400px;
  height: 200px;
  background: #000000;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ffdcab;
  transition: 0.5s;
  z-index: -1;
}

.card:hover::before,
.card:active::before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card:hover::after,
.card:active::after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 200px;
  background: #000000;
  transition: 0.5s;
  z-index: 1;
}

.card:hover .imgBx,
.card:active {
  bottom: 10px;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  position: absolute;
  left: 200px;
  right: 10px;
  bottom: 100px;
  height: 60px;
  text-align: center;
}

.card .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: #777777;
  text-transform: uppercase;
}

.card .details h2 span {
  font-weight: 500;
  font-size: 16px;
  color: #ffdcab;
  margin-top: 0;
}
</style>
