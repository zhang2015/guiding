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
        title:"",
        content:"",
        category_id:6
      }
    },
  components: {
      helpContentHeader
    },

    created(){

    
    var helpListUrl =  path + '/index/cms/help?category_id='+this.category_id;

        this.$http.get(helpListUrl).then((response) => {
          
          console.log("获取到列表 r="+JSON.stringify(response.data));
          var list = response.data.data;
          if(list.length>0){
            var item = list[0];
            this.title = item.title;
            this.content = item.content;
          }

        }).catch(function(response) {
          console.log(response)
        })

    }


  }
</script>

<style media="screen">
  .help-title{
    font-size: 20px;
    text-align: center;
    padding: 30px 0 10px 0;
  }
  .help-content{
    padding: 20px;
    text-indent: 2em;
    font-size: 16px;
    color:#333;
      line-height: 1.8em
  }
</style>
