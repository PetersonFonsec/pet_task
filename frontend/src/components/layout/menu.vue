<template>
  <header id="Menu">

    <cat-face 
      width="50px"
      height="50px"
      theme="ligth-theme"/>

    <div class='nav'>

      <router-link to="/projetos" tag="nav">
        Projetos
      </router-link>

      <router-link to="/tarefas" tag="nav">
        tarefas
      </router-link>
      
      <nav>
        Sair
      </nav>

    </div>

  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import CatFace from '../logo/catface.vue'

export default Vue.extend({
  components: { CatFace },
  name: 'Menu'
})
</script>

<style lang="css">
.nav {
  color: #fff;
  width: 300px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  align-items: center;
  letter-spacing: 1px;
  flex-direction: row;
  justify-content: space-between;
}
#Menu {
  height:  50px;
  display: flex;
  padding: 5px 20px;
  align-items: center;
  flex-direction: row;
  justify-content:  space-between;
}
</style>