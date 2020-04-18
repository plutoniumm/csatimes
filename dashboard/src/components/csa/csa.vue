<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <va-card class="flex xs12">
          <span class="heading">Council of Student Affairs</span>
          <div class="flex xs12 sm6 lg4 xl3 offset--md3" style= "display: inline-block;">
            <va-card>
              <img :src="require('../../assets/pics/dhruv.png')" width='170px'/>
              <h2>Dhruv Kaluskar</h2>
              CSA President
              9665581729
              prez@goa.bits-pilani.ac.in
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style= "display: inline-block;">
            <va-card>
              <img :src="require('../../assets/pics/avi.png')" width='170px'/>
              <h2>Avi Chauhan</h2>
              CSA Vice President
              9665581729
              viceprez@goa.bits-pilani.ac.in
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 x13 offset--md3" style= "display: inline-block;">
            <va-card>
              <img :src="require('../../assets/pics/aanak.png')" width='170px'/>
              <h2>Aanak Sengupta</h2>
              Treasurer<div></div>
              7030530377<div></div>
              trez@goa.bits-pilani.ac.in
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style= "display: inline-block;">
            <va-card>
              <img :src="require('../../assets/pics/aseem.png')" width='170px'/>
              <h2>Aseem Juneja</h2>
              General Secretary
              7589201824
              gensec@goa.bits-pilani.ac.in
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
