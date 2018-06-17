import Vuex from 'vuex'
import Vue from 'vue'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: defaultState,
  mutations,
  getters,
  actions
})

export default store
