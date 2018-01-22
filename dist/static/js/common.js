//var path = 'http://localhost/public';
var path = 'http://api.chinashouzhi.com';

function loginStatus(that) {
    var _this = that
    if (localStorage.getItem('userId')) {
        _this.userId = localStorage.getItem('userId')
        _this.nick_name = localStorage.getItem('nick_name')
        _this.img = localStorage.getItem('img')
        _this.name = localStorage.getItem('name')

        _this.companyId = localStorage.getItem('companyId')

    } else if (sessionStorage.getItem('userId')) {
        _this.userId = sessionStorage.getItem('userId')
        _this.nick_name = sessionStorage.getItem('nick_name')
        _this.img = sessionStorage.getItem('img')
        _this.name = sessionStorage.getItem('name')

        _this.companyId = sessionStorage.getItem('companyId')
        
    } else {
        _this.userId = false
        _this.companyId = false
    }
}

//常量定义
//公司状态
var company_status = {
    '1' : '正常',
    '2' : '存续',
    '3' : '吊销',
    '4' : '注销',
    '0' : '待审',
    '-1': '审核不通过'
};

//公司类型
var company_type = {
    '1' : '评估公司',
    '2' : '会计事物所',
    '3' : '知识产权所',
    '4' : '律师所'
};

//订单状态
var order_status = {
    '-1' : '取消订单',
    '0' : '待付款',
    '1' : '生成订单',
    '2' : '签合同',
    '3' : '做报告',
    '4' : '收尾款',
    '5' : '邮寄报告',
    '6' : '待评价',
    '100' : '服务完成',
};

//发票状态  
var invoice_status = {
    '0' : '服务结束可开票',
    '1' : '可开票',
    '2' : '正在开票处理',
    '3' : '已邮寄',
};

//支付方式
var pay_type = {
    '1' : '支付宝',
    '2' : '微信',
    '3' : '财付通',
}

//发票类型  
var invoice_type = {
    '1' : '个人增值税普通发票',
    '2' : '企业增值税普通发票',
    '3' : '企业增值税专用发票',
};