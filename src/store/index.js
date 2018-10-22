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

export default store;
