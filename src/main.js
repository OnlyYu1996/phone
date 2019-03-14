// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import museUi from 'muse-ui'
import commons from './commons'
import router from '../router'
import store from './vuex'
Vue.use(museUi)
Vue.use(commons)
// Vue.use(museUiLoading)

Vue.config.productionTip = false
// 设置默认打开的页面
router.replace('message')

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
