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
                    name: 'crossTalk',
                    component: require('@/pages/Login').default,
                    meta: {title: '话题管理'}
                }
            ]
        }
    ]
})
