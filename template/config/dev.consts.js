/**
 * Created by luliangxiao on 16/12/24.
 */
module.exports = {
  SERVICE_NAME: '{{ service }}', // 会员服务
  DEV_DOMAIN: 'http://idg-' + '{{ author }}' + '.tunnel.nibaguai.com/', // TO FILL IN YOUR DOMAIN
  DEV_USER_INFO: {
    appkey: '{{ appkey }}',
    channel: parseInt('{{ channel }}'),
    account_id: 'dev',
    nickname: '{{ author }}'
  }
}
