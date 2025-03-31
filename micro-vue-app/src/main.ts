import { createApp } from 'vue'
import AppView from './App.vue'
import './style.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import type { App } from 'vue'
import routes from './router'
import type { Router, } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
let instance: App | null = null
let router: Router | null = null
function render(props: any) {
    console.log(props)
    const { container, onGlobalStateChange } = props
    instance = createApp(AppView)
    router = createRouter({
        history: createWebHashHistory(
            '/micro-vue'
        ),
        routes
    })
    instance.use(router)
    //如果子应用需要渲染到指定容器的#app元素上，否则渲染到#app元素上
    const appId = "#app"
    instance.mount(container ? container.querySelector(appId) : "#app")
    onGlobalStateChange((value: any) => {
        console.log('通讯参数', value)
    })
}

renderWithQiankun({
    bootstrap: () => { },
    mount: (props) => {
        render(props)
    },
    unmount: () => {
        console.log('子应用1的 unmount');
        instance?.unmount();
        if (instance?._container) {
            instance._container = null
        }

        instance = null;
    },
    update: () => { },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}






