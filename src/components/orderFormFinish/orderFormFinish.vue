<template>
  <div class="padding20">
    <orderFormList :list="list"></orderFormList>
  </div>
</template>

<script type="text/ecmascript-6">
  import orderFormList from '../orderFormList/orderFormList'

  export default {
  	data(){
  		return {
  			list:[]
  		}
  	},
    components:{
      orderFormList
    },
    created(){

    	loginStatus(this);

    	//下载订单列表
    	var url = path + "/index/order"
    	var dict = {
    		user_id : this.userId,
    		status: 1	//1表示待完成
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
