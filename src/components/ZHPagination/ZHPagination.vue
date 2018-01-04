<template>
  <div class="list-pagination-wrap">
    <ul class="list-pagination">
      <li @click="dealClickPage('first')">首页</li>
      <li @click="dealClickPage('prev')">上一页</li>
      <li v-show="m_current>(around-1)">...</li>
      <!-- <li class="active">1</li>
      <li>2</li>
      <li>3</li> -->
      <li v-for="(item,index) in m_max" 
        @click="dealClickPage(item)" 
        v-bind:class="{active:item==m_current}"
        v-if="dealPageShow(index,m_current)"
        >{{item}}</li>
      <li  v-show="m_current<m_max-around">...</li>
      <li @click="dealClickPage('next')">下一页</li>
      <li @click="dealClickPage('last')">尾页</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['max','current'],
    data(){
      return{
        m_max:10,      //max=最大页
        m_current:1,     //m_current 当前页
        count:10,        //count 每页个数
        around:5   //around 周边显示
      }
    },
    created:function(){
      if(this.max != undefined && this.max>0){
        this.m_max = Number(this.max);
      }
    },
    watch:{
      'max':function(){
        if(this.max != undefined && this.max>0){
          this.m_max = Number(this.max);
        }
      }
    },
    methods:{
      //分页
      dealPageShow:function(page,index){
        return Math.abs(page-index)<this.around
      },
      dealClickPage:function(index){

        if(index == this.m_current){
          return;
        }

        var newPage = this.m_current;


        //如果是第1页
        if(index == "first"){
          newPage = 1;
        }
        //如果是最后一页
        else if(index == "last"){
          newPage = this.max;
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
          if(newPage>this.max){
            newPage = this.max;
          }
        }
        //如果点击了页面序号
        else{
          newPage = index;
        }

        this.m_current = newPage;
        
        this.$emit("change",this.m_current);
      }
    }
  }
</script>

<style media="screen">

</style>
