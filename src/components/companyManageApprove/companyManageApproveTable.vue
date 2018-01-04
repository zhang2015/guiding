<template>
  <div>
      <table class="approve_table" v-if="isShow">
        
        <tr>  
            <td colspan="3" >公司认证</td>  
            <td><div class="approve-state"><router-link :to="{name:'companyManageApproveCompany'}" class="passed"><span class="icon-ok"></span> 已认证</router-link></div></td>
        </tr> 



        <tr>
          <td  rowspan="100">资质认证</td>
          <td  :rowspan="auto[0].child.length"> {{auto[0].name}}</td>
          <td class="long_td">{{auto[0].child[0].name}}</td>
          <td>
            <div class="approve-state">
                <router-link :to="{name:'companyManageApproveBrand'}" class="nopassed"><span class="icon-ok"></span> 未认证</router-link>
            </div> 
            <a href="#" class="btn-bd-green-s">去认证</a>
          </td>
        </tr>

        <!-- <tr v-for="index in auto[0].child.length-1">
          <td class="long_td">专利代理1</td>
            <td><div class="approve-state"><router-link :to="{name:'companyManageApprovePatent'}" class="passing"><span class="icon-ok"></span> 认证中...</router-link></div>
          </td>
        </tr> -->
        <tr v-for="(item,index) in auto[0].child" v-if="index>0">
          <td  class="long_td">{{item.name}}</td>
            <td><div class="approve-state"><router-link :to="{name:'companyManageApprovePatent'}" class="passing"><span class="icon-ok"></span> 认证中...</router-link></div>
          </td>
        </tr>


        <!-- <tr>
          <td class="long_td">版权代理</td>
          <td>
            <div class="approve-state">
              <a class="failpass"><span class="icon-ok"></span> 认证失败</a>
            </div>
            <a href="#" class="btn-bd-green-s">重新认证</a>
          </td>
        </tr> -->




        <tr>
          <td  :rowspan="auto[1].child.length">{{auto[1].name}} </td>
          <td class="long_td">{{auto[1].child[0].name}}</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr v-for="(item,index) in auto[1].child" v-if="index>0">
          <td class="long_td">{{item.name}}</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <!-- <tr>
          <td class="long_td">矿产评估</td> 
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr> -->
        
        


        <tr>
          <td  :rowspan="auto[2].child.length">{{auto[2].name}}</td>
          <td class="long_td">{{auto[2].child[0].name}}</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr v-for="(item,index) in auto[2].child" v-if="index>0">
          <td class="long_td">房地产评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <!-- <tr>
          <td class="long_td">矿产评估</td> 
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr> -->
      



        <tr>
          <td  :rowspan="auto[3].child.length"> {{auto[3].name}}</td>
          <td class="long_td">{{auto[3].child[0].name}}</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr v-for="(item,index) in auto[3].child" v-if="index>0">
          <td class="long_td">{{item.name}}</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <!-- <tr>
          <td class="long_td">矿产评估</td> 
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">房地产评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">矿产评估</td> 
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">房地产评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr> -->
        
      
        



       <!--
        <tr>
          <td  rowspan="11">资质认证</td>
          <td  rowspan="3">知识产权所</td>
          <td class="long_td">商标代理</td>
          <td>
            <div class="approve-state">
                <router-link :to="{name:'companyManageApproveBrand'}" class="nopassed"><span class="icon-ok"></span> 未认证</router-link>
            </div> 
            <a href="#" class="btn-bd-green-s">去认证</a>
          </td>
        </tr>

        <tr>
          <td class="long_td">专利代理</td>
            <td><div class="approve-state"><router-link :to="{name:'companyManageApprovePatent'}" class="passing"><span class="icon-ok"></span> 认证中...</router-link></div></td>
        </tr>
        <tr>
          <td class="long_td">版权代理</td>
          <td>
            <div class="approve-state">
              <a class="failpass"><span class="icon-ok"></span> 认证失败</a>
            </div>
            <a href="#" class="btn-bd-green-s">重新认证</a>
          </td>
        </tr>
        <tr>
          <td  rowspan="5">评估公司</td>
          <td class="long_td">综合评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">房地产评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">矿产评估</td> 
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">林业评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td class="long_td">证券从业评估</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td colspan="2">会计师事务所</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        <tr>
          <td colspan="2">律师所</td>
            <td><div class="approve-state"><a class="passed"><span class="icon-ok"></span> 已认证</a></div></td>
        </tr>
        -->


      </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        auto:[],

        isShow:false
      }
    },

    created(){
      loginStatus(this);

      this.downloadTable();

    },
    computed:{
      invoiceAllCount:function(){
        var allCount = 0;
        for(var i in this.auto){
          var listItem = this.auto[i];
          allCount += listItem.child.length;

        }
        console.log(allCount)
        return allCount
      },
      invoiceSubAllCount:function(){

      }
    },
    methods:{
      downloadTable:function(){
        // /index/company/company-auto
        var url = path + "/index/company/company-auto?company_id="+this.companyId;

        this.$http.get(url).then(function(r){
          var td = r.data;
          this.auto = td.auto;

          //测试
          // this.auto[0].child = this.auto[0].child.splice(0,1)
          // this.auto[1].child = this.auto[1].child.splice(0,1)
          // this.auto[2].child = this.auto[2].child.splice(0,1)
          // this.auto[3].child = this.auto[3].child.splice(0,1)

          this.isShow = true;
        })
      }
    }
  }
</script>

<style media="screen">
.approve_table{
  width: 100%;
  font-size: 14px
}
.approve_table td{
  height: 45px;
  vertical-align:middle;
  text-align: left;
  padding-left: 10px;
  border: 1px solid #eef0f6;
}
.approve_table td.long_td{
  width: 400px;
}
.passed{
  color:#64CA60;
}
.nopassed{
  color: #adadad;
}
.passing{
  color: #F8B800;
}
.failpass{
  color: #FF0000;
}
    .approve-state{
        width: 160px;
        display: inline-block
    }
</style>
