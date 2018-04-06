/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Mission from '@/components/mission/Mission'
import Fluffy from '@/components/pets/Fluffy'
import FluffyGallery from '@/components/pets/Gallery'
import FluffyVideos from '@/components/pets/VideoPlayer'
import FluffyInstructions from '@/components/pets/Instructions'
import Contact from '@/components/contact/Contact'
import Prayer from '@/components/prayer/Prayer'
import ThankYou from '@/components/contact/ThankYou'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/mission', name: 'Mission', component: Mission },
    {
      path: '/fluffy',
      name: 'Fluffy',
      component: Fluffy,
      children: [
        { path: 'pictures', component: FluffyGallery },
        { path: 'videos', component: FluffyVideos },
        { path: 'instructions', component: FluffyInstructions }
      ]
    },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/prayer', name: 'Prayer', component: Prayer },
    { path: '/thankyou', name: 'ThankYou', component: ThankYou }
  ]
})
