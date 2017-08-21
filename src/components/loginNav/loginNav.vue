<template>
<div class="loginNav_wrapper">
  <div class="main_header main_wrapper">
    <p>
      <img src="../../assets/logo.png" alt="">
    </p>
    <p class="main_unlogin">
      <span class="icon-user"></span>
      <a>登录</a>
      <a>注册</a>
    </p>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  
</script>

<style media="screen">
.loginNav_wrapper{
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
}
  .main_header{
    display: flex;
    width: 1210px;
    height: 82px;
    justify-content: space-between;
    align-items: center;
  }
  .main_unlogin .icon-user{
    color: #d6d6d6;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #d6d6d6;
    border-radius: 100%;
  }
  .main_unlogin a{
    color: #616161;
  }
  .main_unlogin a:nth-child(2){
    padding-right: 10px;
    margin-right: 5px;
    border-right: 1px solid #d6d6d6;
  }
  .loginNav_wrapper .main_header{
    height: 62px;
  }
  .loginNav_wrapper .main_header img{
    width: 128px;
    height: 45px;
  }
</style>
