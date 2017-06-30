<template>
  <div class="news main_content clearfix">
    <div class="main_content_left">
      <div class="tab_type_box">
        <div class="tab_type_head">
          <a class="active">新闻中心</a>
        </div>
        <div class="news_list">
          <div class="news_item" v-for="item in newsList">
            <img :src="item.icon" alt="">
            <div class="news_infor">
              <router-link :to="{ name: 'newsDetails', params: {id:item.id} }">
                <p class="news_tit">{{item.title}}</p>
              </router-link>
              <p class="news_des">{{item.des}}</p>
              <p class="news_time">{{item.time}}</p>
            </div>
          </div>
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
        newsList:[
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待1',
            id:'1',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待2',
            id:'2',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待3',
            id:'3',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待4',
            id:'4',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待5',
            id:'5',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          },
          {
            title:'滕飞：市场缩量蓄势 反弹翘首以待6',
            id:'6',
            des:'笔者在之前专栏中阐述过，在震荡市中下跌周期权重股抗跌性强，在上升周期中中小盘股弹性好，这一轮反弹中可能延续这个规律，特别是近期',
            time:'2014-4-10',
            icon:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2686908464,655204694&fm=80&w=179&h=119&img.JPEG'
          }
        ]
      }
    },
    components: {
      recommend
    }
  }
</script>

<style media="screen">
  .news_list{
    padding-bottom: 30px;
  }
  .news_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px dashed #e5e7ed;
  }
  .news_item img{
    width: 188px;
    height: 106px;
  }
  .news_item .news_infor{
    display: flex;
    height: 106px;
    padding-left: 20px;
    flex-direction: column;
    justify-content: space-around;
  }
  .news_item .news_infor a{
    cursor: pointer;
  }
  .news_item .news_infor .news_tit{
    font-size: 18px;
    color: #616161;
  }
  .news_item .news_infor .news_des{
    font-size: 14px;
    color: #b3b3b3;
    line-height: 24px;
  }
  .news_item .news_infor .news_time{
    font-size: 11px;
    color: #d6d6d6;
  }
</style>
