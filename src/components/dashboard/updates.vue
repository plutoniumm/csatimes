<template>
  <div class="row">
    <div class="flex xs12 sm6 md6" v-for="(notice, index) in start1" :key="notice">
      <va-card class="mb-0 upds" :key="'item' + notice.name" :set="chex[index] = 1">
        <div class="mailtop">
          <span>
            <h1>{{ notice.writer }}</h1>
          </span>
          <span style="color: #a7a7a7;">{{ notice.updated_at.substring(0,10) }}</span>
        </div>
        <div style="margin: 0.5em 0;">{{ notice.name }}</div>
        <span style="color: #dddddd;" v-if="chex[index]">
          {{ notice.summary.slice(0,140) }}...
          <va-button :click="chex[index] = !chex[index]">Read More</va-button>
        </span>
        <span style="color: #dddddd;" v-else>{{ notice.summary }}</span>
      </va-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CampusUpdates',
  components: {
  },
  data () {
    return {
      start1: null,
      chex: [],
    }
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
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
.mailtop {
  display: flex;
  justify-content: space-between;
}

.upds {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
  margin-top: 1em;
}
</style>
