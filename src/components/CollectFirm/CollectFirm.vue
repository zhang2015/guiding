<template>
  <div>
    <enterpriseCollectList :list="list"  type="firm"></enterpriseCollectList>
    <ZHPagination></ZHPagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import enterpriseCollectList from '../CollectList/enterpriseCollectList'

  import ZHPagination from '../ZHPagination/ZHPagination'

  export default {
  	data(){
  		return {
  			list:[]
  		}
  	},
  	created(){

  		loginStatus(this);

    	this.downloadList();

  	},
    components:{
      enterpriseCollectList,
      ZHPagination
    },

    methods:{
    	downloadList:function(){
    		var url = path + "/index/enterprise/enterprise-attention?user_id="+this.userId;
	    	this.$http.get(url).then(function(r){
	    		var td = r.data;

	    		var list = td.data;

	    		for(var k in list){
		            var  item = list[k];
		            item.company = item.enterprise;
		            item.company.name = item.enterprise.title;
		            item.company.cover_img = item.enterprise.img;
		          }


	    		this.list = list;



	    		
	    	})
    	}
    }
  }
</script>

<style media="screen">

</style>
