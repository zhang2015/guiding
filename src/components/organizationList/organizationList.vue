<template>
  <div>
    <ul class="firm_list">
      <li v-for="item in list">
        <img :src="item.cover_img?path+item.cover_img:require('../../assets/default/qiye_com.png')">
        <section>
          <router-link :to="{name:'organizationDetails',params:{id:item.id}}">{{item.name}}</router-link>
          <div class="firm_list_tabs">
            <span>知识产权评估</span>
            <span>商标代理</span>
            <span>评估审计</span>
          </div>

          <span>地址：{{item.address}} 测试地址</span>
        </section>
        <p>{{item.city?item.city.name:''}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        path:path,

        //分页显示
        qualification_pid:1,
        qualification_id:2,
        area_id:2,
        page:1,

        /*
        qualification_pid:2,
        qualification_id:1,
        area_id:2,
        */

        //显示的数据
        list:[],

        firmList:[
          {
            name: '11南京小米新材料科技有限公司1',
            legal: '卞国英',
            tel: '17712422870',
            address: '南京市鼓楼区山西南村3幢乙单元402室',
            id: '1',
            brand: '11',
            patent: '10',
            copyright: '9',
            logoicon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498026496543&di=eaf157cc0a672d101466af20163ca718&imgtype=0&src=http%3A%2F%2Fimage.knewone.com%2Fbrands%2Fb3a9bc05baa73ca29255b55e6bcf0c82.jpg'
          },
          {
            name: '南京小米新材料科技有限公司2',
            legal: '卞国英',
            tel: '17712422870',
            address: '南京市鼓楼区山西南村3幢乙单元402室',
            id: '2',
            brand: '11',
            patent: '10',
            copyright: '9',
            logoicon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498026496543&di=eaf157cc0a672d101466af20163ca718&imgtype=0&src=http%3A%2F%2Fimage.knewone.com%2Fbrands%2Fb3a9bc05baa73ca29255b55e6bcf0c82.jpg'
          },
          {
            name: '南京小米新材料科技有限公司3',
            legal: '卞国英',
            tel: '17712422870',
            address: '南京市鼓楼区山西南村3幢乙单元402室',
            id: '3',
            brand: '11',
            patent: '10',
            copyright: '9',
            logoicon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498026496543&di=eaf157cc0a672d101466af20163ca718&imgtype=0&src=http%3A%2F%2Fimage.knewone.com%2Fbrands%2Fb3a9bc05baa73ca29255b55e6bcf0c82.jpg'
          },
          {
            name: '南京小米新材料科技有限公司4',
            legal: '卞国英',
            tel: '17712422870',
            address: '南京市鼓楼区山西南村3幢乙单元402室',
            id: '4',
            brand: '11',
            patent: '10',
            copyright: '9',
            logoicon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498026496543&di=eaf157cc0a672d101466af20163ca718&imgtype=0&src=http%3A%2F%2Fimage.knewone.com%2Fbrands%2Fb3a9bc05baa73ca29255b55e6bcf0c82.jpg'
          },
          {
            name: '南京小米新材料科技有限公司5',
            legal: '卞国英',
            tel: '17712422870',
            address: '南京市鼓楼区山西南村3幢乙单元402室',
            id: '5',
            brand: '11',
            patent: '10',
            copyright: '9',
            logoicon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498026496543&di=eaf157cc0a672d101466af20163ca718&imgtype=0&src=http%3A%2F%2Fimage.knewone.com%2Fbrands%2Fb3a9bc05baa73ca29255b55e6bcf0c82.jpg'
          }
        ]
      }
    
    },
    created(){


    },
    methods:{


      showList:function(list){

        //console.log("len = "+list.length)

        this.list = list;


      }
      
    },
    watch:{
      "$route":function(){

        //console.log("$route = "+this.$route)

      }


    }


  }
</script>

<style media="screen">
  .firm_list li{
    display: flex;
    height: 170px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7ed;
  }
  .firm_list li img{
    width: 110px;
    height: 110px;
    border: 1px solid #e5e7ed;
    margin: 0 20px;
  }
  .firm_list li section{
    flex-grow: 1;
  }
  .firm_list li section a{
    display: block;
    font-size: 16px;
    color: #616161;
    line-height: 32px;
  }
  .firm_list li section span{
    display: block;
    font-size: 14px;
    color: #b3b3b3;
    line-height: 25px;
  }
  .firm_list li p{
    width: 105px;
    font-size: 14px;
    color: #b3b3b3;
    text-align: center;
  }
  .firm_list_tabs{
    display: flex;
    height: 50px;
    justify-content: flex-start;
    align-items: center;
  }
  .firm_list_tabs span{
    padding: 0px 15px;
    border: 1px solid #e5e7ed;
    margin-right: 10px;
  }
</style>
