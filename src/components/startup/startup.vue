<template>
  <div class="cards">
    <va-card>
      <div style="font-size: 2.5rem; text-align: center;">BITS GOA STARTUPS</div>
      <div class="cards-container row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->

        <template v-for="(startup, i) in startups">
          <div class="flex xs12" :key="startup.name">
            <va-card v-if="i%2==0">
              <va-card color="success">
                <div style="text-align: center;">
                  <h2>{{startup.Name1}}</h2>
                </div>
              </va-card>
              {{ startup.content1 }}
            </va-card>

            <va-card v-if="i%2!=0">
              <va-card color="danger">
                <div style="text-align: center;">
                  <h2>{{startup.Name2}}</h2>
                </div>
              </va-card>
              {{ startup.content2 }}
            </va-card>
          </div>
        </template>
      </div>
    </va-card>
  </div>
</template>

<script>
import data from './startup.json'
export default {
  name: 'cards',
  data () {
    return {
      startups: data,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
