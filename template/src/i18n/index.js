// import i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh'
import en from './en'

// default chinese also can switch to 'en'
Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh',
  messages: {
    en: {
      ...en,
      ...enLocale
    },
    zh: {
      ...zh,
      ...zhLocale
    }
  }
})
