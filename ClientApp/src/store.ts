import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appTitle: 'IM - ',
        module: 'select module',
        menu: [
            {title: 'Home', path: '/home', icon: 'home'},
            {title: 'Sign In', path: '/signin', icon: 'lock_open'}
        ]
    },
    mutations: {
        setModule(state, value) {
            state.module = value;
        }
    },
    actions: {},
    getters: {
        moduleMenu: (state) => {
            let arr = [];
            switch (state.module) {
                case 'Production':
                    arr = [
                        {title: 'Production', path: '/home', icon: 'home'}
                    ];
                    break;
                case 'Line':
                    arr = [
                        {title: 'Workflow', path: '/line/workflow', icon: 'home'},
                        {title: 'OEE', path: '/line/oee', icon: 'lock_open'},
                        {title: 'Messages', path: '/line/message', icon: 'lock_open'},
                        {title: 'Measure', path: '/line/measure', icon: 'lock_open'},
                        {title: 'Counters', path: '/line/counter', icon: 'lock_open'},
                        {title: 'Materials', path: '/line/material', icon: 'lock_open'},
                        {title: 'Shifts', path: '/line/shift', icon: 'lock_open'},
                        {title: 'Configuration', path: '/line/configuration', icon: 'lock_open'},
                    ];
                    break;
                case 'Energy':
                    arr = [
                        {title: 'Energy', path: '/home', icon: 'home'}
                    ];
                    break;
            }
            return arr;
        }
    }
});
