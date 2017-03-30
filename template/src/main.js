/****************************************   https://github.com/w11p3333/ci-template   **********************************************/
// import base module
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import i18n
import i18n from './i18n'
// import components
import components from './components'
// import components framework
import CIComponents from 'ci-components' // DOCS: https://github.com/w11p3333/ci-template
// import css
import 'element-ui/lib/theme-default/index.css'
import 'ci-components/css/index.scss'

// remember to Vue.use() every module
Vue.use(CIComponents)

// register global components  make hello => ci-hello
components.map(component => {
  Vue.component(`ci-${component.name}`, component)
})

// mounted vue to App component
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
