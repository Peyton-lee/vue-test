import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Test from '@/components/Test'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Default',
            component: Login
    },
        {
            path: '/login',
            name: 'Login',
            component: Login
    },
        {
            path: '/test',
            name: 'Test',
            component: Test
    }
  ],

    beforeEach: transition => {
        let vm = transition.to.router.app.$root
        if (vm.isLogin) {
            transition.next()
        } else {}
    }
})
