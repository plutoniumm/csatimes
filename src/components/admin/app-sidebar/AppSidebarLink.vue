<template>
  <li
    class="app-sidebar-link"
    style="overflow: hidden"
    :class="computedLinkClass"
  >
    <router-link
      class="app-sidebar-link__item"
      :style="computedLinkStyles"
      :to="to"
      :target="target"
    >
      <div>
        <va-icon v-if="icon" :name="icon" style="margin: 0.5rem">{{
          icon
        }}</va-icon>
      </div>
      <div
        class="app-sidebar-link__item-title"
        style="color: white"
        v-if="title"
      >
        <slot>{{ title }}</slot>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  data () {
    return {
      colorThemeDefault: 'primary',
      colorDefault: '#000000',
    }
  },
  name: 'app-sidebar-link',
  inject: ['contextConfig'],
  props: {
    to: {
      type: [Object, String],
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
    icon: {
      type: [Object, String],
      default: '🌐',
    },
    title: {
      type: String,
    },
    minimized: {
      type: Boolean,
    },
    color: {
      type: String,
    },
  },
  computed: {
    computedLinkClass () {
      return {
        'app-sidebar-link--minimized': this.minimized,
      }
    },
    colorComputed () {
      if ( this.$themes && this.$themes[ this.color ] ) {
        return this.$themes[ this.color ]
      }
      if ( this.color ) {
        return this.color
      }
      if ( this.$themes && this.$themes[ this.colorThemeDefault ] ) {
        return this.$themes[ this.colorThemeDefault ]
      }
      return this.colorDefault
    },
  },
}
</script>

<style lang="scss">
li {
  color: #888fff;
}

.app-sidebar-link {
  display: flex;

  &__item {
    position: relative;
    display: flex;
    min-height: 3rem;
    cursor: pointer;
    padding: 0.75rem 0.75rem 0.75rem 0.75rem; // 0.75 - border size as 0.25
    align-items: center;
    text-decoration: none;
    border-left: 0.25rem solid transparent;
    color: rgba(255, 255, 255, 0.65);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 15rem;
    &:hover {
      background: #000;
      transition: background 0.3s ease;
    }

    .app-sidebar-link--minimized & {
      justify-content: center;
      padding-left: 0.5rem;
      width: 3.5rem;
    }

    &-icon {
      width: 1.5rem;
      text-align: center;
      font-size: $sidebar-menu-item-icon-size;
    }

    &-icon-right {
      display: block;
      font-weight: bold;
      position: absolute;
      right: 0.75rem;
      bottom: auto;

      .app-sidebar-link--minimized & {
        bottom: 1.25rem;
        right: auto;
        height: 0;
        display: block;
        text-align: center;
        font-weight: normal;
      }
    }
    &-title {
      line-height: 1.5em;
      .app-sidebar-link__item-icon + & {
        margin-left: 0.5rem;
      }
      .app-sidebar-link--minimized & {
        display: none;
      }
    }
  }
}
</style>
