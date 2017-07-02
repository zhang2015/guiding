<template>
  <div class="help_content">
    <helpContentHeader :infor="infor"></helpContentHeader>
    <div class="helpCentre">
      <section class="help_select">
        <input type="text" name="" value="" placeholder="请输入想搜索的帮助">
        <span class="help_select_btn"><span class="icon-search"></span> 搜索</span>
      </section>
      <ul>
        <li v-for="item in questionlist">
          <router-link :to="{ name: 'helpDetails', params: {id:1} }">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import helpContentHeader from '../helpContentHeader/helpContentHeader'

  export default {
    data(){
      return{
        infor:{
          title:'帮助中心',
          iconname:'icon-id',
          btntext:'公司认领',
          path: '#/manage/personal/myCompany/myCompanyClaim'
        },
        questionlist:[
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          }
        ]
      }
    },
    components: {
      helpContentHeader
    }
  }
</script>

<style media="screen">
  .help_select{
    display: flex;
    width: 550px;
    height: 32px;
    border: 2px solid #6398ed;
    margin: 30px auto 35px auto;
  }
  .help_select input{
    flex-grow: 1;
    border: 0;
    padding-left: 10px;
  }
  .help_select_btn{
    width: 80px;
    height: 32px;
    background: #6398ed;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 32px;
  }
  .helpCentre ul{
    width: 925px;
    margin: auto;
  }
  .helpCentre ul li{
    width: 925px;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px dashed #f1f1f1;
  }
  .helpCentre ul li a{
    display: block;
    padding-left: 30px;
    color: #b3b3b3;
    font-size: 15px;
  }
</style>
