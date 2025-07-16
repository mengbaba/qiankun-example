import { createApp } from 'vue'
import AppView from './App.vue'
import './style.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import type { App } from 'vue'
import routes from './router'
import type { Router, } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
let instance: App | null = null
let router: Router | null = null
function render(props: any) {
    console.log('props', props)
    const { container, onGlobalStateChange, baseRouter = '/' } = props
    instance = createApp(AppView)
    router = createRouter({
        history: createWebHistory(
            baseRouter
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
    //bootstrap是在主应用加载时会被调用一次
    bootstrap: () => { },
    // mount是在子应用激活时会被调用
    mount: (props) => {
        render(props)
    },
    // unmount是在子应用卸载时会被调用
    unmount: () => {
        console.log('子应用1的 unmount');
        instance?.unmount();
        instance = null;
    },
    update: () => { },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}






