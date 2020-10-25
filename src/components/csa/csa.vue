<template>
  <div class="row">
    <div class="flex xs12 sm6" data-aos="fade-right">
      <va-card
        title="Write to us!"
        style="
          background: -webkit-linear-gradient(
            rgba(26, 26, 26, 1),
            rgba(26, 26, 26, 1)
          );
          height: 17em;
        "
      >
        <div class="row align--center">
          <div class="flex xs12 md6" style="color: #c0c0c0">
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

    <div
      v-for="set in people"
      :key="set"
      class="flex xs12 sm6"
      data-aos="fade-right"
    >
      <carousel
        :per-page="1"
        :centerMode="true"
        :autoplay="2"
        :loop="true"
        style
      >
        <slide v-for="(person, slide) in set" :index="slide" :key="slide">
          <va-card class="issues" :title="person.organisation">
            <div style="display: flex">
              <img :src="person.picture" />
              <div style="text-align: left; padding: 2em; flex: 2">
                <h1>{{ person.name }}:{{ person.post }}</h1>
                <br />
                Phone:{{ person.phone }}
                <br />
                Email:{{ person.address }}@goa.bits-pilani.ac.in
              </div>
            </div>
          </va-card>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import data from '../../data/data.json'
import data1 from '../../data/data1.json'
import data2 from '../../data/data2.json'
import firebase from 'firebase'
import '../ToastPositionPicker'

const config = JSON.parse(process.env.VUE_APP_AUTH_MUSOC)
if (!firebase.apps.length) firebase.initializeApp(config)
const staticdb = firebase.firestore()

export default {
  name: 'cards',
  data () {
    return {
      people: [data, data1, data2],
      perPage: 'Complaint',
      perPageOptions: ['Complaint', 'FAQ', 'RTI'],
      toggle: false,
      faq: '',
      title: '',
      description: '',
      sender: 'Anonymous',
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
  }
}
</script>
<style lang='scss' scoped>
img {
  border-radius: 50%;
  object-fit: cover;
  width: 175px;
  height: 175px;
}

.grieve {
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  border: 1px solid rgba($color: #000000, $alpha: 0.01);
  padding: 0.5em;
  height: 2.75em;
  width: 100%;
  border-radius: 0.25em;
  transition: all 0.3s;
  &:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.95);
    border: 2px solid rgba(0, 122, 255, 0.5);
    transition: all 0.3s;
  }
  &:focus {
    background-color: rgba($color: #ffffff, $alpha: 1);
    border: 2px solid rgba(0, 122, 255, 1);
    transition: all 0.3s;
  }
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

.issues {
  color: white;
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  margin-bottom: 1em;
}
</style>
