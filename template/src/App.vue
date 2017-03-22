<template>

  <div id="app">

    <ci-navbar theme="dark" mode="horizontal" :data="data" />

    <ci-container>
      <ci-navbar mode="vertical" :data="data" />

      <ci-content>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </ci-content>

    </ci-container>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          title: '我的控制台',
          link: '#index',
          icon: 'el-icon-message'
        },
        {
          title: '组件',
          items: [
            {
              items: [
                {
                  title: '实例',
                  link: '#example'
                }
              ]
            }
          ]
        },
        {
          title: '无权限',
          link: '#noAccess'
        },
        {
          title: '404',
          link: '#notFound'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
