<template>
  <div class="help_content">
    <helpContentHeader :infor="infor"></helpContentHeader>
    详情内容
    
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
      }
    },
    components: {
      helpContentHeader
    },
    created: function () {
      console.log(this.id);
    }
  }
</script>

<style media="screen">

</style>
