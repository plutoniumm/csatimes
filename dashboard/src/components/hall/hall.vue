<template>

  <div class="cards">
    <va-card style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224));">
      <div style="font-size: 2.5rem; text-align: center; color: white;">HALL OF  FAME</div>
      <div class="cards-container row d-flex wrap align--start">
        <div style="text-align: center; color: white;">
          This is ten percent luck, twenty percent skill<br>
          Fifteen percent concentrated power of will<br>
          Five percent pleasure, fifty percent pain<br>
          And a hundred percent reason to remember the name!
        </div>
        <!-- eslint-disable vue/valid-v-for -->

        <template v-for="hall in halls">
          <div class="flex xs12" :key="hall.name">
            <va-card>
              <va-card color="success">
                <div style="text-align: center;">
                  <h2>{{hall.Name}} ({{ hall.id }})</h2></div></va-card>
              {{ hall.content }}
            </va-card>

          </div>
        </template>

      </div>
    </va-card>

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
.cards-container {
  .va-card {
    margin: 0;
  }
}

body {
  background-color: rgb(32, 61, 85);
}
</style>
