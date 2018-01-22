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
        <td>{{result.order?result.order.order_no:''}}</td>
        <td>{{result.order?result.order.servar_area:''}}</td>
        <td>{{result.company?result.company.name:''}}</td>
        <td class="money">￥{{result.order?result.order.price:''}}</td>
        <td>
          {{(result.status != undefined)?invoice_status[result.status]:''}}
          <div v-show="result.status == 0" class="order_i_info">
            <p v-if="result.express_title">
              {{result.express_title}} 单号:{{result.express_no}}
            </p>
            <span @click="eidtcontent = true">修改</span>
          </div>
        </td>
      </tr>
    </table>
    <p class="title_invoice">发票信息</p>
    <ul class="manage_list_common manage_list_invoice">
      <li>
        <p>发票类型</p>
        <span>{{result.invoice_type?invoice_type[result.invoice_type]:''}}</span>
      </li>
      <li>
        <p>发票抬头</p>
        <span>{{result.invoice_header?result.invoice_header:''}}</span>
      </li>
      <li>
        <p>税务登记证号</p>
        <span>{{result.registration_no?result.registration_no:''}}</span>
      </li>
      <li>
        <p>开户银行</p>
        <span>{{result.bank_name?result.bank_name:''}}</span>
      </li>
      <li>
        <p>开户账号</p>
        <span>{{result.bank_num?result.bank_num:''}}</span>
      </li>
      <li>
        <p>注册场所地址</p>
        <span>{{address.address?address.address:''}}</span>
      </li>
      <li>
        <p>公司注册电话</p>
        <span>{{result.mobile?result.mobile:''}}</span>
      </li>
      <!-- <li class="upload">
        <p>税务登记扫描件</p>
        <img :src="shuiwu_img">
      </li>
      <li class="upload">
        <p>一般纳税人证明扫描件</p>
        <img :src="saomiao_img">
      </li> -->
    </ul>
    <p class="title_invoice">收件地址</p>
    <p class="consignee_address">
      <span class="icon-map-marker"></span>
      <span>{{address.user_id?address.user_id:''}}</span>
      <span>{{address.province?address.province.name:''}} {{address.city?address.city.name:''}} {{address.area?address.area.name:''}} {{address.address?address.address:''}}</span>
      <span>{{address.phone?address.phone:''}}</span>
    </p>
    <!-- <div class="common_btn_box invoice_btn_box">
      <span class="submit_btn invoice_submit_btn">邮寄发票</span>
      <span class="cancel_btn invoice_cancel_btn">取消</span>
    </div> -->
    </div>
    <div id="eidt_box" class="windows_wrapper" v-show="eidtcontent">
      <div class="windows_box">
        <div class="windows_head"><span>邮寄发票</span> <span class="icon-close"  @click="eidtcontent = false"></span></div>        
        <div class="windows_content">
          <section><span class="label">快递名称</span> <input type="text" class="" v-model="express_title" placeholder="请输入快递公司名称"></section>
          <section><span class="label">快递单号</span> <input type="text" class="" v-model="express_no" placeholder="请输入快递单号"></section>          
        </div>
        
        <div class="windows_btn"><span class="windows_btn_cancel"  @click="eidtcontent = false">取消</span> <span class="windows_btn_confirm"  @click="change()">确定</span></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        typesValue: '1',
        types:[
          {
            name: '个人增值税普通发票',
            value: '1'
          },{
            name: '企业增值税普通发票',
            value: '2'
          },
          {
            name: '企业增值税专用发票',
            value: '3'
          }
        ],

        result:{},
        address:{},

        //发票信息
        invoice_type:"1",
        invoice_header:"2",
        registration_no:"3",
        bank_name:"4",
        bank_num:"5",
        adress:"6",
        mobile:"7",
        shuiwu_img:require("../../assets/uploadimg.png"),
        saomiao_img:require("../../assets/uploadimg.png"),
        address_id:"10",

        shuiwu_img_file:"",
        saomiao_img_file:"",

        //获取全局
        invoice_type:invoice_type,
        invoice_status:invoice_status,
        //修改框显示控制
        eidtcontent: false,
        //修改快递信息
        express_title:'',
        express_no:''
      }
    },
    methods:{
      dealSendInvoice:function(){
        //alert("提交")

        /*
        var url = path + "/index/invoice/add-invoice";
        var dict = {
          user_id:this.userId,
          id:this.$route.params.id,
          invoice_type:this.invoice_type,
          invoice_header:this.invoice_header,
          registration_no:this.registration_no,
          bank_name:this.bank_name,
          bank_num:this.bank_num,
          adress:this.adress,
          mobile:this.mobile,
          shuiwu_img:shuiwu_img_file,
          saomiao_img:saomiao_img_file,
          address_id:this.address_id
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
     
        })
        */

      },
      types_tab:function(value){
        this.typesValue = value;
      },
      downloadDetail:function(){
        // /index/invoice/show?id=11
        var id = this.$route.params.id;

        var url = path + "/index/invoice/show?id="+id;
        this.$http.get(url).then(function(r){
          var td = r.data;

          this.result = td.result;

          this.address = td.address;        

          if (this.result.shaomiao_img != '') {
            this.saomiao_img = path + this.this.result.shaomiao_img;
          }
          if (this.result.shuiwu_img != '') {
            this.shuiwu_img = path + this.this.result.shuiwu_img;
          }
        })
      },
      uploadImageChange:function(fileTagId){
        //获取文件标签
        var fileTag = document.getElementById(fileTagId);
        
        
        //检测和获取文件路径
        if(fileTag.files.length==0){
          return ;
        }
        var uploadFile = fileTag.files[0];
        var url = window.URL.createObjectURL(uploadFile);
        console.log("url = "+url);
        


        //显示图片
        if(fileTagId == 'shuiwu'){
          this.shuiwu_img = url
          this.shuiwu_img_file = uploadFile
        }else{
          this.saomiao_img = url;
          this.saomiao_img_file = uploadFile
        }
        
        
      },
      change:function(){
        if (!this.express_title) {
          alert('请填写快递名称')
          return false;
        }
        if (!this.express_no) {
          alert('请填写快递单号')
          return false;
        }
        var url = path + '/index/invoice/add-express';
        var formdata = {
          invoice_id: this.$route.params.id,
          express_title: this.express_title,
          express_no: this.express_no
        }
        this.$http.post(url,formdata,{emulateJSON:true}).then(function(r){
          var data = r.data;
          if (data.status == 1) {
            this.result.express_title = this.express_title;
            this.result.express_no = this.express_no;
            this.eidtcontent = false;
          } else {
            alert(data.info);
          }
        })
      }
    },
    created(){
      loginStatus(this);

      this.downloadDetail();
      
    }
  }
</script>

<style media="screen">
@import '../../../static/css/eidtbox.css';

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
  .order_i_info{
    padding-top: 10px;
  }
  .order_i_info span{
    display: block;
    width: 70px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
  }
</style>