<template>
  <div id="app">

    <background-animation :viewBox="viewBox"/>
    
    <transition 
      mode="out-in"      
      enter-active-class="enter"  
      leave-active-clasnos="leave">

        <router-view/>
    </transition>

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
    color: #2c3e50;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  @keyframes born {
    from{
      opacity: 0;
      transform: translateY(100px);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  .enter{
    animation: born .7s linear;
  }

  .leave{
    animation: born .7s linear reverse;
  }

</style>  
