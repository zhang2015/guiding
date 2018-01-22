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
      <companyList :list="items"></companyList>
      <moPaging 
            :page-index="currentPage" 
            :page-size="pageSize" 
            :total="count" 
            @change="pageChange">
            </moPaging>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import companyList from '../companyList/companyList'
  import moPaging from "../MoPaging/MoPaging"

  export default {
    data(){
      return {
        pageSize: 15, //每页显示20条数据
        currentPage: 1, //当前页码
        count: 0, //总记录数
        items: []
      }
    },
    created(){
      loginStatus(this);
      this.getList();
    },
    components:{
      companyList,
      moPaging
    },
    methods:{
      //获取数据
      getList() {
        var url = path + "/index/enterprise/my-enterprise"
        var dict = {
          user_id : this.userId,
          page: this.currentPage
        }
        this.$http.get(url,{params:dict}).then(function(r){
          var td = r.data;
          var list = td.data;
          this.count = td.total;
          this.items = list;
        })
      },
      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page;
        this.getList();
      },
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
