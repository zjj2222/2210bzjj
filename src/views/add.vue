<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm" >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">新建</el-button>
        <el-button @click="resetForm">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addlist } from "../utils/api.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
          ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" }
          ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          addlist(this.ruleForm).then((res) => {
            console.log(res);
            this.$message.success("添加成功");
            this.$router.push("/user");
          });
        }
      });
    },
    resetForm() {
      this.$router.back(-1);
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
