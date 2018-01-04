<template>
  <div>
    <ul class="firm_list">
      <li v-for="item in firmList">
        <img :src="dealImg(item.img)">
        <section>
          <router-link :to="{name:'firmDetails',params:{id:item.id}}">{{item.title}}</router-link>
          <span>企业法人：{{item.legal_person}}</span>
          <span>联系方式：{{item.mobile}}</span>
          <span>地址：{{item.register_address}}</span>
        </section>
        <p>质押({{item.mortgage.length}})</p>
        <p>商标({{item.copyright.length}})</p>
        <p>专利({{item.patent.length}})</p>
        <p>著作权({{item.trademark.length}})</p>
        <p>软著({{item.software.length}})</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  

  export default {

    created(){

      

    },
    methods:{

      showList:function(list){

        //alert(list);
        this.firmList = list;

      },

      dealImg:function(img){
        return img && img!=''?path+img:require("../../assets/default/qiye_com.png")
      }

    },

   

    data(){
      return{
        path:path,

        firmList:[],

        firmListBack:[
          {
            name: '南京小米新材料科技有限公司1',
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
      transition: .3s;
  }
    .firm_list li section a:hover{
        color: #0584FF
    }
  .firm_list li section span{
    display: block;
    font-size: 14px;
    color: #b3b3b3;
    line-height: 25px;
  }
  .firm_list li p{
    width: 80px;
    font-size: 14px;
    color: #b3b3b3;
    text-align: center;
  }
</style>
