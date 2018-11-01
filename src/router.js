// import Main from '@/pages/Main'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '/manage',
        name: 'manage',
        component: require('@/pages/Main').default, // require('@/pages/Main').default
        meta: {
            requiresAuth: true,
            title: '后台管理'
        },
        children: []
    },
    {
        path: '*',
        component: NotFound
    }
]