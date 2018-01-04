<template>
  <div>
    <div class="company_selet_box">
      <section>
        <p>服务分类</p>
        <span v-for="(item,index) in type" @click="toggleTabs_type(item.value,index)" :class="{active:item.value==typevalue}">{{item.name}}</span>
      </section>
      <section>
        <p>服务内容</p>
        <span v-for="(item,index) in content" @click="toggleTabs_content(item.value)" :class="{active:item.value==contentvalue}">{{item.name}}</span>
      </section>
      <section>
        <p>所在地区</p>
        <span v-for="(item,index) in address" @click="toggleTabs_address(item.value)" :class="{active:item.value==addressvalue}">{{item.name}}</span>
      </section>
    </div>
    <div class="company_list_box common_type_box">
      <p class="company_list_head common_type_head">
          我们为您找到<span>{{total}}</span>家符合条件的企业
      </p>
      <organizationList ref="list" v-on:page-change="dealChangePage"></organizationList>
      <div class="list-pagination-wrap">
          <ul class="list-pagination">
            <li @click="dealClickPage('prev')">上一页</li>
            <!-- <li class="active">1</li>
            <li>2</li>
            <li>3</li> -->
            <li v-for="(item,index) in page_num" @click="dealClickPage(item)" v-bind:class="{active:item==page}">{{item}}</li>
            <li @click="dealClickPage('next')">下一页</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import organizationList from '../organizationList/organizationList'

  export default {
    data(){
      return{

        //过滤数据
        typevalue:'all',
        contentvalue:'all',
        addressvalue:'all',

        keyword:"",

        //为了更好的获取子分类,定义这个数组
        typeTree:[],

        //分页, 默认显示第1页数据
        page:1,
        page_num:1,
        total:0,

        //服务分类
        type:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'评估公司',
            value:'1'
          },
          {
            name:'会计师事务所',
            value:'2'
          },
          {
            name:'知识产权所',
            value:'3'
          },
          {
            name:'律师所',
            value:'4',
          },
        ],

        //服务内容
        content:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'知识产权评估',
            value:'1'
          },
          {
            name:'房地产评估',
            value:'2'
          },
          {
            name:'企业价值评估',
            value:'3'
          },
          {
            name:'上市评估',
            value:'4'
          },
          {
            name:'质押贷款评估',
            value:'5'
          },
        ],

        //地址: 省份
        address:[
          {
            name:'全部',
            value:'all'
          },
          {
            name:'北京',
            value:'1'
          },
          {
            name:'上海',
            value:'2'
          },
          {
            name:'广州',
            value:'3'
          },
          {
            name:'成都',
            value:'4'
          },
          {
            name:'昆明',
            value:'5'
          },
          {
            name:'贵阳',
            value:'6'
          },
          {
            name:'长沙',
            value:'7'
          },
          {
            name:'杭州',
            value:'8'
          }
        ]
      }
    },
    created(){

      //从路由, 获取初始化数据
      var type = this.$route.query.type;
      //console.log("create type = "+type)
      if(type != undefined){
        this.typevalue = type;
      }
      //这是服务内容
      var content = this.$route.query.content;
      if(content != undefined){
        this.contentvalue = content;
      }

      //从路由获取搜索数据
      var keyword = this.$route.query.keyword;
      //console.log("keyword = "+keyword)
      if(keyword != undefined){
        this.keyword = keyword;
      }


      //获取服务商分类+内容类型
      this.getServiceType();

      //获取省份数据
      this.getLocationList();

  
      //显示默认信息
      this.getList();

      var self = this;

      eventBus.$on("changeOrganizationSearchKeyword",function(keyword){
        //console.log("search keyword = "+keyword)

        self.typevalue = 'all',
        self.contentvalue = 'all',
        self.addressvalue = 'all',
        self.keyword = keyword

        self.getList();
        
      });

    },
    methods:{
        dealChangeSearchKeyword:function(keyword){
          
        },
        dealChangePage:function(total_page,total){
            //alert(total);
            this.page_total = total_page;
            this.total = total;
        },

        getList: function() {


          var self = this;

          //获取url
          //var url = path+"/index/company?page="+this.page+"&qualification_pid="+this.qualification_pid+"&qualification_id="+this.qualification_id+"&area_id="+this.area_id;


          var url = path+"/index/company"
          var dict = {
            page:this.page
          }
          if(this.typevalue != 'all'){
            dict['qualification_pid'] = this.typevalue
          }
          if(this.contentvalue != 'all'){
            dict['qualification_id'] = this.contentvalue
          }
          if(this.addressvalue != 'all'){
            dict['area_id'] = this.addressvalue
          }
          if(this.keyword != ''){
            dict['keywords'] = this.keyword
          }

          //下载数据
          this.$http.get(url,{params:dict}).then((response) => {
    

            var td = response.data;
            

            //让子组件 - 显示数据
            if(self.$refs.list.showList != undefined){
              self.$refs.list.showList(td.data);
              //console.log(JSON.stringify(td.data));
            }
            


            //下载完数据, 获取总数, 总页数
            self.total = td.total;
            self.page_num = td.last_page;

          }).catch(function(response) {
            console.log(response)
          })
        },

        dealClickPage:function(index){

          if(index  == 'prev'){
            this.page--;
            if(this.page < 1){
              this.page = 1;
            }
          }
          else if(index == 'next'){
            this.page++;
            if(this.page>this.page_num){
              this.page = this.page_num;
            }
          }
          else{
            this.page = index;
          }
          

          //OK
          //alert(this.page)


          this.getList();


        },
        getServiceType:function(){

          var url = path + '/index/company/company-type';
          this.$http.get(url).then(function(r){

            //寻找到需要的content值对应的数据
            var findIndex = -1;

            var list = r.data;
            for(var k in list){
              var item = list[k];
              item.value = item.id;

              if(item.id == this.typevalue){
                //console.log("findIndex = "+k)

                //此处的k一直是字符串, 导致+1之后变为01,而不是1
                findIndex = Number(k)+1;
              }
            }

            this.typeTree = list;
            //console.log("this.typeTree")
            //console.log(this.typeTree)


            this.type.length = 1;
            this.type = this.type.concat(list);

            this.content.length = 1;
            //console.log(JSON.stringify(this.type))

            if(this.type.length>1 && findIndex > 0){

              //console.log("findIndex = "+findIndex)
              //type he conent
              this.content = this.type[findIndex].child;

              for(var k in this.content){
                var item = this.content[k];
                item.value = item.id;
              }
            }
            
          })


        },

        //获取区域信息
        getLocationList:function(){
          var url = path + '/index/address/child-address?address_id=1';
          this.$http.get(url).then(function(r){

            var td = r.data;
            for(var k in td){
              var item = td[k];
              item.value = item.id;
            }
          
            //先只留下 全部, 然后再附加
            this.address.length = 1;
            this.address = this.address.concat(td);

          })
        },



        toggleTabs_type:function(value,index){
            this.typevalue=value;



            //初始化下面子选项
            this.contentvalue = "all";
            this.content.length = 1;
            var subIndex = 0;
            if(value=="all"){
              subIndex= 0;
            }else{
              subIndex= index-1;
            }
            var subList = this.typeTree[subIndex].child;

            for(var k in subList){
              var item = subList[k];
              item.value = item.id;
            }

            this.content = this.content.concat(subList);

            
            this.getList();


        },
        toggleTabs_content:function(value){
            this.contentvalue=value;

            this.getList();

        },
        toggleTabs_address:function(value){
            this.addressvalue=value;

            this.getList();
        },


    },
    watch:{
      typevalue:function(){
        //console.log(this.typevalue);
      }
    },
    components:{
      organizationList
    }
  }
</script>

<style media="screen">
</style>
