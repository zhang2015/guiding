<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">安全退出</a>

    </div>
    <div class="logout-button-block">
        <p>您确定要退出该账号吗？</p>
      <span @click="dealLogout" class="btn-red">点击确定注销</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created:function(){
       loginStatus(this)
    },
    methods:{
      dealLogout:function(){
        this.removeUserMsg();
      },
      removeUserMsg: function(data){
        
            localStorage.removeItem('userId')
            localStorage.removeItem('nick_name')
            localStorage.removeItem('name')
            localStorage.removeItem('img')
        
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('nick_name')
            sessionStorage.removeItem('name')
            sessionStorage.removeItem('img')
          
          this.$router.push('/login')
      }
    }
  }
</script>

<style media="screen" scoped>
  .logout-button-block{
    padding: 20px;
  }
    .logout-button-block{
        text-align: center;
    }
    .logout-button-block>p{
        font-size: 16px;
        padding-bottom: 20px
    }
</style>
