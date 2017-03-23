export default {
  hello: {
    title: 'welcome to your vue.js app',
    btn: 'change language'
  },
  nav: {
    title: 'dashboard',
    home: 'home',
    {{#example}}
    components: 'components',
    example: 'example',
    {{/example}}
    noAccess: 'noAccess',
    user: 'user'
  }
}
