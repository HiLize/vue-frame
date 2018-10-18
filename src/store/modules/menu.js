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
                icon: 'ios-paper',
                children: [
                    {
                        name: 'circlecontent',
                        title: '动态审核管理',
                        icon: 'ios-paper',
                        path: 'http://172.20.6.218:8000/admin.html#/circlecontentmanage'
                    }
                ]
            }
        ]
    },
    mutations: {
    }
};

export default app;