<template>
    <b-card :border-variant="formVariant"
            :header="!validEmail || !validName ? 'Provide your email address and full name to subscribe' : 'Click Subscribe to join our prayer letter list'" :header-bg-variant="formVariant">
      <b-form action="https://mcklatch.us3.list-manage.com/subscribe/post?u=93caa82ac2938a4c54d34fab1&amp;id=5ba5e54022" method="post" target="_blank" novalidate @reset="onReset">
        <b-form-group label-for="emailInput" label="Email:">
          <b-form-input name="EMAIL" id="emailInput" type="email" v-model.trim.lazy="email" :state="validEmail" required placeholder="email@example.com"/>
        </b-form-group>
        <b-form-group label-for="nameInput" label="Full Name:">
          <b-form-input id="nameInput" type="text" v-model.lazy="fullName" :state="validName" required placeholder="Full Name"/>
        </b-form-group>
        <b-form-group v-show="false" label-for="forenameInput" label="First Name:">
          <b-form-input name="FNAME" id="forenameInput" type="text" v-model.lazy="forename" required/>
        </b-form-group>
        <b-form-group v-show="false" label-for="surnameInput" label="Last Name:">
          <b-form-input name="LNAME" id="surnameInput" type="text" v-model.lazy="surname" required/>
        </b-form-group>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_93caa82ac2938a4c54d34fab1_5ba5e54022" tabindex="-1" value=""></div>
        <b-button type="submit" :variant="formVariant" :disabled="!validEmail || !validName" @click="trackEvent('submit', 'subscribeForm')">{{ validEmail && validName ? 'Subscribe' : 'then click here' }}</b-button>
        <b-button v-if="email || fullName" type="reset" variant="outline-secondary" size="sm">Reset</b-button>
      </b-form>
    </b-card>
</template>

<script>
import { trackEvent } from './mixins/trackEvent'

export default {
  data () {
    return {
      email: '',
      forename: '',
      surname: ''
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
    formVariant () {
      return this.validEmail && this.validName ? 'success' : 'warning'
    }
  },
  methods: {
    onReset (evt) {
      this.email = ''
      this.forename = ''
      this.surname = ''
    }
  },
  mixins: [trackEvent]
}
</script>

<style>

</style>
