<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">收货地址</a>
      <p>
        <span class="icon-add"></span>
        <span @click="address_edit = true">新增收货地址</span>
      </p>
    </div>
    <div class="padding20">
      <ul>
        <li class="consignee_address">
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
          <span class="consignee_btn default_btn"></span>
          <span class="consignee_btn edit_btn">编辑</span>
          <span class="consignee_btn delet_btn">删除</span>
        </li>
        <li class="consignee_address">
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
        </li>
      </ul>
    </div>
    <div class="windows_wrapper" v-show="address_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span>新增/编辑收货地址</span>
          <span class="icon-close" @click="address_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">收件人</span>
            <input type="text" placeholder="请输入收件人姓名">
          </section>
          <section>
            <span class="label">所在地区</span>
            <select>
              <option value="1">请选择省</option>
            </select>
            <select>
              <option value="1">请选择市</option>
            </select>
            <select>
              <option value="1">请选择区</option>
            </select>
          </section>
          <section>
            <span class="label">详细地址</span>
            <input type="text" placeholder="请补全详细地址">
          </section>
          <section>
            <span class="label">电话/手机</span>
            <input type="text" placeholder="请输入电话号码或手机号码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="address_edit = false">取消</span>
          <span class="windows_btn_confirm">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        address_edit: false,
      }
    },
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
