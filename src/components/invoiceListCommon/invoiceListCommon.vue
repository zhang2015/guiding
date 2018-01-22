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
      <tr v-for="item in invoiceList" :key="item.id">
        <td>{{item.order.order_no}}</td>
        <td>{{item.order.servar_area}}</td>
        <td>{{item.order.buy_user_id}}</td>
        <td class="money">￥{{item.order.price}}</td>
        <td>
          <router-link :to="{path:'/manage/companyManage/companyManageInvoice/companyManageInvoiceDetails/'+item.id}" class="invoice_details">详情</router-link>
        </td>
        <td>
          <a @click="send(item.id)" class="apply_invoice">邮寄发票</a>
        </td>
      </tr>
    </table>
    <div id="eidt_box" class="windows_wrapper" v-show="eidtcontent">
      <div class="windows_box">
        <div class="windows_head"><span>邮寄发票</span> <span class="icon-close"  @click="eidtcontent = false"></span></div>
        <div class="windows_content">
          <section><span class="label">快递名称</span> <input type="text" class="" v-model="invoice_name" placeholder="请输入快递公司名称"></section>
          <section><span class="label">快递单号</span> <input type="text" class="" v-model="invoice_code" placeholder="请输入快递单号"></section>          
        </div>

        <div class="windows_btn"><span class="windows_btn_cancel"  @click="eidtcontent = false">取消</span> <span class="windows_btn_confirm"  @click="change(eidtId)">确定</span></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['list'],
    data(){
      return {
        invoiceList:[],
        eidtId:'',
        eidtcontent: false,
        invoice_name:'',
        invoice_code:''
      }
    },
    created(){
      if(this.list != undefined){
        this.invoiceList = this.list;
      }
      
    },
    methods:{
      send:function(id){
        this.eidtcontent = true;
        this.eidtId = id;
      },
      change:function(id){
        if (!this.invoice_name) {
          alert('请输入快递名称')
          return false;
        }
        if (!this.invoice_code) {
          alert('请输入快递单号')
          return false;
        }
        var url = path + '/index/invoice/add-express';
        var formdata = {
          invoice_id: id,
          express_title: this.invoice_name,
          express_no: this.invoice_code
        }
        this.$http.post(url,formdata,{emulateJSON:true}).then(function(r){
          var data = r.data;
          if (data.status == 1) {
            this.eidtcontent = false;
          } else {
            alert(data.info);
          }
        })
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
@import '../../../static/css/eidtbox.css';
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
