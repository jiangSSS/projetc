import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			redirect: "/home",
		},
		{
			path: '/home',
			name: 'home',
			component: () => import("@/views/home/index.vue"),
			meta: {
				title: "首页"
			}
		},
		{
			path: '/creditZM',
			name: 'creditZM',
			component: () => import("@/views/creditZM/creditZM.vue"),
			meta: {
				title: "信用证明"
			}
		},
		{
			path: '/creditTT',
			name: 'creditTT',
			component: () => import("@/views/creditTT/creditTT.vue"),
			meta: {
				title: "信用头条"
			}
		},
		{
			path: '/my',
			name: 'my',
			// redirect: "/login",
			component: () => import("@/views/my/index.vue"),
			meta: {
				title: "个人中心"
			},
		},
		{
			path: '/creditDetail',
			name: 'creditDetail',
			component: () => import("@/views/creditTT/creditDetail.vue"),
			meta: {
				title: "信用头条"
			}
		},
		{
			path: '/userInfo',
			name: 'userInfo',
			component: () => import("@/views/my/userInfo.vue"),
			meta: {
				title: "个人信息"
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import("@/views/login/login.vue"),
			meta: {
				title: "登录"
			}
		},
		{
			path: '/creditBank',
			name: 'creditBank',
			component: () => import("@/views/creditBank/creditBank.vue"),
			meta: {
				title: "人行征信查询"
			}
		},
		{
			path: '/identityStatus',
			name: 'identityStatus',
			component: () => import("@/views/my/myCredit/identityStatus.vue"),
			meta: {
				title: "身份认证"
			}
		},
		{
			path: '/userInfoStatus',
			name: 'userInfoStatus',
			component: () => import("@/views/my/userInfoStatus.vue"),
			meta: {
				title: "个人信息"
			}
		},
		{
			path: '/creditUnionPay',
			name: 'creditUnionPay',
			component: () => import("@/views/creditBank/creditUnionPay.vue"),
			meta: {
				title: "银行卡验证"
			}
		},
		{
			path: '/controlDetail',
			name: 'controlDetail',
			component: () => import("@/views/my/controlDetail.vue"),
			meta: {
				title: "预警信息"
			}
		},
		{
			path: '/creditVerify',
			name: 'creditVerify',
			component: () => import("@/views/creditBank/creditVerify.vue"),
			meta: {
				title: "获取身份验证码"
			}
		},
		{
			path: '/creditVerifyWait',
			name: 'creditVerifyWait',
			component: () => import("@/views/creditBank/creditVerifyWait.vue"),
			meta: {
				title: "等待身份验证码"
			}
		},
		{
			path: '/creditVerifyDetails',
			name: 'creditVerifyDetails',
			component: () => import("@/views/creditBank/creditVerifyDetails.vue"),
			meta: {
				title: "查看个人征信"
			}
		},
		{
			path: '/fastList',
			name: 'fastList',
			component: () => import("@/views/company/fastList.vue"),
			meta: {
				title: "信用查"
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: () => import("@/views/login/reg.vue"),
			meta: {
				title: "短信验证码登录"
			}
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: () => import("@/views/my/setting/feedback.vue"),
			meta: {
				title: "意见反馈"
			}
		},
		{
			path: '/password',
			name: 'password',
			component: () => import("@/views/login/password.vue"),
			meta: {
				title: "忘记密码"
			}
		},
		{
			path: '/editPwd',
			name: 'editPwd',
			component: () => import("@/views/my/password/editPwd.vue"),
			meta: {
				title: "密码设置"
			}
		},
		{
			path: '/findPwd',
			name: 'findPwd',
			component: () => import("@/views/my/password/findPwd.vue"),
			meta: {
				title: "密码设置"
			}
		},
		{
			path: '/searchList',
			name: 'searchList',
			component: () => import("@/views/search/searchList.vue"),
			meta: {
				title: "搜索"
			}
		},
		{
			path: '/publicUnit',
			name: 'publicUnit',
			component: () => import("@/views/pubilc/publicUnit.vue"),
			meta: {
				title: "公共单位查询"
			}
		},
		{
			path: '/publicList',
			name: 'publicList',
			component: () => import("@/views/pubilc/publicList.vue"),
			meta: {
				title: "公共单位查询"
			}
		},
		{
			path: '/five',
			name: 'five',
			component: () => import("@/views/five/five.vue"),
			meta: {
				title: "五险查询"
			}
		},
		{
			path: '/fiveQuery',
			name: 'fiveQuery',
			component: () => import("@/views/five/fiveQuery.vue"),
			meta: {
				title: "五险查询"
			}
		},
		{
			path: '/fiveHospital',
			name: 'fiveHospital',
			component: () => import("@/views/five/fiveHospital.vue"),
			meta: {
				title: "您的定点医院"
			}
		},
		{
			path: '/fivePay',
			name: 'fivePay',
			component: () => import("@/views/five/fivePay.vue"),
			meta: {
				title: "缴费信息"
			}
		},
		{
			path: '/fiveMedical',
			name: 'fiveMedical',
			component: () => import("@/views/five/fiveMedical.vue"),
			meta: {
				title: "医疗待遇"
			}
		},
		{
			path: '/publicDetail',
			name: 'publicDetail',
			component: () => import("@/views/pubilc/publicDetail.vue"),
			meta: {
				title: "详情"
			}
		},
		{
			path: '/search',
			name: 'search',
			component: () => import("@/views/search/search.vue"),
			meta: {
				title: "搜索列表"
			}
		},
		{
			path: '/creditPay',
			name: 'creditPay',
			component: () => import("@/views/creditZM/creditPay.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/creditReturn',
			name: 'creditReturn',
			component: () => import("@/views/creditZM/creditReturn.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/creditProve',
			name: 'creditProve',
			component: () => import("@/views/creditZM/creditProve.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/credit',
			name: 'credit',
			component: () => import("@/views/creditZM/credit.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/myFocus',
			name: 'myFocus',
			component: () => import("@/views/my/myFocus.vue"),
			meta: {
				title: "我的关注"
			}
		},
		{
			path: '/myControl',
			name: 'myControl',
			component: () => import("@/views/my/myControl.vue"),
			meta: {
				title: "我的监控"
			}
		},
		{
			path: '/companyControl',
			name: 'companyControl',
			component: () => import("@/views/my/companyControl.vue"),
			meta: {
				title: "监控企业"
			}
		},
		{
			path: '/certification',
			name: 'certification',
			component: () => import("@/views/my/certification/certification.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/toCertification',
			name: 'toCertification',
			component: () => import("@/views/my/certification/toCertification.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/myCredit',
			name: 'myCredit',
			component: () => import("@/views/my/myCredit/myCredit.vue"),
			meta: {
				title: "我的信用"
			}
		},
		{
			path: '/creditPDF',
			name: 'creditPDF',
			component: () => import("@/views/creditZM/creditPDF.vue"),
			meta: {
				title: "信用证明"
			}
		},
		{
			path: '/creditPDFs',
			name: 'creditPDFs',
			component: () => import("@/views/creditZM/creditPDFs.vue"),
			meta: {
				title: "信用证明"
			}
		},
		{
			path: '/creditReturns',
			name: 'creditReturns',
			component: () => import("@/views/creditZM/creditReturns.vue"),
			meta: {
				title: "信用报告"
			}
		},
		{
			path: '/education',
			name: 'education',
			component: () => import("@/views/my/myCredit/education.vue"),
			meta: {
				title: "教育背景"
			}
		},
		{
			path: '/work',
			name: 'work',
			component: () => import("@/views/my/myCredit/work.vue"),
			meta: {
				title: "工作经历"
			}
		},{
      path: '/project',
      name: 'project',
      component: () => import("@/views/my/myCredit/project.vue"),
      meta: {
        title: "项目经历"
      }
    },
    {
      path: '/train',
      name: 'train',
      component: () => import("@/views/my/myCredit/train.vue"),
      meta: {
        title: "培训经历"
      }
    },{
      path: '/skill',
      name: 'skill',
      component: () => import("@/views/my/myCredit/skill.vue"),
      meta: {
        title: "职业技能"
      }
    },


		{
			path: '/identity',
			name: 'identity',
			component: () => import("@/views/my/myCredit/identity.vue"),
			meta: {
				title: "身份认证"
			}
		},
		{
			path: '/myCreditAll',
			name: 'myCreditAll',
			component: () => import("@/views/my/myCredit/myCreditAll.vue"),
			meta: {
				title: "我的信用"
			}
		},
		{
			path: '/submitRepair',
			name: 'submitRepair',
			component: () => import("@/views/creditRepair/submitRepair.vue"),
			meta: {
				title: "提交修复材料"
			}
		},
		{
			path: '/repairStatus',
			name: 'repairStatus',
			component: () => import("@/views/creditRepair/repairStatus.vue"),
			meta: {
				title: "信用修复"
			}
		},
		{
			path: '/company',
			name: 'company',
			component: () => import("@/views/company/company.vue"),
			meta: {
				title: "企业"
			}
		},
		{
			path: '/companyDetail',
			name: 'companyDetail',
			component: () => import("@/views/company/companyDetail.vue"),
			meta: {
				title: "企业详情"
			}
		},
		{
			path: '/punishDetail',
			name: 'punishDetail',
			component: () => import("@/views/company/punishDetail.vue"),
			meta: {
				title: "行政处罚详情"
			}
		},
		{
			path: '/space',
			name: 'space',
			component: () => import("@/views/company/space.vue"),
			meta: {
				title: "空间"
			}
		},
		{
			path: '/disclaimer',
			name: 'disclaimer',
			component: () => import("@/views/company/disclaimer.vue"),
			meta: {
				title: "免责声明"
			}
		},
		{
			path: '/about',
			name: 'about',
			component: () => import("@/views/my/about.vue"),
			meta: {
				title: "关于信用查"
			}
		},
		{
			path: '/break',
			name: 'break',
			component: () => import("@/views/break/break.vue"),
			meta: {
				title: "失信名录"
			}
		},
		{
			path: '/breakList',
			name: 'breakList',
			component: () => import("@/views/break/breakList.vue"),
			meta: {
				title: "失信名录"
			}
		},
		{
			path: '/setting',
			name: 'setting',
			component: () => import("@/views/my/setting/setting.vue"),
			meta: {
				title: "系统设置"
			}
		},
		{
			path: '/creditRepair',
			name: 'creditRepair',
			component: () => import("@/views/creditRepair/creditRepair.vue"),
			meta: {
				title: "信用修复"
			}
		},
		{
			path: '/messageCenter',
			name: 'messageCenter',
			component: () => import("@/views/my/messageCenter.vue"),
			meta: {
				title: "消息中心"
			}
		},
		{
			path: '/attestation',
			name: 'attestation',
			component: () => import("@/views/my/attestation/attestation.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/attestationStatus',
			name: 'attestationStatus',
			component: () => import("@/views/my/attestation/attestationStatus.vue"),
			meta: {
				title: "认证管理"
			}
		},
		{
			path: '/attestationStatuss',
			name: 'attestationStatuss',
			component: () => import("@/views/my/attestation/attestationStatuss.vue"),
			meta: {
				title: "企业空间管理"
			}
		},
		{
			path: '/attestationList',
			name: 'attestationList',
			component: () => import("@/views/my/attestation/attestationList.vue"),
			meta: {
				title: "企业空间管理"
			}
		},
		{
			path: '/attestations',
			name: 'attestations',
			component: () => import("@/views/my/attestation/attestations.vue"),
			meta: {
				title: "企业空间管理"
			}
		},
		{
			path: '/company/claim',
			name: 'claim',
			component: () => import("@/views/company/claim.vue"),
			meta: {
				title: "认领企业"
			}
		},
		{
			path: '/edu',
			name: 'edu',
			component: () => import("@/views/my/myCredit/edu.vue"),
			meta: {
				title: "学历查询-我的学历"
			}
		},
		{
			path: '/eduAll',
			name: 'eduAll',
			component: () => import("@/views/my/myCredit/eduAll.vue"),
			meta: {
				title: "学历查询"
			}
		},
		{
			path: '/eduStatus',
			name: 'eduStatus',
			component: () => import("@/views/my/myCredit/eduStatus.vue"),
			meta: {
				title: "学历查询-我的学历"
			}
		},
		{
			path: '/eduPerson',
			name: 'eduPerson',
			component: () => import("@/views/my/myCredit/eduPerson.vue"),
			meta: {
				title: "学历查询-我的学历"
			}
		},
		{
			path: '/companyEdu',
			name: 'companyEdu',
			component: () => import("@/views/my/myCredit/companyEdu.vue"),
			meta: {
				title: "学历查询-企业学历"
			}
		},
		{
			path: '/eduResult',
			name: 'eduResult',
			component: () => import("@/views/my/myCredit/eduResult.vue"),
			meta: {
				title: "学历查询结果"
			}
		},
		{
			path: '/shop/shopInspectList',
			name: 'shopInspectList',
			component: () => import("@/views/shop/shopInspectList.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/shop/shopInspect',
			name: 'shopInspect',
			component: () => import("@/views/shop/shopInspect.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/shop/shopDetails',
			name: 'shopDetails',
			component: () => import("@/views/shop/shopDetails.vue"),
			meta: {
				title: "商品抽检"
			}
		},
		{
			path: '/food/food',
			name: 'food',
			component: () => import("@/views/food/food.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/food/foodList',
			name: 'foodList',
			component: () => import("@/views/food/foodList.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/food/foodDetails',
			name: 'foodDetails',
			component: () => import("@/views/food/foodDetails.vue"),
			meta: {
				title: "食品抽检"
			}
		},
		{
			path: '/drug/drug',
			name: 'drug',
			component: () => import("@/views/drug/drug.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/drug/drugList',
			name: 'drugList',
			component: () => import("@/views/drug/drugList.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/drug/drugDetails',
			name: 'drugDetails',
			component: () => import("@/views/drug/drugDetails.vue"),
			meta: {
				title: "药品查询"
			}
		},
		{
			path: '/echarts',
			name: 'echarts',
			component: () => import("@/views/echarts/echarts.vue"),
			meta: {
				title: "图谱"
			}
		},
    {
      path: '/chartJson',
      name: 'chartJson',
      component: () => import("@/views/echarts/chartJson.vue"),
      meta: {
        title: "图"
      }
    },
		{
		  path: '/Taxcredit',
		  name: 'Taxcredit',
		  component: () => import("@/views/company/Taxcredit.vue"),
		  meta: {
			title: "税务信用"
		  }
		},
		{
		  path: '/Job',
		  name: 'Job',
		  component: () => import("@/views/company/Job.vue"),
		  meta: {
			title: "招聘"
		  }
		},
		{
		  path: '/JobDetail',
		  name: 'JobDetail',
		  component: () => import("@/views/company/JobDetail.vue"),
		  meta: {
			title: "招聘详情页"
		  }
		},
		{
		  path: '/Patent',
		  name: 'Patent',
		  component: () => import("@/views/company/Patent.vue"),
		  meta: {
			title: "专利"
		  }
		},
		{
		  path: '/Website',
		  name: 'Website',
		  component: () => import("@/views/company/Website.vue"),
		  meta: {
			title: "网站"
		  }
		},
		{
		  path: '/Soft',
		  name: 'Soft',
		  component: () => import("@/views/company/Soft.vue"),
		  meta: {
			title: "软件著作权"
		  }
		},
		{
		  path: '/Works',
		  name: 'Works',
		  component: () => import("@/views/company/Works.vue"),
		  meta: {
			title: "软件著作权"
		  }
		},
    {
      path: '/noticeList',
      name: 'noticeList',
      component: () => import("@/views/company/warning/noticeList.vue"),
      meta: {
        title: "法院公告"
      }
		},
		{
      path: '/litigationList',
      name: 'litigationList',
      component: () => import("@/views/company/warning/litigationList.vue"),
      meta: {
        title: "法律诉讼"
      }
		},
		{
      path: '/brokenList',
      name: 'brokenList',
      component: () => import("@/views/company/warning/brokenList.vue"),
      meta: {
        title: "失信人"
      }
		},
		{
      path: '/openList',
      name: 'openList',
      component: () => import("@/views/company/warning/openList.vue"),
      meta: {
        title: "开庭传票"
      }
		},
		{
      path: '/auctionList',
      name: 'auctionList',
      component: () => import("@/views/company/warning/auctionList.vue"),
      meta: {
        title: "拍卖公告"
      }
		},
		{
      path: '/documentsList',
      name: 'documentsList',
      component: () => import("@/views/company/warning/documentsList.vue"),
      meta: {
        title: "裁判文书"
      }
    },
    {
      path: '/allList',
      name: 'allList',
      component: () => import("@/views/company/warning/allList.vue"),
      meta: {
        title: "公告列表"
      }
    },
    {
      path: '/noData',
      name: 'noData',
      component: () => import("@/views/company/noData.vue"),
      meta: {
        title: "暂无数据"
      }
    },
	],
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
export default router
