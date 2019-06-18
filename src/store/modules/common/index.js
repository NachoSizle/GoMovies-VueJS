export default {
  namespaced: true,
  state: {
    token: '',
    user: {
      uid: '',
      displayName: '',
      picture: '',
      email: ''
    },
    showSpinner: false
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    setUser (state, payload) {
      state.user = {
        uid: payload.uid,
        displayName: payload.name,
        picture: payload.picture,
        email: payload.email
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
        displayName: '',
        picture: '',
        email: ''
      }
      localStorage.removeItem('user')
    },
    setSpinnerStatus (state, payload) {
      state.showSpinner = payload
    }
  },
  actions: {
    setToken ({ commit }, payload) {
      commit('setToken', payload)
    },
    setUser ({ commit }, payload) {
      commit('setUser', payload)
    },
    removeToken ({ commit }) {
      commit('removeToken')
    },
    removeUser ({ commit }) {
      commit('removeUser')
    },
    setSpinnerStatus ({ commit }, payload) {
      commit('setSpinnerStatus', payload)
    }
  },
  getters: {
    userId (state) {
      return state.user.uid
    },
    userName (state) {
      return state.user.displayName
    },
    userEmail (state) {
      return state.user.email
    },
    userPicture (state) {
      return state.user.picture
    },
    isLogged (state) {
      return state.token !== ''
    },
    showSpinner (state) {
      return state.showSpinner
    }
  }
}