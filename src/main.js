import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import ElementPlus from './plugins/element-plus'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(ElementPlus).use(router).use(store).mount('#app')
