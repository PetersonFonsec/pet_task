<template>
    <div>
        <b-form @submit="_submit" @reset="_reset">

            <label for="email"></label>
            <input type="email" id="email" v-model="email">
            
            <label for="password"></label>
            <input type="password" id="password" v-model="password">

        </b-form>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'

interface LoginData {
    email: string
    nome: string
}

export default Vue.extend({

    data: () => ({
        email: '',
        password: ''
    }),

    methods: {
        valid() {
            return this.password !== '' && this.email !== ''
        },

        _submit(data: LoginData) {
            if ( this.valid() ) this.$emit('submit', data )
        },

        _reset() {
            this.password = ''
            this.email = ''
        }
    }
})

</script>

<style lang="sass" scoped></style>