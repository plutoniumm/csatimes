<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="dashboard">
      <div class="row">
        <div style="margin-right: 1em; margin-left: 1em;">
          <va-card class="csatimes">CSATimes</va-card>
        </div>
        <MusocBox />
      </div>
      <hr />

      <div data-aos="fade-up">
        <va-tabs grow v-model="tabsState">
          <va-tab>
            <va-card>Campus Updates</va-card>
          </va-tab>
          <va-tab>
            <va-card>Campus News</va-card>
          </va-tab>
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
  background-color: black;
}

.csatimes {
  color: white;
  background-image: linear-gradient(to right, yellow, red);
  font-size: 500%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
}
</style>
