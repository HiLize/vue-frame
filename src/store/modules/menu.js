import api from 'api'
import util from 'util'
import router, { DynamicRoutes } from '@/router'
const app = {
    state: {
        isLogin: false,
        hasRoute: false,
        menuList: [
            // {
            //     name: 'tribe',
            //     title: '群聊管理',
            //     icon: 'ios-gear',
            //     children: [
            //         {
            //             name: 'tribe',
            //             title: '群聊管理',
            //             icon: 'ios-gear',
            //             path: 'http://172.20.6.218:8000/admin.html#/'
            //         }
            //     ]
            // },
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
            // },
            // {
            //     name: 'circlecontent',
            //     title: '动态审核管理',
            //     icon: 'ios-gear',
            //     children: [
            //         {
            //             name: 'circlecontent',
            //             title: '动态审核管理',
            //             icon: 'ios-gear',
            //             path: 'http://172.20.6.218:8000/admin.html#/circlecontentmanage'
            //         }
            //     ]
            // },
            // {
            //     name: 'yibanlog',
            //     title: '易班操作日志',
            //     icon: 'ios-gear',
            //     children: [
            //         {
            //             name: 'yibanlog',
            //             title: '易班操作日志',
            //             icon: 'ios-gear',
            //             path: 'http://172.20.6.218:8000/admin.html#/yibanlog'
            //         }
            //     ]
            // }
        ]
    },
    getters: {
        routerMenu: state => {
            console.log(state.menuList, 'getters')
        }
    },
    mutations: {
        updateState (state, newData) {
            state.menuList = newData
        },
        hasRouter (state, status) {
            state.hasRoute = status
        },
        isLogin (state, status) {
            state.isLogin = status
        }
    },
    actions: {
        async setMenuList (context) {
            // util.httpGet(api.userOwner,{},{}).then(res => {
            //     if(res && res.code == '0'){
            //         let menus = rebuildMenuList(res.datas.adminResList)
            //         context.commit('updateState', menus)
            //         let MainContainer = DynamicRoutes.find(v => v.path === '/home')
            //         let routerArr = MainContainer.children.concat(rebuildRoute(res.datas.adminResList))
            //         MainContainer.children = routerArr
            //         router.addRoutes([MainContainer])
            //         context.commit('hasRouter', true)
            //     }
            // })
        }
    }
};

function rebuildRoute (datas) {
    let newBasePath = 'http://next.wisedu.com:8013'
    let oldBasePath = 'http://next.wisedu.com:8013/v3/admin/cpdaily/index.html#/'
    let routeMenu = []
    datas.map(function (item, index) {
        routeMenu.push({
            path: `/home/${item.resId}`,
            name: item.resId,
            meta: {title: item.resDisplay, path: item.resValue.indexOf('/whole/admin.html') !== -1 ? newBasePath + item.resValue : oldBasePath + item.resValue},
            component: require('@/pages/Content').default
        })
    })
    return routeMenu
}

function rebuildMenuList (state) {
    let list =  [].concat(JSON.parse(JSON.stringify(state)))
    // 重构导航列表
    let menus = []
    let newBasePath = 'http://next.wisedu.com:8013'
    let oldBasePath = 'http://next.wisedu.com:8013/v3/admin/cpdaily/index.html#/'
    list.map(function (item, index) {
        let data = {
            name: item.resId,
            title: item.resDisplay,
            icon: 'ios-gear',
            children: [
                {
                    name: item.resId,
                    title: item.resDisplay,
                    icon: 'ios-gear',
                    path: item.resValue.indexOf('/whole/admin.html') !== -1 ? newBasePath + item.resValue : oldBasePath + item.resValue
                }
            ]
        }
        menus.push(data)
    })
    return menus
}

export default app;