<template>
  <div class="main_content clearfix">
    <div class="manage_content_left">
      <commonNav :commonNavList='personalTabs'></commonNav>
    </div>
    <div class="manage_content_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import commonNav from '../commonNav/commonNav'

  export default {
    data(){
      return{
        personalTabs:[
          {
            name: '我的订单',
            pathname: 'orderForm',
            iconclass: 'icon-doc'
          },
          {
            name: '消息中心',
            pathname: 'myMessage',
            iconclass: 'icon-comment'
          },
          {
            name: '我的收藏',
            pathname: 'myCollect',
            iconclass: 'icon-heart'
          },
          {
            name: '我的公司',
            pathname: 'myCompany',
            iconclass: 'icon-briefcase'
          },
          {
            name: '发票管理',
            pathname: 'invoiceManage',
            iconclass: 'icon-box'
          },
          {
            name: '收件地址',
            pathname: 'consigneeAddress',
            iconclass: 'icon-map-marker'
          },
          {
            name: '账号设置',
            pathname: 'settings',
            iconclass: 'icon-set'
          },
          {
            name: '安全退出',
            pathname: 'logout',
            iconclass: 'icon-exit'
          }
        ],
      }
    },
    components:{
      commonNav
    }
  }
</script>

<style media="screen">

</style>
