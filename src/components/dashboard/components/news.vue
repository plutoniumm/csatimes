<template>
  <div>
    <template v-for="notice in start1">
      <va-card
        slot="after"
        stripe="info"
        class="mb-0"
        :key="'item' + notice.name"
      >
        <h2>{{ notice.writer }}</h2>
        <div>
          <div>
            <span style="color: #a7a7a7">{{
              notice.updated_at.substring(0, 10)
            }}</span>
            <hr />
            <strong>{{ notice.name }}</strong>
            <br />
            {{ notice.summary }}
          </div>
          <span style="color: #a7a7a7">Brought to you by CSA</span>
        </div>
      </va-card>
      <!-- <br /> -->
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
    const utok = atob(document.cookie.split(';').filter(e => e.includes('uToken'))[0].split('=')[1])
    axios
      .get('https://csa.devsoc.club/api/v1/en/student/show', {
        headers: { token: utok },
      })
      .then(response => {
        this.start1 = response.data.en.reverse()
      })
  },
}
</script>

<style lang="scss">
</style>
