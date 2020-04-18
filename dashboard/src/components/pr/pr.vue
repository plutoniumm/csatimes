<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('PR Drive')">
          <form>
            <div class="row">
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="simple"
                  placeholder=""
                />
              </div>
              <div class="flex md4 sm6 xs12">
                <va-input
                  v-model="withDescription"
                  placeholder="Text Input (with description)"
                  :messages="messages"
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
import Axios from 'axios'

export default {
  name: 'form-elements',
  data () {
    return {
      withDescription: '',
      messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua.'],
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
    }
  },
  methods: {
  },
  mounted() {
      axios
      .get()
  }
}
</script>

<style>
  .row.row-inside {
    max-width: none;
  }
</style>
