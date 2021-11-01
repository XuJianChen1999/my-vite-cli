<template>
  <router-view />
  <el-button @click="onClickLogin">去登录页</el-button>
  <el-button @click="goBack">返回app.vue</el-button>
  <p>当前是：{{mode}}环境</p>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const onClickLogin = () => {
      router.push('/login')
    }
    const goBack = () => {
      router.replace('/home')
    }
    const mode = import.meta.env.MODE

    return {onClickLogin, goBack, mode}
  }
}
</script>


