<template>
<div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="edit">确认</el-button>
    <el-button @click="resetForm">返回</el-button>
  </el-form-item>
  </el-form>
</div>
</template>

<script>
import {getUser,getedit} from '../utils/api.js'
export default {
  name: '',
  components: {},
  data () {
    return {
        ruleForm:{
            name:"",
            email:"",
        },
         rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
             email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
         }  
    }
  },
  created () { 
    console.log(this.$route.query.id);
    let id = this.$route.query.id 
    getUser(id).then((res)=>{
        console.log(res);
        this.ruleForm = res
    })
  },
  mounted () { },
  methods: {
    // 点击确认
        edit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            getedit(this.ruleForm).then((res)=>{
                console.log(res);
                this.$message.success('编辑成功!')
                this.$router.push('/user')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
         this.$router.push('/user')
      }
    } 
    }
</script>
<style scoped lang='scss'>

</style>
