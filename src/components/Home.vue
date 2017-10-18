<template>
  <div>
    <h1>Welcome to sloucher!</h1>

    <div>Set the timer to get a reminder to sit up straight. </div>
    <time-chooser />
    <router-link class="link" to="/timer">Start</router-link>
  </div>
</template>

<script>
import TimeChooser from './TimeChooser'
export default {
  name: 'Home',
  components: {
    'time-chooser': TimeChooser
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  text-decoration: none;
}
</style>

<style>
.link {
  font-size: 35px;
  text-decoration: none;
  transition-duration: 250ms;
  position: relative;
  text-decoration: none;
  color: #42b983
}

.link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #42b983;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.link:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>

