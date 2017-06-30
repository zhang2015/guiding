<template>
  <div class="applicationIn main_content clearfix">
    <div class="tab_type_box">
      <div class="tab_type_head">
        <a class="active">服务机构申请入驻</a>
      </div>
      <div class="applicationIn_content">
        <section>
          <span class="lable">机构类型：</span>
          <span v-for="item in types" :key=item class="types" :class="{'active': typesValue=== item.value}" @click="types_tab(item.value)">{{item.name}}</span>
        </section>
        <section>
          <span class="lable">机构全称</span>
          <input type="text" value="" placeholder="请输入机构全称">
        </section>
        <section>
          <span class="lable">机构地址</span>
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
          <span class="lable">机构电话</span>
          <input type="text" value="" placeholder="请输入机构座机">
        </section>
        <section>
          <span class="lable">机构邮箱</span>
          <input type="text" value="" placeholder="请输入机构邮箱">
        </section>
        <section class="top">
          <span class="lable">营业执照</span>
          <img src="../../assets/uploadimg.png">
        </section>
      </div>
      <div class="btn_box">
        <span class="submit_btn">提交申请</span>
        <span class="cancel_btn">取消</span>
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
 }
 .applicationIn .tab_type_head a{
   width: 184px;
 }
 .applicationIn_content{
   padding-top: 30px;
   padding-left: 300px;
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
   width: 75px;
   height: 40px;
   line-height: 40px;
   text-align: center;
   margin-right: 10px;
   border: 1px solid #e5e7ed;
   background: #fff;
   color: #898989;
   cursor: pointer;
 }
 .applicationIn_content section .types.active{
   border: 1px solid #6389ed;
   background: #6389ed;
   color: #fff;
 }
 .applicationIn_content section input{
   width: 455px;
   height: 40px;
   padding-left: 10px;
   border: 1px solid #e5e7ed;
 }
 .applicationIn_content section select{
   width: 175px;
   height: 40px;
   border: 1px solid #e5e6ed;
   margin-right: 10px;
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
</style>
