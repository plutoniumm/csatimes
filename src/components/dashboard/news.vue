<template>
  <div>
    <template v-for="(notice, i) in start1">
      <va-card slot="after" stripe="info" class="mb-0" :key="'item' + notice.name">
        <h2>{{ notice.writer }}</h2>
        <div>
          <div><span style="color: #a7a7a7;">{{ notice.updated_at.substring(0,10) }}</span>
            <hr>
            <strong>{{ notice.name }}</strong> <br>
            {{ notice.summary }}
          </div>
          <span style="color: #a7a7a7;">Brought to you by CSA</span>
        </div>
      </va-card>
      <br>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CampusNews',
  components: {
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

    .va-card {
      background-color: #ffffff;
    }
  }
}

.row.row-inside {
  max-width: 20px;
}

</style>
