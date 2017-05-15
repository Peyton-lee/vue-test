const state = {
    user: {
        name: '李培彬'
    }
}

const mutations = {
    LOGIN(state, value) {
        state.user.name = value
    }
}

export default {
    state,
    mutations
}