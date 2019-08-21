import Vue from 'vue'
import App from './App.vue'
import router from './shouwei'
import ElementUI from 'element-ui'
import usecomponents from './components/use/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from '../src/axios-gj/axios-gj'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(usecomponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
