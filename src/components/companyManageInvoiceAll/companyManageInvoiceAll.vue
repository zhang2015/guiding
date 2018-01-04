<template>
  <div>
    <invoiceListCommon :list="list"></invoiceListCommon>
  </div>
</template>

<script type="text/ecmascript-6">
  import invoiceListCommon from '../invoiceListCommon/invoiceListCommon'
  export default {
    components:{
      invoiceListCommon
    },
    data(){
    	return {
    		list:[]
    	}
    },
    created(){
    	loginStatus(this);
    	this.requestInvoiceList();

    },
    methods:{
    	requestInvoiceList:function(){
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
