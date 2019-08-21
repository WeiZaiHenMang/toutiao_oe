import router from './router'

// router内部守卫 to从哪来 from到哪去 next结果
router.beforeEach(function (to, from, next) {
  // 只有在地址在home开头的时候
  if (to.path.startsWith('/home')) {
    //   是否有前端储存的数据str-item
    let jsonit = window.localStorage.getItem('str-item')
    // 当有数据的时候
    if (jsonit) {
      //    把数据转换位对象,转换出token令牌
      let token = JSON.parse(jsonit).token
      //   当有前端str-item数据和token令牌的时候
      if (jsonit && token) {
        //  则不管
        next()
        //  没有则跳转回登陆页面
      } else {
        next('/')
      }
      //    没有数据str-item则跳转登陆页面
    } else {
      next('/')
    }
    //  没有则不管
  } else {
    next()
  }
})
export default router
// http://localhost:21342/#/login
