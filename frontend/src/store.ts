import Vue from 'vue';
import Vuex from 'vuex';
import axios from './plugins/axios'
import { userToken } from './global'

Vue.use(Vuex);

interface StateVuex {  
  userLogged: boolean,
  viewBox: string
}

export default new Vuex.Store<StateVuex>({
  state: {
    userLogged: false,
    viewBox: '10 0 420 10'
  },
  mutations: {

    login(state: StateVuex, token: string) {
      
      const TokenFormated = `Bearer ${token}`

      localStorage.setItem(userToken, TokenFormated)

      axios

      state.userLogged = true

      state.viewBox = '10 0 420 350'

    }

  },
  actions: {
  },
  modules: {
  },
});
