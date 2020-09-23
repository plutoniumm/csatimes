<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="dashboard">
      <div class="row" style="justify-content: center;">
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
          <!-- <va-tab>
            <va-card style="border-radius: 15px; background-color: black; color: white;">Campus News</va-card>
          </va-tab> -->
        </va-tabs>
        <!-- <va-separator /> -->
        <component :is="tabs[tabsState]" @submit="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import CampusUpdates from './components/Updates'
import CampusNews from './components/News'
import MusocBox from './components/Musoc'

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

  @include media-breakpoint-down(lg) {
    margin-bottom: 0.5rem;
    height: 2.5em;
    font-size: 5rem;
  }

  @include media-breakpoint-down(md) {
    margin-bottom: 0.5rem;
    height: 2.5em;
    font-size: 4rem;
  }

  @include media-breakpoint-down(sm) {
    margin-bottom: 0.5rem;
    height: 4.5rem;
    font-size: 4rem;
  }
}
</style>
