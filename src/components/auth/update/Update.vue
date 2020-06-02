<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card">
          <div id="app">
            <div id="nav">
              <form @submit.prevent="onsubmit()">
                <va-input
                  v-model="bitsid"
                  type="bitsid"
                  :label="$t('BITSID')"
                  :error="!!bitsidErrors.length"
                  :error-messages="bitsidErrors"
                />

                <va-select
                  :label="$t('Select Hostel Name')"
                  v-model="hostelname"
                  textBy="description"
                  :options="Options"
                  :error="!!hostelnameErrors.length"
                  :error-messages="hostelnameErrors"
                />

                <va-input
                  v-model="hostel"
                  type="hostel"
                  :label="$t('HOSTEL ROOM NUMBER')"
                  :error="!!hostelErrors.length"
                  :error-messages="hostelErrors"
                />

                <va-select
                  :label="$t('Select R or L or None')"
                  v-model="simpleSelectModel"
                  textBy="description"
                  :options="simpleOptions"
                />

                <va-input
                  v-model="mobile"
                  type="mobile"
                  :label="$t('MOBILE NUMBER')"
                  :error="!!mobileErrors.length"
                  :error-messages="mobileErrors"
                />

                <div class="d-flex justify--center mt-3">
                  <va-button type="submit" class="my-0">{{ $t('Confirm Details') }}</va-button>
                </div>
              </form>
            </div>
          </div>
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
      bitsid: [],
      hostel: '',
      mobile: '',
      hostelname: '',
      bitsidErrors: [],
      hostelErrors: [],
      hostelnameErrors: [],
      mobileErrors: [],
      simpleSelectModel: 'None',
      simpleOptions: [
        'R', 'L', 'None',
      ],
      Options: [
        'AH1',
        'AH2',
        'AH3',
        'AH4',
        'AH5',
        'AH6',
        'AH7',
        'AH8',
        'AH9',
        'CH1',
        'CH2',
        'CH3',
        'CH4',
        'CH5',
        'CH6',
        'CH7',
        'DH1',
        'DH2',
        'DH3',
        'DH4',
      ],
    }
  },
  methods: {
    onsubmit () {
      const that = this
      if (this.bitsid.match(/G/i)) {
        if (this.bitsid.substring(0, 4) > 2012 && this.bitsid.substring(0, 4) < 2021) { this.bitsidErrors = [] }
      } else this.bitsidErrors = ['Enter a valid BITSID']

      if (this.mobile > 1000000000 && this.mobile < 9999999999) this.mobileErrors = []
      else this.mobileErrors = ['Enter a valid Mobile Number']

      if (this.hostel > 0 && this.hostel < 600) this.hostelErrors = []
      else this.hostelErrors = ['Enter a valid Hostel Number']

      if (this.hostelname) this.hostelnameErrors = []
      else this.hostelnameErrors = ['Select a valid Hostel Name']

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
        headers: { token: this.$AuthStr },
        body: { update: payload },
      })
        .then(function (response) {
          alert('Profile updated')
          that.$router.push({ name: 'dashboard' })
        })
        .catch(function (error) {
          alert('Please try again later')
          console.log(error)
        })
    },
  },
  computed: {
    formReady () {
      return !(this.bitsidErrors.length || this.hostelErrors.length || this.mobileErrors.length || this.hostelnameErrors.length)
    },
  },
}
</script>

<style lang="scss">
.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(to right, #941f1f, #193c83);

  &__card {
    width: 100%;
    max-width: 600px;
  }

  &__options {
    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }
  }
}
</style>
