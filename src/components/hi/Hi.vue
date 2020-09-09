<template>
  <div class="background">
  <div class="grid-container">
    <img class="avatar" :src="user.avatar" alt="McKlatch" />
    <h1 class="name">{{ user.name }}</h1>
    <p class="bio">{{ user. bio }}</p>
    <div v-for="link in links" :key="link.title">
      <div class="link">
      <a :href="link.url" target="_blank" rel="noopener noreferrer" :title="link.btnText">
        <img class="image" :src="link.icon" :alt="link.title" />
        <div class="overlay">
          <div class="text">{{ link.title }}</div>
        </div>
      </a>
      </div>
    </div>
    <div class="email">
      <a href="mailto:david@mcklatch.com" target="_blank" rel="noopener noreferrer" title="Send Email">
        <img class="emailIcon" src="/static/email64.png" alt="Email" />
        <p class="emailText">david@mcklatch.com</p>
        <div style="clear: left;"/>
      </a>
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
        bio: 'JesusPerson🙏FunHusband🏰GraphicDesigner✍️ThatFriend🍇HedgehogOwner🦔TimeTraveler⏳MissionaryInABox🗾D.VaMain🥤VueJSWrangler🖥️Non-Partisan'
      },
      links: {
        linkedin: {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mcklatch/',
          description: '',
          btnText: 'Connect with me',
          icon: '/static/linkedin64.png'
        },
        instagram: {
          title: 'Instagram',
          url: 'https://instagram.com/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/instagram64.png'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/twitter64.png'
        },
        behance: {
          title: 'Behance',
          url: 'https://www.behance.net/mcklatch',
          description: '',
          btnText: 'Follow Me',
          icon: '/static/behance64.png'
        },
        facebook: {
          title: 'Facebook',
          url: 'https://fb.me/mcklatch',
          description: '',
          btnText: 'Add me',
          icon: '/static/facebook64.png'
        },
        youtube: {
          title: 'Youtube',
          url: 'https://www.youtube.com/user/drmcklatch',
          description: 'David has made a lot of videos, Angela is in some of them. The average view-count on these videos is about 1 (Angela), so statistically the videos are enjoyed by every single viewer!',
          btnText: 'Like and Subscribe',
          icon: '/static/youtube64.png'
        },
        discord: {
          title: 'Discord',
          url: 'https://discord.gg/BFXQkxS',
          description: '',
          btnText: 'Discord Server',
          icon: '/static/discord64.png'
        },
        overwatch: {
          title: 'Overwatch',
          url: 'https://playoverwatch.com/en-us/career/pc/eu/McKlatch-2564',
          description: '',
          btnText: 'Overwatch Career',
          icon: '/static/overwatch64.png'
        },
        steam: {
          title: 'Steam',
          url: 'http://steamcommunity.com/id/mcklatch',
          description: '',
          btnText: 'Steam Profile',
          icon: '/static/steam64.png'
        },
        skype: {
          title: 'Skype',
          url: 'skype:mcklatch?userinfo',
          description: 'Discord preferred, skype is heavy beyond reason',
          btnText: 'Skype Call',
          icon: '/static/skype64.png'
        },
        github: {
          title: 'Github',
          url: 'https://github.com/mcklatch',
          description: '',
          btnText: 'Read my code',
          icon: '/static/github64.png'
        },
        stackoverflow: {
          title: 'StackOverflow',
          url: 'https://stackoverflow.com/users/5644701/mcklatch',
          description: '',
          btnText: 'Be horrible',
          icon: '/static/stackoverflow64.png'
        }
      }
    }
  },
  mixins: [backgroundImage]
}
</script>
<style>
:root {
  --darkest: #301f39;
  --dark: #6e3241;
  --contrast: #ad6930;
}

.background {
  background: url(/static/PurpleEarth.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute; top: 0; right: 0; bottom: 0; left: 0;
}

.avatar {
  border-radius: 50%;
  max-width: 150px;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  grid-area: avatar;
}

.name {
  grid-area: name;
  margin-right: 3vh;
  font-size: min(max(1rem, 12vw), 50px);
  font-family: 'Playfair Display', serif;
  color: var(--darkest);
}

.bio {
  grid-area: bio;
  padding-right: 3vh;
  padding-top: 0.5vh;
  font-size: min(max(0.5rem, 5.5vw), 18px);
  font-family: 'Source Sans Pro', sans-serif;
  color: var(--dark);
}

.link {
  grid-area: link;
  margin: 2vh;
  position: relative;
}

.email {
  margin-top: 1vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  grid-area: email;
  background: rgba(255, 255, 255, 0.6);
  padding-top: 0.5vh;
  padding-bottom: 0.3vh;
  padding-left: 1vh;
  padding-right: 1vh;
  border-radius: 1.5vh;
  transition: .3s ease;
}

.email:hover {
  background: rgba(255, 255, 255, 1);
}

@media only screen and (max-width: 600px) {
  .avatar {max-width: 100px;}
  .bio {padding-left: 3vh; text-align: center;}
  .grid-container {
    grid-template-areas:
    'avatar name name'
    'bio bio bio'
    'link link link'
    'link link link'
    'link link link'
    'link link link'
    'email email email';
    position: relative;
  }
}

@media only screen and (min-width: 600px) {
  .grid-container {
    grid-template-areas:
    'avatar name name'
    'avatar bio bio'
    'link link link'
    'link link link'
    'link link link'
    'link link link'
    'email email email';
    position: relative;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
  .grid-container {
    width: 50%;
    margin: auto;
    position: relative;
    margin-top: 1vh;
    border-radius: 2vh;
  }
} 

.emailIcon {
  float: left;
  margin-right: 2vh;
  width: min(max(3rem, 4vw), 100px);
}

.emailText {
  float: right;
  line-height: 6.5vh;
  font-size: min(max(1rem, 4vw), 22px);
  margin-bottom: 0vh;
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  color: var(--dark);
}

.grid-container {
  padding: 1vh 0;
  display: grid;
  grid-auto-columns: 33.3%;
  align-content: space-around;
  justify-content: space-around;
  position: relative;
  padding-top: 3vh;
  background: rgba(255, 255, 255, 0.8);
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: #fff;
}

.link:hover .overlay {
  opacity: 0.8;
  border-radius: 1vh;
}

.text {
  color: var(--darkest);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
