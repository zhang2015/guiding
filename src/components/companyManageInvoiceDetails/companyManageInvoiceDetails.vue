<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">发票详情</a>
    </div>
    <div class="padding20">
      <table class="common_table invoice_table">
      <tr>
        <th width="175" >订单号</th>
        <th width="130">服务项目</th>
        <th width="243">服务机构</th>
        <th width="98">服务价格</th>
        <th width="275" class="text_center">发票状态</th>
      </tr>
      <tr>
        <td>3223432323424224</td>
        <td>服务项目名称</td>
        <td>四川贵鼎知识产权服务有限公司</td>
        <td class="money">￥200.00</td>
        <td>已邮寄 顺丰快递 单号:4123412341234</td>
      </tr>
    </table>
    <p class="title_invoice">发票信息</p>
    <ul class="manage_list_common manage_list_invoice">
      <li>
        <p>发票类型</p>
        <span>企业增值税专用发票</span>
      </li>
      <li>
        <p>发票抬头</p>
        <span>丁老板</span>
      </li>
      <li>
        <p>税务登记证号</p>
        <span>342342234234234234</span>
      </li>
      <li>
        <p>开户银行</p>
        <span>招商银行城南支行</span>
      </li>
      <li>
        <p>开户账号</p>
        <span>6226123112311231111</span>
      </li>
      <li>
        <p>注册场所地址</p>
        <span>四川省成都市武侯区天府二街新希望国际B座1210</span>
      </li>
      <li>
        <p>公司注册电话</p>
        <span>020-1231123</span>
      </li>
      <li class="upload">
        <p>税务登记扫描件</p>
        <img src="../../assets/uploadimg.png">
      </li>
      <li class="upload">
        <p>一般纳税人证明扫描件</p>
        <img src="../../assets/uploadimg.png">
      </li>
    </ul>
    <p class="title_invoice">收件地址</p>
    <p class="consignee_address">
      <span class="icon-map-marker"></span>
      <span>陈邓</span>
      <span>四川省成都市锦江区锦华路一段120号天府新谷2栋2单元2010</span>
      <span>132****5220</span>
    </p>
    <div class="common_btn_box invoice_btn_box">
      <span class="submit_btn invoice_submit_btn">邮寄发票</span>
      <span class="cancel_btn invoice_cancel_btn">取消</span>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
.invoice_table .money{
    color: #ff8a6e;
  }
  .manage_list_common.manage_list_invoice li p:nth-child(1){
    padding-left: 35px;
    width: 175px; 
  }
  .title_invoice{
    padding-top: 40px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e6ed;
    color: #616161;
    font-size: 14px;
    font-weight: 600;
  }
  .manage_list_invoice li span:nth-child(2){
    color: #898989;
  }
  .consignee_address{
    display: flex;
    height: 70px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #e5e6ed;
  }
  .consignee_address span{
    padding-right: 10px;
    color: #898989;
    font-size: 14px;
  }
  .consignee_address span:nth-child(1){
    font-size: 15px;
  }
  .consignee_address span:nth-child(2){
    font-weight: 600; 
  }
  .invoice_btn_box{
    padding-top: 30px;
  }
  .invoice_submit_btn,.invoice_cancel_btn{
    width: 160px;
    height: 45px;
    line-height: 45px;
    margin: 0 10px;
  }
</style>