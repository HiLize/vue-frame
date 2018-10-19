import api from 'api'
import util from 'util'
const app = {
    state: {
        menuList: [
            {
                name: 'tribe',
                title: '群聊管理',
                icon: 'ios-gear',
                children: [
                    {
                        name: 'tribe',
                        title: '群聊管理',
                        icon: 'ios-gear',
                        path: 'http://172.20.6.218:8000/admin.html#/'
                    }
                ]
            },
            {
                name: 'crossTalk',
                title: '话题管理',
                icon: 'ios-gear',
                children: [
                    {
                        name: 'crosstalk',
                        title: '话题管理',
                        icon: 'ios-paper',
                        path: 'http://172.20.6.218:8000/admin.html#/crosstalkmanage'
                    },
                    {
                        name: 'crosstalkcheck',
                        title: '话题稿征集审核',
                        icon: 'ios-paper',
                        path: 'http://172.20.6.218:8000/admin.html#/crosstalkmanage/checkmanage'
                    }
                ]
            },
            {
                name: 'circlecontent',
                title: '动态审核管理',
                icon: 'ios-gear',
                children: [
                    {
                        name: 'circlecontent',
                        title: '动态审核管理',
                        icon: 'ios-gear',
                        path: 'http://172.20.6.218:8000/admin.html#/circlecontentmanage'
                    }
                ]
            },
            {
                name: 'yibanlog',
                title: '易班操作日志',
                icon: 'ios-gear',
                children: [
                    {
                        name: 'yibanlog',
                        title: '易班操作日志',
                        icon: 'ios-gear',
                        path: 'http://172.20.6.218:8000/admin.html#/yibanlog'
                    }
                ]
            }
        ]
    },
    mutations: {
        increment (state, newData) {
            state.menuList = newData
        }
    },
    actions: {
        setMenuList: function (context, vm) {
            util.httpGet(api.userOwner,{},{}).then(res => {
                if(res && res.code == '0'){
                    let menus = vm.rebuildMenuList(res.datas.adminResList)
                    context.commit('increment', menus)
                }
            })
        }
    }
};

export default app;