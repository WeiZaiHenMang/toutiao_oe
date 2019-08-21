import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import usecomponents from './components/use/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(usecomponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
