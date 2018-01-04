<template>
  <div>
    <table class="invoice_table">
      <tr>
        <th width="175">订单号</th>
        <th width="135">服务项目</th>
        <th width="240">客户姓名</th>
        <th width="120" class="text_center">发票总额</th>
        <th width="130" class="text_center">详情</th>
        <th width="110" class="text_center">操作</th>
      </tr>
      <tr v-for="item in invoiceList">
        <td>{{item.order_id}}</td>
        <td>{{item.order.servar_area}}</td>
        <td>{{item.order.buy_user_id}}</td>
        <td class="money">￥{{item.order.price}}</td>
        <td>
          <router-link :to="{path:'/manage/companyManage/companyManageInvoice/companyManageInvoiceDetails/'+item.id}" class="invoice_details">详情</router-link>
        </td>
        <td>
          <router-link :to="{path:'/manage/companyManage/companyManageInvoice/companyManageInvoiceDetails/'+item.id}" class="apply_invoice">邮寄发票</router-link>
          
          <!-- <router-link :to="{name:'companyManageInvoicePost'}" class="apply_invoice">邮寄发票</router-link> -->
        </td>
      </tr>
      <!-- <tr>
        <td>3223432323424224</td>
        <td>服务项目名称</td>
        <td>丁坚</td>
        <td class="money">￥200.00</td>
        <td>
          <router-link :to="{name:'companyManageInvoiceDetails'}" class="invoice_details">详情</router-link>
        </td>
        <td>
          <span>已邮寄</span>
        </td>
      </tr> -->
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['list'],
    data(){
      return {
        invoiceList:[]
      }
    },
    created(){
      if(this.list != undefined){
        this.invoiceList = this.list;
      }
      
    },
    watch:{
      'list':function(){
        if(this.list != undefined){
          this.invoiceList = this.list;
        }
      }
    }
  }
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
