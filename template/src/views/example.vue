<template>

  <div v-loading="loading" element-loading-text="loading..." class="example">

    <ci-row class="row">
      <ci-col :span="24">
        <a href="https://github.com/mzabriskie/axios">axios</a>
        <div>
          <el-button :loading="networkLoading" @click="getData">about network</el-button>
        </div>
      </ci-col>
    </ci-row>

    <ci-row class="row">
      <ci-col class="quill-editor" :span="24">
        <a href="https://github.com/surmon-china/vue-quill-editor">vue-quill-editor</a>
        <quill-editor v-model="quillValue" />
      </ci-col>
    </ci-row>

    <ci-row class="row">
      <ci-col class="markdown-editor" :span="24">
        <a href="https://github.com/F-loat/vue-simplemde">vue-simplemde</a>
        <markdown-editor :costom-theme="true" preview-class="markdown-body" v-model="markdownValue" />
      </ci-col>
    </ci-row>

    <ci-row class="row">
      <ci-col class="chart" :span="24">
        <a href="https://github.com/xlsdg/vue-echarts-v3">vue-echarts-v3</a>
        <eCharts :option="chart" @ready="onReady" @click="onClick" />
      </ci-col>
    </ci-row>

  </div>

</template>

<script>
import Vue from 'vue'
import * as apis from 'src/apis'
import quillEditor from 'vue-quill-editor'
import makedownEditor from 'vue-simplemde'
import eCharts from 'vue-echarts-v3'
import 'simplemde-theme-base/dist/simplemde-theme-base.min.css'
import 'github-markdown-css'

Vue.use(quillEditor)
Vue.use(makedownEditor)

export default {
  components: {
    eCharts
  },
  data () {
    return {
      loading: true,
      networkLoading: false,
      quillValue: '<b>Hello Quill Editor</b>',
      markdownValue: '# hello Markdown',
      chart: {
        title: {
          text: 'Hello Chart'
        },
        tooltip: {},
        xAxis: {
          data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted () {
    setTimeout(_ => {
      this.loading = false
      this.$message({
        message: 'welcome to components',
        type: 'success'
      })
    }, 1000)
  },
  methods: {
    /** about chartss */
    onReady (instance) {
    },
    onClick (event, instance, echarts) {
    },
    /** network */
    async getData () {
      this.networkLoading = true
      try {
        await apis.fetchLogin({ page_name: '/index' })
      } catch ({ message }) {
        this.$message({
          message,
          type: 'error'
        })
      } finally {
        this.networkLoading = false
      }
      // Another way
      // this.$createApi(url, params)
      // .then(res => {
      // })
      // .catch(error => {
      // })
      // also can use $http
      // this.$http.post  || this.$http.get
    }
  }
}
</script>

<style lang="scss" scoped>
  .example {
    text-align: center;
    margin: 10px;
    .row {
      margin-bottom: 50px;
    }
    a {
      color: #42b983;
    }
    .chart {
      height: 400px;
    }
  }
</style>
