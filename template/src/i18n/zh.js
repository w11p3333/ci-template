export default {
  hello: {
    title: '欢迎来到你的vue.js app',
    btn: '切换语言'
  },
  nav: {
    title: '我的控制台',
    {{#example}}
    components: '组件',
    example: '实例',
    {{/example}}
    noAccess: '无权限'
  }
}
