export default {
  namespaced: true,
  state: {
    series: []
  },
  mutations: {
    setSeries (state, payload) {
      state.series = payload
    },
    removeSeries (state) {
      state.series = []
    }
  },
  actions: {
    setSeries ({ commit }, payload) {
      commit('setSeries', payload)
    },
    removeSeries ({ commit }) {
      commit('removeSeries')
    }
  },
  getters: {
    userSeries (state) {
      return state.series
    }
  }
}