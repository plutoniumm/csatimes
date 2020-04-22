<template>

  <div class="cards">
    <div style="font-size: 4rem; text-align: center;">HALL OF  FAME</div>
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template>
        <div id="halloffameid">

          <div class="flex xs12">
            <va-card
              color="success"
            >
              <va-card color="info">
                <div style="text-align: center;">
                  <h2>Header</h2></div></va-card>
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>

          <div class="flex xs12">
            <va-card
              color="danger"
            >
              <va-card color="dark">
                <div style="text-align: center;">
                  <h2>Header</h2></div></va-card>
              {{ $t('cards.contentTextLong') }}
            </va-card>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script  src="halloffame.js"></script>
<script>
export default {
  name: 'cards',
  data () {
    return{}
  },
  methods: {
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}
</style>
