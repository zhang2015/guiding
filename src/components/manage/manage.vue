<template>
  <div>
    <manageNav></manageNav>
    <div class="main_wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import manageNav from '../manageNav/manageNav'

  export default {
    components:{
      manageNav
    }
  }
</script>

<style media="screen">

</style>
