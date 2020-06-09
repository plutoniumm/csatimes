<template>
  <div class="xs12">
    <va-card class="flex xs12" style="text-align: center;">
      <va-card color="success">HALL OF FAME</va-card>
      <br />This is ten percent luck, twenty percent skill
      <br />Fifteen percent concentrated power of will
      <br />Five percent pleasure, fifty percent pain
      <br />And a hundred percent reason to remember the name!
    </va-card>
    <div class="row">
      <div class="flex xs12 sm6 lg4">
        <va-card v-for="hall in halls" :key="hall">
          <va-card color="success">
            <div style="text-align: center;">
              <h2>{{hall.Name}} ({{ hall.id }})</h2>
            </div>
          </va-card>
          {{ hall.content }}
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import data from './halloffame.json'
export default {
  name: 'cards',
  data () {
    return {
      halls: data,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
body {
  background-color: #ffdcab;
}
</style>
