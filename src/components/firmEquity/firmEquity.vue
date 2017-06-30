<template>
  <div class="firm_detail_content">
    <a class="firm_label">商标信息 20</a><a class="firm_label">专利信息 20</a><a class="firm_label">版权信息 20</a>
    <div class="table_head">
      <section>
        <span>商标列表</span>
        <span>31</span>
      </section>
      <section>
        <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select>
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="120">商标</th>
          <th width="140">商品名</th>
          <th width="150">评估目的</th>
          <th width="148">评估价值</th>
          <th width="144">评估日期</th>
          <th width="143">截止日期</th>
          <th width="68">操作</th>
        </tr>
        <tr v-for="item in brandList">
          <td>
            <img :src="item.icon">
          </td>
          <td>{{item.name}}</td>
          <td>{{item.aim}}</td>
          <td>{{item.cost}}</td>
          <td>{{item.startime}}</td>
          <td>{{item.stoptime}}</td>
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
        <span>31</span>
      </section>
      <section>
        <select>
          <option value="1">专利类型</option>
        </select>
        <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select>
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="100">专利类型</th>
          <th width="181">专利名称</th>
          <th width="125">评估目的</th>
          <th width="105">评估价值</th>
          <th width="144">评估日期</th>
          <th width="125">截止日期</th>
          <th width="68">操作</th>
        </tr>
        <tr>
          <td>1</td>
          <td>发明公布</td>
          <td>F10</td>
          <td>出资</td>
          <td>￥20万</td>
          <td>2017-02-10</td>
          <td>2017-02-10</td>
          <td>
            <a>详情</a>
          </td>
        </tr>
      </table>
    </div>
<!---->
    <div class="table_head">
      <section>
        <span>版权信息</span>
        <span>31</span>
      </section>
      <section>
        <select>
          <option value="1">评估目的</option>
        </select>
        <select>
          <option value="1">评估日期</option>
        </select>
      </section>
    </div>
    <div class="table_box">
      <table>
        <tr>
          <th width="65">序号</th>
          <th width="284">专利名称</th>
          <th width="125">评估目的</th>
          <th width="105">评估价值</th>
          <th width="144">评估日期</th>
          <th width="124">截止日期</th>
          <th width="68">操作</th>
        </tr>
        <tr>
          <td>1</td>
          <td>F10</td>
          <td>出资</td>
          <td>￥20万</td>
          <td>2017-02-10</td>
          <td>2017-02-10</td>
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
    data(){
      return{
        id:this.$route.params.id,
        brandList:[
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
          }
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
