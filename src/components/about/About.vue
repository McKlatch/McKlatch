<template>
  <b-container :style="background" fluid>
    <b-row align-h="start" align-v="end">
      <b-col cols="12" md="6" lg="5" offset-lg="1" xl="5" offset-xl="2" class="mid-buffer">
        <b-card title="What we do" class="text-center" bg-variant="success" border-variant="success">
          <p class="card-text">in Kettering, Northamptonshire, UK</p>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="5" xl="3" class="mid-buffer">
        <b-card class="text-center" border-variant="success">
          <p class="card-text">
            <b-link to="contact">
              <b>get in touch with us</b>
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
import aboutArticle from './Article.vue'
import { backgroundImage } from '../mixins/backgroundImage'

export default {
  data () {
    return {
      articles: [
        {
          title: 'Disciples',
          subtitle: 'Bondservants of the God of Heaven',
          content: 'We are both followers of Jesus Christ, his life and teachings. Angela is the daughter of missionaries based in Papua Guinea. David is a convert from antitheism. We both believe the Holy Bible naturally.',
          image: '/static/house.jpg'
        },
        {
          title: 'Designer',
          subtitle: 'Maker of images to inform',
          content: 'David is a freelance graphics designer (2D) who specializes in photograph retouching (Photoshop) and print publishdesign (InDesign). He also produces material to aid bible understanding.',
          image: '/static/card.jpg'
        },
        {
          title: 'Teacher',
          subtitle: 'Wisdom passed between generations',
          content: 'Angela is a primary (elementary) school teacher in one of Kettering\'s best CofE schools. She also aids her church women\'s ministry and Eighteen30\'s ministry.',
          image: '/static/library.jpg'
        }
      ],
      bgImage: 'CinemaSky.jpg'
    }
  },
  components: {
    aboutArticle
  },
  mixins: [backgroundImage]
}
</script>

<style scoped>
.mid-buffer {
  margin-top: 2vw;
}
</style>
