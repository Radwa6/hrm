<template>
  <div id="app">
    <div class="row">
      <NavBar v-if="!isSpecialPage" />
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <div class="row">
      <TheFooter v-if="!isSpecialPage" ref="searchComponent"></TheFooter>
    </div>
  </div>
</template>
<script src="https://unpkg.com/scrollreveal"></script>

<script>
import NavBar from './components/common/NavBar.vue'
import TheFooter from './components/common/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter,
  },
  computed: {
    isSpecialPage() {
      return this.$route.name === 'logIn' || this.$route.name === 'Contact'
    },
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
</style>
