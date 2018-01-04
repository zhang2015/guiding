<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">服务管理</a>
      
      <div class="tx-r">
          <!-- <router-view></router-view> -->
          <router-link to="/manage/companyManage/companyManageServiceEdit" class="color-blue"><i class="icon-add"></i> 新增服务</router-link>
      </div>
      
    </div>
    <div class="padding20">
       <ul class="com-serve-list">
           <li v-for="item in service">
               <div class="com-serve-l">
                   <h3>{{item.title}}</h3>
                   <div>服务价格:<span>￥{{item.price}}</span></div>
                   <p>服务介绍: <span>{{item.info}}</span></p>
               </div>
               <div class="com-serve-btn">
                   <router-link :to="{path:'/manage/companyManage/companyManageServiceEdit',query:{editItemId:item.id,title:item.title,info:item.info,price:item.price}}" class="btn-bd-green-s">编辑</router-link>
                   <a @click="dealDel(item)" class="btn-bd-red-s">删除</a>
               </div>
           </li>
           <!-- <li>
               <div class="com-serve-l">
                   <h3>特价服务</h3>
                   <div>服务价格:<span>￥1000.00</span></div>
                   <p>服务介绍: <span>服务介绍，由服务机构管理员进行输入设置。服务介绍，由服务机构管理员进行输入设置。服务介绍，由服务机构管理员进行输入设置。</span></p>
               </div>
               <div class="com-serve-btn">
                   <a href="#" class="btn-bd-green-s">编辑</a>
                   <a href="#" class="btn-bd-red-s">编辑</a>
               </div>
           </li>
           <li>
               <div class="com-serve-l">
                   <h3>特价服务</h3>
                   <div>服务价格:<span>￥1000.00</span></div>
                   <p>服务介绍: <span>服务介绍，由服务机构管理员进行输入设置。服务介绍，由服务机构管理员进行输入设置。服务介绍，由服务机构管理员进行输入设置。</span></p>
               </div>
               <div class="com-serve-btn">
                   <a href="#" class="btn-bd-green-s">编辑</a>
                   <a href="#" class="btn-bd-red-s">编辑</a>
               </div>
           </li> -->
       </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        service:[]
      }
    },

    created(){
      this.requestOrganizationDetail();
    },

    methods:{
      dealDel:function(item){
        var r = confirm("确认删除服务?");
        if(!r){
          return
        }

        var url = path + "/index/company/delete-company-service";
        var dict = {
          id:item.id
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.status == 1){
            alert("删除服务成功")

            this.requestOrganizationDetail();
          }else{
            alert("删除服务失败")
          }
        })
      },
      requestOrganizationDetail:function(){

        var companyId = 119

        // /index/company/show
        var url = path + "/index/company/show?company_id="+companyId;
        this.$http.get(url).then(function(r){
          var td = r.data;
          this.service = td.company.service;
        })
      }
    }
  }
</script>

<style media="screen">
    .com-serve-list>li{
        padding: 20px;
        background: #F8F9FC;
        border: 1px solid  #E1E3EA;
        color: #616161;
        line-height: 20px;
        position: relative;
        margin-bottom: 15px
    }
    .com-serve-l{
        color: #898989;
        font-size: 14px
    }
    .com-serve-l>h3{
        font-size: 16px;
        font-weight: bold;
        color: #616161;
        margin-bottom: 6px
    }
    .com-serve-l>div>span{
        color: #FF8A6E
    }
    .com-serve-l>p>span{
        color: #B3B3B3
    }
    .com-serve-btn{
        position: absolute;
        right: 20px;
        top: 20px;
    }
</style>
