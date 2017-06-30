<template>
  <div class="news main_content clearfix">
    <div class="main_content_left">
      <div class="details_type_box">
        <p class="news_details_title">{{title}}</p>
        <p class="news_details_subhead">
          <section>
            来自于：<a v-bind:href='formLink' target="_blank">{{form}}</a><span>{{time}}</span>
          </section>
          <section>
            分享到：
            <span>
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
            </span>
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
        form:'腾讯网',
        formLink:'http://www.qq.com',
        content:'<p>一则语焉不详的公告，打破了沉寂已久的万科股权之争。深铁集团正筹划受让万科股权。证券时报·e公司记者从相关人士获悉，此次股权转让的卖家大概率是恒大！若是此次转让成功后，深铁持股比例或升至29.38%。</p><p>万科6月6日晚间公告，收到深圳市地铁集团有限公司的《通知函》，深铁集团正筹划受让公司股份的重大事项，具体细节尚未最终确定，且最终需按程序批准。万科A股自6月7日开市起停牌，停牌时间预计不超过5个交易日。</p><img src="http://img3.utuku.china.com/640x0/news/20170620/e614182f-6113-4626-84e0-b9d04c76aaf9.jpg" alt=""><p>万科6月6日晚间公告，收到深圳市地铁集团有限公司的《通知函》，深铁集团正筹划受让公司股的重大事项，具体细节尚未最终确定，且最终需按程序批准。万科A股自6月7日开市起停牌，停牌时间预计不超过5个交易日。</p>'
      }
    },
    components: {
      recommend
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
