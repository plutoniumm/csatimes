<template>
  <app-page-layout
    class="app-layout"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <div class="app-layout__container">
      <app-sidebar :minimized="minimized" />
      <div class="app-layout__main">
        <main
          class="app-layout__main-layout layout fluid gutter--xl"
          slot="content"
          role="main"
        >
          <router-view />
        </main>
      </div>
    </div>
  </app-page-layout>
</template>

<script>
import AppPageLayout from './AppPageLayout'
import AppSidebar from './app-sidebar/AppSidebar'

export default {
  name: 'app-layout',
  components: {
    AppPageLayout,
    AppSidebar,
  },
  data () {
    return {
      minimized: true,
      mobileWidth: 767,
    }
  },
  inject: ['contextConfig']
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
