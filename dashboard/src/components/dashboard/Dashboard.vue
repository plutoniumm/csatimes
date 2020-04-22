<template>
  <div>
    <div class="dashboard">
      <div class="timelines">
        <div class="row">
          <div class="flex xs6">
            <va-card
              no-padding-h
              style="overflow-x: auto;"
              class="timelines__horizontal-long"
              :title="('Latest Updates')"
            >
              <va-timeline
                align-top
                style="min-width: 600px;"
                class="timelines__horizontal-long__timeline"
              >
                <va-timeline-item active>
                  <template slot="before">
                    <div
                      class="title text--center"
                      :style="{color: $themes.primary}"
                    >{{ start1 }}</div>
                  </template>
                  <va-card slot="after" stripe="warning" class="mb-0">
                    <template slot="title">{{ start1 }}</template>
                    <va-accordion>
                      <va-collapse>
                        <div><span slot="header">{{ name1 }}</span></div>
                        <div slot="body">
                          <div>{{ summary1 }}</div>
                        </div>
                      </va-collapse>
                    </va-accordion>
                  </va-card>
                </va-timeline-item>
                <va-timeline-item active>
                  <template slot="before">
                    <div class="title text--center" :style="{color: $themes.primary}">{{ start2 }}</div>
                  </template>
                  <va-card slot="after" stripe="info" class="mb-0">
                    <template slot="title">{{ start2 }}</template>
                    <va-accordion>
                      <va-collapse>
                        <span slot="header">{{ name2 }}</span>
                        <div slot="body">
                          <div>{{ summary2 }}</div>
                        </div>
                      </va-collapse>
                    </va-accordion>
                  </va-card>
                </va-timeline-item>
                <va-timeline-item active>
                  <template slot="before">
                    <div class="title text--center" :style="{color: $themes.primary}">{{ start3 }}</div>
                  </template>
                  <va-card slot="after" stripe="info" class="mb-0">
                    <template slot="title">{{ start3 }}</template>
                    <va-accordion>
                      <va-collapse>
                        <span slot="header">{{ name3 }}</span>
                        <div slot="body">
                          <div>{{ summary3 }}</div>
                        </div>
                      </va-collapse>
                    </va-accordion>
                  </va-card>
                </va-timeline-item>
              </va-timeline>
            </va-card>
          </div>
          <div class="flex xs6">
            <va-card :title="$t('PR Drive')">
              <form>
                <div>
                  <div class="flex md4 sm6 xs12">
                    <img :src= "image" width="300px"/>
                    <h2>{{name}}</h2>
                    <br>
                    <va-input
                      v-model="withDescription"
                      placeholder="Enter the scanned QR code here"
                    />
                    Price without nick {{price}}
                    <br>
                    Price with nick {{pricenick}}
                    <br>
                    <br>
                    <va-checkbox
                      :label="$t('Do you want a nick?')"
                      v-model="checkbox"
                    />
                    <va-input
                      v-model="nick"
                      placeholder="Enter nick here"
                    />
                    <br>
                    <va-select
                      :label="$t('Choose Size')"
                      v-model="simpleSelectModel"
                      textBy="description"
                      :options="simpleOptions"
                    />
                  </div>
                </div>
              </form>
            </va-card>
          </div>
        </div>
      </div>

      <dashboard-charts />
      <dashboard-info-block />
      <div class="row">
        <div class="flex xs12">
          <dashboard-table />
        </div>
      </div>
      <div class="row row-equal">
        <div class="flex xs12 lg6">
          <dashboard-tabs @submit="addAddressToMap" />
        </div>
        <div class="flex xs12 lg6">
          <dashboard-map ref="dashboardMap" />
        </div>
      </div>
    </div>

    <div class="form-elements">
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>
import DashboardTable from './DashboardTable'
import axios from 'axios'

export default {
  name: 'dashboard',
  components: {
    DashboardTable,
  },
  methods: {
    addAddressToMap ({ city, country }) {
      this.$refs.dashboardMap.addAddress({ city: city.text, country })
    },
  },
  name: 'form-elements',

  data () {
    return {
      start1: null,
      summary1: null,
      name1: null,
      start2: null,
      summary2: null,
      name2: null,
      start3: null,
      summary3: null,
      name3: null,
      start4: null,
      summary4: null,
      name4: null,
      start5: null,
      summary5: null,
      name5: null,
      withDescription: '',
      nick: '',
      name: '',
      pricenick: '',
      price: '',
      image: [],
      simpleOptions: [],
      simpleSelectModel: '',
      checkbox: false,
    }
  },
  mounted () {
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0wMVQxMjo1ODozMy40NjFaIiwiaWF0IjoxNTg1NzQ2MjAxfQ.T4y7ZdgybRiKdDcIBUid0brrPEaMvhPbZVWmGzc9kWM' },
      })
      .then(response => {
        this.start1 = response.data.en[0].start
        this.summary1 = response.data.en[0].summary
        this.name1 = response.data.en[0].name
        this.start2 = response.data.en[1].start
        this.summary2 = response.data.en[1].summary
        this.name2 = response.data.en[1].name
        this.start3 = response.data.en[2].start
        this.summary3 = response.data.en[2].summary
        this.name3 = response.data.en[2].name
        this.start4 = response.data.en[3].start
        this.summary4 = response.data.en[3].summary
        this.name4 = response.data.en[3].name
        this.start5 = response.data.en[4].start
        this.summary5 = response.data.en[4].summary
        this.name5 = response.data.en[4].name
        // (for(let i=0;i<5:i++)
        //   {this.name[i]=response.data.en.reverse()[i].name),
        //   this.start[i]=response.data.en.reverse()[i].start),
        //   this.summary[i]=response.data.en.reverse()[i].summary)})
      })
    axios
      .get('https://csa.devsoc.club/api/v1/genpr/student/getAllsubEvents', {
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0xMFQwNjo0NzozNy4wNjBaIiwiaWF0IjoxNTg2NTI0NDQ4fQ.GhVp4SFz6yCTXoKNb0NHqsTkZoKF8gQrT1-viLjGv14' },
      })
      .then(response => {
        this.image = response.data.subEvents[0].images[0].image
        this.name = response.data.subEvents[0].name
        this.price = response.data.subEvents[0].price
        this.pricenick = response.data.subEvents[0].price_nick
        this.simpleOptions = response.data.subEvents[0].available_sizes
      })
  },
}
</script>

<style lang="scss">
body {
  background-color: grey;
}

.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;
  }
}

.row.row-inside {
  max-width: none;
}
</style>
