<template>
  <div>
    <div class="hot_news recommend_box">
      <div class="recommend_box_head">
        <span>热门新闻</span>
        <router-link :to="{ name: 'news' }">查看更多></router-link>
      </div>
      <div class="hot_news_item" v-for="item in hotNews">
        <router-link :to="{ name: 'newsDetails', params: {id:item.id} }">
          <span class="dot">·</span>
          <p>{{item.title}}<span>{{item.time}}</span></p>
        </router-link>
      </div>
    </div>
    <div class="rec_organization recommend_box">
      <div class="recommend_box_head">
        <span>您可能感兴趣的服务机构</span>
      </div>
      <div class="rec_organization_item" v-for="item in recOrgan">
        <router-link :to="{ name: '', params: {} }">
          <img src="./images/7.png" alt="">
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
    <div class="rec_firm recommend_box">
      <div class="recommend_box_head">
        <span>您可能感兴趣的企业</span>
      </div>
      <div class="rec_firm_item" v-for="item in recFirm">
        <router-link :to="{ name: '', params: {} }">
          <span class="dot">·</span>
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        hotNews:[
          {
            title:'华为,小米,魅族-互联网手机三强的相...',
            id:'1',
            time:'2017-04-02'
          },
          {
            title:'华为,小米,魅族-互联网手机三强的相2...',
            id:'2',
            time:'2017-04-02'
          },
          {
            title:'华为,小米,魅族-互联网手机三强的相3...',
            id:'3',
            time:'2017-04-02'
          },
          {
            title:'华为,小米,魅族-互联网手机三强的相4...',
            id:'4',
            time:'2017-04-02'
          },
          {
            title:'华为,小米,魅族-互联网手机三强的相5...',
            id:'5',
            time:'2017-04-02'
          },
          {
            title:'华为,小米,魅族-互联网手机三强的相6...',
            id:'6',
            time:'2017-04-02'
          }
        ],
        recOrgan:[
          {
            name:'四川贵鼎知识产权服务有限公司',
            id:'1'
          },
          {
            name:'四川贵鼎知识产权服务有限公司2',
            id:'1'
          },
          {
            name:'四川贵鼎知识产权服务有限公司3',
            id:'1'
          },
          {
            name:'四川贵鼎知识产权服务有限公司4',
            id:'1'
          }
        ],
        recFirm:[
          {
            name:'四川贵鼎科技有限公司',
            id:'1'
          },
          {
            name:'四川贵鼎科技有限公司2',
            id:'1'
          },
          {
            name:'四川贵鼎科技有限公司3',
            id:'1'
          },
          {
            name:'四川贵鼎科技有限公司4',
            id:'1'
          }
        ]
      }
    }
  }
</script>

<style media="screen">
  .recommend_box{
    width: 100%;
    height: auto;
    border: 1px solid #e4e0eb;
    margin-bottom: 20px;
  }
  .recommend_box_head{
    display: flex;
    height: 40px;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background: #fcfcfc;
    border-bottom: 1px solid #e4e0eb;
  }
  .recommend_box_head span{
    color: #616161;
    font-size: 15px;
  }
  .recommend_box_head a{
    color: #b3b3b3;
    font-size: 13px;
  }
  .hot_news_item,.rec_organization_item,.rec_firm_item{
    margin: 0 20px;
    padding: 16px 0;
    border-bottom: 1px dashed #e4e0eb;
  }
  .hot_news_item a,.rec_organization_item a,.rec_firm_item a{
    display: flex;
    line-height: 22px;
    color: #898989;
  }
  .hot_news_item:last-child,.rec_organization_item:last-child,.rec_firm_item:last-child{
    border-bottom: 0;
  }
  .dot{
    font-size: 50px;
    padding-right: 10px;
  }
  .hot_news_item p,.rec_firm_item p{
    font-size: 14px;
  }
  .hot_news_item p span{
    color: #d6d6d6;
  }
  .rec_organization_item a img{
    width: 50px;
    height: 50px;
    padding-right: 10px;
  }
  .rec_firm_item{
    display: flex;
  }
</style>
