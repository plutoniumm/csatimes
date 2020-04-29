<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <va-card class="flex xs12" style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224));">
          <span class="heading">Developers</span>
          <div class="flex xs12">
            <va-card>
              <h2>Devsoc Coordinators</h2>
              <br>
              <div style="display: inline-block; margin-right: 5%;">
                <img :src="require('../../assets/pics/ishant.jpg')" width='170px'/>
                <h2>Ishant Gupta</h2>
                Coordinator
              </div>
              <div style="display: inline-block; margin-right: 5%;">
                <img :src="require('../../assets/pics/samesh.jpg')" width='170px'/>
                <h2>Samesh Lakhotia</h2>
                Sub-Coordinator
              </div>
              <div style="display: inline-block;">
                <img :src="require('../../assets/pics/sarvesh.jpeg')" width='170px'/>
                <h2>Sarvesh Shinde</h2>
                Operations Head
              </div>
            </va-card>
          </div>
          <div class="flex xs12">
            <va-card>
              <h2>WEB</h2>
              <br>
              <div style="display: inline-block; margin-right: 5%;">
                <img :src="require('../../assets/pics/manav.jpg')" width='170px'/>
                <h2>Manav Sekseria</h2>
              </div>
              <div style="display: inline-block;">
                <img :src="require('../../assets/pics/aviral.jpeg')" width='170px'/>
                <h2>Aviral Kumar Goel</h2>
              </div>
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

body {
  background-color: rgb(32, 61, 85);
}
</style>
