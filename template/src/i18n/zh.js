export default {
  hello: {
    title: '欢迎来到你的vue.js app',
    btn: '切换语言'
  },
  nav: {
    title: '我的控制台',
    home: '主页',
    {{#example}}
    components: '组件',
    example: '实例',
    {{/example}}
    noAccess: '无权限',
    user: '用户'
  }
}
