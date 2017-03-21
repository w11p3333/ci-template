<template>
  <div id="app">
    <ci-navbar theme="dark" mode="horizontal" :data="data" class="topbar" />
    <div class="container">
      <ci-navbar mode="vertical" :data="data" class="sidebar" />
      <div class="content">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          title: '处理中心',
          link: 'www.baidu.com'
        },
        {
          title: '我的工作台',
          items: [
            {
              title: '分组二',
              items: [
                {
                  title: '导航三',
                  link: 'www.baidu.com'
                },
                {
                  title: '导航四'
                }
              ]
            }
          ]
        },
        {
          title: '订单管理',
          items: [
            {
              title: '分组三'
            },
            {
              title: '分组四'
            }
          ]
        }
      ]
    }
  }
}
</script>
