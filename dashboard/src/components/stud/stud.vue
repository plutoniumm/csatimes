<template>
  <div class="modals">
    <div class="row">
      <div class="flex md12">
        <va-card
          class="modals-list larger-padding"
          :title="$t('Campus Life')"
        >
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showClubModal = true"/>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showDepartmentModal = true"/>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showEventsModal = true"/>
          </div>
          <div class="flex xs12 sm6 lg4 xl3" style="display: inline-block;">
            <a href="admin/stud/hall.vue"><img :src="require('../../assets/pics/aviral.jpeg')" width='170px'/></a>
          </div>
          <!-- <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showDepartmentModal = true"/>
          <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showEventsModal = true"/>
          <img :src="require('../../assets/pics/aviral.jpeg')" width='170px' @click="showSportsModal = true"/> -->

          <!-- <va-button color="info" @click="showDepartmentModal = true">
            {{ $t('Departments') }}
          </va-button>
          <va-button color="warning" @click="showEventsModal = true">
            {{ $t('Events') }}
          </va-button>
          <va-button color="success" @click="showSportsModal = true">
            {{ $t('Sports') }}
          </va-button> -->
        </va-card>
      </div>
    </div>
    <!--//Modals-->
    <va-modal
      v-model="showClubModal"
      size="large"
      :title=" $t('Clubs')"
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showDepartmentModal"
      size="large"
      :title=" $t('Departments') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
      :message=" $t('modal.message') "
    />
    <va-modal
      v-model="showEventsModal"
      size="large"
      :title=" $t('Events') "
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
    <va-modal
      v-model="showSportsModal"
      size="large"
      :title=" $t('Sports') "
      :message=" $t('modal.message') "
      :okText=" $t('modal.confirm') "
      :cancelText=" $t('modal.cancel') "
    />
  </div>
</template>

<script>
export default {
  name: 'modals',
  data () {
    return {
      show: true,
      showClubModal: false,
      showDepartmentModal: false,
      showEventsModal: false,
      showSportsModal: false,
    }
  },
  // redirect () {
  //   this.$router.push('C:/Users/vrlgo/Documents/GitHub/csatimes/dashboard/src/components/stud/hall.vue')
  // },
}
</script>
