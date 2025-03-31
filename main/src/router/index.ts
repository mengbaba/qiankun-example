import { createRouter, createWebHistory } from 'vue-router'
const Layouts = () => import('../layout/index.vue')
const router = createRouter({
    history: createWebHistory(
        '/'
    ),
    routes: [
        {
            path: '/',
            redirect: '/micro-vue'
        },
        {
            path: '/',
            component: Layouts, // 将布局组件放在根路由下
            name: 'layouts',
            children: [
                {
                    path: '/micro-vue',
                    component: () => import('../view/micro-vue/index.vue'),

                },
                {
                    path: '/micro-react',
                    component: () => import('../view/micro-react/index.vue')
                }
            ],
        },


    ]
})
export default router