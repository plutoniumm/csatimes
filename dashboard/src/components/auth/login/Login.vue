<template>
  <!--<form @submit.prevent="oauthSignIn">
    <va-input
      v-model="email"
      type="email"
      :label="('EMAIL')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-input
      v-model="password"
      type="password"
      :label="('Password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />
    <div class="d-flex justify -center mt-3">
      <va-button type="submit">Login</va-button>
    </div>
  </form>-->
  <div class="g-signin2 d-flex justify--center" data-onsuccess="oauthSignIn">
    </div>
</template>

<script>
import axios from 'axios'

export default {
  // name: 'login',
  // data () {
  //   return {
  //     email: '',
  //     password: '',
  //     emailErrors: [],
  //     passwordErrors: [],
  //   }
  // },
  // computed: {
  //   formReady () {
  //     return !this.emailErrors.length && !this.passwordErrors.length
  //   },
  // },
  methods: {
    init() {
      gapi.load('auth2', function() {
      /* Ready. Make a call to gapi.auth2.init or some other API */
      });
    },
    oauthSignIn() {
        // this.emailErrors = this.email ? [] : ['Email is required']
        // this.passwordErrors = this.password ? [] : ['Password is required']
        // if (!this.formReady) {
        //   return
        // }
      gapi.load('auth2', function() {
        gapi.auth2.authorize({
        client_id: '353185858988-h75k9v94ume7fu82mt952jo9l876n3n2.apps.googleusercontent.com',
        scope: 'email profile openid',
        fetch_basic_profile: false,
        response_type: 'id_token permission',
        hosted_domain: 'goa.bits-pilani.ac.in'
        }, function(response) {
            if (response.error) {
              // An error happened!
              return;
            }
          // The user authorized the application for the scopes requested.
          var accessToken = response.access_token;
          var idToken = response.id_token;
          // You can also now use gapi.client to perform authenticated requests.
        });
      });
    }
  },
  mounted() {
    var AuthStr
    axios.post('http://csa.devsoc.club/api/v1/google/student/signin',  { headers: {idToken: this.accessToken} })
    .then(response => AuthStr)
  }
}
</script>

<style lang="scss">
</style>
