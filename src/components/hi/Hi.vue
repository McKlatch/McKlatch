<template>
  <div>
  <div class="background"></div>
    <div class="container">
      <!-- Header -->
      <div class="topline">
      <div class="userplate" @mouseover="highlightOn" @mouseout="highlightOff">
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
      </div>
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
  computed: {
    selectHighlights () {
      let queryString = 'img'
      this.user.socialsWithHandle.forEach(str => {
        queryString += `[alt="${str}"], `
      })
      queryString = queryString.replace(/,\s*$/, '')
      return queryString
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
  border: min(max(10rem, 12vw), 5px) solid #16001E;
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
  border: min(max(10rem, 12vw), 6px) solid #FCF3EE;
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

a {
    display: block;
    max-width: 400px;
    margin: 1.5vh auto;
    padding: min(max(10rem, 12vw), 12px);
    font-size: min(max(0.5rem, 5.5vw), 14px);
    color: #FCF3EE;
    border: min(max(10rem, 12vw), 6px) solid #FCF3EE;
    text-decoration: none;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: min(max(0.1rem, 2.5vw), 1px);
}

a.featured {
    position: relative;
    background-color: #FCF3EE;
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
    background-color: #16001E;
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
</style>
