/**
 * Created by luliangxiao on 16/12/14.
 */

// ================================
// vuex
// ================================

// import framework
import Vue from 'vue'
import Vuex from 'vuex'
// module
import user from './user'
// plugin
import plugin from './plugin'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [plugin],
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  }
})
