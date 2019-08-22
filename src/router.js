import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import login from './views/longin'
import mainitem from './components/home/main-item.vue'
import pinlun from './components/home/T-pinlun.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: mainitem
      }, {
        path: '/home/comment',
        component: pinlun
      }]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
