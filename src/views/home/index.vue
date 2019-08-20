<template>
  <div>
    <el-container>
      <el-aside width="200px" class="letf-box">
        <leftitem></leftitem>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main class="main">Main</el-main>
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
</style>
