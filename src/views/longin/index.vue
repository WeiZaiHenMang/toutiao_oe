<template>
  <div class="div-img">
    <el-card class="box-card">
      <div class="dv-img-two">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form :model="fromData" :rules="rules" ref="loginform">
        <el-form-item prop="mobile">
          <el-input v-model="fromData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="fromData.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="width:30%;float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checl">
          <el-checkbox v-model="fromData.checl">
            我已阅读并同意
            <a style="color:#409eff">用户协议</a> 和
            <a style="color:#409eff">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    var fun = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('需同意协议'))
      }
    }
    return {
      // 准备做表单验证
      // 先顶一个对象，放表单所需要放的值
      fromData: {
        // 给手机号做一个变量放对应的值
        mobile: '',
        // 给验证码做一个变量放对应的值
        code: '',
        // 给单选框做一个变量默认为不勾选
        checl: false
      },
      rules: {
        mobile: [
          { required: true, message: '登陆时手机号不能为空', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '格式错误',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          {
            pattern: /^\d{6}$/,
            message: '6位验证码',
            trigger: 'blur'
          }
        ],
        checl: [{ validator: fun }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginform.validate(isOK => {
        if (isOK) {
          console.log('验证通过')
        }
      })
    }
  }
}
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
