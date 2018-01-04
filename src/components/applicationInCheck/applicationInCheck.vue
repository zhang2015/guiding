<template>
  
  <div class="applicationIn main_content clearfix">
    <!--服务机构入驻begin-->
    <div class="tab_type_box"  style="display:none">
      <div class="tab_type_head">
        <a class="active">服务机构免费入驻</a>
        <a href="#">公司免费入驻</a>
      </div>
      <div class="applicationIn_content">
        <section>
          <span class="lable">机构类型：</span>
          <span v-for="item in types" :key=item class="types" :class="{'active': typesValue=== item.value}" @click="types_tab(item.value)">{{item.name}}</span>
        </section>
        <section>
          <span class="lable">机构全称：</span>
          <input type="text" value="" placeholder="请输入机构全称">
          <div>
              <span class="color-red ml25">该服务机构已存在</span>
              <a href="#" class="btn-bd-green-s">去认领</a>
          </div>
        </section>
        <section>
          <span class="lable">机构地址：</span>
          <select>
            <option value="1">选择省</option>
          </select>
          <select>
            <option value="1">选择市</option>
          </select>
          <select>
            <option value="1">选择区</option>
          </select>
        </section>
        <section>
          <span class="lable"></span>
          <input type="text" value="" placeholder="请输入详细地址">
        </section>
        <section>
          <span class="lable">机构电话：</span>
          <input type="text" value="" placeholder="请输入机构座机">
        </section>
        <section>
          <span class="lable">机构邮箱：</span>
          <input type="text" value="" placeholder="请输入机构邮箱">
        </section>
        <section class="top">
          <span class="lable">营业执照：</span>
          <img src="../../assets/uploadimg.png">
          <a href="javascript:void(0)" class="btn-bd-green-s ml20 mt15">上传营业执照</a>
        </section>
      </div>
      <div class="btn_box">
        <span class="submit_btn">提交申请</span>
        <span class="cancel_btn">取消</span>
      </div>
    </div>
    <!--服务机构入驻end-->
    
    <!--公司入驻 begin-->
    <div class="tab_type_box" style="display:none">
      <div class="tab_type_head">
        <a href="#">服务机构免费入驻</a>
        <a class="active">公司免费入驻</a>
      </div>
      <div class="applicationIn_content">
        <section>
          <span class="lable">公司全称：</span>
          <input type="text" value="" placeholder="请输入公司全称">
          <div>
              <span class="color-red ml25">该公司已存在</span>
              <a href="#" class="btn-bd-green-s">去认领</a>
          </div>
        </section>
        <section>
          <span class="lable">公司地址：</span>
          <select>
            <option value="1">选择省</option>
          </select>
          <select>
            <option value="1">选择市</option>
          </select>
          <select>
            <option value="1">选择区</option>
          </select>
        </section>
        <section>
          <span class="lable"></span>
          <input type="text" value="" placeholder="请输入详细地址">
        </section>
        <section>
          <span class="lable">公司电话：</span>
          <input type="text" value="" placeholder="请输入公司联系电话">
        </section>
        <section>
          <span class="lable">公司邮箱：</span>
          <input type="text" value="" placeholder="请输入公司联系邮箱">
        </section>
        <section class="top">
          <span class="lable">营业执照：</span>
          <img src="../../assets/uploadimg.png">
          <a href="javascript:void(0)" class="btn-bd-green-s ml20 mt15">上传营业执照</a>
        </section>
      </div>
      <div class="btn_box">
        <span class="submit_btn">提交申请</span>
        <span class="cancel_btn">取消</span>
      </div>
    </div>
    <!--公司入驻 end-->
    
    <!--入驻记录 begin-->
    <div class="tab_type_box">
      <div class="tab_type_head">
        <a class="active">入驻状态</a>
      </div>
      <div class="applicationIn_content">
        <section>
          <span class="lable">审核状态：</span>
          <div class="color-red">审核中</div>
        </section>
        <section>
          <span class="lable">机构类型：</span>
          <div>评估公司</div>
        </section>
        <section>
          <span class="lable">机构全称：</span>
          <div>四川贵鼎科技有限公司</div>
        </section>
        <section>
          <span class="lable">机构地址：</span>
          <div>四川省成都市武侯区天府三街腾讯大厦</div>
        </section>
          <section>
          <span class="lable">机构电话：</span>
          <div>028-8888888</div>
        </section>
          <section>
          <span class="lable">机构邮箱：</span>
          <div>530972294@qq.com</div>
        </section>
        
        <section class="business-license-list">
          <span class="lable">营业执照：</span>
          <img src="../../assets/uploadimg.png" class="business-license-img">
        </section>
      </div>
    </div>
    <!--公司入驻 end-->
    
  </div>
  
  
  
  
</template>



<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        typesValue: '1',
        types:[
          {
            name: '评估公司',
            value: '1'
          },{
            name: '会计事务所',
            value: '2'
          },
          {
            name: '知识产权',
            value: '3'
          },
          {
            name: '律师所',
            value: '4'
          }
        ]
      }
    },
    methods:{
      types_tab:function(value){
        this.typesValue = value;
      }
    }
  }
</script>

<style media="screen">
 .applicationIn .tab_type_box{
   width: 100%;
     box-sizing: border-box
 }
 .applicationIn .tab_type_head a{
   width: 184px;
 }
 .applicationIn_content{
   padding-top: 30px;
   padding-left: 300px;
     font-size: 14px;
 }
 .applicationIn_content section{
   display: flex;
   height: 70px;
   justify-content: flex-start;
   align-items: center;
 }
 .applicationIn_content section.top{
   align-items: flex-start;
   padding: 10px 0;
   height: 100px;
 }
 .applicationIn_content section.top img{
   width: 100px;
   height: 100px;
 }
 .applicationIn_content section.top .lable{
   padding-top: 20px;
 }
 .applicationIn_content section .lable{
   width: 135px;
   color: #616161;
 }
 .applicationIn_content section .types{
   height: 40px;
     padding: 0 20px;
   line-height: 40px;
   text-align: center;
   margin-right: 10px;
   border: 1px solid #e5e7ed;
   background: #fff;
   color: #898989;
   cursor: pointer;
     transition: .3s;
 }
    .applicationIn_content section .types:hover{
        color: #006EFF
    }
 .applicationIn_content section .types.active{
   border: 1px solid #0066eb;
   background: #006EFF;
   color: #fff;
 }
 .applicationIn_content section input{
   width: 455px;
   height: 40px;
   padding-left: 10px;
   border: 1px solid #e5e7ed;
     font-size: 14px;
 }
 .applicationIn_content section select{
   width: 175px;
   height: 40px;
   border: 1px solid #e5e6ed;
   margin-right: 10px;
     font-size: 14px;
 }
 .btn_box{
   display: flex;
   justify-content: center;
   padding-bottom: 20px;
 }
 .btn_box span{
   width: 158px;
   height: 58px;
   margin: 10px;
 }
    .business-license-list{
        height: auto!important;
            align-items: end!important
    }
    .business-license-img{
        width: 400px!important;
        height: auto!important;
        margin-bottom: 30px;
    }
    .applicationIn_content .top{
        background: none!important
    }
    .mt15{
        margin-top: 15px
    }

</style>
