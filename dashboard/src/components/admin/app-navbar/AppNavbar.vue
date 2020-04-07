<template>
  <nav
    class="app-navbar"
    :style="navbarStyle"
  >
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
        /><span style="color: white;">Council for Student Affairs</span>
      </div>
      <div class="app-navbar__center lg5 md4">
        <span
          class="app-navbar__text"
          :style="{color: 'White'}"
        >{{ new Date() | moment("dddd, MMMM Do YYYY, h:mm A")}}</span>
      </div>
      <app-navbar-actions
        class="app-navbar__actions md5 lg4"
        :user-name="userName"
      />
    </div>
    <div
      class="app-navbar__shape"
      :style="shapeStyle"
    ></div>
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
      userName: 'Vasili S',
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
    navbarStyle () {
      const style = {
        backgroundColor: 'white',
      }

      if (this.contextConfig.gradient) {
        style.backgroundColor = colorShiftHsl(this.$themes.dimgrey, {
          s: -13,
          l: 15,
        }).css
      }
      return style
    },

    shapeStyle () {
      return {
        borderTopColor: this.contextConfig.gradient ? colorShiftHsl(this.$themes.dimgrey, {
          h: -1,
          s: -11,
          l: 10,
        }).css : 'transparent',
      }
    },
  },
}
</script>

<style lang="scss">
$nav-border-side-width: 3.1875rem;

.app-navbar {
  transition: background-color 0.3s ease; /* sidebar's bg color transitions as well -> consistency */
  display: flex;
  padding: 1rem 1rem;
  z-index: 1;

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

  &__mailto-link:hover {
    filter: brightness(85%);
  }

  &__shape {
    transition: border-top-color 0.3s ease; /* sidebar's bg color transitions as well -> consistency */
    width: 33%;
    max-width: 467px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    border-top: 4.215rem solid transparent; // hardcoded size
    border-left: $nav-border-side-width solid transparent;
    border-right: $nav-border-side-width solid transparent;
    height: 0;
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
