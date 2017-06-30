<template>
  <div class="help_content_header">
    <p>{{infor.title}}</p>
    <p>
      <span :class="infor.iconname"></span>
      <span>{{infor.btntext}}</span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['infor'],
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
    border-top: 2px solid #6398ed;
    color: #6398ed;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
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
    color: #6398ed;
    font-size: 13px;
    background: #fcfcfc;
  }
  .help_content_header p:nth-child(2) span:nth-child(1){
    font-size: 16px;
    padding-right: 5px;
  }
</style>
