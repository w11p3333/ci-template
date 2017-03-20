import createApi from './network'
import DEV_CONSTS from '../../config/dev.consts.js'
/** ******************************** login apis **************************** */
export function fetchLogin ({ appkey, channel, page_name }) {
  return createApi('topbar/main.php/json/login/check', {
    appkey,
    channel,
    service_name: DEV_CONSTS.SERVICE_NAME, // WARNING: REMEMBER TO FILL IN YOUR SERVICE NAME
    page_name
  })
}
