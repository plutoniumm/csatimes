<template>
  <va-card :title="$t('Important Links')">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 sm6">
        <div class="d-flex justify--end">
          <va-button-toggle
            outline
            v-model="mode"
            :options="modeOptions"
            style="max-width: 100%;"
          />
        </div>
      </div>
    </div>

    <va-data-table
      :fields="mode ? detailedFields : fields"
      :data="filteredData"
      hoverable
    >
      <!-- <template slot="icon">
        <va-icon name="fa fa-user" color="#303030" />
      </template> -->
    </va-data-table>
  </va-card>
</template>

<script>
import debounce from 'lodash/debounce'
import data from '../markup-tables/data.json'

export default {
  data () {
    return {
      users: data.slice(),
      term: null,
      mode: 0,
    }
  },
  computed: {
    fields () {
      return [
        //       {
        //     name: '__slot:icon',
        //     width: '30px',
        //     dataClass: 'text-center',
        //   },
        {
          name: 'name',
          title: this.$t('Website'),
          width: '30%',
        }, {
          name: 'email',
          title: this.$t('Link'),
          width: '30%',
        }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.name.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss">
</style>
