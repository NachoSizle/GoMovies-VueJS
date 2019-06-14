export default {
  namespaced: true,
  state: {
    token: '',
    user: null
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    removeToken (state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    removeUser (state) {
      state.user = null
    }
  },
  actions: {
    setToken ({ commit, state }, payload) {
      commit('setToken', payload)
    },
    setUser ({ commit, state }, payload) {
      commit('setUser', payload)
    },
    removeToken ({ commit }) {
      commit('removeToken')
    },
    removeUser ({ commit }) {
      commit('removeUser')
    }
  },
  getters: {
    isLogged (state) {
      return state.token !== ''
    }
  }
}