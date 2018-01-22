<template>
  <div>
    <invoiceListCommon :list="items"></invoiceListCommon>
    <moPaging 
            :page-index="currentPage" 
            :total="count" 
            :page-size="pageSize" 
            @change="pageChange">
            </moPaging>
  </div>
</template>

<script type="text/ecmascript-6">
import invoiceListCommon from "../invoiceListCommon/invoiceListCommon";
import moPaging from "../MoPaging/MoPaging";
export default {
  components: {
    invoiceListCommon,
    moPaging
  },
  data() {
    return {
      pageSize: 15, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: []
    };
  },
  created() {
    loginStatus(this);
    this.getList();
  },
  methods: {
    
    //获取数据
    getList() {
     var url = path + "/index/invoice?user_id=" + this.userId + "&page=" + this.currentPage + "&status=2";
      this.$http.get(url).then(function(r) {
        var td = r.data;
        this.items = td.data;
      });
    },

    //从page组件传递过来的当前page
    pageChange(page) {
      this.currentPage = page;
      this.getList();
    }
  }
};
</script>

<style media="screen">

</style>
