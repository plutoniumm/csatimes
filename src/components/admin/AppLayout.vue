<template>
  <app-page-layout class="app-layout" :minimized.sync="minimized" :mobile-width="mobileWidth">
    <app-navbar :minimized.sync="minimized" />
    <div class="app-layout__container">
      <app-sidebar :minimized="minimized" />
      <div class="app-layout__main" :class="{'app-layout__main--top': isTopBar}">
        <main class="app-layout__main-layout layout fluid gutter--xl" slot="content" role="main">
          <router-view />
        </main>
      </div>
    </div>
  </app-page-layout>
</template>

<script>
import AppPageLayout from './AppPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import { ColorThemeActionsMixin, ColorThemeMixin } from '../../services/vuestic-ui'

export default {
  name: 'app-layout',
  components: {
    AppPageLayout,
    AppNavbar,
    AppSidebar,
  },
  data () {
    return {
      minimized: true,
      mobileWidth: 767,
    }
  },
  inject: ['contextConfig'],
  mixins: [ColorThemeActionsMixin, ColorThemeMixin],
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    height: calc(100% - 65px);

    @include media-breakpoint-down(sm) {
      height: calc(100% - 110px);
    }
  }

  &__main {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    max-height: 100%;
    min-height: 100%;

    &-layout {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: auto;
      box-sizing: border-box;
      min-height: 100%;
      margin: 0;
    }
  }
}
</style>
