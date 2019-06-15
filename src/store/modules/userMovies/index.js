export default {
  namespaced: true,
  state: {
    movies: []
  },
  mutations: {
    setMovies (state, payload) {
      state.movies = payload
    },
    removeMovies (state) {
      state.movies = []
    }
  },
  actions: {
    setMovies ({ commit }, payload) {
      commit('setMovies', payload)
    },
    removeMovies ({ commit }) {
      commit('removeMovies')
    }
  },
  getters: {
    userMovies (state) {
      return state.movies
    }
  }
}