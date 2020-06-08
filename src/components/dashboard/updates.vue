<template>
  <div>
    <div class="dashboard">
      <!-- <va-card
              no-padding-h
              style="background: #ffdcab; overflow-x: auto;"
              class="timelines__horizontal-long"
            >
              <div style="color: rgb(0, 0, 0); font-size: 2rem; margin-left: 1rem;">Latest Updates</div>
              <va-timeline
                align-top
                style="min-width: 900px;"
                class="timelines__horizontal-long__timeline"
              >
                <template v-for="(notice, i) in start1">
                  <va-timeline-item active :key="'item' + notice.name">
                    <template slot="before">
                      <div class="title text--center" style="color: rgb(227, 75, 74); font-size: 1rem;">{{ notice.updated_at.substring(0,10) }}</div>
                    </template>
                    <va-card slot="after" stripe="danger" class="mb-0">
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
      </va-card>-->

      <template v-for="notice in start1">
        <va-card slot="after" stripe="danger" class="mb-0" :key="'item' + notice.name">
          <h2>{{ notice.writer }}</h2>
          <div>
            <div>
              <span style="color: #a7a7a7;">{{ notice.updated_at.substring(0,10) }}</span>
              <hr />
              <strong>{{ notice.name }}</strong>
              <br />
              {{ notice.summary }}
            </div>
            <span style="color: #a7a7a7;">Brought to you by CSA</span>
          </div>
        </va-card>
        <br />
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CampusUpdates',
  components: {
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
  },
  data () {
    return {
      start1: null,
    }
  },
  mounted () {
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: localStorage.getItem('user-token') || this.$AuthStr },
      })
      .then(response => {
        this.start1 = response.data.en.reverse()
      })
  },
}
</script>

<style lang="scss">
body {
  background-color: #f7ecdb;
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
