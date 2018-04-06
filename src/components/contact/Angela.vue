<template>
  <b-card border-variant="info">
    <b-media right-align>
      <b-img slot="aside" rounded src="/static/angela.jpg" width="150" height="150" alt="angela" />
      <h5>Angela McClatchey</h5>
      <p>
        Daughter of The King, Lovely Wife, PNG-pikinini, Moorlands-Graduate, Teacher, Loves family, outdoors, music + friends! :)
      </p>
      <span v-for="link in links" :key="link.title">
        <b-link :href="link.url" target="_blank" rel="noopener noreferrer" @click="trackEvent('socialLink', 'angela'+link.title)">
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
          url: 'mailto:angela@mcklatch.com',
          description: '',
          btnText: 'Send Email',
          icon: '/static/email.png'
        },
        facebook: {
          title: 'Facebook',
          url: 'https://www.facebook.com/AJblossom',
          description: '',
          btnText: 'Facebook Wall',
          icon: '/static/facebook.png'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/AJblossom',
          description: '',
          btnText: 'Twitter Stream',
          icon: '/static/twitter.png'
        },
        skype: {
          title: 'Skype',
          url: 'skype:Angela.patrick77?userinfo',
          description: '',
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
