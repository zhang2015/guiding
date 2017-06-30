<template>
  <div class="vfooter">
    <div class="footer_main">
      <section>
        <span class="footer_label footer_label_1">联系方式</span>
        <a>咨询热线：400-113-1210</a>
        <a>官方QQ：530972294</a>
        <a>微信公众号：x_xiaomao</a>
        <a>地址：四川省成都市高新区新希望国际A座1020</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">找机构</span>
        <a>评估公司</a>
        <a>会计事务所</a>
        <a>知识产权所</a>
        <a>律师所</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">关于我们</span>
        <a>机构入住</a>
        <a>新闻中心</a>
        <a>联系我们</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">帮助中心</span>
        <a>用户协议</a>
        <a>保密协议</a>
        <a>支付方式</a>
        <a>费用问题</a>
      </section>
      <section>
        <img src="./images/weixin.png" alt="">
        <span>关注官方公众号</span>
      </section>
    </div>
    <div class="friend_link">
      <span>友情链接 :</span>
      <a href="#" target="_blank">中知在线</a>
      <a href="#" target="_blank">中知在线</a>
      <a href="#" target="_blank">中知在线</a>
      <a href="#" target="_blank">中知在线</a>
    </div>
    <p class="archival">©2014-2017 蜀ICP备17005698号 版权所有 四川贵鼎科技有限公司</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .vfooter{
    width: 100%;
    min-width: 1210px;
    border-top: 1px solid #e5e7ed;
    background: #f5f5f5;
  }
  .footer_main{
    display: flex;
    width: 1210px;
    margin: auto;
    padding: 50px 0 40px 0;
    justify-content: space-around;
    align-items: flex-start;
  }
  .footer_main section:nth-child(1){
    width: 396px;
  }
  .footer_main section:nth-child(2),
  .footer_main section:nth-child(3),
  .footer_main section:nth-child(4){
    flex-grow: 1;
  }
  .footer_main section:last-child{
    width: 118px;
  }
  .footer_main section:last-child img{
    width: 118px;
    height: 118px;
  }
  .footer_main section:last-child span{
    display: block;
    line-height: 30px;
    color: #616161;
    font-size: 14px;
    text-align: center;
  }
  .footer_label{
    display: block;
    color: #616161;
    font-size: 18px;
    padding-bottom: 12px;
  }
  .footer_label_1{
    font-weight: 600;
  }
  .footer_main section a{
    display: block;
    line-height: 30px;
    font-size: 14px;
    color: #898989;
  }
  .friend_link{
    display: flex;
    width: 1210px;
    height: 45px;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    border-top: 1px solid #e5e7ed;
  }
  .friend_link span{
    font-size: 13px;
    color: #6b6b6b;
  }
  .friend_link a{
    font-size: 13px;
    color: #989898;
    padding: 0 10px;
  }
  .archival{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #9398a1;
    background: #4c4f54;
    text-align: center;
  }
</style>
