<template>
  <div class="dashboard">
    <div class="row">
      <!-- <MusocBox /> -->
    </div>
    <div data-aos="fade-up">
      <va-tabs grow v-model="tabsState">
        <va-tab>
          <va-card
            style="border-radius: 15px; background-color: black; color: white"
          >
            Campus Updates
          </va-card>
        </va-tab>
      </va-tabs>
      <component :is="tabs[tabsState]" @submit="submit" />
    </div>
  </div>
</template>

<script>
import CampusUpdates from './components/updates'
import MusocBox from './components/musoc'

export default {
  name: 'dashboard',
  components: {
    CampusUpdates,
    // CampusNews,
    MusocBox,
  },
  data () {
    return {
      tabsState: 0,
      tabs: [
        'CampusUpdates',
      ],
      musoc: 'Default Value',
      song: 'None',
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: black;
}
</style>
