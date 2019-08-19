<template>
  <div class="div-img">
    <el-card class="box-card">
      <div class="dv-img-two">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="width:30%;float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>
            我已阅读并同意
            <a style="color:#409eff">用户协议</a> 和
            <a style="color:#409eff">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
.div-img {
  background-image: url("../../assets/img/login_bg.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 500px;
    height: 360px;
    .dv-img-two {
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 200px;
      }
    }
  }
}
</style>
