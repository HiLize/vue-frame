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
            component: Main,
            children: [
                {
                    path: '/home/crossTalke',
                    name: 'crosstalk',
                    component: require('@/pages/Login').default,
                    meta: {title: '话题管理'}
                },
                {
                    path: '/home/crossTalkeCheck',
                    name: '/crosstalkmanage/check',
                    component: require('@/pages/Login').default,
                    meta: {title: '话题管理'}
                }
            ]
        }
    ]
})
