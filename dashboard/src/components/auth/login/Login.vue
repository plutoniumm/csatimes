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
  <!-- <div class="g-signin2 d-flex justify--center" data-onsuccess="oauthSignIn"></div> -->
  <div id="app">
    <div id="nav">
      <div id="google-signin-btn" class="d-flex justify--center"></div>
      <a href="#" class="sign-out d-flex justify--center" @click="signOut" v-if="profile">Sign out</a>
    </div>
    <div v-if="profile" class>
      <h2>Signed In User Profile</h2>
      <pre>{{ profile }}</pre>
    </div>
    <div v-if="!profile">
      <h2>Signed out.</h2>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

// export default {
//   // name: 'login',
//   // data () {
//   //   return {
//   //     email: '',
//   //     password: '',
//   //     emailErrors: [],
//   //     passwordErrors: [],
//   //   }
//   // },
//   // computed: {
//   //   formReady () {
//   //     return !this.emailErrors.length && !this.passwordErrors.length
//   //   },
//   // },
//   methods: {
//     init () {
//       gapi.load('auth2', function () {
//         /* Ready. Make a call to gapi.auth2.init or some other API */
//         gapi.auth2.init({
//           client_id: '353185858988-h75k9v94ume7fu82mt952jo9l876n3n2.apps.googleusercontent.com',
//         }).then(function (authInstance) {
//         // now auth2 is fully initialized
//         })
//       })
//     },
//     oauthSignIn () {
//       // this.emailErrors = this.email ? [] : ['Email is required']
//       // this.passwordErrors = this.password ? [] : ['Password is required']
//       // if (!this.formReady) {
//       //   return
//       // }
//       gapi.load('auth2', function () {
//         gapi.auth2.authorize(
//           {
//             client_id:
//               '353185858988-h75k9v94ume7fu82mt952jo9l876n3n2.apps.googleusercontent.com',
//             scope: 'email profile openid',
//             fetch_basic_profile: false,
//             response_type: 'id_token permission',
//             hosted_domain: 'goa.bits-pilani.ac.in',
//           },
//           function (response) {
//             if (response.error) {
//               // An error happened!
//               return
//             }
//             // The user authorized the application for the scopes requested.
//             var accessToken = response.access_token
//             var idToken = response.id_token
//             // You can also now use gapi.client to perform authenticated requests.
//           },
//         )
//       })
//     },
//   },
//   mounted () {
//     var AuthStr
//     axios
//       .post('http://csa.devsoc.club/api/v1/google/student/signin', {
//         headers: { idToken: this.accessToken },
//       })
//       .then(response => AuthStr)
//   },
// }

export default {
  components: {},
  data () {
    return {
      profile: false,
    }
  },
  methods: {
    onSignIn (user) {
      const profile = user.getBasicProfile()
      this.profile = profile
      function matchString () {
        var string = user.getBasicProfile()
        var result = string.match(/@goa.bits-pilani.ac.in/i)
        return result
      }
      var result1 = matchString()
      if (result1 !== '@goa.bits-pilani.ac.in') {
        var auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut()
        alert('Please signin using BITSmail')
      }
      window.gapi.load('auth2', function () {
        window.gapi.auth2.authorize(
          {
            client_id:
              '353185858988-h75k9v94ume7fu82mt952jo9l876n3n2.apps.googleusercontent.com',
            scope: 'email profile openid',
            fetch_basic_profile: false,
            response_type: 'id_token permission',
            hosted_domain: 'goa.bits-pilani.ac.in',
          },
          function (response) {
            if (response.error) {
              // An error happened!
              return
            }
            // The user authorized the application for the scopes requested.
            var accessToken = response.access_token
            var idtoken = response.id_token
            // You can also now use gapi.client to perform authenticated requests.
          },
        )
      })
    },
    signOut () {
      var auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signOut()
    },
    renderGoogleLoginButton () {
      window.gapi.signin2.render('google-signin-btn', {
        onsuccess: this.onSignIn,
      })
    },
  },
  mounted () {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton)
    var AuthStr = this.accessToken
    axios
      .post('http://csa.devsoc.club/api/v1/google/student/signin', {
        headers: { idToken: AuthStr },
      })
      .then(response => AuthStr)
  },
}
</script>

<style lang="scss">
</style>
