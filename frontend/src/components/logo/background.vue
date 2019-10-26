<template>
    <svg
        :width="width"
        :height="height"
        :viewBox="viewBox"
        version="1.2"
        preserveAspectRatio="none"
        class="JustPositionSvg"
        id="SVGRoot">
        
        <path
            id="path1"
            class="bg1"
            d="m 1.2397176,-69.530795 c -0.042162,0.03738 -0.089237,0.07074 -0.1431437,0.09922 -1.11481543,38.569124 -1.15434431,37.863528 -1.15434426,113.952918 C 81.563643,45.4494 30.313608,226.66603 122.17827,227.43332 224.37938,231.44663 164.67835,44.956857 274.11039,46.044548 369.60566,51.318432 344.07464,236.48186 420.62714,227.26132 420.73229,139.13894 419.93957,34.736974 419.8617,-69.448113 H 1.2402344 c 0,0 -0.1435865,0.03337 -0.1436605,0.01654 z"
            inkscape:connector-curvature="0"
            sodipodi:nodetypes="cccccccccc" />
        
        <path
            id="path2"
            class="bg2"
            d="m 1.2397176,-69.530795 c -0.042162,0.03738 -0.089237,0.07074 -0.1431437,0.09922 -1.11481543,38.569124 -1.15434431,37.863528 -1.15434426,113.952918 C 81.563643,45.4494 30.313608,226.66603 122.17827,227.43332 224.37938,231.44663 164.67835,44.956857 274.11039,46.044548 369.60566,51.318432 344.07464,236.48186 420.62714,227.26132 420.73229,139.13894 419.93957,34.736974 419.8617,-69.448113 H 1.2402344 c 0,0 -0.1435865,0.03337 -0.1436605,0.01654 z"
            inkscape:connector-curvature="0"
            sodipodi:nodetypes="cccccccccc" />

    </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BackgoundAnimation',
  props: {
    width: {
        type: String,
        default: '420mm'
    },
    height: {
        type: String,
        default: '197mm'
    },
    viewBox: {
        type: String,
        default: '10 0 420 350'
    },
  }
  
});

</script>

<style lang="css" scoped>
.JustPositionSvg {
    position: absolute;
    left: 0;
    top: 0;
}

.bg1 {
    fill:#000000;
    stroke:#000000;
    stroke-width:0.40671197px;
    stroke-opacity:1;
    animation: moveToLeft 5.5s linear alternate infinite;
}

.bg2 {
    fill:rgba(0,0,0,0.2);
    stroke-width:0.40671197px;
    animation: moveToLeft 3s linear alternate infinite;
}

@keyframes moveToLeft {
    from {
        transform: translateX(-0px );
    }
    to {
        transform: translateX( 10px );
    }
}
</style>