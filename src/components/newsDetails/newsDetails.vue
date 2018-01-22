<template>
  <div class="news main_content clearfix">
    <div class="main_content_left">
      <div class="details_type_box">
        <p class="news_details_title">{{title}}</p>
        <p class="news_details_subhead">
          <section>
            来自于：<a v-bind:href='formLink' target="_blank">{{from}}</a><span>{{time}}</span>
          </section>
          <section>
            分享到：
            <!-- <span>
              <img src="./images/1.png" alt="">
            </span>
            <span>
              <img src="./images/2.png" alt="">
            </span>
            <span>
              <img src="./images/3.png" alt="">
            </span>
            <span>
              <img src="./images/4.png" alt="">
            </span> -->
            <div class="bdsharebuttonbox">
              <a href="#" class="bds_more" data-cmd="more"></a>
              <a href="#" class="bds_qzone" data-cmd="qzone"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina"></a>
              <a href="#" class="bds_tqq" data-cmd="tqq"></a>
              <a href="#" class="bds_renren" data-cmd="renren"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin"></a>
            </div>

          </section>
        </p>
        <div class="news_details_content" v-html="content">
          {{content}}
        </div>
      </div>
    </div>
    <div class="main_content_right">
      <recommend></recommend>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import recommend from '../recommend/recommend'

  export default {
    data(){
      return{
        title:'深圳地铁筹划受让万科股权 卖家大概率是恒大',
        time:'2017-06-06 12:44',
        from:'腾讯网',
        formLink:'http://www.qq.com',
        content:'',
        id:"",
      }
    },
    created(){
      var id = this.$route.params.id;
      this.id = id;
      this.downloadDetail();
    },
    methods:{
      downloadDetail:function(){

        var url = path+"/index/cms/news-info?news_id="+this.id;
        this.$http.get(url).then(function(r){
          var trueData = r.data;
          this.title = trueData.title;
          this.time = trueData.created_at;
          this.content = trueData.content;
          this.from = trueData.from;


          //显示分享按钮
          baidu_share_show()

        })

      }
    },
    components: {
      recommend
    },
    watch: {
      '$route' (to, from) {
        // react to route changes...
        console.log(""+to.path+" "+to.params.id)

        console.log(""+from.path+" "+from.params.id)

        if(to.params.id != from.params.id){
          this.id = to.params.id;
          this.downloadDetail();
        }
      }
    }
  }
</script>

<style media="screen">
  .news_details_title{
    font-size: 24px;
    color: #616161;
    line-height: 32px;
  }
  .news_details_subhead{
    display: flex;
    height: 22px;
    justify-content: space-between;
    align-items: center;
  }
  .news_details_subhead{
    color: #d6d6d6;
  }
  .news_details_subhead section:nth-child(1){
    font-size: 12px;
  }
  .news_details_subhead section:nth-child(1) a{
    cursor: pointer;
    color: #6398ed;
  }
  .news_details_subhead section:nth-child(1) span{
    padding-left: 20px;
  }
  .news_details_subhead section:nth-child(2){
    display: flex;
    align-items: center;
  }
  .news_details_subhead section:nth-child(2) span{
    padding-left: 5px;
    width: 22px;
    height: 22px;
  }
  .news_details_content p{
    font-size: 12px;
    color: #898989;
    line-height: 24px;
    padding: 20px 0;
  }
  .news_details_content img{
    max-width: 100%;
    height: auto;
  }
</style>
