<template>
  <div class="list">
    <div class="top">
      <el-form :inline="true" :model="queryData" class="demo-form-inline">
  <el-form-item label="姓名">
    <el-input v-model="queryData.name" placeholder="姓名"></el-input>
  </el-form-item>
    <el-form-item label="邮箱">
    <el-input v-model="queryData.email" placeholder="邮箱"></el-input>
  </el-form-item>
    <el-form-item label="手机号">
    <el-input v-model="queryData.phone" placeholder="手机号"></el-input>
  </el-form-item>
   <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form>
    </div>
    <el-button type="primary" @click="add">添加</el-button>
    <div class="box">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="180">
        </el-table-column>
        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_locked"
              :active-value="1"
              :inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="180">
          <template slot-scope="scope">
            {{ scope.row.created_at | timer }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="detail(scope.row.id)">详情</el-button>
            <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="querlist"
        :current-page.sync="queryData.current"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getlist } from "../utils/api";
export default {
  name: "",
  components: {},
  data() {
    return {
      queryData: {
        current: 1,
        name: "",
        email: "",
        phone: "",
      },
      list: [],
      total: 0,
    };
  },
  created() {
    this.querlist();
  },
  filters: {
    timer(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  mounted() {},
  methods: {
    // 查询
    onSubmit() {
      this.queryData.current = 1;
      this.querlist();
    },
    querlist() {
      getlist(this.queryData).then((res) => {
        console.log(res);
        this.list = res.data;
        this.total = res.meta.pagination.total;
      });
    },
    add(){
      this.$router.push('/add')
    },
    detail(id){
      this.$router.push('/detail?id='+id)
    },
    edit(id){
      this.$router.push('/edit?id='+id)

    }
  },
};
</script>
<style scoped lang='scss'>

.list {
  background-color: #fff;
  padding: 10px;
}
.box {
  width: 100%;
  padding: 20px;
}

</style>
