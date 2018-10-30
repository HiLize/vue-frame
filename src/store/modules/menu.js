import api from 'api'
import util from 'util'
import router, { DynamicRoutes } from '@/router'
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
                delCookie('adminSessionToken')
            } else {
                setCookie('adminSessionToken', status)
            }
            state.userToken = status
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
                } else {
                    context.commit('Login', '')
                }
            })
        }
    }
};

// 重构动态添加路由数组
function rebuildRoute (datas) {
    // let newBasePath = 'http://next.wisedu.com:8013'
    let newBasePath = 'http://172.20.6.218:8000/admin.html#/'
    let oldBasePath = 'http://next.wisedu.com:8013/v3/admin/cpdaily/index.html#/'
    let routeMenu = []
    datas.map(function (item, index) {
        routeMenu.push({
            path: `/manage/${item.resId}`,
            name: item.resId,
            meta: {title: item.resDisplay, path: item.resValue.indexOf('/whole/admin.html') !== -1 ? newBasePath + item.resValue.split('/whole/admin.html#/')[1] : oldBasePath + item.resValue},
            component: require('@/pages/Content').default
        })
    })
    return routeMenu
}

// 重构导航列表数组
function rebuildMenuList (state) {
    let list =  [].concat(JSON.parse(JSON.stringify(state)))
    let menus = []
    // let newBasePath = 'http://next.wisedu.com:8013'
    let newBasePath = 'http://172.20.6.218:8000'
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
        return ''
    }
}
// 设置cookie
function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
// 删除cookie
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 

export default app;