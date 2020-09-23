<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <div class="row">
        <div class="flex xs12 sm6">
          <va-card data-aos="fade-right" class="infboxes">
            <i class="fas fa-user-circle" style="color: blue; font-size: 3em;"></i>
            <h2 style="padding: 1em;">
              CSATimes
              <u>Web</u> DOES NOT use any of the following trackers
            </h2>
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
          <va-card data-aos="fade-right" class="infboxes">
            <i class="fas fa-user-circle" style="color: blue; font-size: 3em;"></i>
            <h2 style="padding: 1em;">
              CSATimes
              <u>Web</u> DOES track and store following data
            </h2>
            <div class="row">
              <div class="flex xs12 sm6" v-for="law in tracks" :key="law">
                <i :class="law.logo"></i>
                {{law.tracker}}
              </div>
            </div>
            <i class="far fa-check-circle" style="color: lightgreen; font-size: 1.5em;"></i>
          </va-card>
        </div>

        <div class="flex xs12 sm6" v-for="credit in credits" :key="credit">
          <va-card
            :title="credit.cat"
            class="boxes"
            style="text-align: center; height: 11em; overflow: auto;"
          >
            <table class="va-table" style="width: 100%;">
              <tbody>
                <tr v-for="person in credit.people" :key="person">
                  <td v-if="person.image">
                    <img
                      :src="require('../../assets/pics/'+person.image)"
                      :alt="person.image"
                      width="25em"
                      height="25em"
                      style="border-radius: 11.25em;"
                    />
                  </td>
                  <td v-else>
                    <i class="fas fa-user" style="color: blue;"></i>
                  </td>
                  <td>{{ person.name }}</td>
                  <td>
                    <i class="fas fa-info-circle" style="color: blue;"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data1 from '../../data/credits.json'

export default {
  name: 'cards',
  data () {
    return {
      credits: data1,
      laws: [
        { tracker: 'Location', logo: 'fas fa-location-arrow' },
        { tracker: 'Financial Information', logo: 'fas fa-credit-card' },
        { tracker: 'Contacts', logo: 'fas fa-address-book' },
        { tracker: 'Cookies', logo: 'fas fa-cookie-bite' },
        { tracker: 'Device Information', logo: 'fas fa-laptop' },
        { tracker: 'Purchase Information', logo: 'fas fa-shopping-bag' },
      ],
      tracks: [
        { tracker: 'Form Data', logo: 'fab fa-wpforms' },
        { tracker: 'Login Data', logo: 'fas fa-sign-in-alt' },
        { tracker: 'Edit History', logo: 'fas fa-music' },
        { tracker: 'Grievance Data', logo: 'fas fa-heart-broken' },
      ],
    }
  },
}
</script>

<style lang="scss">
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

.boxes {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
}
</style>
