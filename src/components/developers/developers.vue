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

      <template v-for="credit in credits">
        <div :key="credit">
          <div class="flex xs12 sm6 lg4 xl3">
            <va-card style="text-align: center;" class="boxes">
              <h2>{{credit.Cat}}</h2>
              <span v-for="person in credit.People" :key="person">
                {{person}}<br>
              </span>
            </va-card>
          </div>

        </div>

      </template>
    </div>
  </div>
</template>

<script>
import data1 from './credits.json'

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

.boxes {
  background: -webkit-linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 1));
  color: white;
}
</style>
