<template>
  <div class="xs12">
    <va-card color="info" style="text-align: center; font-size: 3rem;"><h2>BITS GOA STARTUPS</h2></va-card>

    <br>
    <br>
    <div class="row">
      <div class="flex xs12 sm6 lg4" v-for="startup in startups" :key="startup">
        <va-card no padding>
          <va-card color="warning">
            <div style="text-align: center;">
              <h3>{{startup.Name}}</h3>
            </div>
          </va-card>
          <br>
          {{ startup.content }}
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import data from './startup.json'
export default {
  name: 'cards',
  data () {
    return {
      startups: data,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
body {
  background-color: #8ecffc;
}
</style>
