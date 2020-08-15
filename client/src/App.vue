<template>
  <div id="app">
    <img class="logo" alt=" Vue logo" src="./assets/logo.png">
    <Header class="header" msg="Good morning, welcome back. Enjoy your feeds!"/>
    <FeedMain class="feedMain" v-bind:recentFeeds="recentFeeds" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FeedMain from './components/FeedMain.vue'

export default {
  name: 'App',
  components: {
    Header,
    FeedMain
  },
  data() {
    return {
      recentFeeds: [
        {
          id: 1,
          name:"test",
          articleLabel:"article1",
        },
        {
          id: 2,
          name:"another test",
          articleLabel:"article2"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

</style>
