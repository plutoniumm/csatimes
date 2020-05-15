<template>
  <div>
    <!-- eslint-disable vue/valid-v-for -->
    <template>
      <div class="row" style="justify-content: center;">
        <div class="flex xs6">
          <form @submit.prevent="onsubmit()">
            <div class="row">
              <div class="flex xs12">
                <va-card :title="$t('Complaints')" color="info">
                  <div class="flex ">
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

      <!-- <div class="row" style="justify-content: center;">
        <div class="flex xs12  sm6 lg4">
          <va-card style="background: #000000; text-align: center;">
            <h2 style="color: #ffffff;">Council of Student Affairs</h2>
          </va-card>
        </div>
      </div> -->

      <!-- <template v-for="(customer, i) in customers">
        <div :key="'item' + customer.name"  style="display: inline-block;" class="row">
          <div class="flex">
            <div class="card" style="margin: 1rem;">
              <div class="imgBx">
                <img :src="require('../../assets/pics/' + customer.picture)" :alt="customer.name" width='170px'>
              </div>
              <div class="details">
                <h2>{{ customer.name }}<br><span>({{customer.post}})</span></h2>
                {{ customer.address }} <br> {{ customer.phone}}
              </div>
            </div>
          </div>
        </div>
      </template> -->
      <div class="row" style="justify-content: center;">
        <div class="flex xs12 sm6 lg4">
          <va-card style="background: #000000; text-align: center;">
            <h2 style="color: #ffffff;">Council of Student Affairs</h2>
          </va-card>
        </div>
      </div>
      <div class="row" style="justify-content: center;">
        <div class="flex xs12">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/dhruv.png')" width='170px'/>
            </div>
            <div class="details">
              <h2>Dhruv Kaluskar<br><span>(President)</span></h2>
              +91 96655 81729
              prez@goa.bits-pilani.ac.in
            </div>
          </div>
        </div>
        <div class="flex xs12 sm6">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/avi.png')" width='170px'/>
            </div>
            <div class="details">
              <h2>Avi Chauhan<br><span>(Vice President)</span></h2>
              +91 96655 81729
              viceprez@goa.bits-pilani.ac.in
            </div>
          </div>
        </div>
        <div class="flex xs12 sm6">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/aanak.png')" width='170px'/>
            </div>
            <div class="details">
              <h2>Aanak Sengupta<br><span>(Treasurer)</span></h2>
              +91 70305 30377
              trez@goa.bits-pilani.ac.in
            </div>
          </div>
        </div>
        <div class="flex xs12 sm6">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/aseem.png')" width='170px'/>
            </div>
            <div class="details">
              <h2>Aseem Juneja<br><span>(General Secretary)</span></h2>
              +91 75892 01824
              gensec@goa.bits-pilani.ac.in
            </div>
          </div>
        </div>
        <div class="flex xs12 sm6">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/deva.png')" width='170px'/>
            </div>
            <div class="details">
              <h2>Devashish Rane<br><span>Sports Secretary</span></h2>
              +91 95526 74242
              sportssec@goa.bits-pilani.ac.in
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cards',
  data () {
    return {
      customers: data,
      appBanners: false,
      banners: false,
      notifications: true,
    }
  },
  methods: {
    onsubmit () {
      const payload = {
        complaint: { complaint_title: this.comptitle, complaint_details: this.compdes },
      }

      axios({
        url: 'https://csa.devsoc.club/api/v1/complaints/student/add',
        method: 'post',
        headers: { token: this.$AuthStr },
        data: payload,
      })
        .then(function (response) {
          alert('Complaint registered')
        })
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
      font-size: 2.5rem;
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

body {
  background-color: rgb(32, 61, 85);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
}

.card {
  position: relative;
  width: 400px;
  height: 200px;
  background: #000000;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ad4646;
  transition: 0.5s;
  z-index: -1;
}

.card:hover::before,
.card:active::before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card:hover::after,
.card:active::after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 200px;
  background: #000000;
  transition: 0.5s;
  z-index: 1;
}

.card:hover .imgBx,
.card:active {
  bottom: 10px;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  position: absolute;
  left: 200px;
  right: 10px;
  bottom: 100px;
  height: 60px;
  text-align: center;
}

.card .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: #777777;
  text-transform: uppercase;
}

.card .details h2 span {
  font-weight: 500;
  font-size: 16px;
  color: #f38695;
  margin-top: 0;
}
</style>
