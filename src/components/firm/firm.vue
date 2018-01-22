<template>
  <div>
    <div class="company_selet_box">
      <section>
        <p>企业状态</p>
        <div>
            <span v-for="item in state" @click="toggleTabs_state(item.value)" :class="{active:item.value==statevalue}">{{item.name}}</span>
        </div>
      </section>
      <section>
        <p>注册资本</p>
        <div>
            <span v-for="item in capital" @click="toggleTabs_capital(item.value)" :class="{active:item.value==capitalvalue}">{{item.name}}</span>
        </div>
      </section>
      <section>
        <p>所在地区</p>
        <div>
            <span v-for="item in address" @click="toggleTabs_address(item.value)" :class="{active:item.value==addressvalue}">{{item.name}}</span>
        </div>
        
      </section>
      <section>
        <p>所在城市</p>
        <div>
            <span v-for="item in city" @click="toggleTabs_city(item.value)" :class="{active:item.value==cityvalue}">{{item.name}}</span>
        </div>
      </section>
      <section>
        <p>高级筛选</p>
        <span v-for="item in high" @click="toggleTabs_high(item.value)" :class="{active:item.value==highvalue}">{{item.name}}</span>
      </section>
    </div>
    <div class="company_list_box common_type_box">
      <p class="company_list_head common_type_head">
          我们为您找到<span>{{total}}</span>家符合条件的企业
      </p>
      <firmList ref="companyList"></firmList>
      <div class="list-pagination-wrap">
          <ul class="list-pagination">
            <li @click="dealClickPage('first')">首页</li>
            <li @click="dealClickPage('prev')">上一页</li>
            <li v-show="page>(5-1)">...</li>
            <!-- <li class="active">1</li>
            <li>2</li>
            <li>3</li> -->
            <li v-for="(item,index) in page_total" 
              @click="dealClickPage(item)" 
              v-bind:class="{active:item==page}"
              v-if="dealPageShow(index,page)"
              >{{item}}</li>
            <li  v-show="page<page_total-(5)">...</li>
            <li @click="dealClickPage('next')">下一页</li>
            <li @click="dealClickPage('last')">尾页</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import firmList from '../firmList/firmList'

  import request from "../../ajax/request.js";

  export default {


    created(){

      //其他页面传递的参数
      //
      if(this.$route.query.keyword){
        this.keyword = this.$route.query.keyword
        console.log("firm search = "+this.$route.query.keyword);
      }



      //下载数据
      this.downloadData();




      //下载省份列表
      var self = this;
      request.provinceList({},function(data){


        //让每一项  id ==> value
        var list = data;
        for(var k in list){
          var item = list[k];
          item.value = item.id;
        }
      
        self.address = self.address.concat(list);
      })


      eventBus.$on("changeCompanySearchKeyword",function(keyword){
        //console.log("search keyword = "+keyword)

        self.statevalue = 'all',
        self.capitalvalue = 'all',
        self.addressvalue = 'all',
        self.cityvalue = 'all'
        self.highvalue = 'all'
        self.keyword = keyword

        self.page = 1;

        self.downloadData();
        
      });

    },

    data(){
      return{

        //分页需要的两个变量
        page_total:2,
        page:1,

        total:0,

        keyword:"",


        statevalue:'all',
        capitalvalue:'all',
        addressvalue:'all',
        cityvalue:'all',
        highvalue:'all',

        state:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'正常',
            value:'1'
          },
          {
            name:'续存',
            value:'2'
          },
          {
            name:'吊销',
            value:'3'
          },
          {
            name:'注销',
            value:'4'
          }
        ],
        //注册资本在系统配置文档中定义: 0,1,2,3
        capital:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'500万以下',
            value:'0'
          },
          {
            name:'500~1000万',
            value:'1'
          },
          {
            name:'1000万~5000万',
            value:'2'
          },
          {
            name:'5000万以上',
            value:'3'
          }
        ],
        address:[
          {
            name:'全部',
            value:'all'
          }
        ],
        city:[
          {
            name:'全部',
            value:'all'
          }
        ],
        //系统配置文档定义: 1 2 3
        high:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'有商标',
            value:'1'
          },
          {
            name:'有专利',
            value:'2'
          },
          {
            name:'有版权',
            value:'3'
          }
        ]
      }
    },
    methods:{

      dealPageShow:function(page,index){
        return Math.abs(page-index)<5
      },

      downloadData:function(){


        //根据是否选择, 添加对应的参数
        var dict = {}
        if(this.page>0){
          dict['page'] = this.page
        }
        //如果不是全部,接口中添加这个参数
        if(this.statevalue != "all"){
          dict['manage_status'] = this.statevalue;
        }
        if(this.capitalvalue != "all"){
          dict['register_money_type'] = this.capitalvalue;
        }

        if(this.addressvalue != "all"){
          dict['province_id'] = this.addressvalue;
        }

        //

        if(this.highvalue != "all"){
          dict['property_type'] = this.highvalue;
        }

        if(this.keyword != ""){
          dict['keywords'] = this.keyword;
        }


        //发起请求
        var self = this;
        request.companyList(dict,function(data){

          //console.log(data);

          //self.firmList = data.data;


          //实现分页
          self.total = data.total;
          //根据total生成分页
          var total = data.total;
          var page_total = Math.ceil(data.total/data.per_page);
          self.page_total = page_total;
          //console.log("page_total = "+page_total)



          //获取到子组件, 执行子组件的方法, 显示列表数据
          var companyListComponent = self.$refs.companyList;
          companyListComponent.showList(data.data);

        })
      },

      dealClickPage:function(index){

        if(index == this.page){
          return;
        }

        var newPage = this.page;


        //如果是第1页
        if(index == "first"){
          newPage = 1;
        }
        //如果是最后一页
        else if(index == "last"){
          newPage = this.page_total;
        }
        
        //如果是上一页
        else if(index=="prev"){
          newPage--;
          if(newPage<1){
            newPage = 1;
          }
        }
        //如果是下一页
        else if(index=="next"){
          newPage++;
          if(newPage>this.page_total){
            newPage = 1;
          }
        }
        //如果点击了页面序号
        else{
          newPage = index;
        }

        this.page = newPage;
        //alert(newPage)

        this.downloadData();

      },

      downloadCityListData:function(value){
        //下载城市地址
        var self = this;
        request.cityList({address_id:value},function(data){

          //console.log(data)
          var list = data;
          for(var k in list){
            var item = list[k];
            item.value = item.id;
          }
        
          self.city.length = 1;
          self.city = self.city.concat(list);
          self.cityvalue = "all"

        })
      },

      //改变状态
      toggleTabs_state:function(value){
        //console.log("toggleTabs_state = "+value)
        if(this.statevalue == value){
          return;
        }
        this.statevalue = value;
        this.downloadData();
      },
      toggleTabs_capital:function(value){

        //console.log("capitalvalue = "+this.capitalvalue)
        if(this.capitalvalue == value){
          return;
        }
        this.capitalvalue = value;
        this.downloadData();
      },
      toggleTabs_address:function(value){
        if(this.addressvalue == value){
          return;
        }
        //console.log("toggleTabs_address = "+value)
        this.addressvalue=value;

        //下载城市数据
        if(value != "all"){
          this.downloadCityListData(value);
        }else{
          this.city.length = 1;
        }
        

        this.downloadData();
      },
      toggleTabs_city:function(value){
        if(this.cityvalue == value){
          return;
        }
        this.cityvalue=value;
      },
      toggleTabs_high:function(value){
        if(this.highvalue == value){
          return;
        }
        this.highvalue=value;
        this.downloadData();
        
      }
    },

    components:{
      firmList
    }
  }
</script>

<style media="screen">

    .company_selet_box section{
        height: auto;
        padding-top: 6px;
        padding-bottom: 6px;
        align-items: baseline;
    }
    .company_selet_box section>div{
        -webkit-box-flex: 1;
        box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

</style>
