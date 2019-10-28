<template>
  <div id="app">

    <background-animation :viewBox="viewBox"/>

    <router-view/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex'
import BackgroundAnimation from './components/logo/background.vue'

export default Vue.extend({
  name: 'app',
  computed: {
    ...mapState(['viewBox'])
  },
  components: { 
    BackgroundAnimation
  }

});
</script>

<style lang="css">
  body{
    overflow-x: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>  
