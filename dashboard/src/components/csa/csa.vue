<template>
  <div>
    <div class="cards">
      <div class="cards-container row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->
        <template>
          <div class="flex xs12">
            <va-card color="info">
              <span class="heading">Council of Student Affairs</span>
              <va-list fit class="mb-2">
                <va-list-label>
                  People
                </va-list-label>

                <template v-for="(customer, i) in customers">
                  <va-item :key="'item' + customer.name">
                    <va-item-section avatar>
                      <va-avatar>
                        <va-item-label>
                          <img :src="`'../../assets/pics/'+${customer.picture}`" :alt="customer.name">
                        </va-item-label>
                      </va-avatar>
                    </va-item-section>

                    <va-item-section>
                      <va-item-label>
                        {{ customer.name }} ({{customer.post}})
                      </va-item-label>

                      <va-item-label caption>
                        {{ customer.address }}
                      </va-item-label>
                    </va-item-section>

                    <va-item-section side>
                      <va-item-label>
                        {{ customer.phone}}
                      </va-item-label>
                    </va-item-section>
                  </va-item>

                  <va-list-separator v-if="i < customers.length - 1" :key="'separator' + customer.id" />
                </template>
              </va-list>
            </va-card>
          </div>

          <div class="flex xs12">
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
        </template>
      </div>
    </div>
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
    }
  },
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
