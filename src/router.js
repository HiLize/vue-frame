import Main from '@/pages/Main'
import Login from '@/pages/Login'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Main
        },
        {
            path: '/manage',
            name: 'manage',
            component: Main,
            children: [
                {
                    path: '/manage/:module?',
                    name: '',
                    component: require('@/pages/Content').default
                }
            ]
        }
    ]
})
