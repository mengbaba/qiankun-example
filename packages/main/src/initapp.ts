import type { App } from 'vue'
import { setupRouter} from './router'
import { setupStore } from './stores/config'
import { initQiankun } from './micro/index'
import './style.css'
export function initApp(app:App,el='#app'){
    setupRouter(app)
    setupStore(app)
    initQiankun()
    app.mount(el)
}