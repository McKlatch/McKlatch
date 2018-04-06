<template>
  <b-container :style="background" fluid>
    <b-row align-h="center">
      <b-col cols="12" lg="12" xl="10" class="mid-buffer">
        <prayer-survey/>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" lg="12" xl="10" class="mid-buffer">
        <prayer-feedback/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import appSubForm from '../SubscriptionForm.vue'
import prayerSurvey from './Survey.vue'
import prayerFeedback from './Feedback.vue'
import { trackEvent } from '../mixins/trackEvent'
import { backgroundImage } from '../mixins/backgroundImage'

export default {
  data () {
    return {
      bgImage: 'GreenHills.jpg'
    }
  },
  components: {
    appSubForm, prayerSurvey, prayerFeedback
  },
  mixins: [trackEvent, backgroundImage]
}
</script>

<style scoped>
.mid-buffer {
  margin-top: 2vw;
}
</style>
