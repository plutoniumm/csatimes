<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('PR Drive')">
          <form>
            <div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="withDescription"
                  placeholder="Enter the scanned QR code here"
                />
                <br>
                <va-checkbox
                  :label="$t('Do you want a nick?')"
                  v-model="checkbox"
                />
                <va-input
                  v-model="withDescription"
                  placeholder="Enter nick here"
                />
                <br>
                <va-select
                  :label="$t('Choose Size')"
                  v-model="simpleSelectModel"
                  textBy="description"
                  :options="simpleOptions"
                />
              </div>
            </div>
          </form>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'form-elements',
  data () {
    return {
      withDescription: '',
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
      checkbox: false,
    }
  },
  methods: {
  },
  mounted () {
    axios
      .get()
  },
}
</script>

<style>
  .row.row-inside {
    max-width: none;
  }
</style>
