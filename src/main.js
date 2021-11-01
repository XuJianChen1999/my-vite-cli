import {createApp} from 'vue'
import App from './App'
import ElementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(ElementPlus).mount('#app')
