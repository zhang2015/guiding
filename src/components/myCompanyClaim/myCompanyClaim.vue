<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">公司认领</a>
    </div>
    <div class="padding20">
      <section class="help_select">
        <input type="text" name="" value="" placeholder="请输入您要认领的公司名称">
        <span class="help_select_btn"><span class="icon-search"></span> 搜索</span>
      </section>
      <companyList></companyList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import companyList from '../companyList/companyList'

  export default {
    components:{
      companyList
    }
  }
</script>

<style media="screen">
  .help_select{
    display: flex;
    width: 550px;
    height: 32px;
    border: 2px solid #6398ed;
    margin: 30px auto 35px auto;
  }
  .help_select input{
    flex-grow: 1;
    border: 0;
    padding-left: 10px;
  }
  .help_select_btn{
    width: 80px;
    height: 32px;
    background: #6398ed;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 32px;
  }
</style>
