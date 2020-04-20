<template>
  <form @submit.prevent="onsubmit()">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('Complaints')">
          <div class="flex">
            <va-input
              v-model="comptitle"
              placeholder="Enter your complaint title"
            />
          </div>
          <div class="flex">
            <va-input
              v-model="compdes"
              placeholder="Enter your complaint description"
            />
          </div>
          <div class="d-flex justify--center mt-3">
            <va-button type="submit" class="my-0">{{ $t('Submit') }}</va-button>
          </div>
        </va-card>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {

  methods: {
    // handleEditorInitialization (editor) {
    //   this.editor = editor
    //   this.$nextTick(() => {
    //     this.highlightSampleText()
    //   })
    // },

    // highlightSampleText () {
    //   const sampleText = document.getElementsByClassName('default-selection')[0]
    //   this.editor.selectElement(sampleText)
    // },
    onsubmit () {
      const payload = {
        complaint: { complaint_title: this.comptitle, complaint_details: this.compdes },
      }

      axios({
        url: 'http://csa.devsoc.club/api/v1/complaints/student/add',
        method: 'post',
        headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0wMVQxMjo1ODozMy40NjFaIiwiaWF0IjoxNTg1NzQ2MjAxfQ.T4y7ZdgybRiKdDcIBUid0brrPEaMvhPbZVWmGzc9kWM' },
        data: payload,
      })
      alert('Complaint registered')
    },
  },
  computed: {
    formReady () {
      return !(this.emailErrors.length || this.passwordErrors.length || this.agreedToTermsErrors.length)
    },
  },
}

</script>
