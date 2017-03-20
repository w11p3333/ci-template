// ================================
// user module
// ================================
import { LOGIN, LOGIN_OUT, SET_ACCESS } from 'src/consts'
import { fetchLogin } from 'src/apis'
import DEV_CONSTS from '../../../config/dev.consts.js'

/** state */
const state = {
  userInfo: null, // 用户基本信息
  isLogin: false, // 是否登录
  hasAccess: false, // 是否有权限
  isMaster: false // 是否是管理员登录
}

/** fetch login */
const login = async ({ commit, state }, params) => {
  if (state.userInfo) {
    if (state.isMaster) return
    const { permissions, admins } = state.userInfo
    // 检查子权限 或者 某个服务的全部权限
    if ((permissions && permissions.indexOf(params.page_name) > -1) || (admins && admins.indexOf(DEV_CONSTS.SERVICE_NAME) > -1)) commit(SET_ACCESS, true)
    else commit(SET_ACCESS, false)
  } else {
    try {
      const { data } = await fetchLogin(params)
      const { acl_id: aclID, permissions } = data
      if (aclID) {
        // check page permission
        if (permissions && permissions.indexOf(params.page_name) > -1) commit(SET_ACCESS, true)
        else commit(SET_ACCESS, false)
      }
      commit(LOGIN, data)
    } catch (e) {
      commit(LOGIN_OUT)
    }
  }
}

/** action */
const actions = {
  login
}

/** mutations */
const mutations = {
  [LOGIN] (state, userinfo) {
    state.userInfo = userinfo
    if (!userinfo.acl_id) {
      state.hasAccess = true
      state.isMaster = true
    }
    state.isLogin = true
  },
  [SET_ACCESS] (state, bool) {
    state.hasAccess = bool
  },
  [LOGIN_OUT] (state) {
    state.isLogin = false
    state.hasAccess = false
    state.isMaster = false
  }
}

export default {
  state,
  actions,
  mutations
}
