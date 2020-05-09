<template>
  <div id="app">
    <div id="nav">
      <div class="d-flex justify--center">
        <va-button @click="socialLogin" color="info">Sign in</va-button>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
import axios from 'axios'
import Vue from 'vue'
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
  components: {},
  data () {
    return {
    }
  },
  methods: {
    signout() {
      firebase.auth().signOut()
        .then(function() {
          alert('Signed out')
        })
        .catch(function(error) {
          console.log(error)
        });
    },
    socialLogin() {
      const that=this
      if (!firebase.apps.length) firebase.initializeApp({});
      firebase.analytics();
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.idToken;
      var email = result.user.email
      Vue.prototype.$username = result.user.displayName
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
              Vue.prototype.$AuthStr = response.authToken
              if(!response.newUser)
                that.$router.push({ path: '/dashboard' })
              else
                that.$router.push({name: 'signup'})
            })
            .catch(function(error) {
              alert('Please try again later')
              console.log(error)
            })
        }
      })
      .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      });
    },
  },
  mounted () {
  },
}
</script>

<style lang="scss">
</style>
