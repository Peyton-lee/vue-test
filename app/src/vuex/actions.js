export const LOGIN = ({ commit }, value) => {
    commit('LOGIN', value)
}
export const DECREMENT = ({ commit }) => {
    commit('DECREMENT')
}
export const LOGINOUT = ({commit}) => {
    commit('LOGINOUT')
}
export const SHOW_SCROLL = ({commit}, bool) => {
    commit('SHOW_SCROLL', bool)
}