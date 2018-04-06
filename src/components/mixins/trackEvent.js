export const trackEvent = {
  methods: {
    trackEvent (eventCategory, eventAction) {
      this.$ga.event(eventCategory, eventAction)
      // console.log(eventCategory, eventAction, eventLabel)
    }
  }
}
