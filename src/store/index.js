import { createStore } from 'vuex'

export default createStore({
  state(){
    return{
      isLoggedIn: false,
      role: "guest"
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.isLoggedIn
    },
    userIsAdmin(state){
      return state.role
    }
  },
  mutations: {
    setAuth(state, payload){
      state.isLoggedIn = payload
    },
    setRole(state, payload){
      state.role = payload
    }
  },
  actions: {
    setAuth(context, payload){
      context.commit('setAuth', payload)
    }
  },
  modules: {
  }
})
