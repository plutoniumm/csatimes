<template>
  <div>
    <div class="dashboard">
      <MusocBox />
      <hr />

      <div data-aos="fade-up">
        <va-tabs grow v-model="tabsState">
          <va-tab>Campus Updates</va-tab>
          <va-tab>Campus News</va-tab>
        </va-tabs>
        <va-separator />
        <component :is="tabs[tabsState]" @submit="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import CampusUpdates from './updates.vue'
import CampusNews from './news.vue'
import MusocBox from './musoc.vue'

export default {
  name: 'dashboard',
  components: {
    CampusUpdates,
    CampusNews,
    MusocBox,
  },
  data () {
    return {
      tabsState: 1,
      tabs: [
        'CampusUpdates',
        'CampusNews',
      ],
      musoc: 'Default Value',
      song: 'None',
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: #ffdcab;
}
</style>
