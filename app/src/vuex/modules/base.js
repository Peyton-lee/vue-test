const state = {
    test: 'This is a test demo.',
    scrollTip: false
}

const mutations = {
    showTest(state, myparams) {
        console.log(state.test + myparams)
    },
    
    SHOW_SCROLL(state, bool) {
        state.scrollTip = bool
    }
}

export default {
    state,
    mutations
}