import type { Router } from "vue-router";
import { useUserStore } from '@/stores'
function beforeEach(router: Router) {
    router.beforeEach(async (to) => {
        const userStore = useUserStore()
        console.log(userStore.isLogin, to.path, '登陆状态')
        if (!userStore.isLogin) {
            console.log('登陆失败跳转login')
            if (to.path !== '/login') {
                return '/login'
            }
        } else if (to.path === '/' || to.path === '/login') {
            await userStore.generateRouter()
            return '/'
        }
        return true
    })
}

export function setupGuard(router: Router) {
    beforeEach(router)
}