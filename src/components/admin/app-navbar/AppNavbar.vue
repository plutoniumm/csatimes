<template>
  <nav class="app-navbar">
    <div class="app-navbar__content row">
      <div class="app-navbar__menu-container">
        <va-icon-menu
          class="app-navbar__menu"
          color="black"
          v-if="!minimized"
          @click.native="$emit('update:minimized', !minimized)"
        />

        <va-icon-menu-collapsed
          class="app-navbar__menu"
          v-if="minimized"
          color="black"
          @click.native="$emit('update:minimized', !minimized)"
        />
        <span style="color: black;">CSATimes</span>
      </div>
      <app-navbar-actions class="app-navbar__actions md5 lg4" color="black" :user-name="userName" />
    </div>
  </nav>
</template>

<script>
import VaIconMenu from '../../../iconset/VaIconMenu'
import VaIconMenuCollapsed from '../../../iconset/VaIconMenuCollapsed'
import AppNavbarActions from './components/AppNavbarActions'
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

<style lang="scss">
$nav-border-side-width: 3.2rem;

.app-navbar {
  display: flex;
  padding: 1rem 1rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  &__content {
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    flex: 1 1 auto;
  }

  &__center {
    display: flex;
    margin-left: 3rem;
    justify-content: space-between;
    align-items: center;
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

  &__logo {
    width: 9.5rem;
    height: auto;
    align-items: center;

    & * {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: block;
    }
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
