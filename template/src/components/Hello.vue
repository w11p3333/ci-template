<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ titleText }}</h1>
    <el-button @click="changeLanguage">{{ btnText }}</el-button>
    <el-button @click="changeTheme">change theme</el-button>
    <pre>{{ help }}</pre>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {
  addClass,
  removeClass,
  hasClass
} from 'ci-components/utils/index'
export default {
  name: 'hello',
  data () {
    return {
      help: 'write in src/components/Hello.vue and save'
    }
  },
  computed: {
    titleText () {
      return this.$t('hello.title')
    },
    btnText () {
      return this.$t('hello.btn')
    }
  },
  methods: {
    changeLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    },
    changeTheme () {
      this.$nextTick(_ => {
        const THEME_ARR = [
          'light-blue',
          'dark-blue',
          'light-dark'
        ]
        const topbar = document.getElementsByClassName('ci-topbar')[0]
        const sidebar = document.getElementsByClassName('ci-sidebar')[0]
        for (let [index, item] of new Map(THEME_ARR.map((item, i) => [i, item]))) {
          if (hasClass(topbar, item)) {
            const n = index === 0 ? index : index - 1
            THEME_ARR.splice(n, 1)
            const num = Math.round(Math.random())
            removeClass(topbar, item)
            removeClass(sidebar, item)
            addClass(topbar, THEME_ARR[num])
            addClass(sidebar, THEME_ARR[num])
            return
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
