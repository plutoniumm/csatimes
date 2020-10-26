<template>
  <div class="va-data-table">
    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data="data"
      data-manager="undefined"
      pagination-path=""
      :no-data-template="noDataLabel"
      :css="styles"
      :row-class="rowClass"
      @vuetable:row-clicked="rowClicked"
    >
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
      >
        <slot :name="slot" v-bind="scope" />
      </template>
    </vuetable>
  </div>
</template>

<script>
import Vuetable from './Vuetable'

export default {
  name: 'va-data-table',
  components: {Vuetable},
  props: {
    fields: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    noDataLabel: {
      type: String,
      default: undefined,
    },
    rowClass: {
      type: Function,
      default: undefined,
    },
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    styles () {
      return {
        tableClass: 'va-data-table__vuetable va-table',
      }
    },
  },
  watch: {
    data () {
      this.refresh()
    },
    fields () {
      this.refreshFields()
    },
  },
  methods: {
    refresh () {
      this.$refs.vuetable.refresh()
    },
    refreshFields () {
      this.$nextTick(() => {
        this.$refs.vuetable.normalizeFields()
      })
    },
    rowClicked (row) {
      this.$emit('row-clicked', row)
    },
  },
}
</script>

<style lang="scss">
.va-data-table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;

  &__vuetable {
    width: 100%;
    tbody {
      tr {
        font-weight: 300;
        &:nth-child(even) {
          background: #eef6;
        }
      }
    }
    th {
      background: #eefa;
      color: black;
      border: 0;
    }
    .vuetable-empty-result {
      padding: 4.5rem 1rem;
      font-size: 1rem;
      color: #888;
    }
  }
}
</style>
