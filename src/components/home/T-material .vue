<template>
  <el-card class="box-card" shadow="never">
    <div class="top">图片管理</div>
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-radio-group
            v-model="radio"
            style="margin: 20px 4px;"
            size="small"
            @change="getchange(radio)"
          >
            <el-radio-button :label="true">全部</el-radio-button>
            <el-radio-button :label="false">收藏</el-radio-button>
          </el-radio-group>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <div v-if="radio">
      <el-row type="flex" justify="space-evenly" style="flex-wrap: wrap">
        <div class="box_1" v-for="item in list " :key="item.id">
          <!-- 取值要加v-bind -->
          <img :src="item.url" alt />
          <div class="box_2">
            <span class="el-icon-star-on" :style="{color:item.is_collected?'red':''}"></span>
            <span class="el-icon-delete-solid"></span>
          </div>
        </div>
      </el-row>
    </div>
    <div v-if="!radio">
      <el-row type="flex" justify="space-evenly" style="flex-wrap: wrap">
        <div class="box_1" v-for="item in list " :key="item.id">
          <!-- 取值要加v-bind -->
          <img :src="item.url" alt />
        </div>
      </el-row>
    </div>
    <el-row type="flex" justify="center">
      <el-pagination
        layout="prev, pager, next"
        :total="page.total"
        :current-page="page.currentpage"
        @current-change="pagechange"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      radio: 'true',
      list: [],
      page: {
        // 总页数
        total: null,
        // 显示第几页
        currentpage: 1,
        // 每页显示多少个
        pagesize: 20
      }
    }
  },
  methods: {
    // 分页
    pagechange (newsize) {
      this.page.currentpage = newsize
      this.getpicture()
    },
    // 收藏
    getchange (radio) {
      // console.log(radio)
      this.getpicture()
    },
    // 图文求值
    getpicture () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.radio === false,
          page: this.page.currentpage,
          per_page: this.page.pagesize
        }
      }).then(result => {
        console.log(result)
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getpicture()
  }
}
</script>

<style lang='less' scoped>
.box-card {
  min-height: 100vh;
  border-radius: 0px;
  .top {
    height: 40px;
    border-bottom: 1px #ccc dashed;
  }
  .box_1 {
    width: 150px;
    height: 150px;
    position: relative;
    margin: 30px 46px;
    img {
      width: 100%;
      height: 80%;
    }
    .box_2 {
      width: 100%;
      height: 30px;
      background-color: #f4f5f6;
      position: absolute;
      bottom: 0;
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      padding: 5px 0;
    }
  }
}
</style>
