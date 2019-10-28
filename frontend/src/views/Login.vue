<template>
    <div id='screen-login' class="box">

        <transition mode="out-in"      
        enter-active-class="enter"  
        leave-active-clasnos="leave">

            <router-view/>
        </transition>

        <div v-if="show">

            <cat-face/>

            <router-link class="btn sign-up mb-3 mt-3" to="signup" tag="button">
                Criar Conta
            </router-link>

            <router-link class="btn login" to="login" tag="button">
                Entrar
            </router-link>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatFace from '../components/logo/catface.vue'

export default Vue.extend({
    name: 'Login',
    watch: {
        $route(to) {
            this.show = to.fullPath === '/auth/'
        }
    },
    components: {
        CatFace
    },
    data() {
        return {
            show: true,
        }
    }
})
</script>

<style lang="css" scoped>
.btn {
    width: 100%;
    padding: 10px 20px ;
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
    height: 450px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

@keyframes born {
    from{
        transform: translateY(100px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }
}
 
.enter{
    animation: born .7s linear;
}

.leave{
    animation: born .7s linear reverse;
}

</style>