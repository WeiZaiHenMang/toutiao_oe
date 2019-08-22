<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <li class="el-icon-s-unfold" style="font-size: 20px"></li>
        <span> &nbsp;&nbsp;江苏传智播客教育科技股份有限公司</span>
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-content bg-purple">
        <!-- 搜索框 -->
        <el-input
          placeholder="请输入搜索的文章内容"
          prefix-icon="el-icon-search"
          style="width:210px"
          clearable
        ></el-input>
        <el-badge is-dot>&nbsp;&nbsp;消息</el-badge>
        <span class="divimg">
          <img :src="useritem.photo?useritem.photo:deitem" alt="">
          </span>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link" id="xia-la">{{useritem.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item  command="peo">个人信息</el-dropdown-item>
            <el-dropdown-item  command="git">git地址</el-dropdown-item>
            <el-dropdown-item  command="next">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      deitem: require('../../assets/img/avatar.jpg'),
      useritem: {

      }
    }
  },
  methods: {
    // 请求数据
    use () {
      // let jsonitem = window.localStorage.getItem('str-item')
      // let token = jsonitem ? JSON.parse(jsonitem).token : null
      this.$axios({
        url: '/user/profile'
        // headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        // console.log(result)
        this.useritem = result.data
      })
      // console.log(token)
    },
    handleCommand (command) {
      console.log(command)
      if (command === 'peo') {
        window.location.href = '/home/center'
      } else if (command === 'git') {
      } else {
        window.localStorage.clear()
        window.location.href = '/login'
      }
    }
  },
  created () {
    this.use()
  }
}
</script>

<style lang = 'less' >
.row-bg {
  line-height: 60px;
  color: #2c3e50;
  span {
    font-size: 20px;
  }
}
.divimg {
  display: inline-block;
  /* background-image: url("../../assets/img/avatar.jpg");
  background-size: contain; */
  transform: translate(10px, 10px);
  img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  }
}
#xia-la {
  margin-left: 26px;
  font-size: 15px;
}
</style>
