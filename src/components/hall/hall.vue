<template>
  <div class="xs12">
    <va-card class="flex xs12" style="text-align: center;">
      <va-card color="info"><h2>HALL OF FAME</h2></va-card>
      <br />This is ten percent luck, twenty percent skill
      <br />Fifteen percent concentrated power of will
      <br />Five percent pleasure, fifty percent pain
      <br />And a hundred percent reason to remember the name!
    </va-card>
    <div class="flex xs12 sm6 lg4" v-for="hall in halls" :key="hall">
      <va-card >
        <va-card color="success">
          <div style="text-align: center;">
            <h3>{{hall.Name}} ({{ hall.id }})</h3>
          </div>
        </va-card>
        {{ hall.content }}
      </va-card>
      <br>
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
  background-color: #8ecffc;
}
</style>
