import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import index from '../components/index/index'
import about from '../components/about/about'
import help from '../components/help/help'
import manage from '../components/manage/manage'
import company from '../components/company/company'
import organization from '../components/organization/organization'


//帮助相关文件
import helpCentre from '../components/helpCentre/helpCentre'
import helpPay from '../components/helpPay/helpPay'
import helpCost from '../components/helpCost/helpCost'
import helpUser from '../components/helpUser/helpUser'
import helpSecrecy from '../components/helpSecrecy/helpSecrecy'
import helpAbout from '../components/helpAbout/helpAbout'
import helpCall from '../components/helpCall/helpCall'
import helpDetails from '../components/helpDetails/helpDetails'


//新闻相关
import news from '../components/news/news'
import newsDetails from '../components/newsDetails/newsDetails'



//企业相关
import firm from '../components/firm/firm'
import firmDetails from '../components/firmDetails/firmDetails'
import firmEquity from '../components/firmEquity/firmEquity'
import firmIntro from '../components/firmIntro/firmIntro'
import firmBusiness from '../components/firmBusiness/firmBusiness'

//服务机构相关
import organizationDetails from '../components/organizationDetails/organizationDetails'
import organizationEquity from '../components/organizationEquity/organizationEquity'
import organizationIntro from '../components/organizationIntro/organizationIntro'
import organizationBusiness from '../components/organizationBusiness/organizationBusiness'
import organizationTeam from '../components/organizationTeam/organizationTeam'

//个人相关
import personal from '../components/personal/personal'
import orderForm from '../components/orderForm/orderForm'
import orderFormAll from '../components/orderFormAll/orderFormAll'
import orderFormPay from '../components/orderFormPay/orderFormPay'
import orderFormFinish from '../components/orderFormFinish/orderFormFinish'
import orderPersonDetail from '../components/orderPersonDetail/orderPersonDetail'
import myCollect from '../components/myCollect/myCollect'
import myCompany from '../components/myCompany/myCompany'
import myMessage from '../components/myMessage/myMessage'
import invoiceManage from '../components/invoiceManage/invoiceManage'
import consigneeAddress from '../components/consigneeAddress/consigneeAddress'
import settings from '../components/settings/settings'
import logout from '../components/logout/logout'
import CollectOrganization from '../components/CollectOrganization/CollectOrganization'
import CollectFirm from '../components/CollectFirm/CollectFirm'
import myCompanyList from '../components/myCompanyList/myCompanyList'
import myCompanyManage from '../components/myCompanyManage/myCompanyManage'
import invoiceList from '../components/invoiceList/invoiceList'
import settingAccount from '../components/settingAccount/settingAccount'
import settingInfor from '../components/settingInfor/settingInfor'

//入驻
import applicationIn from '../components/applicationIn/applicationIn'
import applicationInCompany from '../components/applicationInCompany/applicationInCompany'
import applicationInCheck from '../components/applicationInCheck/applicationInCheck'

//机构管理
import companyManage from '../components/companyManage/companyManage'
import companyManageOrder from '../components/companyManageOrder/companyManageOrder'
import companyManageOrderDetail from '../components/companyManageOrderDetail/companyManageOrderDetail'
import companyManageOrderAll from '../components/companyManageOrderAll/companyManageOrderAll'
import companyManageOrderPact from '../components/companyManageOrderPact/companyManageOrderPact'
import companyManageOrderReport from '../components/companyManageOrderReport/companyManageOrderReport'
import companyManageOrderFinal from '../components/companyManageOrderFinal/companyManageOrderFinal'
import companyManageOrderMail from '../components/companyManageOrderMail/companyManageOrderMail'
import companyManageOrderComplete from '../components/companyManageOrderComplete/companyManageOrderComplete'
import companyManageOrderPayment from '../components/companyManageOrderPayment/companyManageOrderPayment'
import companyManageSetting from '../components/companyManageSetting/companyManageSetting'
import companyManageServiceEdit from '../components/companyManageSetting/companyManageServiceEdit'
import companyManageCompany from '../components/companyManageCompany/companyManageCompany'
import companyManageInvoice from '../components/companyManageInvoice/companyManageInvoice'
import companyManageInvoiceAll from '../components/companyManageInvoiceAll/companyManageInvoiceAll'
import companyManageInvoiceSend from '../components/companyManageInvoiceSend/companyManageInvoiceSend'
import companyManageApprove from '../components/companyManageApprove/companyManageApprove'
import companyManageApproveTable from '../components/companyManageApprove/companyManageApproveTable'
import companyManageApproveBrand from '../components/companyManageApprove/companyManageApproveBrand'
import companyManageApproveCompany from '../components/companyManageApprove/companyManageApproveCompany'
import companyManageApprovePatent from '../components/companyManageApprove/companyManageApprovePatent'
import companyManageWallet from '../components/companyManageWallet/companyManageWallet'
import companyManageLogout from '../components/companyManageLogout/companyManageLogout'
import wallet from '../components/wallet/wallet'
import withDraw from '../components/withDraw/withDraw'
import InvoiceDetails from '../components/InvoiceDetails/InvoiceDetails'
import InvoiceApply from '../components/InvoiceApply/InvoiceApply'
import companyManageInvoiceList from '../components/companyManageInvoiceList/companyManageInvoiceList'
import companyManageInvoiceDetails from '../components/companyManageInvoiceDetails/companyManageInvoiceDetails'
import companyManageInvoicePost from '../components/companyManageInvoicePost/companyManageInvoicePost'
import myCompanyClaim from '../components/myCompanyClaim/myCompanyClaim'
import myCompanyClaimApply from '../components/myCompanyClaimApply/myCompanyClaimApply'
import companyManageTeam from '../components/companyManageTeam/companyManageTeam'
import companyManageTeamEdit from '../components/companyManageTeam/companyManageTeamEdit'



//登录和注册-忘记密码
import login from '../components/login/login'
import log_in from '../components/login/log_in'
import register from '../components/login/register'
import forget from '../components/login/forget'

//购物车和支付
import cart from '../components/cart/cart'
import cartList from '../components/cart/cartList'
import cartDetail from '../components/cart/cartDetail'
import cartSuccess from '../components/cart/cartSuccess'
import orderResult from '../components/cart/orderResult'
import buyNowDetail from '../components/cart/buyNowDetail'

import apiTest from '../components/apiTest/apiTest'



Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            component: main,
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: main,
            redirect: '',
            children: [{
                    path: '',
                    name: 'index',
                    component: index
                },
                {
                    path: '/main/news',
                    name: 'news',
                    component: news
                },
                {
                    path: '/main/newsDetails/:id',
                    name: 'newsDetails',
                    component: newsDetails
                },
                {
                    path: '/main/about',
                    name: 'about',
                    component: about
                },
                {
                    path: '/main/company',
                    name: 'company',
                    component: company,
                    redirect: '/main/company/organization',
                    children: [{
                            path: '/main/company/organization',
                            name: 'organization',
                            component: organization
                        },
                        {
                            path: '/main/company/firm',
                            name: 'firm',
                            component: firm
                        }
                    ]
                },
                {
                    path: '/main/help',
                    name: 'help',
                    component: help,
                    redirect: '/main/help/helpCentre',
                    children: [{
                            path: '/main/help/helpCentre',
                            name: 'helpCentre',
                            component: helpCentre
                        },
                        {
                            path: '/main/help/helpPay',
                            name: 'helpPay',
                            component: helpPay
                        },
                        {
                            path: '/main/help/helpCost',
                            name: 'helpCost',
                            component: helpCost
                        },
                        {
                            path: '/main/help/helpUser',
                            name: 'helpUser',
                            component: helpUser
                        },
                        {
                            path: '/main/help/helpSecrecy',
                            name: 'helpSecrecy',
                            component: helpSecrecy
                        }, {
                            path: '/main/help/helpAbout',
                            name: 'helpAbout',
                            component: helpAbout
                        },
                        {
                            path: '/main/help/helpCall',
                            name: 'helpCall',
                            component: helpCall
                        },
                        {
                            path: '/main/help/helpDetails/:id',
                            name: 'helpDetails',
                            component: helpDetails
                        }
                    ]
                }
            ]
        },
        {
            path: '/firmDetails/:id',
            name: 'firmDetails',
            component: firmDetails,
            redirect: '/firmDetails/:id/firmEquity',
            children: [{
                    path: '/firmDetails/:id/firmEquity',
                    name: 'firmEquity',
                    component: firmEquity
                },
                {
                    path: '/firmDetails/:id/firmIntro',
                    name: 'firmIntro',
                    component: firmIntro
                },
                {
                    path: '/firmDetails/:id/firmBusiness',
                    name: 'firmBusiness',
                    component: firmBusiness
                }
            ]
        },
        {
            path: '/firmDetails/:id',
            name: 'firmDetails',
            component: firmDetails,
            redirect: '/firmDetails/:id/firmEquity',
            children: [{
                    path: '/firmDetails/:id/firmEquity',
                    name: 'firmEquity',
                    component: firmEquity
                },
                {
                    path: '/firmDetails/:id/firmIntro',
                    name: 'firmIntro',
                    component: firmIntro
                },
                {
                    path: '/firmDetails/:id/firmBusiness',
                    name: 'firmBusiness',
                    component: firmBusiness
                }
            ]
        },
        {
            path: '/organizationDetails/:id',
            name: 'organizationDetails',
            component: organizationDetails,
            redirect: '/organizationDetails/:id/organizationIntro',
            children: [{
                    path: '/organizationDetails/:id/organizationEquity',
                    name: 'organizationEquity',
                    component: organizationEquity
                },
                {
                    path: '/organizationDetails/:id/organizationIntro',
                    name: 'organizationIntro',
                    component: organizationIntro
                },
                {
                    path: '/organizationDetails/:id/organizationBusiness',
                    name: 'organizationBusiness',
                    component: organizationBusiness
                },
                {
                    path: '/organizationDetails/:id/organizationTeam',
                    name: 'organizationTeam',
                    component: organizationTeam
                }
            ]
        },
        {
            path: '/manage',
            name: 'manage',
            component: manage,
            redirect: '/manage/personal',
            children: [{
                    path: '/manage/personal',
                    name: 'personal',
                    component: personal,
                    redirect: '/manage/personal/orderForm',
                    children: [{
                            path: '/manage/personal/orderForm',
                            name: 'orderForm',
                            component: orderForm,
                            redirect: '/manage/personal/orderForm/orderFormAll',
                            children: [{
                                    path: '/manage/personal/orderForm/orderFormAll',
                                    name: 'orderFormAll',
                                    component: orderFormAll
                                },
                                {
                                    path: '/manage/personal/orderForm/orderFormPay',
                                    name: 'orderFormPay',
                                    component: orderFormPay
                                },
                                {
                                    path: '/manage/personal/orderForm/orderFormFinish',
                                    name: 'orderFormFinish',
                                    component: orderFormFinish
                                }

                            ]
                        },
                        {
                            path: '/manage/personal/orderPersonDetail/:orderId',
                            name: 'orderPersonDetail',
                            component: orderPersonDetail
                        },
                        {
                            path: '/manage/personal/myCollect',
                            name: 'myCollect',
                            component: myCollect,
                            redirect: '/manage/personal/myCollect/CollectOrganization',
                            children: [{
                                    path: '/manage/personal/myCollect/CollectOrganization',
                                    name: 'CollectOrganization',
                                    component: CollectOrganization
                                },
                                {
                                    path: '/manage/personal/myCollect/CollectFirm',
                                    name: 'CollectFirm',
                                    component: CollectFirm
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/myCompany',
                            name: 'myCompany',
                            component: myCompany,
                            redirect: '/manage/personal/myCompany/myCompanyList',
                            children: [{
                                    path: '/manage/personal/myCompany/myCompanyList',
                                    name: 'myCompanyList',
                                    component: myCompanyList
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyManage',
                                    name: 'myCompanyManage',
                                    component: myCompanyManage
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyClaim',
                                    name: 'myCompanyClaim',
                                    component: myCompanyClaim
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyClaimApply',
                                    name: 'myCompanyClaimApply',
                                    component: myCompanyClaimApply
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/invoiceManage',
                            name: 'invoiceManage',
                            component: invoiceManage,
                            redirect: '/manage/personal/invoiceManage/invoiceList',
                            children: [{
                                    path: '/manage/personal/invoiceManage/invoiceList',
                                    name: 'invoiceList',
                                    component: invoiceList
                                },
                                {
                                    path: '/manage/personal/invoiceManage/InvoiceDetails',
                                    name: 'InvoiceDetails',
                                    component: InvoiceDetails
                                },
                                {
                                    path: '/manage/personal/invoiceManage/InvoiceApply/:id',
                                    name: 'InvoiceApply',
                                    component: InvoiceApply
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/consigneeAddress',
                            name: 'consigneeAddress',
                            component: consigneeAddress
                        },
                        {
                            path: '/manage/personal/settings',
                            name: 'settings',
                            component: settings,
                            redirect: '/manage/personal/settings/settingAccount',
                            children: [{
                                    path: '/manage/personal/settings/settingAccount',
                                    name: 'settingAccount',
                                    component: settingAccount
                                },
                                {
                                    path: '/manage/personal/settings/settingInfor',
                                    name: 'settingInfor',
                                    component: settingInfor
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/logout',
                            name: 'logout',
                            component: logout
                        }
                    ]
                },
                {
                    path: '/manage/applicationIn',
                    name: 'applicationIn',
                    component: applicationIn
                }, {
                    path: '/manage/applicationInCompany',
                    name: 'applicationInCompany',
                    component: applicationInCompany
                }, {
                    path: '/manage/applicationInCheck',
                    name: 'applicationInCheck',
                    component: applicationInCheck
                },
                {
                    path: '/manage/companyManage',
                    name: 'companyManage',
                    component: companyManage,
                    redirect: '/manage/companyManage/companyManageOrder',
                    children: [{
                            path: '/manage/companyManage/companyManageOrder',
                            name: 'companyManageOrder',
                            component: companyManageOrder,
                            redirect: '/manage/companyManage/companyManageOrder/companyManageOrderAll',
                            children: [{
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderAll',
                                    name: 'companyManageOrderAll',
                                    component: companyManageOrderAll
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderPact',
                                    name: 'companyManageOrderPact',
                                    component: companyManageOrderPact
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderReport',
                                    name: 'companyManageOrderReport',
                                    component: companyManageOrderReport
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderFinal',
                                    name: 'companyManageOrderFinal',
                                    component: companyManageOrderFinal
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderMail',
                                    name: 'companyManageOrderMail',
                                    component: companyManageOrderMail
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderComplete',
                                    name: 'companyManageOrderComplete',
                                    component: companyManageOrderComplete
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderPayment',
                                    name: 'companyManageOrderPayment',
                                    component: companyManageOrderPayment
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageOrderDetail/:orderId',
                            name: 'companyManageOrderDetail',
                            component: companyManageOrderDetail
                        },
                        {
                            path: '/manage/companyManage/companyManageSetting',
                            name: 'companyManageSetting',
                            component: companyManageSetting
                        }, {
                            path: '/manage/companyManage/companyManageServiceEdit',
                            name: 'companyManageServiceEdit',
                            component: companyManageServiceEdit
                        },
                        {
                            path: '/manage/companyManage/companyManageTeam',
                            name: 'companyManageTeam',
                            component: companyManageTeam
                        }, {
                            path: '/manage/companyManage/companyManageTeamEdit',
                            name: 'companyManageTeamEdit',
                            component: companyManageTeamEdit
                        },
                        {
                            path: '/manage/companyManage/companyManageCompany',
                            name: 'companyManageCompany',
                            component: companyManageCompany
                        },
                        {
                            path: '/manage/companyManage/companyManageInvoice',
                            name: 'companyManageInvoice',
                            component: companyManageInvoice,
                            redirect: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList',
                            children: [{
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList',
                                    name: 'companyManageInvoiceList',
                                    component: companyManageInvoiceList,
                                    redirect: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceAll',
                                    children: [{
                                            path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceAll',
                                            name: 'companyManageInvoiceAll',
                                            component: companyManageInvoiceAll
                                        },
                                        {
                                            path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceSend',
                                            name: 'companyManageInvoiceSend',
                                            component: companyManageInvoiceSend
                                        }
                                    ]
                                },
                                {
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceDetails',
                                    name: 'companyManageInvoiceDetails',
                                    component: companyManageInvoiceDetails
                                },
                                {
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoicePost',
                                    name: 'companyManageInvoicePost',
                                    component: companyManageInvoicePost
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageApprove',
                            name: 'companyManageApprove',
                            component: companyManageApprove,
                            redirect: '/manage/companyManage/companyManageApprove/companyManageApproveTable',
                            children: [{
                                    path: '/manage/companyManage/companyManageApprove/companyManageApproveTable',
                                    name: 'companyManageApproveTable',
                                    component: companyManageApproveTable
                                },
                                {
                                    path: '/manage/companyManage/companyManageApprove/companyManageApproveBrand/:qualification_id',
                                    name: 'companyManageApproveBrand',
                                    component: companyManageApproveBrand
                                },
                                {
                                    path: '/manage/companyManage/companyManageApprove/companyManageApproveCompany/:qualification_id',
                                    name: 'companyManageApproveCompany',
                                    component: companyManageApproveCompany
                                },
                                {
                                    path: '/manage/companyManage/companyManageApprove/companyManageApprovePatent',
                                    name: 'companyManageApprovePatent',
                                    component: companyManageApprovePatent
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageWallet',
                            name: 'companyManageWallet',
                            component: companyManageWallet,
                            redirect: '/manage/companyManage/companyManageWallet/wallet',
                            children: [{
                                    path: '/manage/companyManage/companyManageWallet/wallet',
                                    name: 'wallet',
                                    component: wallet
                                },
                                {
                                    path: '/manage/companyManage/companyManageWallet/withDraw',
                                    name: 'withDraw',
                                    component: withDraw
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageLogout',
                            name: 'companyManageLogout',
                            component: companyManageLogout
                        }
                    ]
                },
                {
                    path: '/manage/cart',
                    name: 'cart',
                    component: cart,
                    redirect: '/manage/cart/cartList',
                    children: [{
                        path: '/manage/cart/cartList',
                        name: 'cartList',
                        component: cartList
                    }, {
                        path: '/manage/cart/cartDetail',
                        name: 'cartDetail',
                        component: cartDetail
                    }, {
                        path: '/manage/cart/cartSuccess',
                        name: 'cartSuccess',
                        component: cartSuccess
                    }, {
                        path: '/manage/cart/orderResult/',
                        name: 'orderResult',
                        component: orderResult
                    }, {
                        path: '/manage/cart/buyNowDetail/',
                        name: 'buyNowDetail',
                        component: buyNowDetail
                    }]
                }
            ]
        },
        {
            path: '/manage',
            name: 'manage',
            component: manage,
            redirect: '/manage/personal',
            children: [{
                    path: '/manage/personal',
                    name: 'personal',
                    component: personal,
                    redirect: '/manage/personal/orderForm',
                    children: [{
                            path: '/manage/personal/orderForm',
                            name: 'orderForm',
                            component: orderForm,
                            redirect: '/manage/personal/orderForm/orderFormAll',
                            children: [{
                                    path: '/manage/personal/orderForm/orderFormAll',
                                    name: 'orderFormAll',
                                    component: orderFormAll
                                },
                                {
                                    path: '/manage/personal/orderForm/orderFormPay',
                                    name: 'orderFormPay',
                                    component: orderFormPay
                                },
                                {
                                    path: '/manage/personal/orderForm/orderFormFinish',
                                    name: 'orderFormFinish',
                                    component: orderFormFinish
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/myMessage',
                            name: 'myMessage',
                            component: myMessage
                        },
                        {
                            path: '/manage/personal/myCollect',
                            name: 'myCollect',
                            component: myCollect,
                            redirect: '/manage/personal/myCollect/CollectOrganization',
                            children: [{
                                    path: '/manage/personal/myCollect/CollectOrganization',
                                    name: 'CollectOrganization',
                                    component: CollectOrganization
                                },
                                {
                                    path: '/manage/personal/myCollect/CollectFirm',
                                    name: 'CollectFirm',
                                    component: CollectFirm
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/myCompany',
                            name: 'myCompany',
                            component: myCompany,
                            redirect: '/manage/personal/myCompany/myCompanyList',
                            children: [{
                                    path: '/manage/personal/myCompany/myCompanyList',
                                    name: 'myCompanyList',
                                    component: myCompanyList
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyManage',
                                    name: 'myCompanyManage',
                                    component: myCompanyManage
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyClaim',
                                    name: 'myCompanyClaim',
                                    component: myCompanyClaim
                                },
                                {
                                    path: '/manage/personal/myCompany/myCompanyClaimApply',
                                    name: 'myCompanyClaimApply',
                                    component: myCompanyClaimApply
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/invoiceManage',
                            name: 'invoiceManage',
                            component: invoiceManage,
                            redirect: '/manage/personal/invoiceManage/invoiceList',
                            children: [{
                                    path: '/manage/personal/invoiceManage/invoiceList',
                                    name: 'invoiceList',
                                    component: invoiceList
                                },
                                {
                                    path: '/manage/personal/invoiceManage/InvoiceDetails',
                                    name: 'InvoiceDetails',
                                    component: InvoiceDetails
                                },
                                {
                                    path: '/manage/personal/invoiceManage/InvoiceApply',
                                    name: 'InvoiceApply',
                                    component: InvoiceApply
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/consigneeAddress',
                            name: 'consigneeAddress',
                            component: consigneeAddress
                        },
                        {
                            path: '/manage/personal/settings',
                            name: 'settings',
                            component: settings,
                            redirect: '/manage/personal/settings/settingAccount',
                            children: [{
                                    path: '/manage/personal/settings/settingAccount',
                                    name: 'settingAccount',
                                    component: settingAccount
                                },
                                {
                                    path: '/manage/personal/settings/settingInfor',
                                    name: 'settingInfor',
                                    component: settingInfor
                                }
                            ]
                        },
                        {
                            path: '/manage/personal/logout',
                            name: 'logout',
                            component: logout
                        }
                    ]
                },
                {
                    path: '/manage/applicationIn',
                    name: 'applicationIn',
                    component: applicationIn
                },
                {
                    path: '/manage/companyManage',
                    name: 'companyManage',
                    component: companyManage,
                    redirect: '/manage/companyManage/companyManageOrder',
                    children: [{
                            path: '/manage/companyManage/companyManageOrder',
                            name: 'companyManageOrder',
                            component: companyManageOrder,
                            redirect: '/manage/companyManage/companyManageOrder/companyManageOrderAll',
                            children: [{
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderAll',
                                    name: 'companyManageOrderAll',
                                    component: companyManageOrderAll
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderPact',
                                    name: 'companyManageOrderPact',
                                    component: companyManageOrderPact
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderReport',
                                    name: 'companyManageOrderReport',
                                    component: companyManageOrderReport
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderFinal',
                                    name: 'companyManageOrderFinal',
                                    component: companyManageOrderFinal
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderMail',
                                    name: 'companyManageOrderMail',
                                    component: companyManageOrderMail
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderComplete',
                                    name: 'companyManageOrderComplete',
                                    component: companyManageOrderComplete
                                },
                                {
                                    path: '/manage/companyManage/companyManageOrder/companyManageOrderPayment',
                                    name: 'companyManageOrderPayment',
                                    component: companyManageOrderPayment
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageOrderDetail/:orderId',
                            name: 'companyManageOrderDetail',
                            component: companyManageOrderDetail
                        },
                        {
                            path: '/manage/companyManage/companyManageSetting',
                            name: 'companyManageSetting',
                            component: companyManageSetting
                        },
                        {
                            path: '/manage/companyManage/companyManageCompany',
                            name: 'companyManageCompany',
                            component: companyManageCompany
                        },
                        {
                            path: '/manage/companyManage/companyManageInvoice',
                            name: 'companyManageInvoice',
                            component: companyManageInvoice,
                            redirect: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList',
                            children: [{
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList',
                                    name: 'companyManageInvoiceList',
                                    component: companyManageInvoiceList,
                                    redirect: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceAll',
                                    children: [{
                                            path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceAll',
                                            name: 'companyManageInvoiceAll',
                                            component: companyManageInvoiceAll
                                        },
                                        {
                                            path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceList/companyManageInvoiceSend',
                                            name: 'companyManageInvoiceSend',
                                            component: companyManageInvoiceSend
                                        }
                                    ]
                                },
                                {
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoiceDetails/:id',
                                    name: 'companyManageInvoiceDetails',
                                    component: companyManageInvoiceDetails
                                },
                                {
                                    path: '/manage/companyManage/companyManageInvoice/companyManageInvoicePost',
                                    name: 'companyManageInvoicePost',
                                    component: companyManageInvoicePost
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageApprove',
                            name: 'companyManageApprove',
                            component: companyManageApprove,
                            redirect: '/manage/companyManage/companyManageApprove/companyManageApproveTable',
                            children: [{
                                path: '/manage/companyManage/companyManageApprove/companyManageApproveTable',
                                name: 'companyManageApproveTable',
                                component: companyManageApproveTable
                            }, {
                                path: '/manage/companyManage/companyManageApprove/companyManageApproveBrand/:qualification_id',
                                name: 'companyManageApproveBrand',
                                component: companyManageApproveBrand
                            }, {
                                path: '/manage/companyManage/companyManageApprove/companyManageApproveCompany/:qualification_id',
                                name: 'companyManageApproveCompany',
                                component: companyManageApproveCompany
                            }, {
                                path: '/manage/companyManage/companyManageApprove/companyManageApprovePatent',
                                name: 'companyManageApprovePatent',
                                component: companyManageApprovePatent
                            }]
                        },
                        {
                            path: '/manage/companyManage/companyManageWallet',
                            name: 'companyManageWallet',
                            component: companyManageWallet,
                            redirect: '/manage/companyManage/companyManageWallet/wallet',
                            children: [{
                                    path: '/manage/companyManage/companyManageWallet/wallet',
                                    name: 'wallet',
                                    component: wallet
                                },
                                {
                                    path: '/manage/companyManage/companyManageWallet/withDraw',
                                    name: 'withDraw',
                                    component: withDraw
                                }
                            ]
                        },
                        {
                            path: '/manage/companyManage/companyManageLogout',
                            name: 'companyManageLogout',
                            component: companyManageLogout
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            redirect: '',
            children: [{
                    path: '',
                    name: 'log_in',
                    component: log_in
                },
                {
                    path: '/login/register',
                    name: 'register',
                    component: register
                },
                {
                    path: '/login/forget',
                    name: 'forget',
                    component: forget
                }
            ]
        }, {
            path: '/apiTest',
            name: 'apiTest',
            component: apiTest
        }
    ]
})