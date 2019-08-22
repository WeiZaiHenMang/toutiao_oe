<template>
  <div>
    <!-- 左边框 -->
    <el-container>
      <el-aside width="200px" class="letf-box">
        <!-- 左边框内容区 -->
        <leftitem></leftitem>
      </el-aside>
      <el-container>
        <!-- 头部栏 -->
        <el-header>
          <!-- 头部栏内容区 -->
          <headeritem></headeritem>
        </el-header>
        <!-- 内容区 -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang ='less'>
.letf-box {
  min-height: 100vh;
  background-color: #323745;
}
.main {
  background-color: #f2f3f5;
}

</style>
