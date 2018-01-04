<template>
  <div class="main_content clearfix">
    <div class="manage_content_left">
      <div class="company_logo_box">
        <section>
          <router-link to="/manage/companyManage/companyManageCompany">
            <img :src="src">
          </router-link >
          <span>更换logo</span>
        </section>
        <p>{{company.name?company.name:''}}</p>
      </div>
      <commonNav :commonNavList='personalTabs'></commonNav>
    </div>
    <div class="manage_content_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import commonNav from '../commonNav/commonNav'

  export default {
    data(){
      return{
        personalTabs:[
          {
            name: '管理订单',
            pathname: 'companyManageOrder',
            iconclass: 'icon-doc'
          },
          {
            name: '服务设置',
            pathname: 'companyManageSetting',
            iconclass: 'icon-heart'
          },
          {
            name: '公司管理',
            pathname: 'companyManageCompany',
            iconclass: 'icon-module'
          },
          {
            name: '发票管理',
            pathname: 'companyManageInvoice',
            iconclass: 'icon-box'
          },
          {
            name: '认证管理',
            pathname: 'companyManageApprove',
            iconclass: 'icon-map-marker'
          },
          {
            name: '钱包',
            pathname: 'companyManageWallet',
            iconclass: 'icon-wallet'
          },
          {
            name: '安全退出',
            pathname: 'companyManageLogout',
            iconclass: 'icon-exit'
          }
        ],

        company:{},
        path:path,
        src:require('../../assets/default/qiye_com.png')

      }
    },
    components:{
      commonNav
    },
    created(){

      loginStatus(this);

      if(this.companyId){
        this.requestOrganizationDetail();
      }
      

    },
    methods:{
      requestOrganizationDetail:function(){

        // /index/company/show
        var url = path + "/index/company/show?company_id="+this.companyId;
        this.$http.get(url).then(function(r){
          var td = r.data;
          this.company = td.company;
          this.src = path + this.company.cover_img;
        })
      }
    }
  }
</script>

<style media="screen">
  .company_logo_box{
    width: 224px;
    height: 218px;
    border: 1px solid #e5e7ed;
    background: #f9fafc;
    text-align: center;
    margin-bottom: 30px;
  }
  .company_logo_box section{
    width: 128px;
    height: 128px;
    position: relative;
    margin: auto;
    margin-top: 18px;
  }
  .company_logo_box section img{
    width: 100%;
    height: 100%;
  }
  .company_logo_box section span{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 25px;
    line-height: 25px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
  }
  .company_logo_box p{
    width: 130px;
    margin: auto;
    font-size: 13px;
    color: #898989;
    line-height: 20px;
    padding-top: 10px;
  }
</style>
