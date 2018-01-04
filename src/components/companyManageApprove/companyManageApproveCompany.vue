<template>
  <div>
      <ul class="manage_list_common setting_list">
        <li>
          <p>营业执照类型</p>
          <span class="submit_btn select-type-button active" >普通</span>
          <span class="cancel_btn select-type-button ml10">三证合一</span>
        </li>
        <li class="upload">
          <p>企业营业执照</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li class="upload">
          <p>组织机构代码证</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li class="upload">
          <p>税务登记代码证</p>
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
    /*.invoice_cancel_btn {
        width: 160px;
        height: 45px;
        line-height: 45px;
    }*/
    .select-type-button{
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
      border-radius: 0;
    }
    .select-type-button.active {
      border: 1px solid #0066eb;
      background: #006EFF;
      color: #fff;
    }
    .company_submit{
      flex-basis: 100px;
    }
    .invoice_cancel_btn{
      flex-basis: 100px;
    }
</style>
