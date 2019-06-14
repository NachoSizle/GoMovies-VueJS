export default {
  namespaced: true,
  state: {
    token: '',
    user: {
      uid: '',
      displayName: ''
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    setUser (state, payload) {
      state.user = {
        uid: payload.uid,
        displayName: payload.displayName
      }
      let userParsed = JSON.stringify(payload)
      localStorage.setItem('user', userParsed)
    },
    removeToken (state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    removeUser (state) {
      state.user = {
        uid: '',
        displayName: ''
      }
      localStorage.removeItem('user')
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
    userId (state) {
      return state.user.uid
    },
    isLogged (state) {
      return state.token !== ''
    }
  }
}