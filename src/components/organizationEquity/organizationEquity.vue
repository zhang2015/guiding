<template>
  <div class="record_list">
    <ul>
      <li v-for="item in list">
        <div>
          <img :src="path+item.buy_company_img">
          {{item.buy_company_name}}
          <span>购买了</span>
          服务项目一          
        </div>
        <span>{{item.created_at}}</span>
      </li>
      <!-- <li>
        <div>
          <img src="http://www.cycling-update.info/uploads/_project/2016BrandVoting_/Fuji_Logo.jpg">
          公司名称
          <span>购买了</span>
          服务项目一          
        </div>
        <span>2017-09-10</span>
      </li>
      <li>
        <div>
          <img src="http://www.cycling-update.info/uploads/_project/2016BrandVoting_/Fuji_Logo.jpg">
          公司名称
          <span>购买了</span>
          服务项目一          
        </div>
        <span>2017-09-10</span>
      </li> -->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        list: '',
      }
    },
    props:[
      'orderdata'
    ],
    created:function(){
      this.init();
    },
    methods: {
      init: function () {
        var _this = this
        function content(){
          _this.list = _this.orderdata
        }
        setTimeout(content,1000)
      }
    }
  }
</script>

<style media="screen">
  .record_list ul li{
    display: flex;
    width: 98%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    color: #898989;
    border-bottom: 1px solid #eef0f6;
    margin: auto;
  }
  .record_list ul li:last-child{
    border: none;
  }
  .record_list ul li img{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right:15px; 
  }
   .record_list ul li span{
     color: #b3b3b3;
   }
   .record_list ul li div {
     display: flex;
     justify-content: flex-start;
     align-items: center;
   }
   .record_list ul li div span{
     padding: 0 10px;
   }
</style>
