<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">{{tabTitle}}</a>
    </div>
    <div class="padding20">
      <router-view  v-on:post-title="getTitle"></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        tabTitle: '1'
      }
    },
    methods: {
      getTitle: function (data){
        this.tabTitle = data
      }
    }
  }
</script>

<style media="screen">

</style>
