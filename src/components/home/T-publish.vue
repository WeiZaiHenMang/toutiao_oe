<template>
  <el-card>
    <div slot="header">
      <span>发表文章</span>
    </div>
    <el-form ref="rulesfrom" :model="fromdate" :rules="rules" label-width="80px">
      <el-form-item prop="title" label="标题">
        <el-input style="width:400px" v-model="fromdate.title" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item prop="content" label="内容">
        <quilleditor v-model="fromdate.content" class="content" placeholder="请输入内容"></quilleditor>
      </el-form-item>
      <el-form-item prop="cover" label="封面">
        <el-radio-group v-model="fromdate.cover.type" @change="coverchange">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <publishcom :type='fromdate.cover.type' @picture_to='url_picture' :images='fromdate.cover.images'></publishcom>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="fromdate.channel_id" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="getfrom(false)">发表</el-button>
        <el-button type="primary" @click="getfrom(true)">存入草稿</el-button>
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
      value: '',
      // 总表单验证
      fromdate: {
        // 标题
        title: '',
        // 内容
        content: '',
        // 封面
        cover: {
          type: 0,
          images: []
        },
        // 频道
        channel_id: null

      },
      rules: {
        title: [{ required: true, message: '标题内容不能为空' }, { min: 5, max: 10, message: '标题需大于5小于10个字' }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel: [{ required: true, message: '频道不能为空' }]
      }

    }
  },
  methods: {
    // 接收图片路由
    url_picture (url, index) {
      // this.fromdate.cover.images.map((item, i) => i === index ? url : item)
      // console.info(url, index)
      this.fromdate.cover.images = this.fromdate.cover.images.map((item, i) => {
        return i === index ? url : item
      })
    },
    // 图片上传
    coverchange () {
      // console.log(this.fromdate.cover.type, this.fromdate.cover.images)
      if (this.fromdate.cover.type === 1) {
        this.fromdate.cover.images = ['']
      } else if (this.fromdate.cover.type === 3) {
        this.fromdate.cover.images = ['', '', '']
      } else {
        this.fromdate.cover.images = []
      }
    },
    // 表单手动验证
    getfrom (draft) {
      this.$refs.rulesfrom.validate(isok => {
        if (isok) {
          this.$axios({
            methods: 'post',
            url: '/articles',
            params: { draft },
            data: this.fromdate
          }).then(result => {
            this.$router.push('/home/material')
          })
        }
      })
    },
    // 频道数据
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
    .content {
      height: 300px;
      margin-bottom: 60px;
    }
</style>
