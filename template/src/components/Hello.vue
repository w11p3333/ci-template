<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>\{{ titleText }}</h1>
    <el-button @click="changeLanguage">\{{ btnText }}</el-button>
    <pre>\{{ help }}</pre>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
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
