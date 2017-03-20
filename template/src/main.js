// import base module
import Vue from 'vue'
import App from './App'
import router from './router'
// import components
import components from './components'
// import components framework
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// remember to Vue.use() every module
Vue.use(elementUI)

// register global components  make hello => ci-hello
Object.keys(components).forEach(key => {
  Vue.component(`ci-${key}`, components[key])
})

// mounted vue to App component
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
