<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      contextConfig: {
        gradient: true,
        shadow: 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
      },
    }
  },
  provide () {
    return {
      contextConfig: this.contextConfig,
    }
  },
}
</script>

<style lang="scss">
@import "~vuestic-ui/src/components/vuestic-sass/global/reset.scss";
@import "~vuestic-ui/src/components/vuestic-sass/vuestic-styles";
body,
#app {
  height: 100%;
  background: #111;
}
* {
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
}
</style>