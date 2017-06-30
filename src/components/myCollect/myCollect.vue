<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <router-link :to="{name:'CollectOrganization'}">服务机构</router-link>
      <router-link :to="{name:'CollectFirm'}">企业</router-link>
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
