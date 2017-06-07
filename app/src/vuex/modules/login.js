const state = {
    user: {}
}

const mutations = {
    LOGIN (state, value) {
        state.user.name = value
    },
    
    SAVEINFO (state) {
        state.user = {}
    }
}

export default {
    state,
    mutations
}