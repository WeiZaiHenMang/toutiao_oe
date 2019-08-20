<template>
  <el-aside width="200px">
    <div class="dv-img">
      <img src="../../assets/img/logo_admin.png" width="200" alt />
    </div>
    <!-- 导航菜单 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      :unique-opened="false"
    >
      <el-menu-item index="1-1" class="dh-one">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span style="padding-left: 20px !important;">内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span style="padding-left: 20px !important">粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item class="dh-one">账户信息</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {}
</script>

<style lang = 'less'>
.dv-img {
  text-align: center;
  height: 60px;
  padding-top: 10px;
  img {
    height: 34px;
    width: 80%;
  }
}
.dh-one {
  padding-left: 40px !important;
}
</style>
