<template>
  <div class="xs12">
    <va-card color="info" style="text-align: center; font-size: 3rem;">
      <h2>HALL OF FAME</h2>
    </va-card>
    <br />
    <va-card color="danger" class="offset--md4 flex md4" style="text-align: center;">
      <br />This is ten percent luck, twenty percent skill
      <br />Fifteen percent concentrated power of will
      <br />Five percent pleasure, fifty percent pain
      <br />And a hundred percent reason to remember the name!
    </va-card>

    <br />
    <br />
    <div class="row">
      <div class="flex xs12 sm6 lg4" v-for="hall in halls" :key="hall">
        <va-card no padding>
          <va-card color="success">
            <div style="text-align: center;">
              <h3>{{hall.Name}} ({{ hall.id }})</h3>
            </div>
          </va-card>
          <br />
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
  background-color: black;
}
</style>
