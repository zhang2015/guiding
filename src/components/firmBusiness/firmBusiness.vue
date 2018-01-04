<template>
  <div class="firm_detail_content">
    <div class="table_business">
      <table>
        <tr>
          <td class="table_business_label" width="165">统一社会信用代码:</td>
          <td width="285">{{company.world_code}}</td>
          <td class="table_business_label" width="135">注册号:</td>
          <td width="330">{{company.world_code}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">组织机构代码:</td>
          <td width="285">{{company.jsgou_code}}</td>
          <td class="table_business_label" width="135">经营状态:</td>
          <td width="330">{{company.manage_status}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">法定代表人:</td>
          <td width="285">{{company.legal_person}}</td>
          <td class="table_business_label" width="135">注册资本:</td>
          <td width="330">{{company.register_money}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">公司类型:</td>
          <td width="285">{{company.type_str}}</td>
          <td class="table_business_label" width="135">成立日期:</td>
          <td width="330">{{company.create_time}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">营业期限:</td>
          <td width="285">{{company.business_term}}</td>
          <td class="table_business_label" width="135">登记机关:</td>
          <td width="330">{{company.register_jiguan}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">核准日期:</td>
          <td width="285">{{company.check_date}}</td>
          <td class="table_business_label" width="135">公司规模:</td>
          <td width="330">{{company.enterprise_scope}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">所属行业:</td>
          <td width="285">{{company.category_id}}</td>
          <td class="table_business_label" width="135">英文名:</td>
          <td width="330">{{company.english_title}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">曾用名:</td>
          <td colspan="3">{{company.history_title}}</td>
        </tr>
        <tr>
          <td class="table_business_label" width="165">企业地址:</td>
          <td colspan="3">{{company.register_address}}</td>
        </tr>
        <tr class="last_table_business">
          <td class="table_business_label" width="165">经营范围:</td>
          <td colspan="3">{{company.business_scope}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    created(){

      var info = this.$parent.$data.info;

      this.company = info;

      /*
      console.log(JSON.stringify(info))
      this.world_code = info.company.world_code;
      this.register_code = info.company.register_code;
      this.jsgou_code = info.company.jsgou_code;

      this.manage_status = info.company.manage_status;
      this.legal_person = info.company.legal_person;
      this.register_money = info.company.register_money;

      this.type_str = info.company.manage_status;
      this.create_time = info.company.manage_status;
      this.business_term = info.company.manage_status;
      this.register_jiguan = info.company.manage_status;
      this.check_date = info.company.manage_status;
      this.enterprise_scope = info.company.manage_status;
      this.category_id = info.company.manage_status;
      this.english_title = info.company.manage_status;
      this.history_title = info.company.manage_status;
      this.register_address = info.company.manage_status;
      this.business_scope = info.company.manage_status;
      */

      //world_code
    },

    data(){
      return{

        company:{},

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
