<template>
  <b-container>
    <b-row align-h="center">
      <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"/>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      videoId: 'E7PgP_ft_No',
      playerVars: {
        autoplay: 0,
        listType: 'playlist',
        list: 'PL7P9Ui6eEFQkQbyMVbia2gczNw5o0-lpH'
      }
    }
  },
  methods: {
    playing () {
      console.log('\\o/ we are watching!!!')
    }
  }
}
</script>

<style>

</style>
