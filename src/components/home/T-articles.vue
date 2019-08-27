<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="top">全部图文</span>
      </div>
      <el-form>
        <el-form-item label="文章状态">
          <el-radio-group @change="getsearch" v-model="fromdata.status">
            <el-radio :label="5">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select v-model="fromdata.channel_id" @change="getsearch" placeholder="请选择相应频道">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <!-- {{fromdata.channel_id}} -->
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker
            v-model="fromdata.newdata"
            @change="getsearch"
            type="daterange"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <!-- {{fromdata.newdata}} -->
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="card-box">
      <div slot="header" class="clearfix">
        <span class="top">共找到{{paging.total_count}}条符合条件的内容</span>
      </div>
      <el-row
        style="padding-bottom:20px;border-bottom:1px #f2f3f5 solid"
        v-for="(item,index) in content"
        :key="index"
      >
        <el-col :span="3">
          <div class="grid-content bg-purple one_box">
            <img :src="item.cover.images[0]" alt />
          </div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-light two_box">
            <div>{{item.title}}</div>
            <div>
              <el-tag :type='item.status|statsty'>{{item.status|statfli}}</el-tag>
            </div>
            <div>{{item.pubdate}}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple three_box">
            <i class="el-icon-edit">&nbsp;修改&nbsp;</i>
            <i class="el-icon-delete">&nbsp;删除</i>
          </div>
        </el-col>
      </el-row>
      <!-- 分页 -->
      <el-row type="flex" justify="center" style="margin-top:40px">
        <el-pagination
          @current-change="getpaging"
          :current-page="paging.page"
          :page-size="paging.per_page"
          layout="prev, pager, next, jumper"
          :total="paging.total_count"
        ></el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fromdata: {
        // 单选按钮
        status: 5,
        // 频道ID
        channel_id: '',
        // 选择时间储存
        newdata: ''
      },
      // 频道列表储存
      options: [],
      // 下面内容区储存
      content: {},
      // 分页储存
      paging: []
    }
  },
  methods: {
    // 搜索事件
    getsearch () {
      let { status, channel_id: a, newdata } = this.fromdata
      let params = {
        status: status === 5 ? null : status,
        channel_id: a,
        begin_pubdate: newdata && newdata.length ? newdata[0] : null,
        end_pubdate: newdata && newdata.length > 1 ? newdata[1] : null,
        page: this.paging.page,
        per_page: this.paging.per_page
      }
      this.$axios({
        url: '/articles',
        params: { params }
      }).then(() => {
        console.log(params)
        console.log('完成')
      })
    },
    // 分页事件
    getpaging (newv) {
      this.paging.page = newv
      console.log(newv)
      this.gitcontent()
    },
    // 内容列表
    gitcontent () {
      this.$axios({
        url: '/articles',
        params: { page: this.paging.page, per_page: this.paging.per_page }
      }).then(result => {
        this.content = result.data.results
        this.paging = result.data
        console.log(result.data)
      })
    },
    // 频道内容
    getchannel () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.options = result.data.channels
      })
    }
  },
  // 文章状态过滤器
  filters: {
    statfli (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '审核通过'
        case 3:
          return '审核失败'
        case 4:
          return '已删除'
        case 5:
          return '全部'
      }
    },
    statsty (value) {
      switch (value) {
        case 0:
          return 'info'
        case 1:
          return 'warning'
        case 2:
          return 'success'
        case 3:
          return 'danger'
        case 4:
          return 'danger'
        case 5:
          return ''
      }
    }
  },
  created () {
    this.getchannel()
    this.gitcontent()
  }
}
</script>

<style lang='less' scoped>
.box-card {
  margin-bottom: 20px;
}
.one_box {
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    height: 100px;
  }
}
.two_box {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 14px;
}
.three_box {
  display: flex;
  justify-content: flex-end;
}
</style>
