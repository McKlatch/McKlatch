<template>
  <b-container fluid :style="background">
    <b-row class="text-center top">
      <b-col>
        <h1>David & Angela McClatchey</h1>
      </b-col>
    </b-row>
    <b-row no-gutters align-v="center" class="text-center upper">
      <b-col>
        <div id="back-bar"/>
        <hero-logo :emoji="heading.substring(0, 2)" />
      </b-col>
    </b-row>
    <b-row class="text-center lower">
      <b-col>
        <h1>{{ heading.substring(2) }}</h1>
      </b-col>
    </b-row>
    <b-row class="text-center bottom">
      <b-col>
        <b-button-group :size="menuSize">
          <b-button variant="info" to="/prayer">Subscribe to our Prayer Letter</b-button>
          <b-dropdown :size="menuSize" variant="success" right text="More" @click="trackEvent('openDropdown', 'more')">
            <b-dropdown-item to="/about">About Us</b-dropdown-item>
            <b-dropdown-item to="/mission">Our Mission</b-dropdown-item>
            <b-dropdown-item href="https://fluffy.mcklatch.com" target="_blank" rel="noopener noreferrer">Fluffy</b-dropdown-item>
            <b-dropdown-item to="/contact">Get in touch</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import heroLogo from './Hero.vue'
import { trackEvent } from '../mixins/trackEvent'
import { backgroundImage } from '../mixins/backgroundImage'
import { slogans } from '../mixins/slogans'

export default {
  data () {
    return {
      bgImage: 'PurpleEarth.jpg',
      bgColor: '#B200FF'
    }
  },
  computed: {
    menuSize () {
      let size = ''
      if (this.$mq === 'xs' || this.$mq === 'sm') size = 'sm'
      if (this.$mq === 'lg' || this.$mq === 'xl') size = 'lg'
      return size
    }
  },
  mixins: [trackEvent, backgroundImage, slogans],
  components: {
    heroLogo
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Copse', "Courier New", Courier, monospace;
  font-size: calc(1.8em + 2vw);
  color: #59ABE2;
  text-shadow: 2px 2px 1px #2D0E26;
}

.top {
  position:absolute;
  top: calc(2em + 18vmin);
  width: 100%;
}

.upper {
  position: relative;
  overflow: hidden;
  top: calc(5.8em + 20vmin);
  width: 100%;
  height: 20vmax;
}

.top-buffer {
  margin-top: 10vmax;
}

.mid-buffer {
  margin-top: 2.8vmax;
}

.x-buffer {
  margin-top: 5.4vmax;
}

.lower {
  position:absolute;
  top: calc(8em + 50vmin);
  width: 100%;
}

.bottom {
  position:absolute;
  top: calc(9em + 70vmin);
  width: 100%;
}

#back-bar {
  position: absolute;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(241, 135, 70, 4), rgba(0,0,0,0));
  /*background-color: #EEE;*/
  mix-blend-mode: lighten;
  z-index: 0;
  width: 100%;
  height: 12vmax;
}
</style>
