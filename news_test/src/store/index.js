import { createStore } from 'vuex'

export default createStore({
  state: {

    data: []
  },
  getters: {
    allUserNumber(state) {
      return state.data.length
    }
  },
  mutations: {
    createUser(state, news) {
      state.data.push(news)
    }
  },
  actions: {
    createUser({ commit }, news) {
      commit('createUser', news)
    }
  },
  modules: {
  }
})
