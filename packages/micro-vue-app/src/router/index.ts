const NotFound = () => import('../view/not-found/index.vue')
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../view/home/index.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]