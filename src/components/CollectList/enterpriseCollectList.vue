<template>
  <div class="collect_list">
    <section v-for="item in collectionList">
      <img :src="item.company?path+item.company.cover_img:''">
      <div>
        <a :href="'#/organizationDetails/'+item.company_id">{{item.company?item.company.name:''}}</a>
        <span @click="dealDelCollection(item.enterprise_id)">取消收藏</span>
      </div>
    </section>
    <!-- <section>
      <img src="http://file.hmting.com/data/attachment/forum/201411/08/174731xxymzkxkmvnok13z.jpg">
      <div>
        <a>四川贵鼎知识产权评估服务有限公司</a>
        <span>取消收藏</span>
      </div>
    </section>
    <section>
      <img src="http://file.hmting.com/data/attachment/forum/201411/08/174731xxymzkxkmvnok13z.jpg">
      <div>
        <a>四川贵鼎知识产权评估服务有限公司</a>
        <span>取消收藏</span>
      </div>
    </section>
    <section>
      <img src="http://file.hmting.com/data/attachment/forum/201411/08/174731xxymzkxkmvnok13z.jpg">
      <div>
        <a>四川贵鼎知识产权评估服务有限公司</a>
        <span>取消收藏</span>
      </div>
    </section>
    <section>
      <img src="http://file.hmting.com/data/attachment/forum/201411/08/174731xxymzkxkmvnok13z.jpg">
      <div>
        <a>四川贵鼎知识产权评估服务有限公司</a>
        <span>取消收藏</span>
      </div>
    </section> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['list','type'],
    data(){
      return {
        path:path,
        collectionList:[]
      }
    },
    methods:{
      dealDelCollection:function(company_id){

        if(this.type == "firm"){
          var url = path + "/index/enterprise/del-enterprise-attention"
          var dict = {
            "user_id":this.userId,
            "enterprise_id":company_id
          }
          this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
            var td = r.data;
            if(td.status == 1){
              alert("取消收藏成功");

              var parent = this.$parent;
              parent.downloadList();

            }else{
              alert("取消收藏失败: "+td.info);
            }
          })
        }


      }

    },
    created(){

      loginStatus(this);

      this.collectionList = this.list;
      console.log(this.list)
    },
    watch:{
      'list':function(){
        this.collectionList = this.list;
  
      }
    }
  }
</script>

<style media="screen">
  .collect_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
  }
  .collect_list section{
    display: flex;
    width: 450px;
    height: 90px;
    margin-bottom: 20px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e5e7ed;
    background: #f9fafc;
  }
  .collect_list section img{
    width: 60px;
    height: 60px;
    padding: 20px;
  }
  .collect_list section div{
    display: flex;
    flex-direction: column;
    flex-flow: 1;
  }
  .collect_list section div a{
    font-size: 16px;
    line-height: 32px;
    color: #616161;
  }
  .collect_list section div span{
    font-size: 14px;
    line-height: 22px;
    color: #898989;
    cursor: pointer;
  }
</style>
