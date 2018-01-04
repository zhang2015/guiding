<template>
  <div class="help_content">
    <helpContentHeader :infor="infor"></helpContentHeader>
    
      <div class="help-title">
        {{this.title}}
      </div>

      <div class="help-content" v-html="this.content">
       
      </div>
        
  </div>
</template>

<script type="text/ecmascript-6">
  import helpContentHeader from '../helpContentHeader/helpContentHeader'

  export default {
    data(){
      return{
        infor:{
          title:'帮助中心',
          iconname:'icon-angle-left',
          btntext:'返回'
        },
        id: this.$route.params.id,
        title:"",
        content:""
      }
    },
    components: {
      helpContentHeader
    },
    created: function () {
      console.log(this.id);

      var helpDetailUrl =  path + '/index/cms/help-info?help_id='+this.id;

      this.$http.get(helpDetailUrl).then((response) => {

        var td = response.data;
        
        //console.log("获取到列表 r="+JSON.stringify(response.data));

        this.title = td.title;
        this.content = td.content;


      }).catch(function(response) {
        console.log(response)
      })


    }
  }
</script>

<style media="screen">
  .help-title{
    font-size: 32px;
    text-align: center;
    padding: 30px 0 10px 0;
  }
  .help-content{
    padding: 20px;
      line-height: 1.8em
  }
</style>
