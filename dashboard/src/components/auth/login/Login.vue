<template>
  <div id="app">
    <div id="nav">
      <div id="google-signin-button" class="d-flex justify--center"></div>
      <router-view />
    </div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>
<script>
import axios from 'axios'

export default {
  components: {},
  data () {
    return {
    }
  },
  methods: {
    onSignIn (googleUser) {
      var profile = googleUser.getBasicProfile()
      // console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + profile.getName())
      // console.log('Image URL: ' + profile.getImageUrl())
      // console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
      var id_token = googleUser.getAuthResponse().id_token;
      var accessToken = googleUser.getAuthResponse(true).access_token;
      var email = profile.getEmail()
      var result = email.match(/@goa.bits-pilani.ac.in/i)
      if(result==null)
        {this.signOut();
        alert('Please signin using BITSmail only!')}
      else
        { axios
      .post('http://csa.devsoc.club/api/v1/google/student/signin', {
        headers: { idToken: accessToken },
      })
      .then(response => AuthStr)
        }
    },
    signOut () {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
      })
      auth2.disconnect();
      },
    onLoad() {
      gapi.load('auth2', function() {
        gapi.auth2.init();
      });
    }
  },
  mounted () {
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
  },
}
</script>

<style lang="scss">
</style>
