<template>
<div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item >
   <el-button type="primary" @click="onsubmit">登录</el-button>
  </el-form-item>
  </el-form>
</div>
</template>

<script>
import {tologin} from '../utils/api.js'
export default {
  name: '',
  components: {},
  data () {
    return {
        ruleForm:{
            email:'super@a.com',
            password:"123123",
        },
        rules:{
            email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
             password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
    }
  },
  created () { },
  mounted () { },
  methods: {
    // 登录
    onsubmit(){
         this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            tologin(this.ruleForm).then(res=>{
                console.log(res);
                localStorage.setItem('token',res.access_token)
                this.$router.push('/')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
  }
}
</script>
<style scoped lang='scss'>
.box{
    width: 500px;
    height: 200px;
    background-color: #fff;
    padding: 40px 20px;
    margin: 200px auto;
}
</style>
