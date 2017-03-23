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
  computed: {
    navData () {
      return [
        {
          title: this.$t('nav.title'),
          link: '#index',
          icon: 'el-icon-message'
        },
        {{#example}}
        {
          title: this.$t('nav.components'),
          items: [
            {
              items: [
                {
                  title: this.$t('nav.example'),
                  link: '#example'
                }
              ]
            }
          ]
        },
        {{/example}}
        {
          title: this.$t('nav.noAccess'),
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
