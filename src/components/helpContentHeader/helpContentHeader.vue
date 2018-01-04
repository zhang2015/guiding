<template>
  <div class="help_content_header">
    <p>{{infor.title?infor.title:''}}</p>
    <p>
      <!-- <span :class="infor.iconname"></span>
      <span v-if="infor.path" @click="linkto()">{{infor.btntext}}</span>
      <span v-else>{{infor.btntext}}</span> -->
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['infor'],
    methods:{
      linkto:function(){
        window.location.href=this.infor.path;
      }
    }
  }
</script>

<style media="screen">
  .help_content_header{
    display: flex;
    height: 40px;
    align-items: center;
  }
  .help_content_header p:nth-child(1){
    width: 125px;
    height: 40px;
    border-top: 2px solid #0079FF;
    color: #6398ed;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
  }
  .help_content_header p:nth-child(2){
    padding-right: 20px;
    display: flex;
    height: 40px;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    border-left: 1px solid #e5e7ed;
    border-bottom: 1px solid #e5e7ed;
    color: #0079FF;
    font-size: 13px;
    background: #fcfcfc;
  }
  .help_content_header p:nth-child(2) span:nth-child(1){
    font-size: 16px;
    padding-right: 5px;
  }
</style>
