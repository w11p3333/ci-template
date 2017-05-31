import { Vue } from '../handler'
import i18n from 'src/i18n'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend({
      i18n,
      ...Hello
    })
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('welcome to your vue.js app')
  })
})
