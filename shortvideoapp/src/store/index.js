import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tcity:'北京'
  },
  mutations: {
    ccity (state,city) {
      state.tcity = city
    }
  },
  actions: {
    changeCity (ctx,city) {
      ctx.commit('ccity',city)
    }
  },
  modules: {
  }
})
