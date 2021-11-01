<template>
  <Demo />
  <div class="container">
    <div class="title">3434</div>
  </div>
  <img src="../assets/logo.png">
  <el-button type="primary">按钮</el-button>
  <SvgIcon name="tables" />
  <SvgIcon name="shops" />
  <br>
  <p>当前的用户名为：{{userInfo.username}}</p>
  <p>年龄是：{{userInfo.age}}</p>
  <p>工作是：{{userInfo.work}}</p>
  <p>薪资为：{{userInfo.salary}}</p>

</template>

<script>
import {useStore} from 'vuex'
import {defineAsyncComponent} from 'vue'
export default {
  components: {
    Demo: defineAsyncComponent(() => import('@/components/demo')),
    SvgIcon: defineAsyncComponent(() => import('@/components/svg'))
  },
  setup() {
    const {state} = useStore()
    const userInfo = state.userInfo
    return {userInfo}
  }
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