<template>
  <div>
    <h1>Sit up</h1>
    <div class="link-container">
      <router-link class="link" to="/timer">Restart timer</router-link>
      <div class="divider">|</div>
      <router-link class="link" to="/">Back to start</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import audioPing from '../utils/audioPing'

export default {
  methods: mapActions(['toggleSlouch']),
  beforeRouteLeave(to, from, next) {
    this.toggleSlouch()
    next()
  },
  created() {
    audioPing()
  }
}
</script>


<style scoped>
h1 {
  font-size: 50px;
}

.link-container {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: 50px auto;
}

.divider {
  color: #42b983;
  font-size: 45px;
}
</style>

