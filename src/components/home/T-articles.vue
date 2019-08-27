<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="top">卡片名称</span>
      </div>
      <el-form>
        <el-form-item label="文章状态">
          <el-radio-group v-model="radio">
            <el-radio :label="1">全部</el-radio>
            <el-radio :label="2">草稿</el-radio>
            <el-radio :label="3">待审核</el-radio>
            <el-radio :label="4">审核通过</el-radio>
            <el-radio :label="5">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select v-model="value" placeholder="请选择相应频道">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker
            v-model="value1"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="card-box">
      <div slot="header" class="clearfix">
        <span class="top">共找到53821条符合条件的内容</span>
      </div>
      <el-row style="padding-bottom:20px;border-bottom:1px #f2f3f5 solid">
        <el-col :span="3">
          <div class="grid-content bg-purple one_box">
            <img src="../../assets/img/collect_select.png" alt />
          </div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-light two_box">
            <div>名字</div>
            <div>
              <el-tag type>已发表</el-tag>
            </div>
            <div>2019-08-27 08:35:06</div>
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
      <!-- <el-row type="flex" justify="center" style="margin-top:40px">
        <el-pagination
          @size-change=""
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </el-row> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 单选按钮
      radio: 1,
      // 暂顶频道ID一会删掉
      value: '',
      // 选择时间储存
      value1: '',
      // 评到列表储存
      options: [],
      // 下面内容区储存
      content: [],
      // 分页储存
      paging: []
    }
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
  background-color: #ccc;
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
