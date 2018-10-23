import api from 'api'
import util from 'util'
import router, { DynamicRoutes } from '@/router'
const app = {
    state: {
        isLogin: false,
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
        userToken: state => {
            if (state.isLogin === false) {
                let userToken = getCookie('adminSessionToken')
                return userToken
            }
            return state.isLogin
        }
    },
    mutations: {
        updateState (state, newData) {
            state.menuList = newData
        },
        isLogin (state, status) {
            state.isLogin = status
        }
    },
    actions: {
        setMenuList (context) {
            util.httpGet(api.userOwner,{},{}).then(res => {
                if(res && res.code == '0'){
                    let menus = rebuildMenuList(res.datas.adminResList)
                    context.commit('updateState', menus)

                    let MainContainer = DynamicRoutes.find(v => v.path === '/manage')
                    let routerArr = MainContainer.children.concat(rebuildRoute(res.datas.adminResList))
                    MainContainer.children = routerArr
                    router.addRoutes([MainContainer])
                }
            })
        }
    }
};

// 重构动态添加路由数组
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

// 重构导航列表数组
function rebuildMenuList (state) {
    let list =  [].concat(JSON.parse(JSON.stringify(state)))
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

// 获取cookie登陆token
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2])
    } else {
        return null
    }
}

export default app;