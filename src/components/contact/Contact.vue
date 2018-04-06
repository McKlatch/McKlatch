<template>
  <b-container :style="background" fluid>
    <b-row align-h="center">
      <b-col cols="12" md="8" lg="6" xl="5">
        <b-row>
          <b-col class="mid-buffer">
            <b-card title="Contact Us" class="text-center" border-variant="info">
              <p>We like to hear from people who care about us.
              Our email address can be copied by <a Id="emailClip" href='' @click.prevent="trackEvent('copyEmail', 'sharedEmail')" v-clipboard="ourEmail">clicking here</a>, paste it wherever you email.</p>
              <b-tooltip target="emailClip" title="copy to clipboard"></b-tooltip>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mid-buffer">
            <contact-form v-if="!messageSent" />
            <b-card v-else border-variant="warning" header="Your message is on it's way to us" header-bg-variant="warning" class="text-center">
              <b-button variant="outline-info" @click="messageSent = !messageSent">
                I would like to send you another message
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="8" lg="6" xl="5">
        <b-row>
          <b-col class="mid-buffer">
            <david-mc/>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mid-buffer">
            <angela-mc/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import contactForm from './ContactForm.vue'
import davidMc from './David.vue'
import angelaMc from './Angela.vue'
import { trackEvent } from '../mixins/trackEvent'
import { backgroundImage } from '../mixins/backgroundImage'

export default {
  data () {
    return {
      ourEmail: 'DavidAndAngela@McKlatch.com',
      bgImage: 'DeskTop.jpg',
      messageSent: false
    }
  },
  components: {contactForm, davidMc, angelaMc},
  mixins: [trackEvent, backgroundImage]
}
</script>

<style scoped>
.mid-buffer {
  margin-top: 2vw;
}
</style>
