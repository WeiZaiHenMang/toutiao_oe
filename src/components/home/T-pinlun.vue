 <template>
  <div>
    <el-table :data="list" stripe style="width: 100%" v-loading='loading'>
      <el-table-column prop="title" label="标题" width="500"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scoped">
          <el-button type="text">修改</el-button>
          <el-button
            @click="chearorno(scoped.row)"
            :style="{color:scoped.row.comment_status?'#F56C6C':'#409EFF'}"
            type="text"
          >{{scoped.row.comment_status?'关闭链接':'打开链接'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin:24px">
      <el-pagination
        :total="page.total"
        :current-page="page.current-page"
        :page-size="page.pagesize"
        @current-change="clkchange"
        background
        layout="prev, pager, next"
      ></el-pagination>
      <!--              总页数          当前页数        每页多少条 -->
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        // 总页数
        total: 100,
        // 当前页数
        currentpage: 1,
        // 每页多少条
        pagesize: 10
      },
      // 页面加载动态属性
      loading: false
    }
  },
  methods: {
    // 切换页码
    clkchange (newsize) {
      // 内置方法current-change点击后回返回当前点击的页码
      // console.log(arguments)
      // 把当前页码赋给变量当前页数
      this.page.currentpage = newsize
      this.getqinqiu()
    },
    // 请求评论参数
    getqinqiu () {
      this.loading = true
      this.$axios({
        url: '/articles',
        // query参数要用params
        // body参数要用data
        params: {
          response_type: 'comment',
          // 给切换页码也请求下
          page: this.page.currentpage,
          per_page: this.page.pagesize
        }
      }).then(result => {
        console.log(result)
        this.list = result.data.results
        // 总页数赋值
        this.page.total = result.data.total_count
        this.loading = false
      })
    },
    // 用element-ulvia表格内部方法格式化文件判断当前表格状态,用于-评论状态
    formatter (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 点击事件修改文章评论状态
    chearorno (row) {
      let zt = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否确定${zt}评论`).then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          //   应为全段大数据值有上限所以用特殊解决方式json-bigint方法在要转换的地方加toString方法
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(() => {
          this.getqinqiu()
        })
      })
    }
  },
  created () {
    this.getqinqiu()
  }
}
</script>

<style>
</style>
