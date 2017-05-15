// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

// Own components
import GlobalFunc from './own/global'
import Filters from './own/filter'
import Directive from './own/directive'
import Api from './api/api'

Vue.config.productionTip = false

// Vue plugin
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

// My own js files
Vue.use(GlobalFunc)
Vue.use(Filters)
Vue.use(Directive)
Vue.use(Api)

// Eslint-disable no-new 
const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})