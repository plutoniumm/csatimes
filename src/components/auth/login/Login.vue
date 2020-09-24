<template>
  <div class="d-flex justify--center">
    <div class="flex xs12 justify--center row align-content--center">
      <div
        class="d-flex justify--center align-content--center"
        style="position: absolute; top: 50%"
      >
        Gotta insert BITS Pilani logo
        <va-button @click="socialLogin" color="info">Sign in</va-button>
      </div>
      Please use Desktop/ Laptop only to view
      <router-view />
    </div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
import axios from 'axios'
import firebase from 'firebase'
var firebaseConfig = process.env.authFire

firebase.initializeApp(firebaseConfig);

export default {
  components: {},
  data () {
    return{
    }
  },
  methods: {
    signOut() {
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
      localStorage.setItem('user', result.user.displayName)
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
              localStorage.removeItem('user-token')
              console.log(error)
            })
        }
      })
      .catch(function(e) {
      console.log(e);
      });
    }
  },
  mounted () {
  },
}
</script>

<style lang="scss">
</style>
