import { createRouter, createWebHistory } from 'vue-router'
import { setupGuard } from './guard'
import type { App } from 'vue'
const Layouts = () => import('../layout/index.vue')
const NotFound = () => import('../view/not-found/index.vue')
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('../view/login/index.vue'),
        },
        {
            path: '/',
            component: Layouts,
            name: 'layouts',
            redirect: '/micro-vue',
            children: [
                {
                    path: '/micro-vue/:pathMath(.*)*',
                    component: () => import('../view/sub-view/index.vue'),

                },

                {
                    path: '/micro-react/:pathMath(.*)*',
                    component: () => import('../view/sub-view/index.vue'),
                },
                {
                    path: '/userList',
                    component: () => import('../view/user-list/index.vue'),
                },
                {
                    path: '/roleList',
                    component: () => import('../view/role-list/index.vue'),
                },
                { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
            ],
        },


    ]
})


export function setupRouter(app: App) {
    app.use(router)
    setupGuard(router)
}