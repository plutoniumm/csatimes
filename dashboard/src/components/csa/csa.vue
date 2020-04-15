<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <va-card class="flex xs12">
          <span class="heading">Council of Student Affairs</span>
          <div class="flex xs12 sm6 lg4 xl3 offset--md4">
            <va-card>
              <img :src="require('../../assets/pics/dhruv.png')" width='170px'/>
              <h2>Dhruv Kaluskar</h2>
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3 offset--md4">
            <va-card>
              <img :src="require('../../assets/pics/avi.png')" width='170px'/>
              <h2>Avi Chauhan</h2>
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3 offset--md4">
            <va-card>
              <img :src="require('../../assets/pics/aanak.png')" width='170px'/>
              <h2>Aanak Sengupta</h2>
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3 offset--md4">
            <va-card>
              <img :src="require('../../assets/pics/aseem.png')" width='170px'/>
              <h2>Aseem Juneja</h2>
            </va-card>
          </div>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
    height: 100%;

    .heading {
      font-size: 4rem;
      justify-content: center;
      display: flex;
    }

    .va-card {
      margin: 0;
      text-align: center;
      height: 100%;
    }
  }
}
</style>
