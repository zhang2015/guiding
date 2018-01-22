<template>
  <div>
    <invoiceListPersonal :list="items"></invoiceListPersonal>
    <moPaging 
            :page-index="currentPage" 
            :page-size="pageSize" 
            :total="count" 
            @change="pageChange">
            </moPaging>
  </div>
</template>

<script type="text/ecmascript-6">
  import invoiceListPersonal from '../invoiceListPersonal/invoiceListPersonal'
  import moPaging from "../MoPaging/MoPaging"
  
  export default {
    components:{
      invoiceListPersonal,
      moPaging
    },
    data(){
    	return {
        pageSize: 15, //每页显示20条数据
        currentPage: 1, //当前页码
        count: 0, //总记录数
        items: []
    	}
    },
    created(){
    	loginStatus(this);

    	this.getList();

    },
    methods:{
      //获取数据
      getList() {
        var url = path + "/index/invoice"
        var dict = {
          user_id : this.userId,
          page: this.currentPage
        }
        this.$http.get(url,{params:dict}).then(function(r){
          var td = r.data;
          var list = td.data;
          this.count = td.total;
          this.items = list;
        })
      },

      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page;
        this.getList();
      }
    }
  }
</script>

<style media="screen">
  
</style>
