<template>
  <div class="xs12">
    <va-card
      color="info"
      style="
        text-align: center;
        font-size: 3rem;
        background-image: linear-gradient(to right, blue 0%, red 100%);
      "
    >
      <h2>BITS GOA STARTUPS</h2>
    </va-card>
    <div class="row">
      <div class="flex xs12 sm6 lg4" v-for="startup in startups" :key="startup">
        <va-card no-padding>
          <va-card color="warning" style="#222">
            <div style="text-align: center">
              <h3>{{ startup.Name }}</h3>
            </div>
          </va-card>
          <div style="padding: 0.5em; height: 125px">
            {{ startup.content }}
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../../data/startup.json'
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
  background-color: #111;
}
</style>
