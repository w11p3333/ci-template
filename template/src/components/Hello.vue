<template>
  <div class="hello">
    <img src="../assets/image/logo.png">
    <h1>\{{ titleText }}</h1>
    <el-button @click="changeLanguage">\{{ languageBtnText }}</el-button>
    <el-button @click="changeTheme">\{{ themeBtnText }}</el-button>
    <pre>\{{ help }}</pre>
    <ul>
      <li v-for="list of linkList">
        <a :href="list.href" target="_blank">\{{ list.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  addClass,
  removeClass,
  hasClass
} from 'ci-components/utils/index'

// import Vue from 'vue'

/** *********************** register directive  ************************* **/
// Vue.directive('focus', {
//   bind: function () {},
//   inserted: function (el) {
//     el.focus()
//   }
// })

/** *********************** register mixin  ************************* **/
// const HELLO_MIXIN = {
//   created () {
//     console.log('hello world')
//   }
// }

export default {
  name: 'hello',

  /** *********************** mixin  ************************* **/
  // mixins: [HELLO_MIXIN],

  /** *********************** register local components  ************************* **/
  components: {
  },

  /** ***********************  data from parent component ************************* **/
  props: {
  },

  /** ***********************  local data  ************************* **/
  data () {
    return {
      help: 'write in src/components/Hello.vue and save',
      linkList: [
        { href: 'http://router.vuejs.org/', name: 'vue-router' },
        { href: 'http://vuex.vuejs.org/', name: 'vuex' },
        { href: 'http://vue-loader.vuejs.org/', name: 'vue-loader' },
        { href: 'https://github.com/vuejs/awesome-vue', name: 'awesome-vue' }
      ]
    }
  },

  /** ***********************  data after computed  ************************* **/
  computed: {
    titleText () {
      return this.$t('hello.title')
    },
    languageBtnText () {
      return this.$t('hello.languageBtn')
    },
    themeBtnText () {
      return this.$t('hello.themeBtn')
    }
  },

  /** ***********************  life ciycle  ************************* **/

  beforeCreate () {},
  created () {}, // before dom create
  mounted () {
    // everytime dom render over
    this.$nextTick(_ => {
     // document.getElementsById
    })
  }, // after dom created
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},

  /** ***********************  functions  ************************* **/
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

  },

  /** ***********************  watch for data change  ************************* **/
  watch: {
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
