<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">我的公司</a>
      <p class="company_a">
        <span @click="applicationIn()">公司免费入驻</span>
        <i>|</i>
        <span @click="claim()">公司认领</span>
      </p>
    </div>
    <div class="padding20">
      <companyList :list="list"></companyList>
      <ZHPagination ></ZHPagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import companyList from '../companyList/companyList'

  import ZHPagination from '../ZHPagination/ZHPagination'

  export default {
    data(){
      return {
        list:[]
      }
    },
    created(){
      loginStatus(this);
      var url = path + "/index/enterprise/my-enterprise?user_id="+this.userId;
      this.$http.get(url).then(function(r){
        var td = r.data;
        this.list = td;
      })
    },
    components:{
      companyList,
      ZHPagination
    },

    methods:{
      claim:function(){
        window.location.href="#/manage/personal/myCompany/myCompanyClaim";
      },
      applicationIn:function(){
        this.$router.push("/manage/applicationIn");
      }
    }
  }
</script>

<style media="screen">
    .company_a>span{
        color: #0066FF;
        font-size: 14px!important;
        transition: .3s;
        cursor: pointer
    }
    .company_a>span:hover{
        color: #4b93ff
    }
    .company_a>i{
        color: #E0E3EB;
        font-size: 12px;
        margin: 0 10px
    }
</style>
