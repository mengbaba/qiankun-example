import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router'
import { registerMicroApps, start } from 'qiankun'
import apps from './apps'
const app = createApp(App)

registerMicroApps(apps)
start({
    prefetch: false,
})

app.use(routes)
app.mount('#app')
