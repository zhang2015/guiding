<template>
  <div>
    <ul class="manage_list_common withdraw_list">
      <li>
        <p>提现金额</p>
        <input type="text" placeholder="请输入提现金额">
      </li>
      <li>
        <p>提现到</p>
        <select>
          <option value="1">支付宝</option>
        </select>
      </li>
      <li>
        <p>账户姓名</p>
        <input type="text" placeholder="请输入账户姓名">
      </li>
      <li>
        <p>提现账号</p>
        <input type="text" placeholder="请输入提现账号">
      </li>
      <li>
        <p></p>
        <span class="submit_btn">申请提现</span>
        <router-link :to="{name:'wallet'}" class="cancel_btn">返回</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        tabTitle: '申请提现',
      }
    },
    mounted(){
      this.$emit('post-title',this.tabTitle);
    }
  }
</script>

<style media="screen">
  .withdraw_list .submit_btn,.withdraw_list .cancel_btn{
    width: 158px;
    margin-right: 10px;
  }
  .withdraw_list li:nth-last-child(2){
    border-bottom: 0;
  }
</style>
