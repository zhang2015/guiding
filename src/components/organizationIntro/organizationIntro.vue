<template>
  <div class="firm_detail_content">
    <div class="firm_intro" v-html="content">
      {{content}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        id:this.$route.params.id,
        content:'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498043401884&di=a5d9c34ff9456e0099bdf1aab2538e70&imgtype=0&src=http%3A%2F%2Ff1.diyitui.com%2F0d%2F01%2F2c%2F95%2F78%2F00%2Fd7%2F1b%2Fdd%2F4f%2Fd9%2Fd1%2Fd8%2Fce%2Fb1%2Fcb.jpg"><p>Pinarello,意大利顶级的自行车制造厂商，在2012年及2013年时赞助Team Sky Pro Cycling Team，并且帮助Bradely Wiggins及Chris Froome拿下了环法总成绩冠军。</p><p>Pinarello,意大利顶级的自行车制造厂商，在2012年及2013年时赞助Team Sky Pro Cycling Team，并且帮助Bradely Wiggins及Chris Froome拿下了环法总成绩冠军。</p><p>Pinarello,意大利顶级的自行车制造厂商，在2012年及2013年时赞助Team Sky Pro Cycling Team，并且帮助Bradely Wiggins及Chris Froome拿下了环法总成绩冠军。</p>',
      }
    }
  }
</script>

<style media="screen">
  .firm_intro img{
    width: 100%;
    height: auto;
  }
  .firm_intro p{
    font-size: 14px;
    color: #898989;
    line-height: 28px;
    padding: 10px 0;
  }
</style>
