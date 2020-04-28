<template>
  <form @submit.prevent="onsubmit()">
    <va-input
      v-model="bitsid"
      type="bitsid"
      :label="$t('BITSID')"
      :error="!!bitsidErrors.length"
      :error-messages="bitsidErrors"
    />

    <va-input
      v-model="hostel"
      type="hostel"
      :label="$t('HOSTEL ROOM NUMBER')"
      :error="!!hostelErrors.length"
      :error-messages="hostelErrors"
    />

    <va-select
      :label="$t('Select R or L or None')"
      v-model="simpleSelectModel"
      textBy="description"
      :options="simpleOptions"
    />

    <va-input
      v-model="mobile"
      type="mobile"
      :label="$t('MOBILE NUMBER')"
      :error="!!mobileErrors.length"
      :error-messages="mobileErrors"
    />

    <div class="d-flex justify--center mt-3">
      <va-button type="submit" class="my-0">{{ $t('Confirm Details') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      bitsid: [],
      hostel: '',
      mobile: '',
      bitsidErrors: [],
      hostelErrors: [],
      mobileErrors: [],
      simpleSelectModel: '',
      simpleOptions: [
        {
          id: 1,
          description: 'R',
        },
        {
          id: 2,
          description: 'L',
        },
        {
          id: 3,
          description: 'Not Applicable',
        },
      ],
    }
  },
  methods: {
    onsubmit () {
      if (this.bitsid) this.bitsidErrors = []
      else this.bitsidErrors = ['Enter a valid BITSID']

      if (this.mobile > 1000000000 && this.mobile < 9999999999) this.mobileErrors = []
      else this.mobileErrors = ['Enter a valid Mobile Number']

      if (this.hostel > 0 && this.hostel < 600) this.hostelErrors = []
      else this.hostelErrors = ['Enter a valid Hostel Number']

      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },
  computed: {
    formReady () {
      return !(this.bitsErrors.length || this.hostelErrors.length || this.mobileErrors.length)
    },
  },
}
</script>

<style lang="scss">
</style>
