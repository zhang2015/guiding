<template>
  <div>
    <table class="invoice_table">
      <tr>
        <th width="175">订单号</th>
        <th width="135">服务项目</th>
        <th width="240">服务机构</th>
        <th width="120" class="text_center">服务价格</th>
        <th width="130" class="text_center">状态</th>
        <th width="110" class="text_center">操作</th>
      </tr>
      <tr>
        <td>3223432323424224</td>
        <td>服务项目名称</td>
        <td>服务公司名称服务公司名称</td>
        <td class="money">￥200.00</td>
        <td>服务未结束</td>
        <td>
          <!--<a class="apply_invoice">申请开票</a>-->
          <router-link :to="{name:'InvoiceApply'}" class="apply_invoice">申请开票</router-link>
        </td>
      </tr>
      <tr>
        <td>3223432323424224</td>
        <td>服务项目名称</td>
        <td>服务公司名称服务公司名称</td>
        <td class="money">￥200.00</td>
        <td>服务未结束</td>
        <td>
          <!--<a class="invoice_details">详情</a>-->
          <router-link :to="{name:'InvoiceDetails'}" class="invoice_details">详情</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .invoice_table{
    color: #898989;
    font-size: 14px;
  }
  .invoice_table th{
    height: 40px;
    background: #f9fafc;
    border: 1px solid #e5e7ed;
    padding-left: 20px;
    vertical-align: middle;
    text-align: left;
  }
  .invoice_table th.text_center{
    text-align: center;
    padding: 0;
  }
  .invoice_table th.text_left{
    text-align: left;
    padding-left: 20px;
  }
  .invoice_table td{
    height: 50px;
    border: 1px solid #e5e7ed;
    vertical-align: middle;
    text-align: center;
  }
  .invoice_table td.money{
    color: #ff8a6e;
  }
  .invoice_table td a.apply_invoice{
    color: #87ce76;
    padding: 5px 10px;
    border: 1px solid #87ce76;
    border-radius: 4px;
    font-size: 12px;
  }
  .invoice_table td a.invoice_details{
    color: #6389ed;
  }
</style>
