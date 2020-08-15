<template>
  <div class="feedMain">
    <h3>Recent Feeds</h3>
    <div v-bind:key="feed.id" v-for="feed in recentFeeds">
      <h4 href="https://www.w3schools.com" >{{ feed.name }}</h4>
      <a href="https://www.w3schools.com" >{{ feed.articleLabel }}</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FeedMain',
  props: ["recentFeeds"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
