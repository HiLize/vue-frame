// import Vue from 'vue'; // 引用后就无法实时更新
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import menu from './modules/menu';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user,
        menu
    }
});

if (module.hot) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept(['./modules/menu'], () => {
      // 获取更新后的模块
      // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
      const newModuleA = require('./modules/menu').default
      // 加载新模块
      store.hotUpdate({
        modules: {
          menu: newModuleA
        }
      })
    })
  }

export default store;
