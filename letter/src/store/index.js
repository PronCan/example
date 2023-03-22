import { createStore } from 'vuex'

export default createStore({
  state: {
    dataInit: [10, 20, 30]
  },
  getters: {
  },
  mutations: {
    setData(state, deploy) {
      state.data.push(deploy)
    }
  },
  actions: {

  },
  modules: {
  }
})
