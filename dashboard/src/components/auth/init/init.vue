<template>
  <div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  mounted () {
    if (screen.width < 760) {
      this.$router.push({ name: 'login1' })
    } else {
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style lang="scss">

</style>
