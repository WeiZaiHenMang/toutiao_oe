import leftitem from '../../components/home/left-item'
import headeritem from '../../components/home/header-item'
// 运用element-ul内置方法install做全局组件
export default {
  install (Vue) {
    Vue.component('leftitem', leftitem)
    Vue.component('headeritem', headeritem)
  }
}
