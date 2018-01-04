<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav ref="mainNav"></mainNav>
    <div class="main_wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainHeader from '../mainHeader/mainHeader'
  import mainNav from '../mainNav/mainNav'
  
  export default {
    components:{
      mainHeader,
      mainNav
    },
    mounted(){
      
      //(1)组件内,默认不显示
      //(2)载入时, 如果当前界面路径为 /main, 则显示下拉框
      //(3)组件内 - 监控路由, 一旦改变则隐藏
      //console.log(this.$route)
      if(this.$route.path == '/main'){
        
        this.$refs.mainNav.$data.dropDownShow = true;
      }
      
    }
  }
</script>

<style media="screen">

</style>
