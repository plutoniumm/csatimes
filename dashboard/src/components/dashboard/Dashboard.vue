<template>
  <div>
    <div class="dashboard">
      <div class="timelines">
        <div class="row">
          <div class="flex xs12">
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
                <!-- <va-timeline-item active>
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
                <va-timeline-item active>
                  <template slot="before">
                    <div class="title text--center" :style="{color: $themes.primary}">{{ start4 }}</div>
                  </template>
                  <va-card slot="after" stripe="info" class="mb-0">
                    <template slot="title">{{ start4 }}</template>
                    <va-accordion>
                      <va-collapse>
                        <span slot="header">{{ name4 }}</span>
                        <div slot="body">
                          <div>{{ summary4 }}</div>
                        </div>
                      </va-collapse>
                    </va-accordion>
                  </va-card>
                </va-timeline-item>
                <va-timeline-item active>
                  <template slot="before">
                    <div class="title text--center" :style="{color: $themes.primary}">{{ start5 }}</div>
                  </template>
                  <va-card slot="after" stripe="info" class="mb-0">
                    <template slot="title">{{ start5 }}</template>
                    <va-accordion>
                      <va-collapse>
                        <span slot="header">{{ name5 }}</span>
                        <div slot="body">
                          <div>{{ summary5 }}</div>
                        </div>
                      </va-collapse>
                    </va-accordion>
                  </va-card>
                </va-timeline-item> -->
              </va-timeline>
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
  </div>
</template>

<script>
import DashboardInfoBlock from './DashboardInfoBlock'
import DashboardTable from './DashboardTable'
import DashboardTabs from './DashboardTabs'
import axios from 'axios'

export default {
  name: 'dashboard',
  components: {
    DashboardInfoBlock,
    DashboardTable,
    DashboardTabs,
  },
  methods: {
    addAddressToMap ({ city, country }) {
      this.$refs.dashboardMap.addAddress({ city: city.text, country })
    },
  },

  data () {
    return {
      // dateFirst: '',
      // titleFirst: 'Make design',
      // titleSecond: 'Develop an app',
      // titleThird: 'Submit an app',
      // horizontalSimpleContentFirst: 'Pre-sail rate: 50%',
      // dateSecond: 'May 22 10:00',
      // horizontalSimpleContentSecond: 'Pre-sail rate: 40%',
      // dateThird: 'July 19 17:45',
      // horizontalSimpleContentThird: 'Pre-sail rate: 20%',
      // contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      // contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      // contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations',
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
</style>
