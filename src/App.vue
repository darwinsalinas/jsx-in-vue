<template>
  <div id="app">
    <TablaRaza :breeds="breeds" :width="width"/>
  </div>
</template>

<script>
import TablaRaza from './components/TablaRaza'

export default {
  name: 'app',
  data () {
    return {
      width: document.body.clientWidth,
      breeds: [
        { name: 'Persian', colour: 'orange', affection: 3, shedding: 5 },
        { name: 'Siberian', colour: 'blue', affection: 5, shedding: 4 },
        { name: 'Bombay', colour: 'black', affection: 4, shedding: 2 }
      ]
    }
  },
  created () {
    window.onresize = event => {
      this.width = document.body.clientWidth
    }
  },
  components: {
    TablaRaza
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
