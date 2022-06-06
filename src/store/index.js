import { createStore } from 'vuex'

export default createStore({
  state(){
    return{
      isLoggedIn: false,
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.isLoggedIn
    },
  },
  mutations: {
    setAuth(state, payload){
      state.isLoggedIn = payload
    },
  },
  actions: {
    setAuth(context, payload){
      context.commit('setAuth', payload)
    }
  },
  modules: {
  }
})
