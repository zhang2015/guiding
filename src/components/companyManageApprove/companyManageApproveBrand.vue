<template>
  <div>
      <ul class="manage_list_common setting_list">
        
        <li class="upload">
          <p>认证资料一</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li class="upload">
          <p>认证资料二</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit">提交</span>
          <span class="cancel_btn invoice_cancel_btn ml10">取消</span>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .company_submit{
    flex-basis: 100px;
  }
  .invoice_cancel_btn{
    flex-basis: 100px;
  }
</style>
