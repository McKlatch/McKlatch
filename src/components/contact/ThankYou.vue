<template>
  <b-container :style="background" fluid>
    <b-row align-h="center">
      <b-col cols="12" md="8" lg="6" xl="5" class="mid-buffer">
        <b-card title="Thank You!" class="text-center" border-variant="success">
          <p>Your message is on it's way to us.</p>
          <b-button variant="success" to="contact">
            Take me back to where I was
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { backgroundImage } from '../mixins/backgroundImage'

export default {
  data () {
    return {
      bgImage: 'DeskTop.jpg'
    }
  },
  mixins: [backgroundImage]
}
</script>

<style scoped>
.mid-buffer {
  margin-top: 2vw;
}
</style>
