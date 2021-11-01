<template>
  <svg v-bind="$attrs" :class="svgClass">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import {computed} from 'vue'
export default {
  name: 'SvgIcon',
  props: ['name'],
  setup(props) {
    let iconName = computed(() => `#icon-${props.name}`)
    let svgClass = computed(() => {
      if (props.name) {
        return 'svg-icon ' + props.name
      }
      return 'svg-icon'
    })
    return {iconName, svgClass}
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>