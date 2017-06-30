<template>
  <div class="vheader">
    <div>
      <p>
        <span class="icon-map-marker"></span>
        <span>北京</span>
        <span>[切换]</span>
      </p>
      <p>
        <span>咨询热线：400-213-2120</span>
        <router-link to="/main/help">帮助中心</router-link>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .vheader{
    width: 100%;
    height: 30px;
    min-width: 1210px;
    border-bottom: 1px solid #ccc;
    background: #f1f1f1;
    color: #898989;
  }
  .vheader div{
    width: 1210px;
    height: 30px;
    margin: auto;
  }
  .vheader div p{
    line-height: 30px;
  }
  .vheader div p:nth-child(1){
    float: left;
  }
  .vheader div p:nth-child(1) span:nth-child(3){
    color: #6398ed;
    cursor: pointer;
  }
  .vheader div p:nth-child(2){
    float: right;
  }
  .vheader div p:nth-child(2) a{
    color: #898989;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid #898989;
  }
</style>
