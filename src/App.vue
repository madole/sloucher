<template>
  <div id="app">
    <img :src="imageSrc" height="300px" />
    <router-view/>
  </div>
</template>

<script>
import logo from './assets/logo.png'
import nonSlouchLogo from './assets/non-slouch-logo.png'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    imageSrc() {
      return this.$store.state.slouching ? logo : nonSlouchLogo
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
