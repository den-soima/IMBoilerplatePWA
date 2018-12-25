import Vue from 'vue';
import Router from 'vue-router';
import Module from './views/Module.vue';
import Signin from './views/Signin.vue';
import store from './store';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },
        {
            path: '/',
            component: Module
        },
        {
            path: '/modules',
            name: 'Module',
            component: Module,
            beforeEnter: (to, from, next) => {
                store.commit('setModule', 'select module');
                store.commit('switchSidebar', false);
                next();
            }
        },
        {
            path: '/line',
            //name: 'Line',
            component: () => import('./views/Line.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('./views/Line/Workflow.vue')
                },
                {
                    path: 'workflow',
                    name: 'Workflow',
                    component: () => import('./views/Line/Workflow.vue')
                },
                {
                    path: 'oee',
                    name: 'OEE',
                    component: () => import('./views/Line/OEE.vue'),
                    children: [
                        {
                            path: 'dashboard',
                            component: () => import('./views/Line/OEE/Dashboard.vue')
                        },
                        {
                            path: 'mst',
                            component: () => import('./views/Line/OEE/MST.vue')
                        },
                        {
                            path: 'settings',
                            component: () => import('./views/Line/OEE/Settings.vue')
                        }
                    ]
                },
                {
                    path: 'message',
                    name: 'Messages',
                    component: () => import('./views/General/Message.vue')
                },
                {
                    path: 'measure',
                    name: 'Measure',
                    component: () => import('./views/General/Measure.vue')
                },
                {
                    path: 'counter',
                    name: 'Counters',
                    component: () => import('./views/General/Counter.vue')
                },
                {
                    path: 'material',
                    name: 'Materials',
                    component: () => import('./views/Line/Material.vue')
                },
                {
                    path: 'shift',
                    name: 'Shifts',
                    component: () => import('./views/Line/Shift.vue')
                },
                {
                    path: 'order',
                    name: 'Orders',
                    component: () => import('./views/Line/Order.vue')
                },
                {
                    path: 'configuration',
                    name: 'Configuration',
                    component: () => import('./views/Line/Configuration.vue'),
                    children: [
                        {
                            path: 'general',
                            component: () => import('./views/Line/Configuration/General.vue')
                        },
                        {
                            path: 'system',
                            component: () => import('./views/Line/Configuration/System.vue')
                        },
                        {
                            path: 'admin',
                            component: () => import('./views/Line/Configuration/Admin.vue')
                        }
                    ]
                }
            ],
            beforeEnter: (to, from, next) => {
                store.commit('setModule', 'Line');
                store.commit('switchSidebar', true);
                next();
            }
        },
        {
            path: '/production',
            name: 'Production',
            component: () => import('./views/Production.vue'),
            beforeEnter: (to, from, next) => {
                store.commit('setModule', 'Production');
                store.commit('switchSidebar', true);
                next();
            }
        },
        {
            path: '/energy',
            name: 'Energy',
            component: () => import('./views/Energy.vue'),
            beforeEnter: (to, from, next) => {
                store.commit('setModule', 'Energy');
                store.commit('switchSidebar', true);
                next();
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        }
    ]
});
