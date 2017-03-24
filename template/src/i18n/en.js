export default {
  hello: {
    title: 'welcome to your vue.js app',
    languageBtn: 'change language',
    themeBtn: 'change theme'
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
