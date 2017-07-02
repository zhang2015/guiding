<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">我的公司</a>
      <p>
        <span class="icon-id"></span>
        <span @click="claim()">公司认领</span>
      </p>
    </div>
    <div class="padding20">
      <companyList></companyList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import companyList from '../companyList/companyList'

  export default {
    components:{
      companyList
    },
    methods:{
      claim:function(){
        window.location.href="#/manage/personal/myCompany/myCompanyClaim";
      }
    }
  }
</script>

<style media="screen">

</style>
