<template>
  <div>
    <div>
      <div class="row">
        <div class="flex xs12 sm6">
          <va-card title="GDPR Compliance" data-aos="fade-right">
            <table class="va-table">
              <thead>
                <tr>
                  <th>Law</th>
                  <th>Status</th>
                  <th>Reference</th>
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
        { State: 'We do not use Cookies', color: 'green', Badge: 'Compliant', Location: 'Recital 30' },
        { State: 'We do not Sell any data collected on the Website', color: 'green', Badge: 'Compliant', Location: 'Recital 23' },
        { State: 'We collect only the data we NEED for processing', color: 'green', Badge: 'Compliant', Location: 'Recital 23' },
        { State: 'All Web Analytics Tracking is Anonymous', color: 'green', Badge: 'Compliant', Location: 'Recital 26' },
        { State: 'You have a right to be Forgotten', color: 'red', Badge: 'Non Compliant', Location: 'Recital 65' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: #8ecffc;
}
</style>
