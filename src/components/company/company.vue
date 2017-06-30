<template>
  <div class="company main_content clearfix">
    <div class="main_content_left">
      <div class="tab_type_box">
        <div class="tab_type_head">
          <router-link :to="{ name: 'organization' }">服务机构</router-link>
          <router-link :to="{ name: 'firm' }">企业</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="main_content_right">
      <recommend></recommend>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import recommend from '../recommend/recommend'

  export default {
    components: {
      recommend
    }
  }
</script>

<style media="screen">
  .company .tab_type_box{
    border-bottom: 0;
  }
  .company_selet_box{
    width: 962px;
    border: 1px solid #e5e7ed;
    border-top: 0;
    padding: 20px 0;
  }
  .company_selet_box section{
    display: flex;
    height: 36px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    color: #898989;
    font-size: 14px;
  }
  .company_selet_box section p{
    width: 90px;
  }
  .company_selet_box section span{
    height: 22px;
    line-height: 22px;
    padding: 0 9px;
    cursor: pointer;
  }
  .company_selet_box section span.active{
    border-radius: 4px;
    background: #6398ed;
    color: #fff;
  }
  .company_list_box{
    margin-top: 30px;
  }
  .company_list_head span{
    color: #ff8a6e;
  }
</style>
