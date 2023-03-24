import { createStore } from 'vuex'
import axios from 'axios';

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
    getData(state, news) {
      state.data = news;
    }
  },
  actions: {
    getData({ commit }) {
      axios.get('http://localhost:4000')
        .then(res => {
          commit('getData', res.data)
        })
    },
    createUser({ commit }, news) {
      axios.post('http://localhost:4000', news)
        .then(res => commit('getData', res.data));
    }
  },
  modules: {
  }
})
