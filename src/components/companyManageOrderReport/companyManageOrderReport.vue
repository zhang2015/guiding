<template>
  <div class="padding20">
    <companyManageOrderList :list="list"></companyManageOrderList>
  </div>
</template>

<script type="text/ecmascript-6">
  import companyManageOrderList from '../companyManageOrderList/companyManageOrderList'

  export default {
    data(){
      return {
        list:[]
      }
    },
    components:{
      companyManageOrderList
    },
    created(){

      loginStatus(this);

      //下载订单列表
      var url = path + "/index/company-order"
      var dict = {
        user_id : this.userId,
        company_id: this.companyId,
        status: 3 //-10表示所有
      }
      this.$http.get(url,{params:dict}).then(function(r){
        var td = r.data;
        var list = td.data;
        this.list = list;
      })

    }
  }
</script>

<style media="screen">
  
</style>
