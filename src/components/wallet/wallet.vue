<template>
  <div>
    <div class="wallet">
      <span class="icon-wallet"></span>
      <section>
        <p>账户余额</p>
        <p>￥{{userinfo.balance}}</p>
      </section>
      <!--<a class="withdraw_btn">提现</a>-->
      <router-link :to="{name: 'withDraw'}" class="withdraw_btn">提现</router-link>
    </div>
    <p class="wallet_table_title">资金明细</p>
    <table class="wallet_table common_table">
      <tr>
        <th width="206">时间</th>
        <th width="423">描述</th>
        <th width="160" class="text_center">金额(元)</th>
        <th width="130" class="text_center">余额(元)</th>
      </tr>
      <tr v-for="item in listdata" :key="item.id">
        <td>{{item.created_at}}</td>
        <td class="text_left">{{item.remark}}</td>
        <td v-if="item.state == 0" class="expend">-{{item.money}}</td>
        <td v-else class="income">+{{item.money}}</td>
        <td>{{item.user.balance}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        tabTitle: '钱包',
        // url:path+'/index/wallet/apply-list',
        initurl: path + '/index/wallet',
        infourl: path+'/index/user',
        userinfo:'',
        listdata:[]
      }
    },
    mounted(){
      this.$emit('post-title',this.tabTitle);
    },
    created(){
      loginStatus(this);
      var postdata = {user_id:this.userId};

      this.$http.get(this.infourl,{params: postdata}).then(function(r){
        var rdata = r.data;
        this.userinfo = rdata;
      })

      this.$http.get(this.initurl,{params: postdata}).then(function(r){
        var rdata = r.data;
        this.listdata = rdata.data;
      })

      // this.$http.get(this.url,{params: postdata}).then(function(r){
      //   var rdata = r.data;
      //   if (rdata.data) {
          
      //   } else {
          
      //   }
      // })
    }
  }
</script>

<style media="screen">
  .wallet{
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 20px;
    border: 1px solid #e5e7ed;
    background: #f9fafc;
  }
  .wallet .icon-wallet{
    width: 60px;
    height: 60px;
    font-size: 32px;
    color: #fff;
    text-align: center;
    align-items: center;
    line-height: 60px;
    background: #87ce76;
    border-radius: 100%;
  }
  .wallet section{
    flex-grow: 1;
    padding-left: 20px;
  }
  .wallet section p:nth-child(1){
    font-size: 14px;
    line-height: 27px;
    color: #616161;
  }
  .wallet section p:nth-child(2){
    font-size: 17px;
    color: #87ce76;
    font-weight: 600;
  }
  .wallet .withdraw_btn{
    width: 158px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    border: 1px solid #6389ed;
    border-radius: 4px;
    color: #6389ed;
  }
  .wallet_table_title{
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 14px;
    color: #616161;
  }
  .wallet_table .income{
    color: #87ce76;
  }
  .wallet_table .expend{
    color: #ff8a6e;
  }
</style>
