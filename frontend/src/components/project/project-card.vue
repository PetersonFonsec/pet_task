<template>
    <div class="container-projects" @click="showDetail" >
        <h3 class="project-name"> nome do projeto </h3>
        <span class="project-description"> description do projeto ... </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ProjectCard',
    methods: {
        showDetail() {
            return
        }
    },
    props: {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        _id: {
            type: String,
            require: true
        },
    }
})
</script>

<style lang="css">
.container-projects {
    width: 400px;
    cursor: pointer;
    border: 1px solid rgba(200,200,200,0.4);
    padding: 10px 20px;
    text-align: center;
    transition: 1s linear all;
    box-shadow: 2px 2px 5px 1px rgba(100,100,100,0.4);
    border-left: 5px solid rgba(0,200,0,1);
    border-radius: 0px 5px 5px 0px;
    background-color: #fff;
}
</style>