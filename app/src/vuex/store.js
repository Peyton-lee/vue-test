import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import login from './modules/login'
import base from './modules/base'

Vue.use(Vuex)

export default new Vuex.Store({
    // strict type
    strict: true,  
    
    // all modules
    modules: {     
        login,
        base
    },
    
    getters,
    actions
})