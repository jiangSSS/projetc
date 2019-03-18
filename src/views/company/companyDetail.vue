<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 conTop">
				<div class="detailsTop">
					<!-- <span class="logo"><img src="/static/images/logo/logo-1.png"></span> -->
					<em class="name">{{ENTNAME}}</em>
				</div>
				<ul class="detailsList">
					<li class="detailsListItem">
						<h5 class="detailsInfoTitle" @click="isShow1 = !isShow1">企业基本信息</h5>
						<div class="detailsInfo" v-show="isShow1">
							<ul class="detailsInfoList">
								<li>
									<span class="widthTwo">法定代表人</span>
									<em class="c-0086ff">{{NAME}}</em>
								</li>
								<li class="widthTwo">
									<span>成立日期</span>
									<em>{{allData.ESDATE || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>注册号</span>
									<em>{{allData.REGNO || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>原注册号</span>
									<em>{{allData.ORIREGNO || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>注册资本(万)</span>
									<em>{{$accounting.formatMoney(allData.REGCAP, '') || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>币种</span>
									<em>{{$config.getDicName('PEGCAPCUR', allData.REGCAPCUR) || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>实缴资本(万)</span>
									<em>{{$accounting.formatMoney(allData.RECCAP, '') || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>经营状态</span>
									<em>{{$config.getDicName('ENTSTATUS', allData.ENTSTATUS) || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>企业机构类型</span>
									<em>{{$config.getDicName('ENTTYPE', allData.ENTTYPE) || '—'}}</em>
								</li>

								<li class="widthTwo">
									<span>开业日期</span>
									<em>{{allData.ESDATE || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>经营期限</span>
									<em>{{allData.OPFROM || '—'}}-{{allData.OPTO || '—'}}</em>
								</li>
								<li>
									<span>地址</span>
									<em>{{allData.DOM || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>登记机关</span>
									<em>{{$config.getDicName('REGORG', allData.REGORG) || '—'}}</em>
								</li>
								<li>
									<span>经营（业务）范围</span>
									<em>{{allData.OPSCOPE || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>一般经营项目</span>
									<em>{{allData.CBUITEM || '—'}}</em>
								</li>
								<li class="widthTwo">
									<span>许可经营项目</span>
									<em>{{allData.ABUITEM || '—'}}</em>
								</li>
								<!--<li class="widthTwo">-->
									<!--<span>最后年检年度</span>-->
									<!--<em>—</em>-->
								<!--</li>-->
								<!--<li class="widthTwo">-->
									<!--<span>最后年检日期</span> <em>—</em>-->
								<!--</li>-->
								<!--<li class="widthTwo">-->
									<!--<span>注册日期</span>-->
									<!--<em>{{allData.ESDATE || '—'}}</em>-->
								<!--</li>-->
								<!--<li class="widthTwo">-->
									<!--<span>吊销日期</span>-->
									<!--<em>—</em>-->
								<!--</li>-->
								<li class="widthTwo">
									<span>行业门类</span>
									<em>{{$config.getDicName('INDUSTRYPHY', allData.INDUSTRYPHY) || '—'}}</em>
								</li>
								<!--<li class="widthTwo">-->
									<!--<span>行业门类</span>-->
									<!--<em>{{allData.INDUSTRYCO || '—'}}</em>-->
								<!--</li>-->
								<!--<li class="widthTwo">-->
									<!--<span>国民经济行业代码</span>-->
									<!--<em>—</em>-->
								<!--</li>-->
							</ul>
						</div>
					</li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow2 = !isShow2">股东出资情况</h5>
            <div v-show="isShow2">
              <ul>
                <li class="userBox" v-for="item in GDCZ">
                  <div>
                    <img src="/static/images/logo/logo-1.png" class="userItemImg" />
                    <span class="username">{{item.INV}}</span>
                  </div>
                  <div class="clearfix">
                    <div class="board fl">
                      <span>持股比例</span><span>{{$accounting.formatMoney(item.CONPROP, '')}}</span>
                      <span>认缴出资额</span><span>{{$accounting.formatMoney(item.SUBCONAM, '')}}</span>

                    </div>
                    <div class="board fr">
                      <!--<span>国别</span><span>{{item.COUNTRY}}</span>-->
                      <span>认缴出资日期</span><span>{{item.CONDATE}}</span>
                      <span>币种</span><span>{{$config.getDicName('PEGCAPCUR', item.CURRENCY)}}</span>
                    </div>
                  </div>
                  <!-- <em class="user fr">董事</em> -->
                </li>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow3 = !isShow3">管理人员</h5>
            <div v-show="isShow3">
              <ul>
                <li class="userBox" v-for="item in GLRY">
                  <img src="/static/images/logo/logo-1.png" class="userItemImg" />
                  <span class="username">{{item.NAME}}</span>
                  <em class="user fr">{{$config.getDicName('POSITION', item.POSITION)}}</em>
                </li>
                <!--<li class="userBox">-->
                <!--<img src="/static/images/logo/logo-1.png" class="userItemImg" />-->
                <!--<span class="username">刘二泉</span>-->
                <!--<em class="user fr">董事</em>-->
                <!--</li>-->
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow4 = !isShow4">历史变更</h5>
            <div v-show="isShow4">
              <ul class="changes">
                <li class="userBox changeContainer" v-for="item in LSBG">
                  <div class="clearfix changeTitleBox"><span class="changeTitle fl">{{$config.getDicName('ALTITEM', item.ALTITEM)}}</span><span class="changeTime fr">{{item.ALTDATE}}</span>
                  </div>
                  <div class="clearfix changeBox">
                    <div class="fl change">
                      <div class="changeStatus">变更前</div>
                      <p>{{item.ALTBE}}</p>
                    </div>
                    <div class="fr change">
                      <div class="changeStatus">变更后</div>
                      <p>{{item.ALTAF}}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow5 = !isShow5">分支机构</h5>
            <div v-show="isShow5">
              <ul>
                <li class="companyBox" v-for="item in FZJG">
                  <div class="companyName">
                    {{item.BRNAME}}
                  </div>
                  <div>
                    <span class="companysl">分支机构企业注册号：{{item.BRREGNO}}</span>
                  </div>
                  <div>
                    <span class="companysl">分支机构负责人：{{item.BRPRINCIPAL}}</span>
                  </div>
                  <div>
                    <span class="companysl">分支机构地址：{{item.BRADDR}}</span>
                  </div>
                  <div>
                    <span class="companysl">一般经营项目：{{item.CBUITEM}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow6 = !isShow6">行政处罚</h5>
            <div v-show="isShow6">
              <ul>
                <!--<li class="userBox" v-for="item in XZCF">-->
                <!--<div class="userTitle">京工商海处字[2018]第2329号</div>-->
                <!--<div class="userType">违法行为类型：-</div>-->
                <!--<div class="userType">处罚决定时间：9102-21-21</div>-->
                <!--</li>-->
                <li class="userBox" v-for="item in XZCF">
                  <div class="userTitle">{{item.CF_CFMC}}</div>
                  <div class="userType">决定文书号：{{item.CF_WSH || '--'}}</div>
                  <div class="userType">处罚类别：{{item.CF_CFLB1}};{{item.CF_CFLB2}}</div>
                  <div class="userType">处罚结果：{{item.CF_JG || '--'}}</div>
                  <div class="userType">处罚事由：{{item.CF_SY || '--'}}</div>
                  <div class="userType">处罚依据：{{item.CF_YJ || '--'}}</div>
                  <div class="userType">决定机关：{{item.CF_XZJG || '--'}}</div>
                  <div class="userType">处罚决定日期：{{item.CF_JDRQ || '--'}}</div>
                  <!--<div class="userType">处罚期限：{{item.CF_QX || '&#45;&#45;'}}</div>-->
                </li>
                <div style="width: 100%; text-align: center"></div>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow7 = !isShow7">股权冻结历史</h5>
            <!--没有数据项的数据，全部以为“--”代替显示-->
            <div v-show="isShow7">
              <ul v-for="item in GQDJ">
                <li class="userBox">
                  <div class="clearfix">
                    <div class="board fl">
                      <span>冻结文号</span><span style="padding-right: .1rem;">{{item.FRODOCNO || '--'}}</span>
                      <span>冻结机关</span><span style="padding-right: .1rem;">{{item.FROAUTH || '--'}}</span>
                      <span>冻结金额</span><span>{{$accounting.formatMoney(item.FROAM, '') || '--'}}</span>

                      <!--<span>解冻机关</span><span>{{item.THAWAUTH || '&#45;&#45;'}}</span>-->
                    </div>
                    <div class="board fr">
                      <span>冻结开始日期</span><span>{{item.FROFROM || '--'}}</span>
                      <span>冻结截至日期</span><span>{{item.FROTO || '--'}}</span>
                    </div>
                  </div>
                  <!--<div class="freezeDesc">解冻说明：xxxx</div>-->
                  <!-- <em class="user fr">董事</em> -->
                </li>
                <div style="width: 100%; text-align: center"></div>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow8 = !isShow8">动产抵押物</h5>
            <div v-show="isShow8">
              <ul v-for="item in DCDYW">
              <li class="companyBox">
                  <!--<div class="companyName">-->
                   <!--xxxxx-->
                  <!--</div>-->
                  <div>
                    <span class="companysl">抵押物：{{item.GUANAME || ''}}</span>
                  </div>
                  <div>
                    <span class="companysl">所有权属：{{item.OWN || ''}}</span>
                  </div>
                  <div>
                    <span class="companysl">抵押机构：{{item.MORE || ''}}</span>
                  </div>
                  <div>
                    <span class="companysl">抵押机构地址：{{item.MORE_LOC || ''}}</span>
                  </div>
                  <div>
                    <span class="companysl">抵押物详细描述：{{item.GUADES || ''}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="detailsListItem">
            <h5 class="detailsInfoTitle" @click="isShow9 = !isShow9">清算信息</h5>
            <!--没有数据项的数据，全部以为“--”代替显示-->
            <div v-show="isShow9">
              <ul v-for="item in QSXX">
                <li class="userBox">
                  <div class="clearfix">
                    <div class="board fl">
                      <span>清算责任人</span><span>{{item.LIGENTITY || '--'}}</span>
                      <span>清算完结日期</span><span>{{item.LIGENDDATE || '--'}}</span>
                      <span>债务承接人</span><span>{{item.DEBTTRANEE || '--'}}</span>
                      <span>清算组成员</span><span>{{item.LIQMEN || '--'}}</span>
                    </div>
                    <div class="board fr">
                      <span>清算负责人</span><span>{{item.LIGPRINCIPAL || '--'}}</span>
                      <span>清算完结情况</span><span>{{$config.getDicName('LIGST', item.LIGST) || '--'}}</span>
                      <span>债权承接人</span><span>{{item.CLAIMTRANEE || '--'}}</span>
                    </div>
                  </div>
                </li>
                <div style="width: 100%; text-align: center"></div>

              </ul>
            </div>
          </li>
          <!--<li class="detailsListItem">-->
            <!--<h5 class="detailsInfoTitle" @click="isShow10 = !isShow10">对外投资</h5>-->
            <!--&lt;!&ndash;没有数据项的数据，全部以为“&#45;&#45;”代替显示&ndash;&gt;-->
            <!--<div v-show="isShow10">-->
              <!--<ul>-->
                <!--<li class="userBox" v-for="item in TZ">-->
                  <!--<div class="companyName">-->
                    <!--&lt;!&ndash;{{item.BRNAME}}&ndash;&gt;-->
                    <!--对外投资机构名称： {{item.ENTNAME}}-->
                  <!--</div>-->
                  <!--&lt;!&ndash;<div class="clearfix">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="board fl">&ndash;&gt;-->
                      <!--&lt;!&ndash;<span>注册资本</span><span>{{$accounting.formatMoney(item.SUBCONAM, '') || '&#45;&#45;'}}</span>&ndash;&gt;-->
                      <!--&lt;!&ndash;&lt;!&ndash;<span>登记机关</span><span>xxxxx</span>&ndash;&gt;&ndash;&gt;-->
                      <!--&lt;!&ndash;<span>出资比例</span><span>{{item.CONPROP}}%</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="board fr">&ndash;&gt;-->
                      <!--&lt;!&ndash;<span>出资日期</span><span>{{item.CONDATE}}</span>&ndash;&gt;-->
                      <!--&lt;!&ndash;&lt;!&ndash;<span>企业状态</span><span>xxxxx</span>&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</li>-->
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	export default {
		components: {
			Header
		},
		data() {
			return {
				isShow1: false,
				isShow2: false,
				isShow3: false,
				isShow4: false,
				isShow5: false,
				isShow6: false,
        isShow7:false,
        isShow8:false,
        isShow9:false,
        isShow10:false,
				ENTNAME: this.$store.state.baseInfo.ENTNAME, //企业名称
				PRIPID: this.$store.state.baseInfo.PRIPID, //企业PRIPID
				NAME: this.$store.state.baseInfo.NAME,
				allData: {},
        GDCZ: [], //股东出资
        GLRY: [], //管理人员
        LSBG: [], //历史变更
        FZJG: [], //分支机构
        XZCF: [], //行政处罚
        TZ: [], //对外投资
        GQDJ: [], //股权冻结
        DCDYW: [], //动产抵押物
        QSXX: [], //清算信息
			}
		},
		methods: {
			getGSXX() {
				this.$axios.post(
					`qst_entinfobypripid/select`, {
						params: {
							'q': `ENTNAME: ${this.ENTNAME}`,
							'indent': 'true',
							'wt': 'json'
						}
					}).then(res => {
					this.allData = res.response.docs[0] || {};
        })
			},
			getGDCZ() {
				this.$axios.post(
					`qst_einvinvestmentbypripid/select`, {
						params: {
							'q': `PRIPID: ${this.PRIPID}`,
							'indent': 'true',
              rows: 99,
							'wt': 'json'
						}
					}).then(res => {
					this.GDCZ = res.response.docs;
				})
			},
      //管理人员
			getGLRY() {
				this.$axios.post(
					`qst_epripersonbypripid/select`, {
						params: {
							'q': `PRIPID: ${this.PRIPID}`,
							'indent': 'true',
              rows: 99,
							'wt': 'json'
						}
					}).then(res => {
					this.GLRY = res.response.docs;
				})
			},
      //历史变更
			getLSBG() {
				this.$axios.post(
					`qst_alterrecoderbypripid/select`, {
						params: {
							'q': `PRIPID: ${this.PRIPID}`,
							'indent': 'true',
              rows: 99,
							'wt': 'json'
						}
					}).then(res => {
					this.LSBG = res.response.docs;
				})
			},
      //分支机构
			getFZJG() {
				this.$axios.post(
					`qst_fzjgbypripid/select`, {
						params: {
							'q': `PRIPID: ${this.PRIPID}`,
							'indent': 'true',
              rows: 99,
							'wt': 'json'
						}
					}).then(res => {
					this.FZJG = res.response.docs;
				})
			},
      //行政处罚
			getXZCF() {
				this.$axios.post(
					`pub_penalty/select`, {
						params: {
							'q': `CF_XDR_MC: ${this.NAME} AND CF_XDR_SHXYM: ${this.$store.state.ENTCODES.credcode}`,
							'indent': 'true',
              rows: 99,
							'wt': 'json'
						}
					}).then(res => {
					this.XZCF = res.response.docs;
				})
			},
      //对外投资qst_enteinverstmentbyentname  ENTNAME
      getTZ() {
        let query = '';
        if (this.ENTNAME.indexOf('(') > 0) {
          query = `INV: ${this.ENTNAME} OR INV: ${this.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        } else if (this.ENTNAME.indexOf('（') > 0) {
          query = `INV: ${this.ENTNAME} OR INV: ${this.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        } else {
          query = `INV: ${this.ENTNAME}`;
        }
        this.$axios.post(
          `ENTBASE_INVESTMENT1/select`, {
            params: {
              'q': query,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.TZ = res.response.docs;
        })
      },
      //qst_sharesfrostbyid股权冻结
      getGQDJ(){
        this.$axios.post(
          `qst_sharesfrostbyid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.GQDJ = res.response.docs;
          // res.response.numFound == 0 ? this.type7 = false : true;
        })
      },
      //动产抵押物qst_dcdywxxbyid
      getDCDYW() {
        this.$axios.post(
          `qst_dcdywxxbyid/select`,
          {params:
              {'q': `PRIPID: ${this.PRIPID}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.DCDYW = res.response.docs;
          // res.response.numFound == 0 ? this.type8 = false : true;
        })
      },
      //清算信息qst_qingsuanbypripid
      getQSXX(){
        this.$axios.post(
          `qst_qingsuanbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          // res.response.numFound == 0 ? this.type9 = false : true;
          this.QSXX = res.response.docs;

        })
      },
		},
		created() {
		  this[`isShow${this.$route.params.type}`] = true;
			this.getGSXX();
			this.getGDCZ();
			this.getGLRY();
			this.getLSBG();
			this.getFZJG();
			this.getXZCF();
			this.getTZ();

      this.getGQDJ();
      this.getDCDYW();
      this.getQSXX();
    }
	}
</script>

<style scoped>
	.userBox {
		padding: 0 .3rem;
	}
	.iconfont{
		font-size: .6rem;
		/* line-height: 2rem */
	}
	.userItemImg {
		width: .8rem;
		vertical-align: middle;
	}

	.userBox {
		padding: .3rem .6rem;
		border-bottom: 1px solid #f5f5f5;
	}

	.userBox:last-child {
		border-bottom: none;
	}

	.userName {
		line-height: 2;
		display: inline-block;
		margin-left: .2rem;
	}

	.user {
		line-height: 2;
	}
	.userTitle, .companyName{
		font-weight: 700;
		font-size: .4rem;
		color: #555;
    padding: .1rem 0;
	}
	.userType {
		font-size: .4rem;
		line-height: .75rem;
	}

	.changeBox {
		background: #f5f5f5;
		border-radius: 4%
	}

	.change {
		width: 50%;
		padding: .2rem;
	}

	.change p {
		line-height: .6rem;
		color: #666;
		font-size: .35rem;
	}

	.changeStatus {
		color: #afafaf;
		font-size: .4rem;
	}

	.changeTitleBox {
		padding: .1rem 0;
	}

	.change:last-child {
		border-left: 1px solid #f1f3f9;
	}

	.changeContainer {
		border: none !important;
		padding: 0 .6rem !important;
	}

	.changes {
		margin-bottom: .5rem;
	}

	.board {
		width: 50%;
	}

	.board span {
		display: block;
		line-height: .8rem;

	}

	.board span:nth-child(odd) {
		color: #afafaf;
		/* font-size: .3rem; */
	}

	.board span:nth-child(even) {
		color: #333;
		/* font-size: .4rem; */
	}
	.companyBox{
		padding: .3rem .6rem;
		border-bottom: 1px solid #f5f5f5;
	}
	.companyBox:last-child{
		/*border: none;*/
	}
	.companysl{
		line-height: .8rem;
	}
  .freezeDesc{
    line-height: .8rem;
  }

</style>
