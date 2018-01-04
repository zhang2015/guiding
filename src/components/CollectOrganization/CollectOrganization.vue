<template>
  <div>
    <collectlist :list="list" type="organization"></collectlist>
    <ZHPagination></ZHPagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import collectlist from '../CollectList/CollectList'

  import ZHPagination from '../ZHPagination/ZHPagination'

  export default {
    components:{
      collectlist,
      ZHPagination:ZHPagination
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
    		var url = path + "/index/company/company-attention?user_id="+this.userId;
	    	this.$http.get(url).then(function(r){
	    		var td = r.data;

          var list = td.data;


	    		this.list = list;

	    		
	    	})
    	}
    }
  }
</script>

<style media="screen">

</style>
