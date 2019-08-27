<template>
  <div class="top">
    <div @click="picture_to(index)" class="imgbox" v-for="(item,index) in images" :key="index">
      <!-- <span style="">点击上传图片</span> -->
      <img :src="item?item:img" alt />
    </div>
    <!-- close内部关闭事件给一个隐藏的值 -->
    <el-dialog :visible="picture_frame" @close="picture_frame=false" style='height:100%;'>
      <el-tabs type="card">
        <el-tab-pane label="素材库">
          <el-radio-group v-model="butclick" style="margin-bottom: 30px;">
            <el-radio-button label="全部" name='left'>全部</el-radio-button>
            <el-radio-button label="收藏">收藏</el-radio-button>
          </el-radio-group>
          <!-- 固定高度之外隐藏 -->
          <div class="bigbox"  style="height:540px;overflow-y:auto;">
            <div class="box_img" v-for="item in list" :key="item.id">
              <img @click="two_picture(item.url)" :src="item.url" alt />
            </div>
          </div>
        </el-tab-pane>
        <el-row type="flex" justify="center">
            <el-pagination
              @current-change="pagingChange"
              :current-page.sync="paging.page"
              :page-size="paging.per_page"
              layout="prev, pager, next, jumper"
              :total="paging.total_count"
            ></el-pagination>
        </el-row>
        <el-tab-pane label="上传图片">上传图片</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['type', 'images'],
  data () {
    return {
      img: require('../../../assets/img/pic_bg.png'),
      picture_frame: false,
      // 全部/收藏事件判定
      butclick: 'left',
      // 二级图框内容储存
      list: [],
      // 分页页码储存
      paging: {},
      // 二级图框图片路由
      index: ''
    }
  },
  methods: {
    // 二级图框与一级页面图片交互
    picture_to (index) {
      this.picture_frame = true
      // this.$emit('picture_to', index, this.url)
      this.index = index
      // console.info(index, this.url)
    },
    // 二级图片选取url
    two_picture (url) {
      // console.log(url)
      // console.info(url, this.index)
      this.$emit('picture_to', url, this.index)
      this.picture_frame = false
    },
    // 分页设置
    pagingChange (newpage) {
      this.paging.page = newpage
      this.picture_table()
    },
    // 二级图框请求图片
    picture_table () {
      let page = { page: this.paging.page, per_page: this.paging.per_page }
      this.$axios({
        url: '/user/images',
        params: { collect: false, ...page }
      }).then(result => {
        // console.log(result)
        this.list = result.data.results
        this.paging = result.data
      })
    }
  },
  created () {
    this.picture_table()
  }
}
</script>

<style lang='less'>
.top {
  display: flex;
  .imgbox {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
    flex-wrap: wrap;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bigbox {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    margin-right: 20px;
    .box_img {
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
      margin-left: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
