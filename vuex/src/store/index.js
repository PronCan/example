import { createStore } from 'vuex'

export default createStore({
  state: {
    // 데이터 넘김
    data:[{id:0, name:'이름'}]
  },
  getters: {
    // 데이터 컨트롤
    allUser(state) {
      return state.data.length;
    }
  },
  mutations: {
    // 데이터 수정
    addUser(state, user) {
      state.data.push(user)
    }
  },
  actions: {
    // mutations - 작업을 지시
    addUserAction({commit}, user) {
      // {commit} == context.commit
      // setTimeout(() => {
        commit('addUser', user)        
      // }, 2000);
    }
  },
  // 여기까지 실질적으로 사용됨
  modules: { 
    // 다른 store와 연동할 때 사용
  }
})
