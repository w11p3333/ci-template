<template>

  <div id="app">

    <ci-topbar
      class="light-blue"
      :data="navData"
      :username="username"
      :titlename="appname" />

    <ci-container>
      <ci-sidebar
      class="light-blue"
      :data="navData"
      :titlename="appname" />

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
  computed: {
    appname () {
      return this.$t('nav.title')
    },
    username () {
      const user = this.$store.state.user.userInfo
      return user ? user.nickname : this.$t('nav.user')
    },
    navData () {
      return [
        {
          title: this.$t('nav.home'),
          name: 'index' // use vue router name
        },
        {
          title: this.$t('nav.components'),
          // icon: 'el-icon-message', // use icon class name
          items: [
            {
              title: this.$t('nav.example'),
              hash: '/example' // use vue router path
            }
          ]
        },
        {
          title: this.$t('nav.noAccess'),
          name: 'noAccess'
        },
        {
          title: '404',
          link: '/#/no.html' // use normal href
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
