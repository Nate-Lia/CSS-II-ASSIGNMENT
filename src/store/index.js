import { createStore } from 'vuex'

export default createStore({
  state(){
    return{
      user: {
        isLoggedIn: false,
        data: null,
      }
    }
  },
  getters: {
    user(state){
      return state.user
    },
  },
  mutations: {
    SET_LOGGED_IN(state, payload){
      state.user.isLoggedIn = payload
    },
    SET_USER(state, data){
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.email,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {
  }
})
