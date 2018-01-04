<template>
  <div class="team_list" >
    <div>
      
      <ul>
        <!-- <li>
          <img src="http://file.ynet.com/2/1703/17/12551130.jpg">
          <div>
            <span>姓名</span>
            <p>
            资料显示，卡西尼探测器在1997年10月15日发射升空。它的主要任务包括研究土星磁场以确定土星自转轴，研究土星大气和土星环成分等。近20年来，卡西尼拍下无数震撼照片，取得大量土星及其卫星数据。如今，它将迎来最戏剧性的“谢幕演出”
            </p>
          </div>
        </li>
        <li>
          <img src="http://file.ynet.com/2/1703/17/12551130.jpg">
          <div>
            <span>姓名</span>
            <p>
            资料显示，卡西尼探测器在1997年10月15日发射升空。它的主要任务包括研究土星磁场以确定土星自转轴，研究土星大气和土星环成分等。近20年来，卡西尼拍下无数震撼照片，取得大量土星及其卫星数据。如今，它将迎来最戏剧性的“谢幕演出”
            </p>
          </div>
        </li> -->
        <li v-for="item in team">
          <img :src="item.img?path+item.img:''">
          <div>
            <span>{{item.name}}</span>
            <p>
              {{item.remark}}
            </p>
          </div>
        </li>
      </ul>

    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        team: '',
        path:path
      }
    },
    props:[
      'detaildata'
    ],
    created:function(){
      //this.init();

      var info = this.$parent.$data.info;

      //this.init();
      this.team = info.company.team;
    },
    methods: {
      // init: function () {
      //   var _this = this
      //   function content(){
      //     _this.content = _this.detaildata.content
      //   }
      //   setTimeout(content,1000)
      // }
    }
  }
</script>

<style media="screen">
  .team_list{
    padding: 30px 20px;
  }
  .team_list ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    padding: 10px 0;
    margin: auto;
    border-bottom: 1px solid #eef0f6;
  }
  .team_list ul li:last-child{
    border: none;
  }
  .team_list ul li img{
    width: 90px;
    height: 90px;
  }
  .team_list ul li div{
    width: 750px;
    color: #898989;
    font-size: 15px;
    line-height: 30px;
  }
  .team_list ul li div span{
    font-weight: bold;
    color:#616161;
  }
</style>
