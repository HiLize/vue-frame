import api from 'api'
import util from 'util'
import Util from '@/libs/util'
import router, { DynamicRoutes } from '@/router'
import { from } from 'array-flatten';
const app = {
    state: {
        userToken: '',
        menuList: [
            // 导航数据结构
            // {
            //     name: 'crossTalk',
            //     title: '话题管理',
            //     icon: 'ios-gear',
            //     children: [
            //         {
            //             name: 'crosstalk',
            //             title: '话题管理',
            //             icon: 'ios-paper',
            //             path: 'http://172.20.6.218:8000/admin.html#/crosstalkmanage'
            //         },
            //         {
            //             name: 'crosstalkcheck',
            //             title: '话题稿征集审核',
            //             icon: 'ios-paper',
            //             path: 'http://172.20.6.218:8000/admin.html#/crosstalkmanage/checkmanage'
            //         }
            //     ]
            // }
        ]
    },
    getters: {
    },
    mutations: {
        updateState (state, newData) {
            state.menuList = newData
        },
        Login (state, status) {
            if (status === '') {
                Util.delCookie('adminSessionToken')
            } else {
                Util.setCookie('adminSessionToken', status)
            }
            state.userToken = status
        }
    },
    actions: {
        setMenuList (context) {
            util.httpGet(api.routeList,{},{}).then(res => {
                if(res && res.code == '0'){
                    let menus = rebuildMenuList(res.datas)
                    context.commit('updateState', menus)

                    let MainContainer = DynamicRoutes.find(v => v.path === '/manage')
                    let routerArr = MainContainer.children.concat(rebuildRoute(res.datas))
                    MainContainer.children = routerArr
                    router.addRoutes(DynamicRoutes)
                } else {
                    context.commit('Login', '')
                }
            }).catch(e => {
                context.commit('Login', '')
            })
        }
    }
};

// 重构动态添加路由数组
function rebuildRoute (datas) {
    let routeMenu = []
    datas.map(function (item, index) {
        if (item.subMenus.length <= 0) {
            routeMenu.push({
                path: `/manage/${item.menuLocalRoute}`,
                name: item.menuLocalRoute,
                meta: {title: item.menuName, path: item.menuUrl},
                component: require('@/pages/Content').default
            })
        } else {
            item.subMenus.map(function (subitem, index) {
                routeMenu.push({
                    path: `/manage/${subitem.menuLocalRoute}`,
                    name: subitem.menuLocalRoute,
                    meta: {title: subitem.menuName, path: subitem.menuUrl},
                    component: require('@/pages/Content').default
                })
            })
        }
    })
    return routeMenu
}

// 重构导航列表数组
function rebuildMenuList (state) {
    let list =  [].concat(JSON.parse(JSON.stringify(state)))
    let menus = []
    list.map(function (item, index) {
        let data = {
            name: item.menuId,
            title: item.menuName,
            icon: 'ios-gear',
            children: []
        }
        item.subMenus.map(function (subitem, index) {
            data.children.push({
                name: subitem.menuId,
                title: subitem.menuName,
                icon: 'ios-gear',
                path: subitem.menuUrl
            })
        })

        menus.push(data)
    })
    return menus
} 

export default app;