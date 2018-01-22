<template>
  <div>
      <table class="approve_table" v-if="isShow">
        
        <tr>  
            <td colspan="3" >公司认证</td>  
            <td>
              <div class="approve-state">
                <a v-if="company_auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="company_auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="company_auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="company_auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
              </div>
              <router-link :to="{name:'companyManageApproveCompany',params: { qualification_id: 0 }}" v-show="company_auto == null || auto[0].child[0].auto == '-1'" class="btn-bd-green-s">去认证</router-link>
            </td>
        </tr> 

        <tr>
          <td  rowspan="100">资质认证</td>
          <td  :rowspan="auto[0].child.length"> {{auto[0].name}}</td>
          <td class="long_td">{{auto[0].child[0].name}}</td>
          <td>
            <div class="approve-state">
                <a v-if="auto[0].child[0].auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="auto[0].child[0].auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="auto[0].child[0].auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="auto[0].child[0].auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: auto[0].child[0].id }}" class="btn-bd-green-s" v-show="auto[0].child[0].auto == null || auto[0].child[0].auto == '-1'">去认证</router-link>
          </td>
        </tr>

        <tr v-for="(item,index) in auto[0].child" v-if="index>0" :key="index">
          <td  class="long_td">{{item.name}}</td>
          <td>
              <div class="approve-state">
                <a v-if="item.auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="item.auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="item.auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="item.auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: item.id }}" class="btn-bd-green-s" v-show="item.auto == null || item.auto == '-1'">去认证</router-link>
          </td>
        </tr>

        <tr>
          <td  :rowspan="auto[1].child.length">{{auto[1].name}} </td>
          <td class="long_td">{{auto[1].child[0].name}}</td>
          <td>
            <div class="approve-state">
                <a v-if="auto[1].child[0].auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="auto[1].child[0].auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="auto[1].child[0].auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="auto[1].child[0].auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: auto[1].child[0].id }}" class="btn-bd-green-s" v-show="auto[1].child[0].auto == null || auto[1].child[0].auto == '-1'">去认证</router-link>
          </td>
        </tr>
        <tr v-for="(item,index) in auto[1].child" v-if="index>0" :key="index">
          <td class="long_td">{{item.name}}</td>
          <td>
              <div class="approve-state">
                <a v-if="item.auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="item.auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="item.auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="item.auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: item.id }}" class="btn-bd-green-s" v-show="item.auto == null || item.auto == '-1'">去认证</router-link>
          </td>
        </tr>
        
        <tr>
          <td  :rowspan="auto[2].child.length">{{auto[2].name}}</td>
          <td class="long_td">{{auto[2].child[0].name}}</td>
          <td>
            <div class="approve-state">
                <a v-if="auto[2].child[0].auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="auto[2].child[0].auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="auto[2].child[0].auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="auto[2].child[0].auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: auto[2].child[0].id }}" class="btn-bd-green-s" v-show="auto[2].child[0].auto == null || auto[2].child[0].auto == '-1'">去认证</router-link>
          </td>
        </tr>
        <tr v-for="(item,index) in auto[2].child" v-if="index>0" :key="index">
          <td class="long_td">{{item.name}}</td>
          <td>
              <div class="approve-state">
                <a v-if="item.auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="item.auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="item.auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="item.auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: item.id }}" class="btn-bd-green-s" v-show="item.auto == null || item.auto == '-1'">去认证</router-link>
          </td>
        </tr>

        <tr>
          <td  :rowspan="auto[3].child.length"> {{auto[3].name}}</td>
          <td class="long_td">{{auto[3].child[0].name}}</td>
          <td>
            <div class="approve-state">
                <a v-if="auto[3].child[0].auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="auto[3].child[0].auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="auto[3].child[0].auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="auto[3].child[0].auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: auto[3].child[0].id }}" class="btn-bd-green-s" v-show="auto[3].child[0].auto == null || auto[3].child[0].auto == '-1'">去认证</router-link>
          </td>
        </tr>
        <tr v-for="(item,index) in auto[3].child" v-if="index>0" :key="index">
          <td class="long_td">{{item.name}}</td>
          <td>
              <div class="approve-state">
                <a v-if="item.auto == null" class="nopassed"><span class="icon-ok"></span> 未认证</a>
                <a v-else-if="item.auto.status == 0"  class="passing"><span class="icon-ok"></span> 认证中...</a>
                <a v-else-if="item.auto.status == 1"  class="passed"><span class="icon-ok"></span> 已认证</a>
                <a v-else-if="item.auto.status == -1" class="nopassed"><span class="icon-ok"></span> 认证失败</a>
            </div> 
            <router-link :to="{name:'companyManageApproveBrand',params: { qualification_id: item.id }}" class="btn-bd-green-s" v-show="item.auto == null || item.auto == '-1'">去认证</router-link>
          </td>
        </tr>
        
      </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        auto:[],
        company_auto:{
          status:''
        },
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
          this.company_auto = td.company_auto;
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
