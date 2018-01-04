<template>
  <div class="warpper">
    <vheader></vheader>
    <div class="warpper_content">
      <router-view ref="pageContent"></router-view>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/header/header'
import vfooter from './components/footer/footer'

export default {
  name: 'app',
  components: {
    vheader,
    vfooter
  },
  watch: {
      '$route' (to, from) {

        if (to.path == '/main') {

          //document.body.style.background = '#f0f0f0';

        }else{
          //document.body.style.background = '#fff';
        }

        if(from.path == '/main'){
        }
      }
    },
}
</script>

<style>
  .warpper{
    display: flex;
    width: 100%;
    min-height: 100vh;
    min-width: 1210px;
    flex-direction: column;
  }
  .warpper_content{
    flex: 1;
  }
</style>
