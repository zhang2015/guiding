<template>
  <div class="firm_detail_content">
    <a class="firm_label">抵押贷款 {{mortgage.length}}</a>
    <a class="firm_label">商标信息 {{brandList.length}}</a>
    <a class="firm_label">专利信息 {{patent.length}}</a>
    <a class="firm_label">著作权 {{copyright.length}}</a>
    <a class="firm_label">软件著作权 {{software.length}}</a>
    
    <div class="table_head">
      <section>
        <span>质押贷款</span>
        <span>{{mortgage.length}}</span>
      </section>
      <section>
        <!-- <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select> -->
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="45">序号</th>
          <th width="200">质权人</th>
          <th width="125">出质人</th>
          <th  style="word-break:break-all;">质押标的</th>
          <th width="144">质押期限</th>
          <th width="144">质押结束</th>
          <!-- <th width="68">操作</th> -->
        </tr>
        <tr v-for="(item,index) in mortgage">
          <td>{{index+1}}</td>
          <td>{{item.zhiquanren}}</td>
          <td>{{item.chuzhiren}}</td>
          <td width="185" style="word-break:break-all; padding:10px">{{item.zhiyabiaodi}}</td>
          <td>{{item.evaluate_date}}</td>
          <td>{{item.end_time}}</td>
          <!-- <td>
            <a>详情</a>
          </td> -->
        </tr>
      </table>
    </div>


    <div class="table_head">
      <section>
        <span>商标列表</span>
        <span>{{brandList.length}}</span>
      </section>
      <section>
        <!-- <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select> -->
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="120">商标</th>
          <th width="140">商品名</th>
          <th width="150">类别</th>
          <th width="148">注册号</th>
          <th width="144">代理机构</th>
          <th width="143">法律状态</th>
          <th width="143">申请日期</th>
          <th width="68">操作</th>
        </tr>
        <tr v-for="(item,index) in brandList">
          <td>{{index+1}}</td>
          <td>
            <img :src="path+item.img">
          </td>
          <td>{{item.title}}</td>
          <td>{{item.trade_mark_type}}</td>
          <td>{{item.register_code}}</td>
          <td>{{item.agency}}</td>
          <td>{{item.law_type}}</td>
          <td>{{item.evaluate_end_time}}</td>
          <td>
            <a>详情</a>
          </td>
        </tr>
      </table>
    </div>
<!---->
    <div class="table_head">
      <section>
        <span>专利信息</span>
        <span>{{patent.length}}</span>
      </section>
      <section>
        <!-- <select>
          <option value="1">专利类型</option>
        </select>
        <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select> -->
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="100">专利类型</th>
          <th width="181">专利名称</th>
          <th width="125">申请号</th>
          <th width="105">代理机构</th>
          <th width="144">申请日期</th>
          <th width="68">操作</th>
        </tr>
        <tr v-for="(item,index) in patent">
          <td>{{index+1}}</td>
          <td>{{patent_type[item.patent_type]}}</td>
          <td>{{item.title}}</td>
          <td>{{item.apply_code}}</td>
          <td>{{item.agency}}</td>
          <td>{{item.evaluate_date}}</td>
          <td>
            <a>详情</a>
          </td>
        </tr>
      </table>
    </div>
<!---->
    <div class="table_head">
      <section>
        <span>著作权信息</span>
        <span>{{copyright.length}}</span>
      </section>
      <section>
        <!-- <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select> -->
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="284">著作权名称</th>
          <th width="125">登记类型</th>
          <th width="105">登记号</th>
          <th width="144">登记日期</th>
          <th width="68">操作</th>
        </tr>
        <tr v-for="(item,index) in copyright">
          <td>{{index+1}}</td>
          <td>{{item.title}}</td>
          <td>{{register_type[item.register_type]}}</td>
          <td>{{item.register_code}}</td>
          <td>{{item.end_date}}</td>
          <td>
            <a>详情</a>
          </td>
        </tr>
      </table>
    </div>

  <div class="table_head">
      <section>
        <span>软件著作权信息</span>
        <span>{{software.length}}</span>
      </section>
      <section>
        <!-- <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select> -->
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="284">著作权名称</th>
          <th width="125">版本号</th>
          <th width="105">分类号</th>
          <th width="144">登记日期</th>
          <th width="68">操作</th>
        </tr>
        <tr v-for="(item,index) in software">
          <td>{{index+1}}</td>
          <td>{{item.title}}</td>
          <td>{{item.version_code}}</td>
          <td>{{item.cate_code}}</td>
          <td>{{item.end_date}}</td>
          <td>
            <a>详情</a>
          </td>
        </tr>
      </table>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    created(){
        //获取到了上级组件了
        //console.log("equity="+JSON.stringify(this.$parent.$data));

        this.loadData();

        this.downloadTypeData();
    },
    methods:{
      dealTime(){

      },
      downloadTypeData:function(){

        var url = path+'/index/enterprise/enterprise-conf'
        this.$http.get(url).then(function(r){
            this.register_type = r.data.register_type
            this.evaluate_type = r.data.evaluate_type
            this.patent_type = r.data.patent_type
        })

      },
      loadData:function(){
        console.log("loadData")
        var info = this.$parent.$data.info;

        
        //商标
          this.brandList = info.trademark?info.trademark:[];

          //专利
          this.patent = info.patent?info.patent:[];

          //copyright
          this.copyright = info.copyright?info.copyright:[];

          //software
          this.software = info.software?info.software:[];

          //mortgage
          this.mortgage = info.mortgage?info.mortgage:[];
        


      }
    },

    data(){
      return{

        id:this.$route.params.id,
        path:path,

        register_type:{},
        evaluate_type:{},
        patent_type:{},

        //5个列表
        mortgage:[],
        patent:[],
        copyright:[],
        software:[],
        brandList:[

        /*
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          },
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          },
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          },
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          },
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          },
          {
            name:'F10',
            id:'1',
            icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640714467,2093403850&fm=11&gp=0.jpg',
            aim:'出资',
            cost:'￥20万',
            startime:'2017-02-12',
            stoptime:'2017-12-21'
          }*/
        ]
      }
    },
  }
</script>

<style media="screen">
  .firm_label{
    display: inline-block;
    width: 95px;
    height: 28px;
    border: 1px solid #e5e7ed;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    color: #b3b3b3;
    border-radius: 4px;
    margin-right: 10px;
  }
  .table_head{
    display: flex;
    height: 48px;
    padding-top: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
  }
  .table_head section span:nth-child(1){
    font-size: 14px;
    color: #616161;
    font-weight: 600;
  }
  .table_head section span:nth-child(2){
    display: inline-block;
    height: 14px;
    line-height: 14px;
    font-size: 10px;
    color: #fff;
    padding: 0px 4px;
    background: #9cb3c2;
    border-radius: 4px;
    margin-left: 12px;
  }
  .table_head section select{
    width: 75px;
    height: 23px;
    font-size: 12px;
    background: #f9fafc;
    color: #898989;
    border: 1px solid #e5e7ed;
    border-radius: 4px;
    margin-left: 10px;
  }
  .table_box table tr th,.table_box table tr td{
    color: #898989;
    border: 1px solid #e5e7ed;
    text-align: left;
    padding-left: 20px;
    vertical-align:middle;
  }
  .table_box table tr th{
    height: 38px;
    background: #f9fafc;
  }
  .table_box table tr td{
    height: 75px;
  }
  .table_box table tr td img{
    width: 56px;
    height: 34px;
  }
  .table_box table tr td a{
    color: #6398ed;
  }
</style>
