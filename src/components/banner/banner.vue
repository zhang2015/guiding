<template>
  <div class="bannerBox">
	  <div class="swiper-container">
        <div class="swiper-wrapper">
          
          <div class="swiper-slide" v-for="item in slides">
            <a :href="item.url">
              <img :src="path+item.img">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <indexLogin></indexLogin>
  </div>
</template>
<script>
// import Swiper from "swiper";
import indexLogin from '../indexLogin/indexLogin'
export default {
  data(){
    return {
      path: path,
      bannerUrl:path+"/index/index/adv",
      slides: ''
    }
  },
  created() {
    var _this = this
    this.$http.get(_this.bannerUrl, { emulateJSON: true }).then(
      function(response) {
        _this.slides = response.data
      }
    )
  },
  mounted() {
    // var swiper = new Swiper('.swiper-container', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   loop : true,
    //   autoplay: true
    // });
  },
  watch: {
    slides(val) {
      var _this= this
      setTimeout(function() {
        _this.newswiper()
      }, 500);
    }
  },
  components:{
    indexLogin
  },
  methods:{
    newswiper:function () {
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop : true,
        autoplay: true
      });
    }
  }
};
</script>
<style>
.bannerBox{
  position: absolute;
  width: 100%;
  left: 0;
  min-width: 1210px;
}
.swiper-container {
  width: 100%;
  height: 408px;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
    
/*    banner Nav样式*/
    .swiper-container.swiper-container-horizontal{
        text-align: center
    }
    .swiper-pagination.swiper-pagination-bullets{
        display: inline-block!important;
        width: auto;
        left: 50%;
        background: rgba(0,0,0,.4);
        transform:translate(-50%,0);
        height: 24px;
        line-height: 24px;
        border-radius: 24px;
        padding: 0 4px
    }
    .swiper-pagination-bullet{
        width: 12px;
        height: 12px;
        border-radius: 12px;
        margin: 6px 3px!important;
        background: #fff;
        opacity: .3
    }
    .swiper-pagination-bullet-active{
        opacity: 1
    }

</style>
