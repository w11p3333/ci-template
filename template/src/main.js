// import base module
import Vue from 'vue'
import App from './App'
import router from './router'
// import components
import components from './components'
// import components framework
import CIComponents from 'ci-components'
import 'element-ui/lib/theme-default/index.css'
import 'ci-components/css/index.scss'

// Vue.config.lang = 'zh-cn'   default chinese also can switch to 'en'

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
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
