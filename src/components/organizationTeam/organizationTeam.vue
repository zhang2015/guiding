<template>
  <div class="team_list">
    <ul>
      <li>
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
      </li>
      <li>
        <img src="http://file.ynet.com/2/1703/17/12551130.jpg">
        <div>
          <span>姓名</span>
          <p>
          资料显示，卡西尼探测器在1997年10月15日发射升空。它的主要任务包括研究土星磁场以确定土星自转轴，研究土星大气和土星环成分等。近20年来，卡西尼拍下无数震撼照片，取得大量土星及其卫星数据。如今，它将迎来最戏剧性的“谢幕演出”
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
      }
    }
  }
</script>

<style media="screen">
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
    width: 140px;
    height: 200px;
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
