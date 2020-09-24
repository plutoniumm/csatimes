<template>
  <div class="row">
    <div class="flex xs12 sm-6">
      <va-card>
        <form @submit.prevent="onsubmit()">
          <va-input
            v-model="bitsid"
            label="BITSID"
            :error="!!errors.id.length"
            :error-messages="errors.id"
          />
          <va-select
            label="Select Hostel Name"
            v-model="hostelname"
            textBy="description"
            :options="Options"
          />
          <va-input
            v-model="hostel"
            label="HOSTEL ROOM NUMBER"
            :error="!!errors.room.length"
            :error-messages="errors.room"
          />
          <va-select
            label="Select R or L or None"
            v-model="simpleSelectModel"
            textBy="description"
            :options="simpleOptions"
          />
          <va-input
            v-model="mobile"
            type="number"
            label="MOBILE NUMBER"
            :error="!!errors.mobile.length"
            :error-messages="errors.mobile"
          />
          <div class="d-flex justify--center mt-3">
            <va-button type="submit" class="my-0">{{
              $t("Confirm Details")
            }}</va-button>
          </div>
        </form>
      </va-card>
    </div>
    <div class="row">
      <div class="flex xs12 sm6">
        <va-card data-aos="fade-right" class="infboxes">
          <i class="fas fa-user-circle" style="color: blue; font-size: 3em"></i>
          <h2 style="padding: 1em">
            CSATimes
            <u>Web</u> DOES NOT use any of the following trackers
          </h2>
          <div class="row">
            <div class="flex xs12 xm6 lg4" v-for="law in laws" :key="law">
              <i :class="law.logo"></i>
              {{ law.tracker }}
            </div>
          </div>
          <i
            class="far fa-times-circle"
            style="color: red; font-size: 1.5em"
          ></i>
        </va-card>
      </div>

      <div class="flex xs12 sm6">
        <va-card data-aos="fade-right" class="infboxes">
          <i class="fas fa-user-circle" style="color: blue; font-size: 3em"></i>
          <h2 style="padding: 1em">
            CSATimes
            <u>Web</u> DOES track and store following data
          </h2>
          <div class="row">
            <div class="flex xs12 sm6" v-for="law in tracks" :key="law">
              <i :class="law.logo"></i>
              {{ law.tracker }}
            </div>
          </div>
          <i
            class="far fa-check-circle"
            style="color: lightgreen; font-size: 1.5em"
          ></i>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  data () {
    return {
      laws: [
        { tracker: 'Location', logo: 'fas fa-location-arrow' },
        { tracker: 'Financial Information', logo: 'fas fa-credit-card' },
        { tracker: 'Contacts', logo: 'fas fa-address-book' },
        { tracker: 'Cookies', logo: 'fas fa-cookie-bite' },
        { tracker: 'Device Information', logo: 'fas fa-laptop' },
        { tracker: 'Purchase Information', logo: 'fas fa-shopping-bag' },
      ],
      tracks: [
        { tracker: 'Form Data', logo: 'fab fa-wpforms' },
        { tracker: 'Login Data', logo: 'fas fa-sign-in-alt' },
        { tracker: 'Edit History', logo: 'fas fa-music' },
        { tracker: 'Grievance Data', logo: 'fas fa-heart-broken' },
      ],
      bitsid: [],
      hostel: '',
      mobile: '',
      errors: { room: '', id: '', mobile: '' },
      hostelname: '',
      simpleSelectModel: 'None',
      simpleOptions: [
        'R', 'L', 'None',
      ],
      Options: ['AH1', 'AH2', 'AH3', 'AH4', 'AH5', 'AH6', 'AH7', 'AH8', 'AH9', 'CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6', 'CH7', 'DH1', 'DH2', 'DH3', 'DH4'],
    }
  },
  methods: {
    onsubmit () {
      const that = this
      if (this.bitsid.match(/G/i)) {
        if (this.bitsid.substring(0, 4) > 2012 && this.bitsid.substring(0, 4) < 2021) { this.errors.id = '' }
      } else this.errors.id = 'Enter a valid BITSID'

      if (this.mobile.toString().length !== 10) this.errors.mobile = ''
      else this.errors.mobile = 'Enter a valid Mobile Number'

      if (this.hostel > 0 && this.hostel < 400) this.errors.room = ''
      else this.errors.room = 'Enter a valid Hostel Number'

      if (!this.formReady) {
        return
      }
      var payload = null
      if (this.simpleSelectModel === 'None') {
        payload = {
          bitsId: this.bitsid.toUpperCase(),
          hostel: this.hostelname,
          mobile: this.mobile,
          roomNo: this.hostel,
        }
      } else {
        payload = {
          bitsId: this.bitsid.toUpperCase(),
          hostel: this.hostelname,
          mobile: this.mobile,
          roomNo: this.hostel + this.simpleSelectModel,
        }
      }
      axios({
        url: 'https://csa.devsoc.club/api/v1/profile/update',
        method: 'post',
        headers: { token: btoa(localStorage.getItem('user-token'))},
        body: { update: payload },
      })
        .then((res) => {
          alert('Profile updated')
          that.$router.push({ name: 'dashboard' })
        })
        .catch((e) => {
          alert('Please try again later')
          console.log(e)
        })
    },
  },
  computed: {
    formReady () {
      return !(this.errors.id.length || this.errors.room.length || this.errors.mobile.length)
    },
  },
}
</script>

<style lang="scss">
body {
  background-color: black;
}

.tracker {
  padding-right: 1em;
}

.infboxes {
  background: -webkit-linear-gradient(#d0d0d0, #a0a0a0);
  text-align: center;
}

.boxes {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
}
</style>
