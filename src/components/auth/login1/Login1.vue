<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card">
          <div id="app">
            <div id="nav">
              <div class="d-flex justify--center">
                <va-button @click="socialLogin" color="info">Mobile Sign in</va-button>
              </div>
              <router-view />
            </div>
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
import axios from 'axios'
import Vue from 'vue'
import firebase from 'firebase'
var firebaseConfig = {
      apiKey: "AIzaSyATjcR_5F98ADo3iY5ZxgpcBSbMX4Z_M34",
      authDomain: "csa-app-41a53.firebaseapp.com",
      databaseURL: "https://csa-app-41a53.firebaseio.com",
      projectId: "csa-app-41a53",
      storageBucket: "csa-app-41a53.appspot.com",
      messagingSenderId: "796324132621",
      appId: "1:796324132621:web:15c982520a7a465ba1e244",
      measurementId: "G-1XBCX23ZR2"
      };

firebase.initializeApp(firebaseConfig);

export default {
  beforeCreate: function () {
      const that=this
      firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.idToken;
        var email = result.user.email
        Vue.prototype.$username = result.user.displayName
        localStorage.setItem('user', response.user.displayName)
        Vue.prototype.$bitsid = result.user.email
        Vue.prototype.$forexam = result.user.email.slice(1,9)
        localStorage.setItem('forexam', result.user.email.slice(1,9))
        var str = email.match(/@goa.bits-pilani.ac.in/i)
        if(str===null)
          {firebase.auth().signOut().then(function() {
            alert('Please signin using BITSmail only!')
          })}
        else
          {
            axios
              .post('https://csa.devsoc.club/api/v1/google/student/signin', {
              idToken: token
              })
              .then(function(response) {
                Vue.prototype.$AuthStr = response.data.authToken
                localStorage.setItem('user-token', response.data.authToken)
                if(!response.data.newUser)
                  that.$router.push({ name: 'dashboard' })
                else
                  that.$router.push({ name: 'signup' })
              })
              .catch(function(error) {
                alert('Please try again later')
                console.log(error)
              })
          }
      }
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      });
  },
  components: {},
  data () {
    return{
    }
  },
  methods: {
    socialLogin() {
      const that=this
      if (!firebase.apps.length) firebase.initializeApp({});
      firebase.analytics();
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      firebase.auth().signInWithRedirect(provider);
    },
  },
  mounted () {
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
