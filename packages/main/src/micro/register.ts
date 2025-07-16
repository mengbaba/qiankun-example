import { registerMicroApps, start, type FrameworkConfiguration } from 'qiankun'
import { microApp } from './config'
export function initQiankun() {
    const app = microApp.map(app => ({
        ...app,
        props: {
            token: 'main-token',
            baseRouter: app.activeRule
        },
    }))
    registerMicroApps(app, {
        beforeLoad: async () => { },
        beforeMount: async () => { },
        afterMount: async () => { },
        beforeUnmount: async () => { },
        afterUnmount: async () => { }
    })
}

export function startMicroDefaultApp(opts?: FrameworkConfiguration) {
    start({
        prefetch: false, // 是否预先加载
        sandbox: {
            experimentalStyleIsolation: true // 样式隔离
        },
        ...opts
    })
}