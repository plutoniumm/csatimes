<template>
  <nav class="app-navbar">
    <div class="app-navbar__content row">
      <div class="app-navbar__menu-container">
        <va-icon-menu
          class="app-navbar__menu"
          v-if="!minimized"
          @click.native="$emit('update:minimized', !minimized)"
        />

        <va-icon-menu-collapsed
          class="app-navbar__menu"
          v-if="minimized"
          @click.native="$emit('update:minimized', !minimized)"
        />
      </div>
      <app-navbar-actions class="app-navbar__actions md5 lg4" :user-name="userName" />
    </div>
  </nav>
</template>

<script>
import VaIconMenu from '../../../iconset/VaIconMenu'
import VaIconMenuCollapsed from '../../../iconset/VaIconMenuCollapsed'
import AppNavbarActions from './components/AppNavbarActions'
// eslint-disable-next-line no-unused-vars
import { colorShiftHsl, ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-navbar',
  mixins: [ColorThemeMixin],
  inject: ['contextConfig'],
  components: {
    VaIconMenu,
    VaIconMenuCollapsed,
    AppNavbarActions,
  },
  props: {
    minimized: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      userName: localStorage.getItem('user') || this.$username,
    }
  },
  computed: {
    minimizedProxy: {
      get () {
        return this.minimized
      },
      set (minimized) {
        this.$emit('update:minimized', minimized)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$nav-border-side-width: 3.2rem;

* {
  color: white;
}

.app-navbar {
  position: fixed;
  width: 100%;
  backdrop-filter: blur(0.5em);
  -webkit-backdrop-filter: blur(0.5em);
  display: flex;
  padding: 1rem 1rem;
  z-index: 5;

  &__content {
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    flex: 1 1 auto;
  }

  &__menu {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-right: 1.5rem;
  }

  &__menu-container {
    display: flex;
    flex-wrap: nowrap;
    height: 1.5rem;
  }

  &__actions {
    justify-content: flex-end;
  }

  @include media-breakpoint-down(lg) {
    &__button {
      display: none !important;
    }
  }

  @include media-breakpoint-down(md) {
    &__center {
      display: none !important;
    }
  }

  @include media-breakpoint-down(sm) {
    &__content {
      align-items: flex-end;
    }

    &__actions {
      margin-top: 1.25rem;
      justify-content: space-between;
      width: 100%;
    }

    &__shape {
      display: none;
    }
  }
}
</style>
