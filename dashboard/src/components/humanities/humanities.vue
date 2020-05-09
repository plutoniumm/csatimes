<template>

  <div class="cards">
    <va-card style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224));">
      <div style="font-size: 2.5rem; text-align: center;">HUMANITIES ELECTIVES</div>
      <div class="cards-container row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->

        <template v-for="(elective, i) in electives">
          <div class="flex xs12" :key="elective.name">
            <va-card v-if="i%2==0"
            >
              <va-card color="success">
                <div style="text-align: center;">
                  <h2>{{elective.Name1}} : {{elective.Code1}}<br>
                    IC: {{elective.IC1}}</h2></div></va-card>
              {{ elective.content1 }}
            </va-card>

            <va-card
              v-if="i%2!=0"
            >
              <va-card color="danger">
                <div style="text-align: center;">
                  <h2>{{elective.Name2}} : {{elective.Code2}}<br>
                    IC: {{elective.IC2}}</h2></div></va-card>
              {{ elective.content2 }}
            </va-card>
          </div>
        </template>

      </div>
    </va-card>

  </div>
</template>

<script>
import data from './humanities.json'
export default {
  name: 'cards',
  data () {
    return {
      electives: data,
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
