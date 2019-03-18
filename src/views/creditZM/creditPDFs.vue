<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="marginTop PDFBox">
			<div class="companyBox">
				<div class="companyP">{{allData.ENTNAME}}</div>
				<ul>
					<li class="infoItem"><span>法定代表人：</span>{{$store.state.baseInfo.NAME}}</li>
					<li class="infoItem"><span>注册资本(万元)：</span>{{$accounting.formatMoney(allData.REGCAP, '')}}</li>
					<li class="infoItem"><span>成立日期：</span>{{allData.ESDATE}}</li>
					<li class="infoItem"><span>社会统一信用代码：</span>{{$store.state.ENTCODES.credcode}}</li>
					<!--<li class="infoItem"><span>组织机构代码：</span>{{}}</li>-->
					<li class="infoItem"><span>注册号：</span>{{allData.REGNO}}</li>
					<li class="infoItem"><span>注册地址：</span>{{allData.DOM}}</li>
				</ul>
				<!--<div class="downTime tr">下载报告时间：{{$moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')}}</div>-->
			</div>
			<div style=" border-left: 1px solid rgb(255, 192, 203);padding: .5rem 0">
				<div class="detailBox">
					<div class="detailTitle">
						<span class="detailDesc">行政许可</span> </div>
					<ul v-for="item in XZXK">
						<li><span>行政许可决定书文号：</span><span>{{item.XK_WSH}}</span></li>
						<li><span>审核类别：</span><span>{{item.XK_SPLB}}</span></li>
						<!--<li><span>法人代表人姓名：</span><span>——</span></li>-->
						<li><span class="moreDetail">内容许可：</span><span class="nextSpan">{{item.XK_NR}}</span>
							<!--<span class="nextSpan">设备种类：电梯</span><span class="nextSpan">运行状态：在用</span>-->
						</li>
						<li><span>许可有效期：</span><span>{{item.XK_YXQ}}</span></li>
						<li><span>许可决定日期：</span><span>{{item.XK_JDRQ}}</span></li>
						<li><span>许可截止日期：</span><span>{{item.XK_JZQ}}</span></li>
						<li><span>地方编码：</span><span>{{item.DFBM}}</span></li>
						<li><span>许可机关：</span><span>{{item.XK_XZJG}}</span></li>
						<li><span>数据更新时间：</span><span>{{item.SJC}}</span></li>
					</ul>
				</div>
				<div class="detailBox1">
					<div class="detailTitle">
						<span class="detailDesc">行政处罚</span> </div>
					<ul v-for="item in XZCF">
						<li class=""><span>决定书文号：</span><span>{{item.CF_WSH}}</span></li>
						<li class=""><span>处罚名称：</span><span>{{item.CF_CFMC}}</span></li>
						<li><span>法人代表人姓名：</span><span>{{item.CF_FR}}</span></li>
						<li><span>处罚类别：</span><span>{{item.CF_CFLB1}};{{item.CF_CFLB2}}</span></li>
						<li><span>处罚结果：</span><span>{{item.CF_JG}}</span></li>
						<li><span>处罚事由：</span><span>{{item.CF_SY}}</span></li>
						<li><span>处罚依据：</span><span>{{item.CF_YJ}}</span></li>
						<li><span>处罚机关：</span><span>{{item.CF_XZJG}}</span></li>
						<li><span>处罚决定日期：</span><span>{{item.CF_JDRQ}}</span></li>
						<li><span>处罚期限：</span><span>{{item.CF_QX}}</span></li>
						<!--<li><span>数据更新时间：</span><span>{{item.SJC}}</span></li>-->
					</ul>
				</div>

				<div class="detailBox2">
					<div class="detailTitle">
						<span class="detailDesc">守信红名单</span> </div>
					<ul v-for="item in HongMD">
            <!--<li><span>数据来源：</span><span>税务局</span></li>-->
            <li><span>序号：</span><span>{{item.TAXCODE}}</span></li>
            <li><span>纳税人名称：</span><span>{{item.TAXENTNAME}}</span></li>
            <li><span>评价年度：</span><span>{{item.ANNUALEVALUATION}}</span></li>
            <li><span>级别：</span><span>{{item.TAXGRADE}}</span></li>
            <!--<li><span>文件名：</span><span>深圳市</span></li>-->
					</ul>
				</div>
				<div class="detailBox3">
					<div class="detailTitle">
						<span class="detailDesc">重点关注名单</span> </div>
					<!--<ul>-->
					<!--<li><span>数据来源：</span><span>工商总局</span></li>-->
					<!--<li><span>企业名称：</span><span>瑞安市数宝网络借贷信息中介服务有限公司</span></li>-->
					<!--<li><span>注册号：</span><span>330381000410550</span></li>-->
					<!--<li><span>法定代表人：</span><span>袁绍通</span></li>-->
					<!--<li><span>异常类型名称：</span><span>通过登记的住所或者经营场所无法联系的</span></li>-->
					<!--<li><span>设立日期：</span><span>2018/10/26</span></li>-->
					<!--<li><span>列入决定机关名称：</span><span>瑞安市工商行政管理局</span></li>-->
					<!--<li><span>最新更新日期：</span><span>2019/03/04</span></li>-->
					<!--</ul>-->
          <ul v-for="item in JYYC">
            <li><span>企业名称：</span><span>{{item.ENTNAME}}</span></li>
            <li><span>统一社会信用代码：</span><span>{{item.UNISCID}}</span></li>
            <li><span>注册号：</span><span>{{item.REGNO}}</span></li>
            <li><span>法定代表人：</span><span>{{item.LEREP}}</span></li>
            <li><span>证件类型：</span><span>{{item.CERTYPE}}</span></li>
            <li><span>证件号码：</span><span>{{item.CERNO}}</span></li>
            <!--<li><span>列入经营异常名录原因类型：</span><span>{{item.SPECAUSE}}</span></li>-->
            <li><span style="width: 100%;">列入经营异常名录原因类型名称：</span><span style="width: 100%;">{{item.SPECAUSENAME}}</span></li>
            <li><span>设立日期：</span><span>{{item.ABNTIME}}</span></li>
            <!--<li><span>列入决定机关：</span><span>{{item.DECORG}}</span></li>-->
            <li><span>列入决定机关名称：</span><span>{{item.DECORGNAME}}</span></li>
          </ul>
				</div>
				<!--<div class="detailBox4">-->
				<!--<div class="detailTitle"><img src="/static/images/pdfa.png" class="pdfa"/>-->
				<!--<span class="detailDesc">黑名单</span> </div>-->
				<!--<ul>-->
				<!--<li><span>数据来源：</span><span>最高法</span></li>-->
				<!--<li><span>案号：</span><span></span></li>-->
				<!--<li><span>失信被执行人名称：</span><span>乐视网信息技术(北京)股份有限公司</span></li>-->
				<!--<li><span>企业法人姓名：</span><span>刘淑青</span></li>-->
				<!--<li><span>执行法院：</span><span>北京市海淀区人民法院</span></li>-->
				<!--<li><span>地域名称：</span><span>北京</span></li>-->
				<!--<li><span>执行依据文号：</span><span>(2018)京0108民初21601号</span></li>-->
				<!--<li><span>作出执行依据单位：</span><span>北京市海淀区人民法院</span></li>-->
				<!--<li><span>法律生效文书确定的义务：</span><span>乐视网信息技术(北京)股份有限公司于本判决生效后七日内支付蒋晓晶解除劳动关系经济补偿金34677元。</span></li>-->
				<!--<li><span>被执行人的履行情况：</span><span>全部未履行</span></li>-->
				<!--<li><span>失信被执行人具体情形：</span><span>有履行能力而拒不履行生效法律文书确定义务</span></li>-->
				<!--<li><span>发布时间：</span><span>2018/11/12</span></li>-->
				<!--<li><span>立案时间：</span><span>2018/10/12</span></li>-->
				<!--<li><span>已履行部分：</span><span>暂无</span></li>-->
				<!--<li><span>未履行部分：</span><span>暂无</span></li>-->
				<!--<li><span>最新更新日期：</span><span>2018/11/12</span></li>-->
				<!--</ul>-->
				<!--</div>-->
				<!--</div>-->
				<div class="detailBox4">
					<div class="detailTitle">
						<span class="detailDesc">黑名单</span> </div>
					<ul v-for="item in HMD">
						<!--<li><span>数据来源：</span><span>最高法</span></li>-->
						<li><span>被执行人姓名/名称：</span><span>{{item.iname}}</span></li>
						<li><span>案号：</span><span>{{item.caseCode}}</span></li>
						<li><span>做出执行依据单位：</span><span>{{item.courtName}}</span></li>
						<li><span>省份：</span><span>{{item.areaName}}</span></li>
						<li><span>执行依据文号：</span><span>{{item.gistId}}</span></li>
						<li><span>执行法院：</span><span>{{item.gistUnit}}</span></li>
						<!--<li><span>列入经营异常名录原因类型：</span><span>{{item.SPECAUSE}}</span></li>-->
						<li><span>立案时间：</span><span>{{item.regDate}}</span></li>
						<!--<li><span>设立日期：</span><span>{{item.ABNTIME}}</span></li>-->
						<!--<li><span>列入决定机关：</span><span>{{item.DECORG}}</span></li>-->
						<!--<li><span>列入决定机关名称：</span><span>{{item.DECORGNAME}}</span></li>-->
					</ul>
				</div>
        <div class="detailBox4"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import html2canvas from 'html2canvas'
	export default {
		components: {
			Header
		},
		data() {
			return {
				ENTNAME: this.$store.state.baseInfo.ENTNAME,
				PRIPID: this.$store.state.baseInfo.PRIPID,
				NAME: this.$store.state.baseInfo.NAME,
				allData: {},
				XZCF: [],
				XZXK: [],
				HMD: [],
				JYYC: [],
        HongMD: [],
			}
		},
		computed: {
			// allData() {
			//   return this.$route.params;
			// }
			// getHeiMingDan() {
			//   return [...this.HMD, ...this.JYYC];
			// }
		},
		methods: {
			getBaseData() {
				this.$axios.post(
					`qst_entinfobypripid/select`, {
						params: {
							'q': `ENTNAME: ${this.ENTNAME}`,
							'indent': 'true',
							'wt': 'json'
						}
					}).then(res => {
					this.allData = Object.assign({}, this.allData, res.response.docs[0])
				})
			},
			//行政许可pub_permsion
			getXZXK() {
        // let query = '';
        // if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        // } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        // } else {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`;
        // }
				this.$axios.post(
					`pub_permsion/select`, {
						params: {
							'q': `XK_FR:${this.$store.state.baseInfo.NAME} AND XK_XDR:${this.ENTNAME}`,
							'indent': 'true',
              'rows': 99,
							'wt': 'json'
						}
					}).then(res => {
					this.XZXK = res.response.docs.length ? res.response.docs : [];
				})
			},
			//行政处罚qst_xzcfhistorybyid
			getXZCF() {
        // let query = '';
        // if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        // } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        // } else {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`;
        // }
				this.$axios.post(
					`pub_penalty/select`, {
						params: {
							'q': `CF_XDR_MC:${this.$store.state.baseInfo.NAME} AND CF_XDR_SHXYM: ${this.$store.state.ENTCODES.credcode}`,
							'indent': 'true',
							'wt': 'json'
						}
					}).then(res => {
          this.XZCF = res.response.docs.length ? res.response.docs : [];

          // html2canvas(document.querySelector(".PDFBox"), { width: document.querySelector('.detailBox').clientWidth,}).then(canvas => {
					//   // canvas = canvas.toDataURL();
					//   document.querySelector(".PDFBox").innerHTML = '';
					//   document.querySelector(".PDFBox").append(canvas);
					// document.querySelector("#app").style.display = 'none';
					// console.log(canvas);
					// });
				})
			},
			//黑名单
			getHMD() {
        // let query = '';
        // if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        // } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        // } else {
        //   query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`;
        // }
			  this.$axios.post(
			    `shixin_info/select`,
			    {params:
			        {'q': `iname: ${this.ENTNAME}`,
			          'indent':'true',
			          'wt':'json'
			        }
			    }).then(res=>{
			    this.HMD = res.response.docs;
			  })
			},
			//重点关注名单 == 经营异常
			getJYYC() {
        let query = '';
        if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
          query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
          query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR ENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        } else {
          query = `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`;
        }
				this.$axios.post(
					`PAC_BLACKLIST/select`, {
						params: {
							'q': query,
							'indent': 'true',
							'wt': 'json'
						}
					}).then(res => {
					this.JYYC = res.response.docs;
				})
			},
      //红名单
      getHongMD() {
        let query = '';
        if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
          query = `TAXENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR TAXENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
          query = `TAXENTNAME: ${this.$store.state.baseInfo.ENTNAME} OR TAXENTNAME: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        } else {
          query = `TAXENTNAME: ${this.$store.state.baseInfo.ENTNAME}`;
        }
        this.$axios.post(
          `PAC_TAXBRACKETS/select`, {
            params: {
              'q': query,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          this.HongMD = res.response.docs;
        })
      },
		},
		created() {
			// this.allData = this.$route.params;
			this.getBaseData();
			this.getXZCF();
			this.getXZXK();
			this.getHMD();
			this.getJYYC();
			this.getHongMD();
		}
	}
</script>

<style scoped>
	.PDFBox {
		padding: 0 .4rem 0 .4rem;
		margin-top: 2rem;
    background: url(/static/images/CreditChina.png); background-size: 35%;
	}

	.companyP {
		font-weight: 300;
		font-size: .5rem;
		padding: .2rem 0;
	}

	.companyBox {
		margin-top: .5rem;
		border: 1px solid pink;
		padding: .3rem;
		box-shadow: .1rem .1rem 0rem pink;
	}

	.companyBox .infoItem {
		line-height: 1rem;
	}

	.companyBox .infoItem span {
		font-weight: 600;
	}

	.downTime {
		padding: .2rem 0;
	}

	.pdfa {
		width: 4rem;
		height: 1rem;
	}

	.pdfa2 {
		width: 5rem;
		height: 1rem;
	}
  .detailTitle { margin: .4rem 0 .3rem; display: inline-block;width: 100%; }
  .detailDesc {
    color: #fff;
    font-size: .45rem;
    padding: .15rem .8rem .15rem .3rem;
    background: url("/static/images/pdfb.png") no-repeat right;
    display: inline-block;
  }

	.moreDetail {
		display: block !important;
		float: none !important;
	}

	.nextSpan {
		display: block !important;
		float: none !important;
		width: 100% !important;
		padding: .07rem;
	}

	.detailBox li span:first-child {
		font-weight: 700;
		width: 4.2rem;
		float: left;
	}

	.detailBox li span:nth-child(2) {
		float: left;
		width: 5.5rem;
	}

	.detailBox li {
		clear: both;
		content: "";
		padding: .2rem;
	}
  .detailBox ul,.detailBox1 ul,.detailBox2 ul,.detailBox3 ul,.detailBox4 ul {
    border-bottom: 1px solid pink;
    margin-bottom: .1rem;
    overflow: hidden;
    padding-bottom: .1rem;
  }

	.detailBox li span {
		line-height: .6rem;
		display: inline-block;
	}

	.detailBox1 li span:first-child {
		font-weight: 700;
		width: 3.2rem;
		float: left;
	}

	.detailBox1 li span:nth-child(2) {
		float: left;
		width: 6.5rem;
	}

	.detailBox1 li {
		clear: both;
		content: "";
		padding: .2rem 0;
	}

	.detailBox1 li span {
		line-height: .6rem;
		display: inline-block;
	}

	.detailBox2 li span:first-child {
		font-weight: 700;
		width: 3.2rem;
		float: left;
	}

	.detailBox2 li span:nth-child(2) {
		float: left;
		width: 6.3rem;
	}

	.detailBox2 li {
		clear: both;
		content: "";
		padding: .2rem;
	}

	.detailBox2 li span {
		line-height: .6rem;
		display: inline-block;
	}

	.detailBox3 li span:first-child {
		font-weight: 700;
		width: 3.8rem;
		float: left;
	}

	.detailBox3 li span:nth-child(2) {
		float: left;
		width: 5.7rem;
	}

	.detailBox3 li {
		clear: both;
		content: "";
		padding: .2rem;
	}

	.detailBox3 li span {
		line-height: .6rem;
		display: inline-block;
	}

	.detailBox4 li span:first-child {
		font-weight: 700;
	}

	.detailBox4 li span:nth-child(2) {
		line-height: .65rem;
	}

	.detailBox4 li {
		clear: both;
		content: "";
		padding: .2rem;
	}

	.detailBox4 li span {
		line-height: .6rem;
		display: inline-block;
	}
</style>
