import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appTitle: 'IM - ',
        module: 'select module',
        sidebar: false,
        menu: [
            {title: 'Home', path: '/home', icon: 'home'},
            {title: 'Sign In', path: '/signin', icon: 'lock_open'}
        ]
    },
    mutations: {
        setModule(state, value) {
            state.module = value;
        },
        switchSidebar(state, value) {
            state.sidebar = value;
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
                        {title: 'Workflow', path: '/line/workflow', icon: 'dashboard'},
                        {
                            title: 'OEE', path: '/line/oee', icon: 'insert_chart', children: [
                                {title: 'Dashboard', path: '/line/oee/dashboard', icon: 'equalizer'},
                                {title: 'MST', path: '/line/oee/mst', icon: 'view_headline'},
                                {title: 'Settings', path: '/line/oee/settings', icon: 'settings'}
                            ]
                        },
                        {title: 'Messages', path: '/line/message', icon: 'dns'},
                        {title: 'Measure', path: '/line/measure', icon: 'trending_up'},
                        {title: 'Counters', path: '/line/counter', icon: 'list'},
                        {title: 'Materials', path: '/line/material', icon: 'assignment'},
                        {title: 'Shifts', path: '/line/shift', icon: 'date_range'},
                        {title: 'Orders', path: '/line/order', icon: 'low_priority'},
                        {
                            title: 'Configuration', path: '/line/configuration', icon: 'build', children: [
                                {title: 'General', path: '/line/configuration/general', icon: 'equalizer'},
                                {title: 'System', path: '/line/configuration/system', icon: 'view_headline'},
                                {title: 'Admin', path: '/line/configuration/admin', icon: 'settings'}
                            ]
                        }
                    ];
                    break;
                case 'Energy':
                    arr = [
                        {title: 'Energy', path: '/home', icon: 'home'}
                    ];
                    break;
                default:
                    arr = ['oops'];
            }
            return arr;
        }
    }
});
