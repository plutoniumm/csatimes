<template>
  <div>
    <div class="cards">
      <div class="cards-container row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->
        <template>
          <va-card class="flex xs12">
            <span class="heading">Council of Student Affairs</span>
            <div class="flex xs12 sm6 lg4 xl3 offset--md3" style= "display: inline-block;">
              <va-card>
                <img :src="require('../../assets/pics/dhruv.png')" width='170px'/>
                <h2>Dhruv Kaluskar</h2>
                CSA President
                9665581729
                prez@goa.bits-pilani.ac.in
              </va-card>
            </div>
            <div class="flex xs12 sm6 lg4 xl3" style= "display: inline-block;">
              <va-card>
                <img :src="require('../../assets/pics/avi.png')" width='170px'/>
                <h2>Avi Chauhan</h2>
                CSA Vice President
                9665581729
                viceprez@goa.bits-pilani.ac.in
              </va-card>
            </div>
            <div class="flex xs12 sm6 lg4 x13 offset--md3" style= "display: inline-block;">
              <va-card>
                <img :src="require('../../assets/pics/aanak.png')" width='170px'/>
                <h2>Aanak Sengupta</h2>
                Treasurer<div></div>
                7030530377<div></div>
                trez@goa.bits-pilani.ac.in
              </va-card>
            </div>
            <div class="flex xs12 sm6 lg4 xl3" style= "display: inline-block;">
              <va-card>
                <img :src="require('../../assets/pics/aseem.png')" width='170px'/>
                <h2>Aseem Juneja</h2>
                General Secretary
                7589201824
                gensec@goa.bits-pilani.ac.in
              </va-card>
            </div>
          </va-card>
        </template>
      </div>
    </div>
    <div>
      <form @submit.prevent="onsubmit()">
        <div class="row">
          <div class="flex xs12">
            <va-card :title="$t('Complaints')">
              <div class="flex">
                <va-input
                  v-model="comptitle"
                  placeholder="Enter your complaint title"
                />
              </div>
              <div class="flex">
                <va-input
                  v-model="compdes"
                  placeholder="Enter your complaint description"
                />
              </div>
              <div class="d-flex justify--center mt-3">
                <va-button type="submit" class="my-0">{{ $t('Submit') }}</va-button>
              </div>
            </va-card>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'cards',
  methods: {
    onsubmit () {
      const payload = {
        complaint: { complaint_title: this.comptitle, complaint_details: this.compdes },
      }

      axios({
        url: 'http://csa.devsoc.club/api/v1/complaints/student/add',
        method: 'post',
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0wMVQxMjo1ODozMy40NjFaIiwiaWF0IjoxNTg1NzQ2MjAxfQ.T4y7ZdgybRiKdDcIBUid0brrPEaMvhPbZVWmGzc9kWM' },
        data: payload,
      })
      alert('Complaint registered')
    },
  },
  computed: {
    formReady () {
      return !(this.emailErrors.length || this.passwordErrors.length || this.agreedToTermsErrors.length)
    },
  },
}

</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
    height: 100%;

    .heading {
      font-size: 4rem;
      justify-content: center;
      display: flex;
    }

    .va-card {
      margin: 0;
      text-align: center;
      height: 100%;
    }
  }
}
</style>
