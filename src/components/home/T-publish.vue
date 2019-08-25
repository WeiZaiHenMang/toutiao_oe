<template>
  <el-card>
    <div slot="header">
      <span>发表文章</span>
    </div>
    <el-form label-width="80px">
      <el-form-item label="标题">
        <el-input style="width:400px" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="10" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group>
          <el-radio>单图</el-radio>
          <el-radio>三图</el-radio>
          <el-radio>无图</el-radio>
          <el-radio>自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success">发表</el-button>
        <el-button type="primary">存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 频道数据
      options: [],
      // 与频道绑定
      value: ''
    }
  },
  methods: {
    getchannel () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.options = result.data.channels
      })
    }
  },
  created () {
    this.getchannel()
  }
}
</script>

<style lang ='less'>
</style>
