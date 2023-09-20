<template>
<div>
<el-container>
  <el-header>
  <div class="top">
    <el-button type="primary" @click="tclogin" style="margin-left:1200px">退出登录</el-button>
  </div>
  </el-header>
  <el-container>
    <el-aside width="200px" >
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类</span>
        </template>
          <el-menu-item index="1-3">分类页面</el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
          <el-menu-item index="/user">用户列表</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {
    // 退出登录  
    tclogin(){
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
  }
}
</script>
<style scoped lang='scss'>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
  //   color: #333;
  //   text-align: center;
  //   line-height: 160px;
  }
  
  // body > .el-container {
  //   margin-bottom: 40px;
  // }
  
  // .el-container:nth-child(5) .el-aside,
  // .el-container:nth-child(6) .el-aside {
  //   line-height: 260px;
  // }
  
  // .el-container:nth-child(7) .el-aside {
  //   line-height: 320px;
  // }
</style>
