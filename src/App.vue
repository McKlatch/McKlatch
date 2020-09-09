<template>
  <div id="app">
    <app-header v-show="$route.name !== 'Home' && $route.name !== 'Hi'"/>
    <fade-transition>
      <router-view/>
    </fade-transition>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style>

</style>
