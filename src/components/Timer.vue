<template>
  <div>
    <h1>{{timeDisplay}}</h1>
    <router-link to="/" class="link-local link">Stop</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      time: this.$store.state.countdownTime * 60,
      interval: null
    }
  },
  computed: {
    timeDisplay: function() {
      const mins = Math.floor(this.time / 60)
      const seconds = this.time % 60

      if (mins === 0) {
        return `${seconds}s`
      }

      return `${mins}m ${seconds}s`
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        this.$router.push({ path: 'sit-up' })
        this.toggleSlouch()
      }
    }, 1000)
  },
  methods: mapActions(['toggleSlouch']),
  beforeRouteLeave(to, from, next) {
    clearInterval(this.interval)
    next()
  }
}
</script>

<style scoped>
.link-local {
  margin-top: 50px;
}
</style>
