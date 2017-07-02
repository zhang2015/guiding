<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <router-link :to="{name:'companyManageInvoiceAll'}">发票管理</router-link>
      <router-link :to="{name:'companyManageInvoiceSend'}">已寄出</router-link>
    </div>
    <div class="padding20">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">

</style>
