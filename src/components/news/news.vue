<template>
  <div class="news main_content clearfix">
    <div class="main_content_left">
      <div class="tab_type_box">
        <div class="tab_type_head">
          <a class="active">新闻中心</a>
        </div>
        <div class="news_list">
          <div class="news_item" v-for="item in list">
            <img :src="dealImg(item.img)" alt="">
            <div class="news_infor">
              <router-link :to="{ name: 'newsDetails', params: {id:item.id} }">
                <p class="news_tit">{{item.title}}</p>
              </router-link>
              <p class="news_des">{{item.info}}</p>
              <p class="news_time">{{item.created_at.split(" ")[0]}}</p>
            </div>
          </div>
        </div>

        <div class="list-pagination-wrap">
          <ul v-show="page_num>0" class="list-pagination">
            <li @click="dealClickPage('prev')">上一页</li>
              <!-- <li class="active">1</li>
              <li>2</li>
              <li>3</li> -->
              <li v-for="(item,index) in page_num" @click="dealClickPage(item)" v-bind:class="{active:item==page}">{{item}}</li>
              <li @click="dealClickPage('next')">下一页</li>
            </ul>
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

        page:1,
        page_num:0,

        list:[],
        path:path,
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
    created(){

      this.getList();
    
    },
    methods:{
      getList:function(){

        var url = path+"/index/cms";
        var dict = {
          page:this.page
        }

        this.$http.get(url,{params:dict}).then(function(r){
          var list = r.data.data;
          this.list = list;

          this.page_num = r.data.last_page;
        })

      },
      dealClickPage:function(index){

        if(index  == 'prev'){
          this.page--;
          if(this.page < 1){
            this.page = 1;
          }
        }
        else if(index == 'next'){
          this.page++;
          if(this.page>this.page_num){
            this.page = this.page_num;
          }
        }
        else{
          this.page = index;
        }
        

        //OK
        //console.log("page = "+this.page)


        this.getList();
      },

      dealImg:function(img){
        return img!=''?path+img:require('./images/news-default.png')
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
    justify-content: flex-start;  /*改动, 靠左对齐*/
    align-items: center;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px dashed #e5e7ed;
  }
  .news_item img{
    min-width: 160px;
    height: 106px;
  }
  .news_item .news_infor{
    display: flex;
    height: 106px;
    width: 100%;
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
      transition: .3s;
  }
    .news_item .news_infor .news_tit:hover{
        color: #0079FF
    }
  .news_item .news_infor .news_des{
    font-size: 14px;
    color: #b3b3b3;
    line-height: 24px;
  }
  .news_item .news_infor .news_time{
    font-size: 11px;
    color: #d6d6d6;
    align-self: flex-end;

  }



</style>
