<template>
  <div>
    <Menu/>
    <project-card/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '../components/layout/menu.vue'
import ProjectCard from '../components/project/project-card.vue'

export default Vue.extend({
  name: 'Home',
  components: { 
    Menu,
    ProjectCard
  }
})
</script>

<style>

</style>