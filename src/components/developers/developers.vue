<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <div class="row">
        <div class="flex xs12 sm6">
          <va-card
            title="Tracker Information"
            data-aos="fade-right"
            class="infboxes"
            style="left: -1em;"
          >
            <i class="fas fa-user-circle" style="color: blue; font-size: 3em;"></i>
            <h2 style="padding: 1em;">CSATimes Web DOES NOT use any of the following trackers</h2>
            <div class="row">
              <div class="flex xs12 xm6 lg4" v-for="law in laws" :key="law">
                <i :class="law.logo"></i>
                {{law.tracker}}
              </div>
            </div>
            <i class="far fa-times-circle" style="color: red; font-size: 1.5em;"></i>
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
            <va-card style="background: #8ecffc; text-align: center;">
              <h2 style="color: #000000;">WEB</h2>
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
            <va-card style="background: #8ecffc; text-align: center;">
              <h2 style="color: #000000;">DEVSOC (App)</h2>
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
        { tracker: 'Location', logo: 'fas fa-location-arrow' },
        { tracker: 'Financial Information', logo: 'fas fa-credit-card' },
        { tracker: 'Contacts', logo: 'fas fa-address-book' },
        { tracker: 'Cookies', logo: 'fas fa-cookie-bite' },
        { tracker: 'Device Information', logo: 'fas fa-laptop' },
        { tracker: 'Purchase Information', logo: 'fas fa-shopping-bag' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: black;
}

.tracker {
  padding-right: 1em;
}

.infboxes {
  background: -webkit-linear-gradient(#d0d0d0, #a0a0a0);
  text-align: center;
}
</style>
