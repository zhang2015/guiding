<template>
  <div>
    <ul class="my_company_list">
      <li>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498370799390&di=813dd5f752726dfaf917a2f2ab1e6673&imgtype=0&src=http%3A%2F%2Fimgm.ph.126.net%2FgOGc6lK7LrDuZjSytmnylQ%3D%3D%2F1295347842840489363.png">
        <section>
          <h1>
            <a>
              南京小米科技有限公司
            </a>
            <span>
              <span class="auditing">认领审核中</span>
            </span>
          </h1>
          <p>
            <span class="icon-tel"></span>
            <span>电话:12312312312</span>
            <span class="icon-message"></span>
            <span>邮箱:asdasklcjak@qq.com</span>
            <span class="icon-globe"></span>
            <span>网址:<a>www.baidu.com</a></span>
          </p>
          <p>
            <span class="icon-compass"></span>
            <span>地址:北京市北京市北京市北京市北京市北京市北京市</span>
          </p>
        </section>
      </li>
      <li>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498370799390&di=813dd5f752726dfaf917a2f2ab1e6673&imgtype=0&src=http%3A%2F%2Fimgm.ph.126.net%2FgOGc6lK7LrDuZjSytmnylQ%3D%3D%2F1295347842840489363.png">
        <section>
          <h1>
            <a>
              南京小米科技有限公司
            </a>
            <span>
              <span class="audited">
                <router-link :to="{name:'myCompanyManage'}">管理</router-link>
                <span>取消管理</span>
              </span>
            </span>
          </h1>
          <p>
            <span class="icon-tel"></span>
            <span>电话:12312312312</span>
            <span class="icon-message"></span>
            <span>邮箱:asdasklcjak@qq.com</span>
            <span class="icon-globe"></span>
            <span>网址:<a>www.baidu.com</a></span>
          </p>
          <p>
            <span class="icon-compass"></span>
            <span>地址:北京市北京市北京市北京市北京市北京市北京市</span>
          </p>
        </section>
      </li>
      <li>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498370799390&di=813dd5f752726dfaf917a2f2ab1e6673&imgtype=0&src=http%3A%2F%2Fimgm.ph.126.net%2FgOGc6lK7LrDuZjSytmnylQ%3D%3D%2F1295347842840489363.png">
        <section>
          <h1>
            <a>
              南京小米科技有限公司
            </a>
            <span>
              <router-link :to="{name: 'myCompanyClaimApply'}" class="claim">认领</router-link>
            </span>
          </h1>
          <p>
            <span class="icon-tel"></span>
            <span>电话:12312312312</span>
            <span class="icon-message"></span>
            <span>邮箱:asdasklcjak@qq.com</span>
            <span class="icon-globe"></span>
            <span>网址:<a>www.baidu.com</a></span>
          </p>
          <p>
            <span class="icon-compass"></span>
            <span>地址:北京市北京市北京市北京市北京市北京市北京市</span>
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style media="screen">
  .my_company_list li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px; 
    border: 1px solid #e5e7ed;
    background: #f9fafc;
  }
  .my_company_list li img{
    width: 110px;
    height: 110px;
    border: 1px solid #e5e7ed;
    margin-right: 20px;
  }
  .my_company_list li section{
    flex-grow: 1;
  }
  .my_company_list li section h1{
    display: flex;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .my_company_list li section h1 a{
    font-size: 16px;
    color: #616161;
  }
  .my_company_list li section h1 span{
    font-size: 14px;
  }
  .my_company_list li section h1 span span.auditing{
    color: #ff8a6e;
  }
  .my_company_list li section h1 span span.audited a{
    color: #6398ed;
    font-size: 14px;
    padding-right: 10px;
  }
  .my_company_list li section h1 span span.audited span{
    color: #898989;
    font-size: 14px;
    cursor: pointer;
  }
  .my_company_list li section h1 span a.claim{
    padding: 5px 20px;
    color: #87ce76;
    font-size: 14px;
    border: 1px solid #87ce76;
    border-radius: 4px;
  }
  .my_company_list li section p{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    color: #b3b3b3;
  }
  .my_company_list li section p span:nth-child(2n){
    padding: 0 25px 0 10px;
  }
</style>
