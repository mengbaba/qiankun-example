export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../view/home/index.vue')
    },
]