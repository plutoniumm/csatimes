<template>
  <div>
    <div class="dashboard">
      <div class="timelines">
        <div class="row">
          <div class="flex xs12">
            <va-card
              no-padding-h
              style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224)); overflow-x: auto;"
              class="timelines__horizontal-long"
            >
              <div style="color: rgb(255, 255, 255); font-size: 2rem; margin-left: 1rem;">Latest Updates</div>
              <va-timeline
                align-top
                style="min-width: 900px;"
                class="timelines__horizontal-long__timeline"
              >
                <template v-for="(notice, i) in start1">
                  <va-timeline-item active :key="'item' + notice.name">
                    <template slot="before">
                      <div class="title text--center" style="color: rgb(64, 229, 134); font-size: 1rem;">{{ notice.updated_at.substring(0,10) }}</div>
                    </template>
                    <va-card slot="after" stripe="warning" class="mb-0">
                      <template slot="title">{{notice.updated_at}}</template>
                      <va-accordion>
                        <va-collapse>
                          <span slot="header"><h2>{{ notice.name }}</h2></span>
                          <div slot="body">
                            <div>{{ notice.summary }}
                              <br>
                              <h2>{{ notice.writer }}</h2>
                            </div>
                          </div>
                        </va-collapse>
                      </va-accordion>
                    </va-card>
                  </va-timeline-item>
                </template>
              </va-timeline>
            </va-card>
          </div>

          <div class="flex xs12">
            <va-card no-padding-h style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224)); overflow-x: auto;">
              <div style="color: rgb(255, 255, 255); font-size: 2rem; margin-left: 1rem;">PR Drive</div>
              <form>
                <div>
                  <div class="flex md4 sm6 xs12">
                    <template v-for="(prevent, j) in pr">
                      <va-accordion :key="'item' + prevent.name">
                        <va-collapse>

                          <span slot="header"><h2>{{ prevent.name }}</h2></span>

                          <div slot="body">
                            <form @submit.prevent="onsubmit()">
                              <template v-for="(imag, i) in prevent.images">
                                <img :src= prevent.images[i].image width="300px" :key="imag.image"/>
                              </template>
                              <br>
                              <va-input
                                v-model="withDescription"
                                placeholder="Enter the scanned QR code here"
                              />
                              <div v-if="prevent.is_nick == true">
                                <h2>Price without nick</h2> {{prevent.price}}
                                <br>
                                <h2>Price with nick</h2> {{prevent.price_nick}}
                                <br>
                                <br>
                                <va-checkbox
                                  :label="$t('Do you want a nick?')"
                                  v-model="checkbox"
                                />
                                <va-input v-if="checkbox==true"
                                  v-model="nick"
                                  placeholder="Enter nick here"
                                />
                              </div>
                              <div v-else>
                                <h2>Price</h2> {{prevent.price}}
                              </div>
                              <br>
                              <va-select
                                :label="$t('Choose Size')"
                                v-model="simpleSelectModel"
                                textBy="description"
                                :options="prevent.available_sizes"
                              />
                              <h2>Select Quantity</h2>
                              <br>
                              <va-slider
                                pins
                                :min="1"
                                :max="10"
                                :step="1"
                                color="warning"
                                value-visible
                                v-model="value"
                                input
                              />
                              <va-button color="danger" type="submit"> Register </va-button>
                              <br>
                              <br>
                              <br>
                            </form>
                          </div>
                        </va-collapse>
                      </va-accordion>
                    </template>
                  </div>
                </div>
              </form>
            </va-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dashboard',
  components: {
  },
  methods: {
    onsubmit () {
      const payload = {
      }

      axios({
        url: 'http://csa.devsoc.club/api/v1/complaints/student/add',
        method: 'post',
        headers: { token: this.$AuthStr },
        data: payload,
      })
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },

  data () {
    return {
      start1: null,
      pr: null,
      nick: null,
      withDescription: '',
      image: [],
      simpleOptions: [],
      simpleSelectModel: '',
      checkbox: false,
      value: 1,
    }
  },
  mounted () {
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0xMFQwNjo0NzozNy4wNjBaIiwiaWF0IjoxNTg2NTI0NDQ4fQ.GhVp4SFz6yCTXoKNb0NHqsTkZoKF8gQrT1-viLjGv14' },
      })
      .then(response => {
        this.start1 = response.data.en
      })
    axios
      .get('https://csa.devsoc.club/api/v1/genpr/student/getAllsubEvents', {
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0xMFQwNjo0NzozNy4wNjBaIiwiaWF0IjoxNTg2NTI0NDQ4fQ.GhVp4SFz6yCTXoKNb0NHqsTkZoKF8gQrT1-viLjGv14' },
      })
      .then(response => {
        this.pr = response.data.subEvents
      })
  },
}
</script>

<style lang="scss">
body {
  background-color: rgb(32, 61, 85);
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
  max-width: 20px;
}

</style>
