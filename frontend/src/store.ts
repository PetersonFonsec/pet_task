import Vue from 'vue';
import Vuex from 'vuex';
import { userToken } from './global'

Vue.use(Vuex);

interface StateVuex {  
  userLogged: boolean,
  viewBox: string
  theme: string,
}

export default new Vuex.Store<StateVuex>({
  state: {
    userLogged: false,
    viewBox: '10 0 420 10',
    theme: 'dark',
  },
  mutations: {

    login(state: StateVuex, token: string) {
      
      const TokenFormated = `Bearer ${token}`

      localStorage.setItem(userToken, TokenFormated)

      state.userLogged = true

      state.viewBox = '10 0 420 350'

    },

    logout(state: StateVuex) {
      
      localStorage.removeItem(userToken)

      state.userLogged = false

      state.viewBox = '10 0 420 10'

    },

  },
  actions: {
  },
  modules: {
  },
});
