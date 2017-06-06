import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Index from '@/pages/Index'
import Default from '@/pages/Default'
import Collection from '@/pages/Collection'

Vue.use(Router)


export default new Router({
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
            children:[{
            	path: 'default',
            	component: Default
            }, {
                path: 'collection',
                component: Collection
            }]
    }
  ],

    beforeEach: transition => {
        let vm = transition.to.router.app.$root
        if (vm.isLogin) {
            transition.next()
        } else {}
    }
})
