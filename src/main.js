import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
import component from './plugins/component'
import ElementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(ElementPlus).use(router).use(store).use(component).mount('#app')
