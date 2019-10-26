<template>
    <div id='screen-login' class="box">

        <cat-face/>

        <button class="btn sign-up">Criar Conta</button>
        <button class="btn login">Entrar</button>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatFace from '../components/logo/catface.vue'

export default Vue.extend({
    name: 'Login',
    components: {
        CatFace
    }

})
</script>

<style lang="css" scoped>
.btn {
    width: 100%;
    padding: 5px 20px ;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.login {
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
}
.sign-up{
    border: 1px solid rgba(255,255,255,.5);
    background-color: transparent;
    color: #FFF;
}
.box {
    border-radius: 5px;
    transition: 2s linear all;
    transform: scale(.9);
    padding: 5px 10px;
}
#screen-login{
    width: 300px;
    height: 400px;
    margin:  30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
</style>