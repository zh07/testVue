import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },

    decrement (state, num) {
      state.count = state.count - num
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },

    decrement ({ commit }, num = 1) {
      commit('decrement', num)
    }
  },
  modules: {}
})
