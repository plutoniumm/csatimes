<template>
  <div class="row">
    <div class="flex xs12 sm6">
      <va-card title="Update Data" class="infboxes">
        <form @submit.prevent="onsubmit()">
          <div
            style="display: flex; justify-content: space-around; margin: 5px 0"
          >
            <span class="selectr">
              Hostel:
              <select v-model="hostelname" required>
                <option v-for="r in Options" :key="r" :value="r">
                  {{ r }}
                </option>
              </select>
            </span>
            <span class="selectr">
              R/L:
              <select
                required
                v-model="simpleSelectModel"
                :disabled="hostelname.includes('DH')"
              >
                <option value="R" selected="true">R</option>
                <option value="L">L</option>
              </select>
            </span>
          </div>
          <input v-model="bitsid" placeholder="BITSID" required />
          <input
            v-model="hostel"
            placeholder="Room No."
            pattern="^(\d{3})$"
            MAX="400"
            required
          />
          <input
            v-model="mobile"
            placeholder="Mobile No."
            pattern="^(\d{10})$"
            required
          />
          <input
            type="submit"
            style="border: 0; background: #aaa; width: 25%; margin: 10px 25%"
          />
        </form>
      </va-card>
    </div>
    <div class="flex xs12 sm6">&nbsp;</div>
    <div class="flex xs12 sm6">
      <va-card data-aos="fade-right" class="infboxes">
        <i class="fas fa-user-circle" style="color: blue; font-size: 3em"></i>
        <h2 style="padding: 1em">
          CSATimes
          <u>Web</u> DOES NOT use any of the following trackers
        </h2>
        <div style="display: flex; flex-wrap: wrap">
          <div
            style="width: calc(33% - 0.5em); padding: 0.75em"
            v-for="law in laws"
            :key="law"
          >
            <i :class="law.logo"></i>
            {{ law.tracker }}
          </div>
        </div>
        <i class="far fa-times-circle" style="color: red; font-size: 1.5em"></i>
      </va-card>
    </div>
    <div class="flex xs12 sm6">
      <va-card data-aos="fade-right" class="infboxes">
        <i class="fas fa-user-circle" style="color: blue; font-size: 3em"></i>
        <h2 style="padding: 1em">
          CSATimes
          <u>Web</u> DOES track and store following data
        </h2>
        <div style="display: flex; flex-wrap: wrap">
          <div
            style="width: calc(50% - 0.5em); padding: 0.75em"
            v-for="law in tracks"
            :key="law"
          >
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
      bitsid: '',
      hostel: '',
      mobile: '',
      hostelname: '',
      simpleSelectModel: 'None',
      Options: ['AH1', 'AH2', 'AH3', 'AH4', 'AH5', 'AH6', 'AH7', 'AH8', 'AH9', 'CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6', 'CH7', 'DH1', 'DH2', 'DH3', 'DH4'],
    }
  },
  methods: {
    onsubmit () {
       let payload = {
          bitsId: this.bitsid.toUpperCase(),
          hostel: this.hostelname,
          mobile: this.mobile,
          roomNo: this.hostelname.includes('DH') ? this.hostel:this.hostel + this.simpleSelectModel
      }
      const utok = atob(document.cookie.split(';').filter(e => e.includes('uToken'))[0].split('=')[1])
      axios({
        url: 'https://csa.devsoc.club/api/v1/profile/update',
        method: 'post',
        headers: { token: utok },
        body: { update: payload },
      })
        .then((res) => {
          alert('Profile updated')
          this.$router.push({ name: 'dashboard' })
        })
        .catch(alert('Please try again later'))
    },
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #111;
}

input {
  outline: none;
  border: 0;
  width: 66%;
  border-bottom: 1px solid #222;
  padding: 5px;
  font-size: 18px;
  margin: 5px 0;
  background: transparent;
  &:focus {
    outline: none;
    background: #aaa;
  }
  &::placeholder {
    color: #666;
  }
}

.tracker {
  padding-right: 1em;
}

.infboxes {
  background: linear-gradient(to right, #aaa, #ccc);
  text-align: center;
}

.boxes {
  background: #222;
  color: white;
}
</style>
