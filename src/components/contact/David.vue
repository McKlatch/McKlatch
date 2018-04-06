<template>
  <b-card border-variant="info">
    <b-media right-align>
      <b-img slot="aside" rounded src="/static/david.jpg" width="150" height="150" alt="david" />
      <h5>David (McKlatch) McClatchey</h5>
      <p>
        Jesus Person🙏 Fun Husband🏰 Graphic Designer✍️ D.Va Main🕹️ py/js(vue) Wrangler🖥️
      </p>
      <span v-for="link in links" :key="link.title">
        <b-link :href="link.url" target="_blank" rel="noopener noreferrer" @click="trackEvent('socialLink', 'david'+link.title)">
          <b-img :id="link.title" slot="aside" :src="link.icon" width="40" height="40" :alt="link.title"/>
        </b-link>
        <b-tooltip :target="link.title" :title="link.btnText" no-fade/>
      </span>
    </b-media>
  </b-card>
</template>

<script>
import { trackEvent } from '../mixins/trackEvent'

export default {
  data () {
    return {
      links: {
        email: {
          title: 'Email',
          url: 'mailto:david@mcklatch.com',
          description: '',
          btnText: 'Send Email',
          icon: '/static/email.png'
        },
        discord: {
          title: 'Discord',
          url: 'https://discord.gg/BFXQkxS',
          description: '',
          btnText: 'Discord Server',
          icon: '/static/discord.png'
        },
        facebook: {
          title: 'Facebook',
          url: 'https://www.facebook.com/mcklatch',
          description: '',
          btnText: 'Facebook Wall',
          icon: '/static/facebook.png'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/mcklatch',
          description: '',
          btnText: 'Twitter Stream',
          icon: '/static/twitter.png'
        },
        youtube: {
          title: 'Youtube',
          url: 'https://www.youtube.com/user/drmcklatch',
          description: 'David has made a lot of videos, Angela is in some of them. The average view-count on these videos is about 1 (Angela), so statistically the videos are enjoyed by every single viewer!',
          btnText: 'Youtube Channel',
          icon: '/static/youtube.png'
        },
        instagram: {
          title: 'Instagram',
          url: 'https://instagram.com/mcklatch',
          description: '',
          btnText: 'Instagram Feed',
          icon: '/static/instagram.png'
        },
        overwatch: {
          title: 'Overwatch',
          url: 'https://playoverwatch.com/en-us/career/pc/eu/McKlatch-2564',
          description: '',
          btnText: 'Overwatch Career',
          icon: '/static/overwatch.png'
        },
        steam: {
          title: 'Steam',
          url: 'http://steamcommunity.com/id/mcklatch',
          description: '',
          btnText: 'Steam Profile',
          icon: '/static/steam.png'
        },
        skype: {
          title: 'Skype',
          url: 'skype:mcklatch?userinfo',
          description: 'Discord preferred, skype is heavy beyond reason',
          btnText: 'Skype Call',
          icon: '/static/skype.png'
        }
      }
    }
  },
  mixins: [trackEvent]
}
</script>

<style>

</style>
