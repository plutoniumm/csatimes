<template>
  <div>
    <div class="dashboard">

      <va-card>
        DONT CLEAR THIS IS A HORIZONTAL SECTION
      </va-card>
      <hr>

      <va-card title="News for you">
        <va-tabs grow v-model="tabsState">
          <va-tab>
            Campus Updates
          </va-tab>
          <va-tab>
            Campus News
          </va-tab>
        </va-tabs>
        <va-separator/>
        <component :is="tabs[tabsState]" @submit="submit"/>
      </va-card>
    </div>
  </div>
</template>

<script>

import CampusUpdates from './updates.vue'
import CampusNews from './news.vue'

export default {
  name: 'dashboard',
  components: {
    CampusUpdates,
    CampusNews,
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
  },
  data () {
    return {
      tabsState: 1,
      tabs: [
        'CampusUpdates',
        'CampusNews',
      ],
    }
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
