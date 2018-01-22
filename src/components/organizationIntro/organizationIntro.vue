<template>
  <div class="firm_detail_content">
    
    <div class="firm_intro" v-html="content">
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        content: '',
      }
    },
 
    created:function(){

      this.loadData();
    },
    methods: {

      loadData:function(){

        //获取上级组件的信息
        var info = this.$parent.$data.info;
        //console.log("content = "+JSON.stringify(info));
        if(info.content != undefined){
          //console.log("firm intro loadData");

          this.content = info.content;

        }
      }

    }
  }
</script>

<style media="screen">
  .firm_intro img{
    width: 100%;
    height: auto;
  }
  .firm_intro p{
    font-size: 14px;
    color: #898989;
    line-height: 28px;
    padding: 10px 0;
  }
</style>
