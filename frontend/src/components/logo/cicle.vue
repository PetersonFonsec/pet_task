<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    version="1.1"
    id="svg8">

	  <g id="layer1">
	    <ellipse
            :class="{ theme, animation }"
	       id="path10"
	       cx="108.85716"
	       cy="143.0575"
	       style="stroke-width:0.52469951"
	       rx="73.327385"
	       ry="76.622993" />
	  </g>
	</svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 props: {
    width: {
      type: String,
      default: '240px'
    },
    height: {
      type: String,
      default: '240px'
    },
    viewBox: {
      type: String,
      default: '0 0 210 297'
    },
    animation: {
      type: String,
      default: 'shape'
    },
    theme: {
      type: String,
      default: 'dark-theme'
    }
  }
})

</script>

<style lang="css" scoped>
.dark-theme {
  fill: transparent;
  stroke: #fff;
  stroke-width: 2px; 
  
}
.ligth-theme {
  fill: #fff;
  stroke: #fff;
  stroke-width: 2px; 
}
</style>