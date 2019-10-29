<template>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    methods:{
        Error(msg){
            return this.$toasted.show(msg,{
                type: 'error',
                icon: 'fa-exclamation-triangle'
            })
        },
        Success(msg){
            return this.$toasted.show(msg,{
                type: 'success',
                icon: 'done',
            })
        },
    }
})
</script>

<style>

</style>