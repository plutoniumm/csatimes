<template>
  <aside class="app-sidebar" :class="computedClass" :style="computedStyle">
    <ul class="app-sidebar__menu">
      <app-sidebar-link
        class="app-navbar__menu"
        @click.native="minimized = !minimized"
        :minimized="minimized"
        :icon="minimized ? '▶️' : '◀️'"
        title="Collapse"
      />
      <template v-for="(item, key) in items">
        <app-sidebar-link
          :key="key"
          :minimized="minimized"
          :active-by-default="item.name === $route.name"
          :icon="item.meta"
          :to="{ name: item.name }"
          :title="$t(item.displayName)"
        />
      </template>
    </ul>
  </aside>
</template>

<script>
import { navigationRoutes } from './NavigationRoutes'
import AppSidebarLink from './AppSidebarLink'
import { ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-sidebar',
  inject: ['contextConfig'],
  components: { AppSidebarLink },
  mixins: [ColorThemeMixin],
  props: {
    minimized: {
      type: Boolean,
      required: false,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  data () {
    return {
      items: navigationRoutes.routes,
    }
  },
  computed: {
    minimizedProxy: {
      get () {
        return !this.minimized
      },
      set (minimized) {
        this.$emit('update:minimized', minimized)
      },
    },
    computedClass () {
      return {
        'app-sidebar--minimized': this.minimized,
      }
    },
  },
  methods: {
    hasActiveByDefault (item) {
      return item.children.some(child => child.name === this.$route.name)
    },
  },
}

</script>

<style lang="scss">
.app-sidebar {
  color: white !important;
  overflow: auto;
  display: flex;
  max-height: 100%;
  flex: 0 0 12rem;
  background: #222;

  @include media-breakpoint-down(sm) {
    flex: 0 0 100%;
  }

  &--minimized {
    flex: 0 0 3.25rem;
  }

  &__menu {
    padding-top: 2rem;
    list-style: none;
    padding-left: 0;
    width: 100%;
  }
}
</style>
