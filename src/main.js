// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'01
/* eslint no-undef: 0 */
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    console.log(router, 'beforeEach')
    if (!store.state.menu.hasRoute) {
        store.dispatch('setMenuList')
        next()
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
