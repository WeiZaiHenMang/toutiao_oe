import leftitem from '../../components/home/left-item'
import headeritem from '../../components/home/header-item'
// 富文本
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// publish页面图片副组件
import publishcom from '../home/publish-com/publish-com.vue'
// 运用element-ul内置方法install做全局组件
import { quillEditor } from 'vue-quill-editor'
export default {
  install (Vue) {
    Vue.component('leftitem', leftitem)
    Vue.component('headeritem', headeritem)
    Vue.component('quilleditor', quillEditor)
    Vue.component('publishcom', publishcom)
  }
}
