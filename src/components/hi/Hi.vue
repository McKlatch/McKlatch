<template>
  <div>
  <div class="background"></div>
    <div class="container">
      <!-- Header -->
      <h1 class="name">{{ user.name }}</h1>
      <p class="bio">{{ user. bio }}</p>

      <!-- Links -->
      <a v-for="link in links" :key="link.text" :href="link.url" target="_blank" rel="noopener noreferrer" :class="link.featured ? 'featured' : ''">{{ link.text }}</a>

      <!-- Channels -->
      <div class="channels">
        <a v-for="channel in channels" :key="channel.title" :href="channel.url" target="_blank" rel="noopener noreferrer" :title="channel.btnText"><img :src="channel.icon" :alt="channel.title" width="36vw"></a>
      </div>
    </div>
  
  </div>
</template>
<script>
import { backgroundImage } from '../mixins/backgroundImage'
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap'
      }
    ]
  },
  data () {
    return {
      user: {
        avatar: '/static/avatar150.jpg',
        name: 'David McClatchey',
        bio: 'JesusPerson🙏 FunHusband🏰 GraphicDesigner✍️ ThatFriend🍇 HedgehogOwner🦔 TimeTraveler⏳ MissionaryInABox🗾 D.VaMain🥤 VueJSWrangler🖥️'
      },
      links: [
        {
          featured: true,
          text: 'Proverbial Soup',
          url: 'https://proverbialsoup.com'
        },
        {
          featured: false,
          text: 'Design',
          url: 'https://www.behance.net/mcklatch'
        },
        {
          featured: false,
          text: 'WebDev',
          url: 'http://8bitephod.com/'
        },
        {
          featured: false,
          text: 'David & Angela',
          url: 'http://mcklatch.com/'
        }
      ],
      channels: {
        linkedin: {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mcklatch/',
          description: '',
          btnText: 'Connect with me',
          icon: '/static/linkedin.svg'
        },
        instagram: {
          title: 'Instagram',
          url: 'https://instagram.com/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/instagram.svg'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/twitter.svg'
        },
        behance: {
          title: 'Behance',
          url: 'https://www.behance.net/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/behance.svg'
        },
        facebook: {
          title: 'Facebook',
          url: 'https://fb.me/mcklatch',
          description: '',
          btnText: 'Add me',
          icon: '/static/facebook.svg'
        },
        youtube: {
          title: 'Youtube',
          url: 'https://www.youtube.com/user/drmcklatch',
          description: 'David has made a lot of videos, Angela is in some of them. The average view-count on these videos is about 1 (Angela), so statistically the videos are enjoyed by every single viewer!',
          btnText: 'Like and Subscribe',
          icon: '/static/youtube.svg'
        },
        discord: {
          title: 'Discord',
          url: 'https://discord.gg/BFXQkxS',
          description: '',
          btnText: 'Discord Server',
          icon: '/static/discord.svg'
        },
        overwatch: {
          title: 'Overwatch',
          url: 'https://playoverwatch.com/en-us/career/pc/eu/McKlatch-2564',
          description: '',
          btnText: 'Overwatch Career',
          icon: '/static/overwatch.svg'
        },
        steam: {
          title: 'Steam',
          url: 'http://steamcommunity.com/id/mcklatch',
          description: '',
          btnText: 'Steam Profile',
          icon: '/static/steam.svg'
        },
        skype: {
          title: 'Skype',
          url: 'skype:mcklatch?userinfo',
          description: 'Discord preferred, skype is heavy beyond reason',
          btnText: 'Skype Call',
          icon: '/static/skype.svg'
        },
        github: {
          title: 'Github',
          url: 'https://github.com/mcklatch',
          description: '',
          btnText: 'Read my code',
          icon: '/static/github.svg'
        },
        stackoverflow: {
          title: 'StackOverflow',
          url: 'https://stackoverflow.com/users/5644701/mcklatch',
          description: '',
          btnText: 'Be horrible',
          icon: '/static/stackoverflow.svg'
        },
        contact: {
          title: 'Contact',
          url: 'http://mcklatch.com/contact',
          description: '',
          btnText: 'Get in touch',
          icon: '/static/contact.svg'
        }
      }
    }
  },
  mixins: [backgroundImage]
}
</script>
<style>
:root {
  --darkest: #16001E;
  --dark: #303522;
  --contrast: #FFD046;
  --light: #D9695B;
  --lightest: #FCF3EE;
}

.background {
  background-color: var(--darkest);
  background: url(/static/PurpleEarth.jpg) no-repeat center center fixed;
  background-size: cover;
  position: fixed; top: 0; right: 0; bottom: 0; left: 0;
  filter: blur(10px) brightness(0.7);
  transform: scale(1.07);
}

.name {
  font-size: min(max(1rem, 12vw), 42px);
  font-family: 'Playfair Display', serif;
  color: var(--lightest);
  max-width: 400px;
  margin: 2vh auto;
}

.bio {
  font-size: min(max(0.5rem, 5.5vw), 15px);
  font-family: 'Source Sans Pro', sans-serif;
  color: var(--lightest);
  max-width: 400px;
  margin: 0 auto 2vh;
  letter-spacing: min(max(0.1rem, 1vw), 1px);
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 4vh auto 0
}

a {
    display: block;
    max-width: 400px;
    margin: 1.5vh auto;
    padding: 2vh;
    font-size: min(max(0.5rem, 5.5vw), 14px);
    color: var(--lightest);
    border: 0.4vh solid var(--lightest);
    text-decoration: none;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: min(max(0.1rem, 2.5vw), 2px);
}

a.featured {
    position: relative;
    background-color: var(--lightest);
    color: var(--darkest);
    font-weight: 900;
    animation: btnWiggle 5s infinite;
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
    background-color: var(--darkest);
    color: var(--lightest);
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

.channels a:hover {
  scale: 1.2;
  background-color: transparent;
}

/* animation */
@-webkit-keyframes btnWiggle {
  0% {-webkit-transform: rotate(0deg);}
  2% {-webkit-transform: rotate(-1deg);}
  3.5% {-webkit-transform: rotate(1deg);}
  5% {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(0deg);}
}
@-o-keyframes btnWiggle {
  0% {-webkit-transform: rotate(0deg);}
  2% {-webkit-transform: rotate(-1deg);}
  3.5% {-webkit-transform: rotate(1deg);}
  5% {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(0deg);}
}
@keyframes btnWiggle {
  0% {-webkit-transform: rotate(0deg);}
  2% {-webkit-transform: rotate(-1deg);}
  3.5% {-webkit-transform: rotate(1deg);}
  5% {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(0deg);}
}
</style>
