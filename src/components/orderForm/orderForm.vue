<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <router-link :to="{name:'orderFormAll'}">全部订单</router-link>
      <router-link :to="{name:'orderFormPay'}">待支付</router-link>
      <router-link :to="{name:'orderFormFinish'}">待完成</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">

</style>
