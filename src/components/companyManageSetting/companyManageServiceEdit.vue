<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">服务编辑/新增</a>
    </div>
    <div class="padding20">
      <router-view></router-view>
      <ul class="manage_list_common setting_list">
        <li>
          <p>服务名称</p>
          <input v-model="title" type="text" placeholder="请输入服务名称">
        </li>
        <li>
          <p>服务价格(元)</p>
          <input v-model="price" type="text" placeholder="请输入服务价格">
        </li>
        <li class="list-textarea">
          <p>服务简介</p>
          <textarea v-model="info" placeholder="请输入服务简介，200字以内">
              
          </textarea>
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit" @click="dealCommit">提交</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isEdit:false,
        editItemId:0,
        title:"",
        info:"",
        price:0
      }
    },
    created(){

      loginStatus(this);

      // edit_item
      if(this.$route.query.editItemId){
        this.isEdit = true;
        this.editItemId = this.$route.query.editItemId;
        this.title = this.$route.query.title;
        this.info = this.$route.query.info;
        this.price = this.$route.query.price;
      }
    },

    methods:{
      
      dealCommit:function(){
        // /index/company/add-company-service

        if(this.title.length == 0){
          alert("服务标题为空, 请重新输入")
          return
        }

        if(this.info.length == 0){
          alert("服务描述为空, 请重新输入")
          return
        }

        if(this.price == 0){
          alert("服务价格为0, 请重新输入")
          return
        }

        if(this.isEdit){

          var url = path + "/index/company/update-company-service";
          var dict = {
            id:this.editItemId,
            user_id:this.userId,
            company_id:this.companyId,
            title:this.title,
            info:this.info,
            price:this.price
          }
          this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
            var td = r.data;
            if(td.status == 1){
              alert("修改服务成功")

            }else{
              alert("修改服务失败")
            }
          })

        }
        else{
          
          var url = path + "/index/company/add-company-service";
          var dict = {
            user_id:this.userId,
            company_id:this.companyId,
            title:this.title,
            info:this.info,
            price:this.price
          }
          this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
            var td = r.data;
            if(td.status == 1){
              alert("添加服务成功, 点击跳转到服务列表")

              this.$router.push("/manage/companyManage/companyManageSetting");
            }else{
              alert("添加服务失败")
            }
          })
        }
      }
    }
  }
</script>

<style media="screen">
.company_submit{
    width: 160px;
    height: 45px;
    line-height: 45px;
  }
    .list-textarea{
        height: auto!important;
        padding: 10px 0
    }
    .list-textarea>textarea{
        width: 620px;
        height: 130px;
        border: 1px solid #E1E3EA;
        padding: 10px;
        font-size: 14px
    }
</style>
