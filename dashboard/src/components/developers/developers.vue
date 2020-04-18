<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <va-card class="flex xs12">
          <span class="heading">Developers</span>
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <va-card>
              <h1>Backend</h1>
              <p>Sarvesh</p>
              <p>Samesh</p>
              <p>Arpit</p>
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3 row" style="display: inline-block;">
            <va-card>
              <h2>CSA App Frontend</h2>
              <p>Nipun</p>
              <p>Arjun</p>
              <p>Anshuman</p>
              <p>Yatik</p>
              <p>Garima</p>
              <p>Kartik</p>
              <p>Prabhutva</p>
            </va-card>
          </div>
          <!-- <h2 style="display: flex; justify-content: center;">WEB</h2> -->
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <va-card>
              <h2>WEB</h2>
              <img :src="require('../../assets/pics/manav.jpg')" width='170px'/>
              <h2>Manav Sekseria</h2>
            </va-card>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <va-card>
              <h2>WEB</h2>
              <img :src="require('../../assets/pics/aviral.jpeg')" width='170px'/>
              <h2>Aviral Kumar Goel</h2>
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

    .heading {
      font-size: 4rem;
      justify-content: center;
      display: flex;
    }

    .va-card {
      margin: 0;
      text-align: center;
      //height: 100%;
      width: 100%;
    }
  }
}
</style>
