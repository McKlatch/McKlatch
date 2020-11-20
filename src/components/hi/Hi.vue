<template>
  <div>
  <div class="background"></div>
    <div class="container">
      <!-- Header -->
      <div class="topline">
      <div class="userplate" @mouseover="highlightOn" @mouseout="highlightOff" v-clipboard="handle">
        <img :src="user.avatar" alt="David McClatchey" class="avatar">
        <p class="handle">{{ user.handle }}</p>
      </div>
      <h1 class="name">{{ user.name }}</h1>
      </div>
      <p class="bio">{{ user. bio }}</p>

      <!-- Links -->
      <a v-for="link in links" :key="link.text" :href="link.url" target="_blank" rel="noopener noreferrer" :class="(link.featured ? 'featured' : '')">{{ link.text }}</a>

      <!-- Channels -->
      <div class="channels">
        <a v-for="channel in channels" :key="channel.title" :href="channel.url" target="_blank" rel="noopener noreferrer" :title="channel.btnText"><img :src="channel.icon" :alt="channel.title" width="36vw"></a>
        <a title="Prayer Updates" @click="showPrayer = !showPrayer"><img src="/static/prayer.svg" alt="Prayer" width="36vw" :class="showPrayer ? 'highlightsimple' : ''"></a>
      </div>
      <transition name="fade">
        <!-- Begin Mailchimp Signup Form -->
        <div id="emailForm" v-if="showPrayer">
          <p class="emailTop">{{ !validEmail || !validName ? 'Provide your email address and full&nbsp;name' : 'Click Subscribe to join our prayer letter list' }}</p>
          <form action="https://mcklatch.us3.list-manage.com/subscribe/post?u=93caa82ac2938a4c54d34fab1&amp;id=5ba5e54022" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate ref="form">
          <div>
            <div>
              <label label-for="emailInput">Email:</label>
              <input name="EMAIL" id="emailInput" type="email" v-model.trim="email" required placeholder="email@example.com">
            </div>
            <div>
              <label label-for="nameInput">Full Name:</label>
              <input id="nameInput" type="text" v-model="fullName" required placeholder="Full Name">
            </div>
          </div>
            <div v-show="false">
              <label label-for="forenameInput">First Name:</label>
              <input name="FNAME" id="forenameInput" type="text" v-model="forename" required>
            </div>
            <div v-show="false">
              <label label-for="surnameInput">Last Name:</label>
              <input name="LNAME" id="surnameInput" type="text" v-model="surname" required>
            </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_93caa82ac2938a4c54d34fab1_5ba5e54022" tabindex="-1" value=""></div>
            <div class="clear">
              <input type="submit" :value="validEmail && validName ? 'Subscribe' : 'then click here'" name="subscribe" :disabled="!validEmail || !validName" :class="validEmail && validName ? 'livebutton' : 'deadbutton'">
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->
      </transition>
    </div>
  
  </div>
</template>
<script>
import { davidLinks } from '../mixins/davidLinks'
import { backgroundImage } from '../mixins/backgroundImage'
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Copse&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap'
      }
    ]
  },
  data () {
    return {
      email: '',
      forename: '',
      surname: '',
      showPrayer: false,
      handle: '@McKlatch'
    }
  },
  computed: {
    selectHighlights () {
      let queryString = 'img'
      this.user.socialsWithHandle.forEach(str => {
        queryString += `[alt="${str}"], `
      })
      queryString = queryString.replace(/,\s*$/, '')
      return queryString
    },
    fullName: {
    // getter
      get () {
        let name = `${this.forename} ${this.surname}`
        return name.charAt(0) === ' ' ? name.substr(1) : name
      },
    // setter
      set (str) {
        this.forename = str.substr(0, str.indexOf(' '))
        this.surname = str.substr(str.indexOf(' ') + 1)
      }
    },
    validName () {
      return this.fullName.trim().split(/\s+/).length >= 2
    },
    validEmail () {
      const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
      return re.test(this.email)
    }
  },
  methods: {
    highlightOn () {
      const highlightable = document.querySelectorAll(this.selectHighlights)
      highlightable.forEach((el) => el.classList.add('highlight'))
    },
    highlightOff () {
      const highlightable = document.querySelectorAll(this.selectHighlights)
      highlightable.forEach((el) => el.classList.remove('highlight'))
    },
    submit () {
      this.$refs.form.submit()
    }
  },
  mixins: [davidLinks, backgroundImage]
}
</script>
<style scoped>
.background {
  background-color: #16001E;
  background: url(/static/PurpleEarth.jpg) no-repeat center center fixed;
  background-size: cover;
  position: fixed; top: 0; right: 0; bottom: 0; left: 0;
  filter: blur(10px) brightness(0.7);
  transform: scale(1.07);
}

.topline {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.userplate {
  position: relative;
  width: min(max(12rem, 12vw), 72px);
  height: min(max(12rem, 12vw), 72px);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.userplate:hover .avatar {
  border: 5px solid #16001E;
  transition: all .2s ease-in-out;
}
.userplate:hover .handle {
  background-color: #16001E;
  transition: all .2s ease-in-out;
  color: #FFF;
}

.avatar {
  vertical-align: middle;
  width: min(max(10rem, 12vw), 72px);
  height: min(max(10rem, 12vw), 72px);
  border-radius: 50%;
  border: 5px solid #FCF3EE;
}

.handle {
  background-color: #FCF3EE;
  color: #16001E;
  font-size: min(max(0.5rem, 8vw), 10px);
  border-radius: 1vh;
  margin-top: -0.7vh;
}

.name {
  font-size: min(max(1rem, 8vw), 34px);
  font-family: 'Copse', serif;
  color: #FCF3EE;
  max-width: 400px;
  margin: 2vh auto;
  white-space: nowrap;
  padding-top: min(max(6rem, 6vw), 6px);
}

.bio {
  font-size: min(max(0.5rem, 5.5vw), 15px);
  font-family: 'Montserrat', sans-serif;
  color: #FCF3EE;
  max-width: 400px;
  margin: min(max(10rem, 12vw), 14px) auto;
  letter-spacing: min(max(0.1rem, 1vw), 1px);
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 4vh auto 0
}

#emailForm {
  max-width: 400px;
  margin: 0 auto;
  font-size: min(max(0.5rem, 5.5vw), 15px);
  font-family: 'Montserrat', sans-serif;
  color: #FCF3EE;
  letter-spacing: min(max(0.1rem, 1vw), 1px);
  padding: min(max(10rem, 12vw), 12px);
  border: 5px solid #FCF3EE;
}

.emailTop {
  margin-bottom: 0.8vh;
}

label {
  text-align: right;
}

.livebutton {
    background-color: #FCF3EE;
    display: block;
    margin: 0.4vh auto 0;
    padding: min(max(5rem, 6vw), 1px);
    font-size: min(max(0.5rem, 5.5vw), 15px);
    color: #16001E;
    border: 5px solid #FCF3EE;
    text-decoration: none;
    transition: all .2s ease-in-out;
    font-weight: 700;
    letter-spacing: min(max(0.1rem, 2.5vw), 1px);
    cursor: pointer;
}

.livebutton:hover {
    background-color: #16001E;
    color: #FCF3EE;
    border: 5px solid #FCF3EE;
}

.deadbutton {
    background-color: #16001E;
    display: block;
    margin: 0.4vh auto 0;
    padding: min(max(5rem, 6vw), 1px);
    font-size: min(max(0.5rem, 5.5vw), 15px);
    color: #FCF3EE;
    border: 5px solid #16001E;
    text-decoration: none;
    transition: all .2s ease-in-out;
    font-weight: 400;
    letter-spacing: min(max(0.1rem, 2.5vw), 1px);
    cursor: not-allowed;
}

a {
    display: block;
    max-width: 400px;
    margin: 1.5vh auto;
    padding: min(max(10rem, 12vw), 12px);
    font-size: min(max(0.5rem, 5.5vw), 14px);
    color: #FCF3EE;
    border: 5px solid #FCF3EE;
    text-decoration: none;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: min(max(0.1rem, 2.5vw), 1px);
}

a.featured {
    position: relative;
    background-color: rgba(252, 243, 238, 0.75);
    color: #16001E;
    font-weight: 900;
    animation: btnWiggle 3s infinite;
}

a.featured:before {
    content: "";
    position: absolute;
    top: 0.4vh;
    left: 0.4vh;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
}

a.featured:hover,
a:hover {
    background-color: rgba(22, 0, 30, 0.75);
    color: #FCF3EE;
    text-decoration: none;
}

.channels {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    margin: 0 auto
}

.channels a {
  flex: 1;
  padding: 1vh;
  margin: 1vh;
  border: none;
}

.channels img {
  filter: brightness(0) invert(1);
}

.channels img:hover {
  filter: brightness(1) invert(0);
}

.channels img.highlight {
  filter: brightness(1) invert(0);
  scale: 1.2;
  transition: all .2s ease-in-out;
  animation: pulsate 0.5s infinite;
}

.channels img.highlightsimple {
  filter: brightness(1) invert(0);
  scale: 1.2;
  transition: all .2s ease-in-out;
}

.channels a:hover {
  scale: 1.2;
  background-color: transparent;
}

/* animation */
@keyframes btnWiggle {
  0% {-webkit-transform: rotate(0deg);}
  2% {-webkit-transform: rotate(-1deg);}
  3.5% {-webkit-transform: rotate(1deg);}
  5% {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(0deg);}
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
