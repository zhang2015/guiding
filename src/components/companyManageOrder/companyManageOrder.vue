<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <router-link :to="{name:'companyManageOrderAll'}">全部订单</router-link>
      <router-link :to="{name:'companyManageOrderPact'}">待签合同</router-link>
      <router-link :to="{name:'companyManageOrderReport'}">待做报告</router-link>
      <router-link :to="{name:'companyManageOrderFinal'}">待收尾款</router-link>
      <router-link :to="{name:'companyManageOrderMail'}">待邮寄报告</router-link>
      <router-link :to="{name:'companyManageOrderComplete'}">服务完成</router-link>
      <router-link :to="{name:'companyManageOrderPayment'}">待评价</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">

</style>
