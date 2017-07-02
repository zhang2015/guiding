<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">公司认领</a>
    </div>
    <div class="padding20">
      <ul class="manage_list_common setting_list">
        <li>
          <p>企业名称</p>
          <input type="text" placeholder="请输入公司名称">
        </li>
        <li>
          <p>真实姓名</p>
          <input type="text" placeholder="请输入您的真实姓名">
        </li>
        <li>
          <p>手机号</p>
          <input type="text" placeholder="请输入您的手机号">
        </li>
        <li>
          <p>邮箱</p>
          <input type="text" placeholder="请输入您的邮箱">
        </li>
        <li class="upload">
          <p>营业执照</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit">提交审核</span>
          <span class="cancel_btn company_cancel">取消</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .company_submit,.company_cancel{
    width: 160px;
    margin: 0 10px;
  }
</style>
