<template>

  <div id="app">

    <ci-navbar theme="dark" mode="horizontal" :data="navData" />

    <ci-container>
      <ci-navbar mode="vertical" :data="navData" />

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
    navData () {
      return [
        {
          title: this.$t('nav.title'),
          name: 'index', // use vue router name
          icon: 'el-icon-message'
        },
        {
          title: this.$t('nav.components'),
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
