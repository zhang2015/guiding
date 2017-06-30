<template>
  <div class="main_header main_wrapper">
    <p>
      <img src="../../assets/logo.png" alt="">
    </p>
    <p class="head_select main_select">
      <select class="head_select_type" v-model="selected">
        <option value="1">找服务机构</option>
        <option value="2">找企业</option>
      </select>
      <input type="text" name="" value="" :placeholder="placeholder">
      <span class="head_select_but"><span class="icon-search"></span> 搜索</span>
    </p>
    <p class="main_unlogin">
      <span class="icon-user"></span>
      <a>登录</a>
      <a>注册</a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        selected: '1',
        placeholder: '请输入服务机构名称'
      }
    },
    watch:{
      selected:function(){
        if(this.selected == '1'){
          this.placeholder = '请输入服务机构名称'
        }else{
          this.placeholder = '请输入服企业名称'
        }
      }
    },
  }
</script>

<style media="screen">
  .main_header{
    display: flex;
    width: 1210px;
    height: 82px;
    justify-content: space-between;
    align-items: center;
  }
  .head_select{
    display: flex;
    width: 542px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #5385d5;
  }
  .head_select select{
    width: 112px;
    height: 32px;
    border: none;
    font-size: 13px;
    color: #b3b3b3;
  }
  .head_select input{
    flex-grow: 1;
    height: 32px;
    border: none;
    padding: 0;
    padding-left: 15px;
    border-left: 1px solid #f1f1f1;
    font-size: 13px;
  }
  .head_select_but{
    width: 84px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #5385d5;
    color: #fff;
    font-size: 14px;
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
</style>
