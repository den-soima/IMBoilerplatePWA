import Vue from 'vue';
import Router from 'vue-router';
import Module from './views/Module.vue';
import Signin from './views/Signin.vue';

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
            name: 'Module',
            component: Module,
        },
        {
            path: '/line',
            name: 'Line',
            component: () => import('./views/Line.vue'),
            children: [
                {
                    path: '/',
                    name: 'Workflow',
                    component: () => import('./views/Line/Workflow.vue')
                },
                {
                    path: 'oee',
                    name: 'OEE',
                    component: () => import('./views/Line/OEE.vue')
                }
            ]
        },
        {
            path: '/production',
            name: 'Production',
            component: () => import('./views/Production.vue')
        },
        {
            path: '/energy',
            name: 'Energy',
            component: () => import('./views/Energy.vue')
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        }
    ]
});
