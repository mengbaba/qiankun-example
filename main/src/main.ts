import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router'
import { registerMicroApps } from 'qiankun'
import apps from './apps'
const app = createApp(App)
registerMicroApps(apps)
app.use(routes)
app.mount('#app')
