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

var firebaseConfig = JSON.parse(process.env.VUE_APP_AUTH_FIRE)
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
      const that = this
      if (!firebase.apps.length) firebase.initializeApp({});
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      firebase.auth().signInWithPopup(provider).then((res)=> {
      var token = res.credential.idToken;
      var email = res.user.email
      document.cookie = `userName=${res.user.displayName}; expires=${new Date().getTime() + 86400*1000*30}`
      document.cookie = `emailID=${email}; expires=${new Date().getTime() + 86400*1000*30}`
      document.cookie = `shortID=${res.user.email.slice(1,9)}; expires=${new Date().getTime() + 86400*1000*30}`
      var str = email.match(/@goa.bits-pilani.ac.in/i)
      if(str===null)
        {firebase.auth().signOut().then(function() {
          alert('Please signin using BITSmail only!')
        })}
      else
        {
          axios
            .post('https://csa.devsoc.club/api/v1/google/student/signin', {idToken: token})
            .then(function(response) {
              document.cookie = `uToken=${btoa(response.data.authToken)}; expires=${new Date().getTime() + 86400*1000*30}`
              // alert(document.cookie);
              !response.data.newUser ? that.$router.push({ name: 'dashboard' }) : that.$router.push({ name: 'signup' })})
            .catch((e) => {
              alert('Please try again later')
              document.cookie = `uToken=; expires=${new Date().getTime()}`
              console.log(e)
            })
        }
      })
      .catch(function(e) {
      console.log(e);
      });
    }
  },
}
</script>

<style lang="scss">
</style>
