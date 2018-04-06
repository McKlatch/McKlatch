<template>
  <b-card :border-variant="formVariant"
          :header="!validEmail || !validName || !validMessage ? 'Send a message to us using the form below' : 'Click Submit to send us your message'" :header-bg-variant="formVariant">
    <b-form accept-charset="UTF-8" action="https://usebasin.com/f/fda26722d9d5" method="POST">
      <b-form-group label-for="messageInput" label="Your Message:">
        <b-form-textarea required
                  id="messageInput"
                  :state="validMessage"
                  v-model.trim="message"
                  placeholder="Hey David & Angela..."
                  :rows="3"/>
      </b-form-group>
      <b-form-group label-for="email" label="Your Email:">
        <b-form-input id="email" name="email" type="email" v-model.trim.lazy="email" :state="validEmail" required placeholder="email@example.com"/>
      </b-form-group>
      <b-form-group v-show="false" label-for="comment" label="Message:">
        <b-form-input id="comment" name="comment" type="text" :value="comment"/>
      </b-form-group>
      <b-form-group label-for="nameInput" label="Your Full Name:">
        <b-form-input id="nameInput" type="text" v-model.lazy="fullName" :state="validName" required placeholder="Full Name"/>
      </b-form-group>
      <b-button type="submit" :variant="formVariant" :disabled="!validEmail || !validName || !validMessage" :pressed.sync="loading" @click="trackEvent('submit', 'contactForm')">{{ submitButtonText }}</b-button>
      <b-button v-if="email || fullName || message" type="reset" variant="outline-secondary" size="sm">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import { trackEvent } from '../mixins/trackEvent'

export default {
  data () {
    return {
      email: '',
      forename: '',
      surname: '',
      message: '',
      loading: false
    }
  },
  computed: {
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
    },
    validMessage () {
      return this.message.length >= 1
    },
    formVariant () {
      return this.validEmail && this.validName && this.validMessage ? 'success' : 'warning'
    },
    submitButtonText () {
      if (!this.validMessage) {
        return 'Type your message above'
      }
      if (!this.validEmail) {
        return 'Type your email address above'
      }
      if (!this.validName) {
        return 'Type your full name above'
      }
      if (this.loading) {
        return '⌛'
      }
      return 'Submit'
    },
    comment () {
      return JSON.stringify({Email: this.email, FName: this.forename, SName: this.surname, message: this.message})
    }
  },
  methods: {
    onReset (evt) {
      this.email = ''
      this.forename = ''
      this.surname = ''
      this.message = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify({Email: this.email, FName: this.forename, SName: this.surname, message: this.message}))
    }
  },
  mixins: [trackEvent]
}
</script>

<style>

</style>
