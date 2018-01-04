<template>
  <div>
    <invoiceListPersonal :list="list"></invoiceListPersonal>
    <ZHPagination ></ZHPagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import invoiceListPersonal from '../invoiceListPersonal/invoiceListPersonal'
  import ZHPagination from '../ZHPagination/ZHPagination'
  
  export default {
    components:{
      invoiceListPersonal,
      ZHPagination
    },
    data(){
    	return {
    		list:[]
    	}
    },
    created(){
    	loginStatus(this);

    	this.downloadList();

    },
    methods:{
    	downloadList:function(){

    		// /index/invoice?user_id=2
    		var url = path + "/index/invoice?user_id="+this.userId;
    		this.$http.get(url).then(function(r){
		        var td = r.data;
		        this.list = td.data;
		      })

    	}
    }
  }
</script>

<style media="screen">
  
</style>
