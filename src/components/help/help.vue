<template>
  <div class="help clearfix">
    <commonNav :commonNavList="helpTabs"></commonNav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import commonNav from '../commonNav/commonNav'
  import request from '../../ajax/request.js'

  export default {
    mounted(){
  
    },
    data(){
      return{
        helpTabs:[
          {
            name: '帮助中心',
            pathname: 'helpCentre'
          },
          {
            name: '支付方式',
            pathname: 'helpPay'
          },
          {
            name: '费用问题',
            pathname: 'helpCost'
          },
          {
            name: '用户协议',
            pathname: 'helpUser'
          },
          {
            name: '保密协议',
            pathname: 'helpSecrecy'
          },
          {
            name: '关于我们',
            pathname: 'helpAbout'
          },
          {
            name: '联系我们',
            pathname: 'helpCall'
          }
        ],
      }
    },
    components:{
      commonNav
    },
    methods:{

      helpList(){

        var _current = this;
          request.helpCenter(function(response){

              console.log("response = "+JSON.stringify(response));
              

          })
      }
    }


  }
</script>

<style media="screen">
  .help{
    padding-top: 20px;
  }
  .help_tabs{
    float: left;
    width: 224px;
    height: auto;
  }
  .help_tabs li{
    width: 100%;
    height: 48px;
    border: 1px solid #e5e7ed;
    border-bottom: 0;
    background: #f9fafc;
  }
  .help_tabs li:last-child{
    border: 1px solid #e5e7ed;
  }
  .help_tabs li a{
    display: block;
    padding-left: 30px;
    line-height: 48px;
    color: #616161;
    font-size: 15px;
    border-left: 2px solid transparent;
  }
  .help_tabs li a.active{
    border-left: 2px solid #6398ed;
    color: #6398ed;
  }
  .help_content{
    float: right;
    width: 963px;
    height: auto;
    border: 1px solid #e5e7ed;
    padding-bottom: 30px;
  }
  
</style>
