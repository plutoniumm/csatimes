<template>
  <div>
    <div>
      <div class="row" style="justify-content: center;">
        <div class="flex xs12 sm6">
          <va-card title="GDPR Compliance" data-aos="fade-left">
            <table class="va-table">
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Location</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="law in laws" :key="law">
                  <td>{{ law.State }}</td>
                  <td>
                    <va-badge :color="law.color">{{ law.Badge }}</va-badge>
                  </td>
                  <td>{{ law.Location }}</td>
                </tr>
              </tbody>
            </table>
          </va-card>
        </div>
        <div class="flex xs12 sm6">
          <va-card
            title="Site Information"
            style=" text-align: center; justify-content: center;"
            data-aos="fade-left"
          >
            <table class="va-table">
              <thead>
                <tr>
                  <th>{{ 'Feature' }}</th>
                  <th>{{ 'Value' }}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{{ 'Wesbite Version' }}</td>
                  <td>
                    <va-badge color="green">{{ '1.0.0 Little Boy' }}</va-badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </va-card>
        </div>
      </div>
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <div class="row" style="justify-content: center;">
          <div class="flex xs12 sm6 lg4 xl3">
            <va-card style="background: #000000; text-align: center;">
              <h2 style="color: #ffffff;">WEB</h2>
            </va-card>
          </div>
        </div>
        <div class="row" style="justify-content: center;">
          <div class="flex xs12 sm6 lg4 xl3">
            <div class="card1">
              <div class="imgBx">
                <img :src="require('../../assets/pics/manav.jpg')" width="170px" />
              </div>
              <div class="details">
                <h2>
                  <span
                    style="font-weight: 600; font-size: 20px; text-transform: uppercase; color: #777777;"
                  >Manav Seksaria</span>
                  <br />
                  <span>CSA Webmaster</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="flex xs12 sm6 lg4 xl3">
            <div class="card1">
              <div class="imgBx">
                <img :src="require('../../assets/pics/aviral.jpeg')" width="170px" />
              </div>
              <div class="details">
                <h2>
                  <span
                    style="font-weight: 600; font-size: 20px; text-transform: uppercase; color: #777777;"
                  >Aviral Kumar Goel</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row" style="justify-content: center;">
          <div class="flex xs12 sm6 lg4 xl3">
            <va-card style="background: #000000; text-align: center;">
              <h2 style="color: #ffffff;">DEVSOC (App)</h2>
            </va-card>
          </div>
        </div>
        <div class="row" style="justify-content: center;">
          <div class="flex xs12 sm6 lg4 xl3">
            <div class="card1">
              <div class="imgBx">
                <img :src="require('../../assets/pics/ishant.jpg')" width="170px" />
              </div>
              <div class="details">
                <h2>
                  Ishant Gupta
                  <br />
                  <span>Coordinator</span>
                </h2>
              </div>
            </div>
          </div>

          <div class="flex xs12 sm6 lg4 xl3">
            <div class="card1">
              <div class="imgBx">
                <img :src="require('../../assets/pics/samesh.jpg')" width="170px" />
              </div>
              <div class="details">
                <h2>
                  Samesh Lakhotia
                  <br />
                  <span>Sub-Coordinator</span>
                </h2>
              </div>
            </div>
          </div>

          <div class="flex xs12 sm6 lg4 xl3">
            <div class="card1">
              <div class="imgBx">
                <img :src="require('../../assets/pics/sarvesh.jpeg')" width="170px" />
              </div>
              <div class="details">
                <h2>
                  Sarvesh Shinde
                  <br />
                  <span>Operations head</span>
                </h2>
              </div>
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
      laws: [
        { State: 'We do not use Cookies', color: 'green', Badge: 'Compliant', Location: 'Recital 30' },
        { State: 'We do not Sell any data collected on the Website', color: 'green', Badge: 'Compliant', Location: 'Recital 23' },
        { State: 'We collect only the data we NEED for processing', color: 'green', Badge: 'Compliant', Location: 'Recital 23' },
        { State: 'All Analytics Tracking is Anonymous', color: 'green', Badge: 'Compliant', Location: 'Recital 26' },
        { State: 'You have a right to be Forgotten', color: 'red', Badge: 'Non Compliant', Location: 'Recital 65' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.card1s-container {
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
  background-color: #f7ecdb;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
}

.card1 {
  position: relative;
  width: 220px;
  height: 250px;
  background: #000000;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card1::before,
.card1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #ffdcab;
  transition: 0.5s;
  z-index: -1;
}

.card1:hover::before,
.card1:active::before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card1:hover::after,
.card1:active::after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.card1 .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 80px;
  right: 10px;
  background: #222222;
  transition: 0.5s;
  z-index: 1;
}

.card1:hover .imgBx,
.card1:active {
  bottom: 10px;
}

.card1 .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card1 .details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
}

.card1 .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: #777777;
  text-transform: uppercase;
}

.card1 .details h2 span {
  font-weight: 500;
  font-size: 16px;
  color: #ffdcab;
  margin-top: 0;
}
</style>
