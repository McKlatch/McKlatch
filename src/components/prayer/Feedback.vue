<template>
  <b-card class="text-center" border-variant="primary">
    <b-row><b-col cols="12" lg="6" xl="7">
      <div v-show="value === 'none'">
        <h2>I don't actually pray...</h2>
        <p class="ourComment">
        That's okay, The prayer letter is great for keeping up to date with how we're doing as well. The intention is to be prayed for, so if you're up for trying something new, there are some great tips here:<br>
        </p>
        <quote-scripture scriptureRef="Matt6:5-15">
          When you pray, you shall not be like the hypocrites. For they love to pray standing in the synagogues and on the corners of the streets, that they may be seen by men. Assuredly, I say to you, they have their reward. But you, when you pray, go into your room, and when you have shut your door, pray to your [heavenly] Father who is in the secret place; and your Father who sees in secret will reward you openly. And when you pray, do not use<span v-if="!more">... <a href="" @click.prevent="more = !more">show more</a></span><span v-else> vain repetitions as the heathen do. For they think that they will be heard for their many words.<br>
          <br>
          Therefore do not be like them. For your Father knows the things you have need of before you ask Him. In this manner, therefore, pray:<br>
          <br>
          Our Father in heaven,<br>
          Hallowed be Your name.<br>
          Your kingdom come.<br>
          Your will be done on earth as it is in heaven.<br>
          Give us this day our daily bread.<br>
          And forgive us our debts, As we forgive our debtors.<br>
          And do not lead us into temptation, But deliver us from the evil one.<br>
          For Yours is the kingdom and the power and the glory forever. Amen.<br>
          <br>
          For if you forgive men their trespasses, your heavenly Father will also forgive you. But if you do not forgive men their trespasses, neither will your Father forgive your trespasses.</span>
        </quote-scripture>
      </div>
      <div v-show="value === 'little'">
        <h2>I occasionally pray</h2>
        <p class="ourComment">
        It's easier to remember the place for prayer when the times are very good (or very bad), that makes sense. We're asking that you will pray for us when you receive our updates by email, about 10 times per year.<br>
        </p>
        <quote-scripture scriptureRef="Matt26:40-1">
          He [Jesus] came to the disciples and found them sleeping, and said to Peter, “What! Could you not watch with Me one hour? Watch and pray, lest you enter into temptation. The spirit indeed is willing, but the flesh is weak.
        </quote-scripture>
      </div>
      <div v-show="value === 'daily'">
        <h2>I pray every day</h2>
        <p class="ourComment">
        Nice! Routine prayer is a great thing. You probably have all kinds of things to pray for and to pray about already. We're asking that you will routinely (at least monthly) pray for us and people around us as well. Our prayer letter will be fuel for your prayers.<br>
        </p>
        <quote-scripture scriptureRef="Col4:2-4">
          Continue earnestly in prayer, being vigilant in it with thanksgiving; meanwhile praying also for us, that God would open to us a door for the word, to speak the mystery of Christ, for which I am also in chains, that I may make it manifest, as I ought to speak.
        </quote-scripture>
      </div>
      <div v-show="value === 'always'">
        <h2>I pray all the time</h2>
        <p class="ourComment">
        This is ideal, communication is key to any relationship, a relationship with our Creator is no different. You have a strong relationship with God. We'll keep you updated and you can pray for us anytime. Our prayer letter will remind you of the things we're doing and some of the people we're meeting.
      </p>
      <quote-scripture scriptureRef="Eph6:18-20">
        Pray always with all prayer and supplication in the Spirit, being watchful to this end with all perseverance and supplication for all the saints— and for me, that utterance may be given to me, that I may open my mouth boldly to make known the mystery of the gospel, for which I am an ambassador in chains; that in it I may speak boldly, as I ought to speak.
      </quote-scripture>
      </div>
      <div v-show="value === 'nonstop'">
        <h2>I pray to make a difference</h2>
        <p class="ourComment">
        Do you wrestle with God in depths which reveal life-changing answers and miracles that glorify God? <b>We need prayer partners like you</b>; to intercede for us, and to lift up our spiritual burdens to the Creator. If this is you, we want your pledge that you will pray for us, and for whomever else we write about in our prayer updates.<br>
        <b-link v-if="false" href="https://omf.org/uk/pray/partnership/" target="_blank" rel="noopener noreferrer" @click="trackEvent('link', 'prayerPartnershipOMF')"><br>Find out more<br></b-link>
        </p>
        <quote-scripture scriptureRef="1Tim2:1-4">
          Therefore I exhort first of all that supplications, prayers, intercessions, and giving of thanks be made for all men, for kings and all who are in authority, that we may lead a quiet and peaceable life in all godliness and reverence. For this is good and acceptable in the sight of God our Savior, who desires all men to be saved and to come to the knowledge of the truth.
        </quote-scripture>
      </div>
      </b-col>
      <b-col cols="12" lg="6" xl="5" class="mid-buffer" align-self="center">
        <p class="ourComment">
          <b>Subscribe to recieve our Prayer Letters in your email inbox as soon as we write them.<br>
          When you read them, pray for us.</b>
          </p>
        <app-sub-form/>
      </b-col></b-row>
    </div>
  </b-card>
</template>

<script>
import { eventBus } from '../../main'
import appSubForm from '../SubscriptionForm.vue'
import quoteScripture from '../Scripture.vue'
import { trackEvent } from '../mixins/trackEvent'

export default {
  data () {
    return {
      value: 'daily',
      more: false
    }
  },
  mounted () {
    eventBus.$on('valueChanged', value => { this.value = value })
  },
  components: {
    appSubForm, quoteScripture
  },
  mixins: [trackEvent]
}
</script>

<style scoped>
h2 {
  font-family: 'Copse', "Courier New", Courier, monospace;
  color: #3498db;
  font-size: calc(1.8em + 2vw);
}

.ourComment {
  font-family: 'Poppins', Tahoma, Geneva, sans-serif;
  font-style: 'Regular';
  font-size: calc(1em + 0.1vw);
  margin-top: 1vmax;
}

.mid-buffer {
  margin-top: 2vw;
}
</style>