<template>
  <div>
    <ul class="common_tabs">
      <li v-for="item in commonNavList">
        <router-link :to="{ name: item.pathname }"><span v-if="item.iconclass" :class="item.iconclass"></span>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        
      }
    },
    props:['commonNavList']
  }
</script>

<style media="screen">
  .common_tabs{
    float: left;
    width: 224px;
    height: auto;
  }
  .common_tabs li{
    width: 100%;
    height: 48px;
    border: 1px solid #e5e7ed;
    border-bottom: 0;
    background: #f9fafc;
  }
  .common_tabs li:last-child{
    border: 1px solid #e5e7ed;
  }
  .common_tabs li a{
    display: block;
    padding-left: 30px;
    line-height: 48px;
    color: #616161;
    font-size: 15px;
    border-left: 2px solid transparent;
  }
  .common_tabs li a span{
    padding-right: 10px;
    font-size: 18px;
  }
  .common_tabs li a.active,.common_tabs li a:hover{
    border-left: 2px solid #6398ed;
    color: #6398ed;
  }
  
</style>
