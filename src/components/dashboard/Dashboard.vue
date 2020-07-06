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
      <br>

      <div data-aos="fade-up">
        <va-tabs grow v-model="tabsState">
          <va-tab>
            <va-card style="border-radius: 15px; background-color: black; color: white;">Campus Updates</va-card>
          </va-tab>
          <va-tab>
            <va-card style="border-radius: 15px; background-color: black; color: white;">Campus News</va-card>
          </va-tab>
        </va-tabs>
        <!-- <va-separator /> -->
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
      tabsState: 0,
      tabs: [
        'CampusUpdates',
        // 'CampusNews',
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
  background:
    -webkit-radial-gradient(
      0% 100%,
      rgba(63, 94, 251, 1),
      rgba(252, 70, 107, 1),
      rgba(255, 229, 180, 1)
    );
  font-size: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
}
</style>
