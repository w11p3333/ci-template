import Vue from 'vue'
import CINetwork from 'ci-network'
import store from 'src/store'
import DEV_CONSTS from '../../config/dev.consts.js'

const DOMAIN = process.env.NODE_ENV !== 'production' ? DEV_CONSTS.DEV_DOMAIN : ''

Vue.use(CINetwork)

// translate params
function createParams (params) {
  if (params.appkey && params.channel) var { appkey, channel } = params
  else if (store.state.user.userInfo) {
    appkey = store.state.user.userInfo.appkey
    channel = store.state.user.userInfo.channel
  } else {
    appkey = DEV_CONSTS.DEV_USER_INFO.appkey
    channel = DEV_CONSTS.DEV_USER_INFO.channel
  }
  if (!params.appkey && !params.channel) {
    params.appkey = appkey
    params.channel = channel
  }
  // filter about [ "" || null || undefined ] then stringify params
  return params
}

// created post request
export default function createApi (url, params) {
  return CINetwork.createApi(`${DOMAIN}url`, createParams(params))
}
