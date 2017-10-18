<template>
  <div>
    <div>Set your timer </div>
    <div class="container">
      <!-- <div @click="setCountdownTime(0.25)" class="button" :class="{ active: $store.state.countdownTime === 0.25 }">15sec</div> -->
      <div @click="setCountdownTime(5)" class="button" :class="{ active: $store.state.countdownTime === 5 }">5mins</div>
      <div @click="setCountdownTime(10)" class="button" :class="{ active: $store.state.countdownTime === 10 }">10mins</div>
      <div @click="setCountdownTime(15)" class="button" :class="{ active: $store.state.countdownTime === 15 }">15mins</div>
      <div @click="setCountdownTime(20)" class="button" :class="{ active: $store.state.countdownTime === 20 }">20mins</div>
      <div @click="setCountdownTime(30)" class="button" :class="{ active: $store.state.countdownTime === 30 }">30mins</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {

    }
  },
  methods: mapActions(['setCountdownTime'])
}
</script>

<style scoped>
.button {
  height: 20px;
  width: 60px;
  box-shadow: 0px 0px 5px #ddd;
  margin: 20px;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  transition-duration: 250ms;
}

.button:hover {

  box-shadow: 0px 0px 20px #ddd;
}

.active {
  background-color: #b0fcd7;
}

.container {
  display: flex;
  justify-content: center;
  margin: 30px;
}
</style>
