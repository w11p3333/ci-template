/**
 * Created by luliangxiao on 16/12/14.
 */

// ================================
// vuex
// ================================

// import framework
import Vue from 'vue'
import Vuex from 'vuex'
// global
import state from './state'
import actions from './actions'
import mutations from './mutations'
// module
import user from './user'
// plugin
import plugin from './plugin'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [plugin],
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  mutations,
  modules: {
    user
  }
})
