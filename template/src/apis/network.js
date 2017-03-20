import axios from 'axios' // request framework based on promise
import qs from 'qs' // stringify params
import * as consts from 'src/consts'
import store from 'src/store'
import { filterObject } from 'src/utils'
import DEV_CONSTS from '../../config/dev.consts.js'

const DOMAIN = process.env.NODE_ENV !== 'production' ? DEV_CONSTS.DEV_DOMAIN : ''

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
  return qs.stringify(filterObject(params))
}

// created post request
export default function createApi (url, params) {
  return new Promise((resolve, reject) => {
    store.commit(consts.START_FETCH)
    axios.post(`${DOMAIN}${url}`, createParams(params), {
      timeout: 10000 // set request timeout
    })
    .then((response) => {
      const res = response.data
      if (!res) {
        reject({ message: '请求结果为空' })
      } else if (typeof res !== 'object') {
        reject({ message: '服务端返回异常' })
      } else if (res.ret === -1) {
        res.message = res.msg
        reject(res)
      } else {
        resolve(res) // request success
      }
      store.commit(consts.END_FETCH)
    })
    .catch((error) => {
      console.log(error)
      reject({ message: '网络请求失败' })
      store.commit(consts.END_FETCH)
    })
  })
}
