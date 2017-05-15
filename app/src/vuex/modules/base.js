const state = {
    test: 'This is a test demo.'
}

const mutations = {
    showTest(state, myparams) {
        console.log(state.test + myparams)
    }
}

export default {
    state,
    mutations
}