<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <!-- <va-card class="flex xs12" style="background: linear-gradient(to right, rgb(52, 181, 229), rgb(46, 132, 224));">
          <span class="heading">Developers</span>
        </va-card> -->
        <div class="flex md4 offset--md4" style="margin-right: 5%;">
          <va-card style="background: #000000; text-align: center;">
            <h2 style="color: #ffffff;">WEB</h2>
          </va-card>
        </div>
        <div class="flex md4 offset--xs2">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/manav.jpg')" width='170px'/>
            </div>
            <div class="details">
              <h2><span  style="font-weight: 600; font-size: 20px; text-transform: uppercase; color: #777777;">Manav Sekseria</span></h2>
            </div>
          </div>
        </div>
        <div class="flex md4">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/aviral.jpeg')" width='170px'/>
            </div>
            <div class="details">
              <h2><span style="font-weight: 600; font-size: 20px; text-transform: uppercase; color: #777777;">Aviral Kumar Goel</span></h2>
            </div>
          </div>
        </div>

        <div class="flex md4 offset--md4" style="margin-right: 15%;">
          <va-card style="background: #000000; text-align: center;">
            <h2 style="color: #ffffff;">DEVSOC COORDINATORS</h2>
          </va-card>
        </div>
        <div class="flex md4">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/ishant.jpg')" width='170px'/>
            </div>
            <div class="details">
              <h2>Ishant Gupta<br><span>Coordinator</span></h2>
            </div>
          </div>
        </div>

        <div class="flex md4">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/samesh.jpg')" width='170px'/>
            </div>
            <div class="details">
              <h2>Samesh Lakhotia<br><span>Sub-Coordinator</span></h2>
            </div>
          </div>
        </div>

        <div class="flex md4">
          <div class="card">
            <div class="imgBx">
              <img :src="require('../../assets/pics/sarvesh.jpeg')" width='170px'/>
            </div>
            <div class="details">
              <h2>Sarvesh Shinde<br><span>Operations head</span></h2>
            </div>
          </div>
        </div>

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
      height: 100%;
      width: 100%;
    }
  }
}

body {
  background-color: rgb(32, 61, 85);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background: #212121;
  font-family: sans-serif;
}

.card {
  position: relative;
  width: 220px;
  height: 250px;
  background: #000000;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ad4646;
  transition: 0.5s;
  z-index: -1;
}

.card:hover::before,
.card:active::before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card:hover::after,
.card:active::after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222222;
  transition: 0.5s;
  z-index: 1;
}

.card:hover .imgBx,
.card:active {
  bottom: 80px;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
}

.card .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: #777777;
  text-transform: uppercase;
}

.card .details h2 span {
  font-weight: 500;
  font-size: 16px;
  color: #f38695;
  display: block;
  margin-top: 0;
}
</style>
