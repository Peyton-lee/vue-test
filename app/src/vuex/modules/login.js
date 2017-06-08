const state = {
    user: {},
    isLogin: false
}

const mutations = {
    LOGIN (state, value) {
        state.user.name = value
        state.isLogin = true
    },
    
    LOGINOUT (state) {
        state.user = {}
        state.isLogin = false
    }
}

export default {
    state,
    mutations
}