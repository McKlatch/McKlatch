<template>
  <b-container :style="background" fluid>
    <b-row align-h="start" align-v="end">
      <b-col cols="12" md="6" lg="5" offset-lg="1" xl="5" offset-xl="2" class="mid-buffer">
        <b-card title="Mission" class="text-center" bg-variant="danger" border-variant="danger">
          <p class="card-text">We are called to assist teaching of the Gospel in Japan, reaching the least missioned people group in the world.</p>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="5" xl="3" class="mid-buffer">
        <b-card class="text-center" border-variant="danger">
          <p class="card-text">
            Pray for the people of Japan<br>
            <b-link href="https://omf.org/resources-for-mission/the-task-unfinished/japan-prayer-resources/" target="_blank" rel="noopener noreferrer" @click="trackEvent('link', '5x5x5JapanPrayerOMF')">
              <b>5x5x5 Prayer</b>
            </b-link>
          </p>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" md="6" lg="5" xl="3" v-for="article in articles" :key="article.title" class="mid-buffer">
        <about-article :title="article.title" :subtitle="article.subtitle" :content="article.content" :image="article.image"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import aboutArticle from './article.vue'
import { backgroundImage } from '../mixins/backgroundImage'
import { trackEvent } from '../mixins/trackEvent'

export default {
  data () {
    return {
      articles: [
        {
          title: 'Why Mission?',
          subtitle: 'Evangelism across a cultural barrier',
          content: 'Initially reluctant to leave the UK, David has learned about mission and his calling from God whilst on a vision trip in 2008. Angela was raised in the mission field of PNG and has a natural affinity for overseas mission. David will learn a lot from her!',
          image: '/static/bridge.jpg'
        },
        {
          title: 'Why Japan?',
          subtitle: 'Land of the rising sun',
          content: 'Pokemon and Power Rangers are the wrong reasons to be interested in mission to Japan. Having put the pop culture aside, David\'s interest in the Japanese people and lifestyle has become heartbreaking, because rural Japan is the least missioned area in the world.',
          image: '/static/diner.jpg'
        },
        {
          title: 'Have you been there?',
          subtitle: 'Short-term mission',
          content: 'David went to Japan as a tourist and then again as a mission volunteer in 2013. Living in Aomori for 2 months was enlightening, God has shown us that there is a need for biblical teaching. We aim to get Angela there soon to see what it\'s like.',
          image: '/static/arches.jpg'
        }
      ],
      bgImage: 'RamenDon.jpg'
    }
  },
  components: {
    aboutArticle
  },
  mixins: [backgroundImage, trackEvent]
}
</script>

<style scoped>
.mid-buffer {
  margin-top: 2vw;
}
</style>