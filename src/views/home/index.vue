<template>
  <div>
    <el-container>
      <el-aside width="200px" class="letf-box">
        <leftitem></leftitem>
      </el-aside>
      <el-container>
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <li class="el-icon-s-unfold"></li>
                <span>江苏传智播客教育科技股份有限公司</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <!-- 搜索框 -->
                <el-input
                  placeholder="请输入搜索的文章内容"
                  prefix-icon="el-icon-search"
                  style="width:210px"
                  clearable
                ></el-input>
                <el-badge is-dot>&nbsp;&nbsp;消息</el-badge>
                <span class="divimg"></span>
                <el-dropdown trigger="click" >
                  <span class="el-dropdown-link" id="xia-la">
                    下拉菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>git地址</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftitem from '../../components/home/left-item'
export default {
  components: {
    leftitem: leftitem
  }
}
</script>

<style lang ='less'>
.letf-box {
  height: 100vh;
  background-color: #323745;
}

.el-menu-item {
  width: 200px;
}
.main {
  background-color: #f2f3f5;
}
.row-bg {
  line-height: 60px;
  color: #2c3e50;
  li {
    font-size: 20px;
  }
  span {
    font-size: 20px;
  }
}
.divimg {
  display: inline-block;
  background-image: url("../../assets/img/avatar.jpg");
  background-size: contain;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transform: translate(10px, 10px);
}
#xia-la{
  margin-left: 26px;
  font-size: 15px;
}
</style>
