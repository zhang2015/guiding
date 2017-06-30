<template>
  <div class="firm_detail_content">
    <div class="table_business">
      <table>
        <tr>
          <td class="table_business_label" width="165">统计社会信用信息代码:</td>
          <td width="285">9111113293091229Q</td>
          <td class="table_business_label" width="135">注册号:</td>
          <td width="330">110108012660422</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">组织机构代码:</td>
          <td width="285">55138508-2</td>
          <td class="table_business_label" width="135">经营状态:</td>
          <td width="330">续费（在营、开业、在册）</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">法定代表人:</td>
          <td width="285">雷军</td>
          <td class="table_business_label" width="135">注册资本:</td>
          <td width="330">12999323万元人民币</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">公司类型:</td>
          <td width="285">有限责任公司（自然人投资或控股）</td>
          <td class="table_business_label" width="135">成立日期:</td>
          <td width="330">2010-02-03</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">营业期限:</td>
          <td width="285">2010-02-03 至 2030-02-02</td>
          <td class="table_business_label" width="135">登记机关:</td>
          <td width="330">海淀分局</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">核准日期:</td>
          <td width="285">2016-10-20</td>
          <td class="table_business_label" width="135">公司规模:</td>
          <td width="330">-</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">所属行业:</td>
          <td width="285">科技推广和应用服务业</td>
          <td class="table_business_label" width="135">英文名:</td>
          <td width="330">Xiaomi Inc.</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">曾用名:</td>
          <td colspan="3">北京小米科技有限责任公司</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">企业地址:</td>
          <td colspan="3">北京市海淀区清河中街68号华润五彩城购物中心二期13层</td>
        </tr>
        <tr class="last_table_business">
          <td class="table_business_label" width="165">经营范围:</td>
          <td colspan="3">小米商城是小米官方网站直营小米旗下所有产品，囊括小米手机系列小米6、小米5c、小米MIX，红米手机系列红米4X、红米Note 4X，智能硬件,配件及小米生活周边，同时为米粉提供客户服务及售后支持。小米商城是小米官方网站直营小米旗下所有产品，囊括小米手机系列小米6、小米5c、小米MIX，红米手机系列红米4X、红米Note 4X，智能硬件,配件及小米生活周边，同时为米粉提供客户服务及售后支持。小米商城是小米官方网站直营小米旗下所有产品，囊括小米手机系列小米6、小米5c、小米MIX，红米手机系列红米4X、红米Note 4X，智能硬件,配件及小米生活周边，同时为米粉提供客户服务及售后支持。小米商城是小米官方网站直营小米旗下所有产品，囊括小米手机系列小米6、小米5c、小米MIX，红米手机系列红米4X、红米Note 4X，智能硬件,配件及小米生活周边，同时为米粉提供客户服务及售后支持。</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        id:this.$route.params.id
      }
    }
  }
</script>

<style media="screen">
  .table_business table tr td{
    height: 48px;
    vertical-align: middle;
    text-align: left;
    padding-left: 20px;
    border: 1px solid #e5e7ed;
    font-size: 14px;
    color: #898989;
  }
  .table_business table tr td.table_business_label{
    background: #f9fafc;
    font-size: 12px;
    color: #616161;
  }
  .table_business table tr.last_table_business td{
    padding: 20px;
    line-height: 20px;
  }
  .table_business table tr.last_table_business td.table_business_label{
    vertical-align: top;
    padding-top: 20px;
  }
  
</style>
