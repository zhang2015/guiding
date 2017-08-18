<template>
  <div>
      <table class="approve_table">
        <tr>  
            <td colspan="3" >公司认证</td>  
            <td><router-link :to="{name:'companyManageApproveCompany'}" class="passed"><span class="icon-ok"></span>已认证</router-link></td>
        </tr> 
        <tr>
          <td  rowspan="11">资质认证</td>
          <td  rowspan="3">知识产权所</td>
          <td class="long_td">商标代理</td>
          <td><router-link :to="{name:'companyManageApproveBrand'}" class="nopassed"><span class="icon-ok"></span>未认证</router-link></td>
        </tr>
        <tr>
          <td class="long_td">专利代理</td>
          <td><router-link :to="{name:'companyManageApprovePatent'}" class="passing"><span class="icon-ok"></span>认证中...</router-link></td>
        </tr>
        <tr>
          <td class="long_td">版权代理</td>
          <td><a class="failpass"><span class="icon-ok"></span>认证失败</a></td>
        </tr>
        <tr>
          <td  rowspan="5">评估公司</td>
          <td class="long_td">综合评估</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td class="long_td">房地产评估</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td class="long_td">矿产评估</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td class="long_td">林业评估</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td class="long_td">证券从业评估</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td colspan="2">会计师事务所</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
        <tr>
          <td colspan="2">律师所</td>
          <td><a class="passed"><span class="icon-ok"></span>已认证</a></td>
        </tr>
      </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
.approve_table{
  width: 100%;
}
.approve_table td{
  height: 35px;
  vertical-align:middle;
  text-align: left;
  padding-left: 10px;
  border: 1px solid #eef0f6;
}
.approve_table td.long_td{
  width: 400px;
}
.passed{
  color: green;
}
.nopassed{
  color: #898989;
}
.passing{
  color: yellow;
}
.failpass{
  color: red;
}
</style>
