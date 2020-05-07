<template>
  <div>
    <div class="row">
      <div class="flex xs12">
        <va-card
          :title="$t('Campus Life')"
          color="info"
        >
          <va-card>
            <img :src="require('../../assets/pics/hof.jpg')" width='170px'>
            <router-link :to="{ path: '../hall'}" append exact>
              <va-button color="danger"> Hall of Fame</va-button>
            </router-link>
          </va-card>
          <va-card>
            <router-link :to="{ path: '../startup'}" append exact>
              <va-button color="warning"> BITS Goa Startups</va-button>
            </router-link>
          </va-card>
          <va-card>
            <router-link :to="{ path: '../humanities'}" append exact>
              <va-button color="success"> Humanities Electives</va-button>
            </router-link>
          </va-card>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
body {
  background-color: rgb(32, 61, 85);
}

</style>
