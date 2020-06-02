<template>
  <div>
    <va-card slot="after" stripe="info" class="mb-0">
      <h2>Aseem Juneja</h2>
      <div>
        <div><span style="color: #a7a7a7;">Yesterday, 10:00 PM</span>
          <hr>
          <strong>Title of the post below</strong> <br>
          This is the post detail. This is the post detail. This is the post detail. This is the post detail. This is the post detail. This is the post detail. This is the post detail. This is the post detail
        </div>
        <span style="color: #a7a7a7;">Brought to you by CSA</span>
      </div>
    </va-card>
  </div>
</template>

<script>
export default {
  name: 'CampusNews',
  components: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
body {
  background-color: #f7ecdb;
}

.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;
  }
}

.row.row-inside {
  max-width: 20px;
}

</style>
