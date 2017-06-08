import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Index from '@/pages/Index'
import Default from '@/pages/Default'
import Collection from '@/pages/Collection'
import Praise from '@/pages/Praise'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkActiveClass: 'on',
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: 'Default',
            component: Login
    },
        {
            path: '/login',
            name: 'Login',
            component: Login
    },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [{
                path: 'default',
                component: Default
            }, {
                path: 'collection',
                component: Collection
            }, {
                path: 'praise',
                component: Praise
            }]
       }
   ],

    // 滚动条滚回顶部
    scrollBehavior(to, from, savedPosition) {
        if (to.path.indexOf("index")) {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next()
    } else {
        // 判断是否登录
        if (store.getters.CHECK_LOGIN)
            next()
        else
            router.push({
                path: '/login'
            })
    }
})

export default router