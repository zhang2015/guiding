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


      <!--个人增值税普通发票 begin-->
      <div v-show="typesValue == 1">
        
        <li>
          <p>真实姓名</p>
          <input  type="text" placeholder="开票人真实姓名">
        </li>
        <li>
          <p>身份证号</p>
          <section>
            <input type="text" placeholder="请输入该姓名的身份证号">
          </section>
        </li>
        <li>
          <p>备注</p>
          <input type="text" placeholder="如：办公费、车费">
        </li>

      </div>
      <!--个人增值税普通发票 end-->

      <!--企业增值税普通发票 begin-->
      <div v-show="typesValue == 2">
        
        <li>
          <p>发票抬头</p>
          <input v-model="invoice_header" type="text" placeholder="请输入发票抬头">
        </li>
        <li class="upload">
          <p>税务登记证号</p>
          <section>
            <input v-model="registration_no" type="text" placeholder="请填写15到20位有效税务登记证号码">
            <p class="des_1">请与贵公司财务人员核实并填写准确的税务登记证号，以免影响发票后续的使用</p>
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
        <li>
          <p>备注</p>
          <input type="text" placeholder="如：办公费、车费">
        </li>

      </div>
      <!--企业增值税普通发票 end-->

      <!--企业增值税专用发票 begin-->
      <div  v-show="typesValue == 3">

        <li>
          <p>发票抬头</p>
          <input v-model="invoice_header" type="text" placeholder="请输入发票抬头">
        </li>
        <li class="upload">
          <p>税务登记证号</p>
          <section>
            <input v-model="registration_no" type="text" placeholder="请填写15到20位有效税务登记证号码">
            <p class="des_1">请与贵公司财务人员核实并填写准确的税务登记证号，以免影响发票后续的使用</p>
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
        <li>
          <p>备注</p>
          <input type="text" placeholder="如：办公费、车费">
        </li>
        
      </div>
      <!--企业增值税专用发票 end-->
      
      
    </ul>
    
    
    <p class="title_invoice">收件地址</p>
    <div class="consignee_address ptb30">
      <div class="poo p-ac">
         <div class="p-f1">
              <span class="icon-map-marker"></span>
              <span>陈邓</span>
              <span>四川省成都市锦江区锦华路一段120号天府新谷2栋2单元2010</span>
              <span>132****5220</span>
         </div>
         <span class="change_address">更换地址</span> 
      </div>
      
      <!--更换地址 begin-->
      <div class="bd mt20 address-more">
          <div class="poo p15 bb">
              <b class="mr20">罗恒</b>
              <div class="p-f1 mr20 poo">
                 <div class="mr10">四川省成都市双流县华阳镇滨河路二段169号</div>
                 <div>180****1664</div>
              </div>
              <div>
                  <span>选择</span>
                  <span>编辑</span>
              </div>
          </div>
          <div class="poo p15 bb">
              <b class="mr20">罗恒</b>
              <div class="p-f1 mr20 poo">
                 <div class="mr10">四川省成都市双流县华阳镇滨河路二段169号</div>
                 <div>180****1664</div>
              </div>
              <div>
                  <span>选择</span>
                  <span>编辑</span>
              </div>
          </div>
          <div class="adress-add">添加新地址</div>
      </div>
      <!--更换地址 end-->
    </div>
    <div class="common_btn_box invoiceapply_btn_box">
      <span class="submit_btn invoiceapply_submit_btn" @click="dealSendInvoice">提交</span>
      <span class="cancel_btn invoiceapply_cancel_btn">取消</span>
    </div>
    
    <!--编辑/添加地址 begin-->
    <div class="windows_wrapper">
      <div class="windows_box">
        <div class="windows_head">
          <span>新增/编辑收货地址</span>
          <span class="icon-close" @click="address_box_status = ''"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">收件人</span>
            <input v-model="input_name" type="text" placeholder="请输入收件人姓名">
          </section>
          <section>
            <span class="label">所在地区</span>
            <select v-model="provinceId" @change="dealProvinceChange">
              <option value="-1">请选择省</option>
              <option v-for="item in provinceList" 
              :value="item.id">{{item.name}}</option>
            </select>
            <select v-model="cityId" @change="dealCityChange">
              <option value="-1">请选择市</option>
              <option v-for="item in cityList" 
              :value="item.id">{{item.name}}</option>
            </select>
            <select v-model="areaId">
              <option value="-1">请选择区</option>
              <option v-for="item in areaList" 
              :value="item.id">{{item.name}}</option>
            </select>
          </section>
          <section>
            <span class="label">详细地址</span>
            <input v-model="input_address" type="text" placeholder="请补全详细地址">
          </section>
          <section>
            <span class="label">电话/手机</span>
            <input v-model="input_phone" type="text" placeholder="请输入电话号码或手机号码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="address_box_status = ''">取消</span>
          <span class="windows_btn_confirm" @click="dealProcess">提交</span>
        </div>
      </div>
    </div>
    <!--编辑/添加地址 end-->
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
  .consignee_address .p-f1 span:nth-child(2){
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
    color: #1372FB;
    cursor: pointer;
  }
    span.change_address:hover{
        color: #4893ff
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
    
    .adress-add{
        text-align: center;
        padding: 10px 0;
        background: #F5F5F5;
        color: #1372FB;
        transition: .3s;
        cursor: pointer
    }
    .adress-add:hover{
        background: #fdfdfd
    }
    .address-more{
        font-size: 14px;
        
    }
    .address-more b{
        font-weight: bold
    }
    .address-more span{
        font-size: 14px!important;
        font-weight: normal!important;
        color: #1372FB;
        transition: .3s;
        cursor: pointer!important
    }
    .address-more span:hover{
        color: #4893ff
    }
</style>
