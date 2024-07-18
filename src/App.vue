<template>
  <div id="app">
    <div class="row NavBar">
      <NavBar />
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <div class="row">
      <TheFooter ref="searchComponent"></TheFooter>
    </div>
  </div>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import TheFooter from './components/common/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter,
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Cairo;
  background-color: #fbfdff;
  overflow: hidden;
}
.NavBar {
  background-color: #ffff;
  padding: 30px 0;
}
</style>
