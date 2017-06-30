<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav></mainNav>
    <div class="main_wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainHeader from '../mainHeader/mainHeader'
  import mainNav from '../mainNav/mainNav'

  export default {
    components:{
      mainHeader,
      mainNav
    }
  }
</script>

<style media="screen">

</style>
