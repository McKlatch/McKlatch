<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col align-self="center">
        <iframe
          :width="windowWidth"
          :height="windowHeight"
          frameborder="0"
          :src="docLink"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0,
      docLink: 'https://docs.google.com/document/d/e/2PACX-1vSsEZ3NMhYz-92OfinVUg0btXVlD6kFfepl3J3R9cYVZqEuEt8PVw1DT3NgzIBioZipSOfGsrD1vsq0/pub?embedded=true'
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  methods: {
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth - 29.5
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  }
}
</script>

<style>

</style>