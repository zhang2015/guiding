<template>
  <div class="nav">
    <div>
      <router-link to="/seller">seller</router-link>
    </div>
    <div>
      <router-link to="/remark">remark</router-link>
    </div>
    <div>
      <router-link to="/content">content</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      author: '啊是的哈哈四 asdadasdsdasd'
    }
  }
}
</script>

<style>
.nav{
  display: flex;
}
.nav div{
  height: 40px;
  flex-grow: 1;
  text-align: center;
  line-height: 40px;
}
.nav div a.active{
  color: red;
}
</style>
