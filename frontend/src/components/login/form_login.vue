<template>
    <div class="form-login">
        <b-form @submit.prevent="_submit" @reset="_reset">

            <label for="email">Email</label>
            <input name="email" type="email" id="email" v-model="email"/>
            
            <label for="password">Senha</label>
            <input name="password" type="password" id="password" v-model="password"/>

            <div class="teste">

                <button type="submit" class="btn login width-45-p">
                    Entrar
                </button>

                <router-link 
                    class="btn sign-up width-45-p ml-3 padding-15"
                    to="signup"
                    tag="button">
                    Criar Conta
                </router-link>

            </div>

        </b-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '../../services/auth'
import AlertMixin from '../../mixins/alert'
import { ToastObject } from 'vue-toasted'
import Component, { mixins } from 'vue-class-component'

interface LoginData {
    email: string
    password: string
}

@Component
export default class FormLogin extends mixins(AlertMixin) {
    
    private password: string =  ''
    private email: string = ''

    private valid(): boolean {
        return !!(this.password !== '' && this.email !== '')
    }

    private async _submit(): Promise<ToastObject | undefined> {

        if ( !this.valid() ) return this.Error('Todos os campos são obrigatórios')

        const { password, email } = this

        const result = await Auth.login(password, email)

        if ( !result.success ) return this.Error(result.error)

        const { token } = result.data

        this.$store.commit('login', token)

        this.$router.push('/home')

    }

    private  _reset(): void {
        this.password = ''
        this.email = ''
    }

}

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

.sign-up{
    border: 1px solid rgba(255,255,255,.5);
    background-color: transparent;
    color: #FFF;
}
.teste{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.padding-15{
    padding: 12px;
}

.login {
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
}
.width-45-p{
    width: 45%;
}
.form-login {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.form-login form {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
}
.form-login label {
    font-size: 20px;
    color: #fff;
}

.form-login input {
    margin: 20px 0px;
    text-align: center;
    background-color: rgba( 255, 255, 255, 0.1);
    border:none;
    padding: 5px 20px;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
}
.form-login input:focus {
    outline: 0;
}
</style>