<template>
  <Demo />
  <div class="container">
    <div class="title">3434</div>
  </div>
  <img src="./assets/logo.png" alt="" srcset="">
  <el-button type="primary">按钮</el-button>
  <SvgIcon name="tables" />
  <SvgIcon name="shops" />
</template>

<script>
import Demo from '@/components/demo'
import SvgIcon from '@/components/svg'
export default {
  components: {Demo, SvgIcon}
}
</script>

<style scoped lang="scss">
.container{
  .title{
    color: red;
    font-size: 30px;
  }
}
</style>
