<template>
  <div>
<!-- SUPER INPUT FIREBASE -->
<va-card title="Grievnaces">
    <div class="row align--center">
      <div class="flex xs12 md6">
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          label="Type"
          :options="perPageOptions"
          noClear
        />
      </div>
      <form @submit.prevent="complaintsend()" v-if="perPage == 'FAQ'">
            <div class="row">
              <div class="flex xs12">
                  <div class="flex">
                    <va-input
                      v-model="comptitle"
                      placeholder="What is your Complaint About?"
                    />
                  </div>
                  <div class="flex">
                    <va-input
                      v-model="compdes"
                      placeholder="Tell us your grievance"
                    />
                  </div>
                  <div class="d-flex justify--center mt-3">
                    <va-button type="submit" class="my-0">Submit</va-button>
                  </div>
              </div>
            </div>
          </form>
          <form @submit.prevent="faqsend()" v-if="perPage == 'Complaint'">
            <div class="row">
              <div class="flex xs12">
                  <div class="flex">
                    Have a Frequently Asked Question which you don't see here? Ask Us.
                    <va-input
                      v-model="comptitle"
                      placeholder="Ask Your Question"
                    />
                  </div>
                  <div class="d-flex justify--center mt-3">
                    <va-button type="submit" class="my-0">Submit</va-button>
                  </div>
              </div>
            </div>
          </form>
    </div>

  </va-card>


<!-- CSA -->
    <div class="row" style="justify-content: center;">
      <div class="flex xs12 sm6 lg4">
        <va-card style="background: #000000; text-align: center;">
          <h2 style="color: #ffffff;">Council of Student Affairs</h2>
        </va-card>
      </div>
    </div>

    <template v-for="(customer) in customers">
      <div :key="'item' + customer.name"  style="display: inline-block;" class="row align--center">
        <div style="justify-content: center;">
          <div class="flex" style="justify-content: center;">
            <div class="card" style="margin: 1rem; justify-content: center;">
              <div class="imgBx">
                <img :src="require('../../assets/pics/' + customer.picture)" :alt="customer.name">
              </div>
              <div class="details">
                <h2>{{ customer.name }}<br><span>({{customer.post}})</span></h2>
                {{ customer.address }} <br> {{ customer.phone}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import data from './data.json'
export default {
  name: 'cards',
  data () {
    return {
      customers: data,
      appBanners: false,
      banners: false,
      notifications: true,
      perPage: 'FAQ',
      perPageOptions: ['Complaint', 'FAQ'],
    }
  },
  methods: {
    onsubmit(){
      if(1 == 1){
        console.log(perPage)
      }
    }
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
  background-color: #f7ecdb;
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
  background: #ffdcab;
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
  color: #ffdcab;
  margin-top: 0;
}
</style>
