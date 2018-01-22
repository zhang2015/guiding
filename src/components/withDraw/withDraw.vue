<template>
  <div>
    <ul class="manage_list_common withdraw_list">
      <li>
        <p>提现金额</p>
        <input v-model="fromdata.money" type="text" placeholder="请输入提现金额">
      </li>
      <li>
        <p>提现到</p>
        <select v-model="fromdata.withdrawals_type">
          <option value="1">支付宝</option>
          <option value="2">微信</option>
          <option value="3">财付通</option>
        </select>
      </li>
      <li>
        <p>账户姓名</p>
        <input v-model="fromdata.account_name" type="text" placeholder="请输入账户姓名">
      </li>
      <li>
        <p>提现账号</p>
        <input v-model="fromdata.account_num" type="text" placeholder="请输入提现账号">
      </li>
      <li>
        <p></p>
        <span class="submit_btn" @click="withDraw">申请提现</span>
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
        url:path+'/index/wallet/apply-withdrawals',
        fromdata:{
          user_id: '',
          money:'',
          withdrawals_type:1,
          account_name:'',
          account_num:'',
        }
      }
    },
    created(){
      loginStatus(this);
      this.fromdata.user_id = this.userId;
    },
    mounted(){
      this.$emit('post-title',this.tabTitle);
    },
    methods:{
      withDraw:function(){
        if (!this.fromdata.money) {
          return false;
        }
        if (!this.fromdata.withdrawals_type) {
          return false;
        }
        if (!this.fromdata.account_name) {
          return false;
        }
        if (!this.fromdata.account_num) {
          return false;
        }
        this.$http.post(this.url,this.fromdata,{"emulateJSON":true}).then(function(r){
          var data = r.data;
          if (data.status == 1) {
            alert(data.info)
          } else {
            alert(data.info)
          }
        })
      }
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
