import Vuex from 'vuex'
import defaultState from './state/state' // 默认状态
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

// 每次导出独立的store 对象，防止ssr是内存溢出
// 在外层创建vuex
export default () => {
  return new Vuex.Store({
    strict: isDev, // ??
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
