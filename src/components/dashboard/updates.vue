<template>
  <div>
    <div class="dashboard">
      <template v-for="notice in start1">
        <va-card slot="after" stripe="danger" class="mb-0" :key="'item' + notice.name">
          <h2>{{ notice.writer }}</h2>
          <div>
            <div>
              <span style="color: #a7a7a7;">{{ notice.updated_at.substring(0,10) }}</span>
              <hr />
              <strong>{{ notice.name }}</strong>
              <br>
              {{ notice.summary }}
              <br>
            </div>
            <br>
            <span style="color: #a7a7a7;">Brought to you by CSA</span>
          </div>
        </va-card>
        <br>
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
</style>
