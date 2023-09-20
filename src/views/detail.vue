<template>
<div>
    <div class="box">
      <p>姓名:{{item.name}}</p>
      <p>头像: <img :src="item.avatar_url" alt=""></p>
      <p>邮箱:{{item.email}}</p>
      <p>手机号:{{item.phone}}</p>
      <p>创建时间:{{item.created_at}}</p>
      <p>更新时间:{{item.updated_at}}</p>
      <p>状态正常:{{item.is_locked==0?'锁定':'正常'}}</p>
      <el-button type="primary" @click="fh">返回</el-button>
    </div>
</div>
</template>

<script>
import {getUser} from '../utils/api.js';
export default {
  name: '',
  components: {},
  data () {
    return {
      item:{},
    }
  },
  created () { 
    console.log(this.$route.query.id);
    let id = this.$route.query.id
    getUser(id).then(res=>{
      console.log(res);
      this.item = res
    })

  },
  mounted () { },
  methods: {
    // 返回  
    fh(){
      this.$router.push('/user')
    }
  }
}
</script>
<style scoped lang='scss'>
.box{
  margin: 20px 100px;
}
p{
  margin: 30px 0;
}
.img{
  width: 50px;
  height: 50px;
}
</style>
