export const backgroundImage = {
  computed: {
    background () {
      return {
        background: `url(/static/${this.bgImage})`,
        minWidth: '400',
        height: `calc(100% - ${this.$route.name !== 'Home' ? 63 : 0}px)`,
        position: 'absolute',
        backgroundColor: `${this.bgImage || '#518A6B'}`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'hard-light',
        overflowX: 'hidden'
      }
    }
  },
  methods: {
    initBG () {
      let imgOut
      switch (this.$mq) {
        case 'xs':
          imgOut = this.background.background.replace(/\./g, '@0,1x.')
          break
        case 'sm':
          imgOut = this.background.background.replace(/\./g, '@0,25x.')
          break
        case 'md':
          imgOut = this.background.background.replace(/\./g, '@0,5x.')
          break
        case 'lg':
          imgOut = this.background.background.replace(/\./g, '@0,75x.')
          break
        case 'xl':
          imgOut = this.background.background.replace(/\./g, '.')
          break
      }
      this.background.background = imgOut
    }
  },
  created () {
    this.initBG()
  }
}
