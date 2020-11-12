const headings = [
  '🙏Jesus People',
  '🏰Lovely Couple',
  '✍️Designing Teaching ',
  '🍇Food Growers',
  '🦔Hedgehog Owners',
  '🗾MissionariesInABox',
  '📖Bible Readers',
  '🙃Unrestrained',
  '🌐International is Local',
  '🥧Eat Well',
  '🤠Cross-Cultural',
  '👻Fearless',
  '💍Since 2013',
  '🚯No Littering',
  '🌱Always Learning',
  '🌇Up Late Sometimes',
  '🛎️Get in Touch',
  '⛱️Wear Sunscreen',
  '💾Remember These?!',
  '🔎Seeking Truth',
  '🕯️Directed by God',
  '🗳️Vote!',
  '✂️Cut on the Line',
  '🛠️Fix all the Things',
  '🔬Analytical',
  '🎓BA(hons) Applied Theology',
  '🍁Syrup Enthusiasts',
  '🍂Leaf Kickers',
  '🥔Potential Photographers',
  '✋️Ask Me Anything',
  '🎒It\'s in the bag',
  '🗨️Say What???',
  '🎈Get the Ladder',
  '🔥Lit!',
  '🌶️Too Spicy',
  '🌡️Temperance is a Virtue',
  '☕️One Tea & One Coffee',
  '🍹Exotic',
  '🍳Let\'s Cook',
  '🔪Caution: Sharp',
  '🥓Good Food',
  '🎨Creative and Colorful',
  '🍪Smart Cookies',
  '🍌There\'s Always Money',
  '🍋Making Lemonade',
  '💛Heart of Gold',
  '⚜️Always be Prepared',
  '🦄British Passports',
  '🗝️In Key',
  '🦋Effective Somehow',
  '🏡Homeowners',
  '🐌Snail Hotel',
  '💥Ultimate Ready',
  '✌️Good to See You!',
  '🎃Any Questions?'
]

export const slogans = {
  data () {
    return {
      heading: '💢JS Failure',
      headings
    }
  },
  methods: {
    genSlogan () {
      const rand = Math.floor(Math.random() * this.headings.length)
      const slogan = this.headings[rand]
      this.heading = slogan !== this.heading ? slogan : this.headings[0]
    }
  },
  created () {
    this.genSlogan()

    this.$options.interval = setInterval(function () {
      this.genSlogan()
    }.bind(this), 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
