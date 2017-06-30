<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">公司管理</a>
    </div>
    <div class="padding20">
      <ul class="manage_list_common setting_list">
        <li>
          <p>企业名称</p>
          <input type="text" placeholder="请输入公司名称">
        </li>
        <li class="upload">
          <p>LOGO</p>
          <img src="../../assets/uploadimg.png">
        </li>
        <li>
          <p>服务电话</p>
          <input type="text" placeholder="请输入公司服务电话">
        </li>
        <li>
          <p>邮箱</p>
          <input type="text" placeholder="请输入企业联系邮箱">
        </li>
        <li>
          <p>客服QQ</p>
          <input type="text" placeholder="请输入企业客服QQ">
        </li>
        <li>
          <p>地址</p>
          <select>
            <option value="1">请选择省</option>
          </select>
          <select>
            <option value="1">请选择市</option>
          </select>
          <select>
            <option value="1">请选择区</option>
          </select>
          <input type="text" placeholder="请输入公司详细地址" class="wallet_sort">
        </li>
        <li>
          <p>公司主页</p>
        
        </li>
        <li>
          <p>服务范围</p>
          
        </li>
        <li>
          <p>管理团队</p>
          
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit">提交</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .manage_list_common li input.wallet_sort{
    width: 170px;
  }
  .company_submit{
    width: 160px;
    height: 45px;
    line-height: 45px;
  }
</style>
