<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">收货地址</a>
      <p>
        <span class="icon-add"></span>
        <span @click="dealShowAddAddess">新增收货地址</span>
      </p>
    </div>
    <div class="padding20">
      <ul>
        <li v-for="item in addressList" class="consignee_address">
          <section>
            <p>
              收件人：
              <span class="consignee_name">{{item.name}}</span>
              <span class="default_address" v-show="item.is_default">默认地址</span>
            </p>
            <p>
              收件地址：
              <span>{{item.province?item.province.name:''}} {{item.province?item.city.name:''}} {{item.province?item.area.name:''}} {{item.address}}</span>
            </p>
            <p>
              电话/手机：
              <span>{{item.phone}}</span>
            </p>
          </section>
          <span class="consignee_btn default_btn" @click="setDefaultAddess(item)" v-show="item.is_default==0">设为默认</span>
          <span class="consignee_btn edit_btn" @click="dealShowEditAddress(item)">编辑</span>
          <span class="consignee_btn delet_btn" @click="dealDelAddress(item)">删除</span>
        </li>
        <!-- <li class="consignee_address">
          <section>
            <p>
              收件人：
              <span class="consignee_name">陈邓</span>
              <span class="default_address">默认地址</span>
            </p>
            <p>
              收件地址：
              <span>收件地址收件地址收件地址收件地址</span>
            </p>
            <p>
              电话/手机：
              <span>18312331233</span>
            </p>
          </section>
          <span class="consignee_btn default_btn">设为默认</span>
          <span class="consignee_btn edit_btn">编辑</span>
          <span class="consignee_btn delet_btn">删除</span>
        </li> -->
      </ul>

      <!-- <ZHPagination :max="max" @change="dealClickPage"></ZHPagination> -->  


    </div>
    <div class="windows_wrapper" v-show="address_box_status == 'add' || address_box_status == 'edit'">
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
  </div>
</template>

<script type="text/ecmascript-6">

  import ZHPagination from '../ZHPagination/ZHPagination'


  export default {

    components:{
      ZHPagination
    },


    data(){
      return{
        address_box_status: '',
        addressList:[],

        input_id:0,
        input_name:"",
        provinceId:-1,
        cityId:-1,
        areaId:-1,
        input_address:"",
        input_phone:"",

        provinceList:[],
        cityList:[],
        areaList:[],

        //保存被编辑的item
        edit_item:{},

        //最大页数
        max:10


      }
    },
    created(){

      loginStatus(this);

      this.downloadAddressList();

    },
    methods:{

      



      //==== 下载地址列表 ====
      downloadAddressList:function(){
        var url = path + "/index/address/user-address?user_id="+this.userId;
        this.$http.get(url).then(function(r){

          var td = r.data;
          this.addressList = td;

        })
      },


      //====分页点击====
      dealClickPage:function(current){
        alert(current)
      },
      

      //==== UI事件 ====

      setDefaultAddess:function(item){
        if(item.is_default){
          return;
        }

        var r = confirm("确定设为默认地址")
        if(!r){
          return;
        }

        //alert(item.is_default)

        //发起添加地址请求
        var url = path + "/index/address/change-user-address";

        //创建formData
        var formData = new FormData();
        
        //8个参数
        formData.append("user_id",this.userId);
        formData.append("address_id",item.id);
        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          if(r.data.status == 1){
            alert("默认地址修改结果: "+r.data['0']);

            this.address_box_status = ""

            this.downloadAddressList();

          }else{
            alert("默认地址修改结果:"+r.data['0']);
          }
        })
      },

      dealShowAddAddess:function(){
          this.address_box_status = 'add'

          this.input_id = "";
          this.input_name = "";
          this.input_address = "";
          this.input_phone = "";

          this.provinceId = -1;
          this.cityId = -1;
          this.cityList = []
          this.areaId = -1;
          this.areaList = []

          console.log("显示添加地址")

          this.downloadProvinceList();
      },
      
      dealShowEditAddress:function(item){

        console.log(item);

        this.address_box_status = 'edit';

        this.input_id = item.id;
        console.log("---");
        this.input_name = item.name;
        this.input_address = item.address;
        this.input_phone = item.phone;

        this.provinceId = item.province?item.province.id:-1;
        this.cityId = item.city?item.city.id:-1;
        this.areaId = item.area?item.area.id:-1;

        //下载省份列表
        this.downloadProvinceList();
        this.downloadCityList();
        this.downloadAreaList();

        this.edit_item = item;
      },
      dealDelAddress:function(item){
        //this.address_edit = true;
        //删除地址
        var r = confirm("是否删除地址?");
        if(!r){
          return;
        }

        this.sendDelAddressRequest(item);
      },
      dealUpdateAddress:function(item){
        //this.address_edit = true;

      },
      dealProcess:function(){
        if(this.address_box_status == "add"){

          this.sendNewAddressRequest();

        }else if(this.address_box_status == "edit"){
          this.sendUpdateAddressRequest();
        }
      },


      //====下载不同的地址数据====
      downloadProvinceList:function(){

        //获取省份信息
        //下载省份数据
        var url = path+"/index/address/child-address?address_id=1"
        this.$http.get(url).then(function(r){

          var td = r.data;
          this.provinceList = td;

        })
      },

      downloadCityList:function(){
        //alert("")

        if(this.cityId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.provinceId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.cityList = td;
          })
        }
      },


      downloadAreaList:function(){
        //alert("")

        if(this.cityId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.cityId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.areaList = td;

          })
        }
      },




      //====地址改变 - 发送请求=====
      dealProvinceChange:function(){
        //alert("")

        this.cityId = -1;
        this.cityList = []
        this.areaId = -1;
        this.areaList = []

        if(this.provinceId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.provinceId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.cityList = td;

          })
        }
        

      },dealCityChange:function(){
        //alert("")

        this.areaId = -1;
        this.areaList = []

        if(this.cityId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.cityId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.areaList = td;

          })
        }
      },


      //====发送请求=====
      sendNewAddressRequest:function(){

        //检测
        if(this.input_name.length == 0){
          alert("请输入正确的用户名");
          return;
        }

        if(this.provinceId == -1){
          alert("请选择省份");
          return;
        }
        if(this.cityId == -1){
          alert("请选择城市");
          return;
        }
        if(this.areaId == -1){
          alert("请选择地区");
          return;
        }

        if(this.input_address.length == 0){
          alert("请输入正确的详细地址");
          return;
        }

        if(this.input_phone.length == 0){
          alert("请输入正确的手机号");
          return;
        }



        //发起添加地址请求
        var url = path + "/index/address/add-user-address";

        //创建formData
        var formData = new FormData();
        
        //8个参数
        formData.append("user_id",this.userId);
        formData.append("phone",this.input_phone);
        formData.append("province_id",this.provinceId);
        formData.append("city_id",this.cityId);

        formData.append("area_id",this.areaId);
        formData.append("address",this.input_address);
        formData.append("name",this.input_name);
        formData.append("is_default",0);
        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          if(r.data.status == 1){
            alert("状态:"+r.data['0']);

            this.address_box_status = ""

            this.downloadAddressList();

          }else{
            alert(r.data['0']);
          }
        })
      },
      sendUpdateAddressRequest:function(){

        //检测
        if(this.input_name.length == 0){
          alert("请输入正确的用户名");
          return;
        }

        if(this.provinceId == -1){
          alert("请选择省份");
          return;
        }
        if(this.cityId == -1){
          alert("请选择城市");
          return;
        }
        if(this.areaId == -1){
          alert("请选择地区");
          return;
        }

        if(this.input_address.length == 0){
          alert("请输入正确的详细地址");
          return;
        }

        if(this.input_phone.length == 0){
          alert("请输入正确的手机号");
          return;
        }



        //发起添加地址请求
        var url = path + "/index/address/update-user-address";

        //创建formData
        var formData = new FormData();
        
        //8个参数
        formData.append("user_id",this.userId);
        formData.append("phone",this.input_phone);
        formData.append("province_id",this.provinceId);
        formData.append("city_id",this.cityId);

        formData.append("area_id",this.areaId);
        formData.append("address",this.input_address);
        formData.append("name",this.input_name);
        formData.append("is_default",0);
        formData.append("address_id",this.edit_item.id);
        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          if(r.data.status == 1){
            alert("地址修改结果:"+r.data['0']);

            this.address_box_status = ""

            this.downloadAddressList();

          }else{
            alert("地址修改结果:"+r.data['0']);
          }
        })


      },
      sendDelAddressRequest:function(item){

        //发起添加地址请求
        var url = path + "/index/address/del-user-address";

        //创建formData
        var formData = new FormData();
        
        //8个参数
        formData.append("user_id",this.userId);
        formData.append("address_id",item.id);
        
        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          if(r.data.status == 1){
            alert("状态:"+r.data['0']);

            this.downloadAddressList();

          }else{
            alert(r.data['0']);
          }
        })
      }

    }
  }
</script>

<style media="screen">
  .consignee_address{
    display: flex;
    flex-wrap: nowrap;
    height: 110px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    border: 1px solid #e5e7ed;
    background: #f9fafc;
  }
  .consignee_address section{
    flex-grow: 1;
  }  
  .consignee_address section p{
    font-size: 14px;
    line-height: 28px;
    color: #898989;
  }
  .consignee_address section p span{
    color: #616161;
  }
  .consignee_address section p span.consignee_name{
    font-weight: 600;
  }
  .consignee_address section p span.default_address{
    color: #ff8a6e;
    padding-left: 25px;
    cursor: pointer;
  }
  .consignee_address section p span.set_default_address{
    color: #ff8a6e;
    padding-left: 25px;
    cursor: pointer;
  }
  .consignee_btn{
    width: 68px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-left: 15px;
    cursor: pointer;
  }
  .default_btn{
    color: #6389ed;
  }
  .edit_btn{
    color: #87ce76;
    border: 1px solid #87ce76;
    border-radius: 4px;
  }
  .delet_btn{
    color: #b3b3b3;
    border: 1px solid #e5e7ed;
    border-radius: 4px;
  }
</style>
