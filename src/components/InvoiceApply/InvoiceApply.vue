<template>
  <div>
    <table class="common_table invoice_table">
      <tr>
        <th width="207" >订单号</th>
        <th width="200">服务项目</th>
        <th width="330">服务机构</th>
        <th width="186" class="text_center">服务价格</th>
      </tr>
      <tr>
        <td class="text_left">{{result.order?result.order.order_no:''}}</td>
        <td class="text_left">{{result.order?result.order.servar_area:''}}</td>
        <td class="text_left">{{result.company?result.company.name:''}}</td>
        <td class="money">￥{{result.order?result.order.price:''}}</td>
      </tr>
    </table>
    <p class="title_invoice">发票信息</p>
    <ul class="manage_list_common manage_list_invoiceapply">
      <li>
        <p>发票类型</p>
        <section>
          <span v-for="(item,index) in types" :key=index class="types" :class="{'active': typesValue=== item.value}" @click="types_tab(item.value)">{{item.name}}</span>
        </section>
      </li>
      <li>
        <p>发票抬头</p>
        <input v-model="invoice_header" type="text" placeholder="请输入发票抬头">
      </li>
      <li class="upload">
        <p>税务登记证号</p>
        <section>
          <input v-model="registration_no" type="text" placeholder="请填写15到20位有效税务登记证号码">
          <p class="des_1">请与贵公司财务人员核实后，填写准确的税务登记证号或三证合一号或五证合一号，以免影响发票后续的使用</p>
        </section>
      </li>
      <li>
        <p>开户银行</p>
        <input v-model="bank_name" type="text" placeholder="开户行及支行，例：招商银行南油支行">
      </li>
      <li>
        <p>开户账号</p>
        <input v-model="bank_num" type="text" placeholder="请填写贵公司开户许可登记银行账号">
      </li>
      <li>
        <p>注册场所地址</p>
        <input v-model="adress" type="text" placeholder="请填写税务登记证上的地址">
      </li>
      <li>
        <p>公司注册电话</p>
        <input v-model="mobile" type="text" placeholder="请填写公司注册电话">
      </li>
      <li class="upload">
        <p>税务登记扫描件</p>
        <img :src="shuiwu_img">
        <div class="file-select-box">
          <input id="shuiwu" class="shuiwu_img" type="file" 
            @change="uploadImageChange('shuiwu')">
        </div>
        
        <span>请上传税务登记扫描件或三证合一或五证合一的证照扫描件（复印件需加盖公章）</span>
        
      </li>
      <li class="upload">
        <p>一般纳税人证明扫描件</p>
        <img :src="saomiao_img">
        <div class="file-select-box">
          <input id="saomiao" class="saomiao_img" type="file"
            @change="uploadImageChange('saomiao')">
        </div>
      </li>
    </ul>
    <p class="title_invoice">收件地址</p>
    <p class="consignee_address">
      <span class="icon-map-marker"></span>
      <span>陈邓</span>
      <span>四川省成都市锦江区锦华路一段120号天府新谷2栋2单元2010</span>
      <span>132****5220</span>
      <br />
      <span class="change_address">更换地址</span>
    </p>
    <div class="common_btn_box invoiceapply_btn_box">
      <span class="submit_btn invoiceapply_submit_btn" @click="dealSendInvoice">提交</span>
      <span class="cancel_btn invoiceapply_cancel_btn">取消</span>
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
        saomiao_img_file:""

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
        
        
      }
    },
    created(){
      loginStatus(this);

      this.downloadDetail();
      
    }
  }
</script>

<style media="screen">
  .invoice_table .money{
    color: #ff8a6e;
  }
  .manage_list_common.manage_list_invoiceapply li p:nth-child(1){
    padding-left: 35px;
    width: 175px; 
  }
  .manage_list_invoiceapply li section .types{
    border: 1px solid #e5e6ed;
    padding: 10px;
    color: #898989;
    margin-right: 10px;
    cursor: pointer;
  }
  .manage_list_invoiceapply li section .types.active{
    border: 1px solid #6389ed;
    background: #6389ed;
    color: #fff;
  }
  .title_invoice{
    padding-top: 40px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e6ed;
    color: #616161;
    font-size: 14px;
    font-weight: 600;
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
  .manage_list_invoiceapply li p.des_1{
    width: 600px;
    font-size: 12px;
    color: #898989;
    line-height: 30px;
  }
  .invoiceapply_btn_box{
    padding: 30px 0;
  }
  .invoiceapply_cancel_btn,.invoiceapply_submit_btn{
    width: 160px;
    height: 45px;
    line-height: 45px; 
    margin: 0 10px;
  }
  span.change_address{
    color: #6389ed;
    cursor: pointer;
  }

  .file-select-box{
    position:absolute;
    width: 100px;
    height: 100px;
    overflow: hidden;
    left:505px; 
  }

  .file-select-box input{
    padding-bottom: 60px;
    opacity: 0.1;
  }
</style>
