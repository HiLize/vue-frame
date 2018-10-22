import Main from '@/pages/Main'
import Login from '@/pages/Login'
import store from '@/store'

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
        },
        {
            path: '/manage',
            name: 'manage',
            component: Main,
            children: [
                // {
                //     path: '/manage/:module?',
                //     name: '',
                //     component: require('@/pages/Content').default
                // }
            ]
        }
    ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '/home',
        name: 'home',
        component: require('@/pages/Main').default,
        children: [
            // {
            //     path: '/home',
            //     component: require('@/pages/Content').default,
            //     name: 'home',
            //     meta: {
            //         title: '首页',
            //         icon: 'ios-home'
            //     }
            // }
        ]
    }
]