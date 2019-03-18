  <template>
	<div>
		<!-- <Header></Header> -->
		<header class="header">
			<a class="iconfont headerIco headLeft" @click="$router.back()">&#xe792;</a>
      <h1 class="mui-title headTit headTitLabel">
        <a href="javascript:;" class="acticve" @click="$router.push('/company')">企业</a>
        <img src="/static/images/icon-25.png">
        <a href="javascript:;" class="" @click="$router.push({name: 'space', params: allData})">空间</a>
      </h1>
			<a class="iconfont headerIco headRight headRightImg" href="javascript:;"><img src="/static/images/icon-21.png"></a>
		</header>
		<section class="wb100 dis-ib conTop conBottom">
			<div class="companyTop">
				<img src="/static/images/bg-01.jpg" class="wb100 fl">
				<div class="content">
					<div class="title">
						<span><img src="/static/images/logo/logo.png"></span>
						<!-- <em>{{allData.ENTNAME}}</em> -->
						<em>{{ENTNAME}}</em>
					</div>
					<!-- <p class="credited ">社会信用码 {{allData.PRIPID}}</p> -->
					<p class="credited codes">社会信用码 {{$store.state.ENTCODES.credcode}}</p>
					<p class="claimNum">关注量 {{starCount}}</p>
					<div class="claim" v-show="!isClain"  @click="clain">
						<span><img src="/static/images/icon-1.png"></span>
						<p class="claimCon">认领</p>
						<!-- <p class="claimnumber">浏览量 3万+</p> -->
					</div>
					<div class="number">
						<!-- <img src="/static/images/bg-02.png"> -->
						<!-- <em>98</em> -->
					</div>
				</div>
			</div>
			<div class="companyIhfo">
				<span class="name"><a class="detailDetail">{{allData.OPSCOPE}}</a><a @click="$router.push({name: 'companyDetail', params: {type: 1}})">详情</a></span>
				<a @click="show1 = !show1" href="javascript:;" class="label"><img src="/static/images/icon-24.png"></a>
				<a @click="show2 = !show2" href="javascript:;" class="label"><img src="/static/images/icon-23.png"></a>
				<a @click="show3 = !show3" href="javascript:;" class="label"><img src="/static/images/icon-22.png"></a>
			</div>
      <mt-popup
        v-model="show3" popup-transition="popup-fade" class="showModel">电话：{{allData.TEL}}
      </mt-popup>
      <mt-popup
        v-model="show2"  popup-transition="popup-fade" class="showModel">
        邮箱：{{allData.EMAIL}}
      </mt-popup>
      <mt-popup
        v-model="show1"  popup-transition="popup-fade" class="showModel">
        地址：{{allData.DOM}}
      </mt-popup>
			<div class="searchListBottom companyReg">
				<span class="labelList">
					<em>法定代表人</em>
					<i class="c-e70016">{{NAME}}</i>
				</span>
				<span class="labelList">
					<em>注册资本(万)</em>
					<i>{{$accounting.formatMoney(allData.REGCAP, '')}}</i>
				</span>
				<span class="labelList">
					<em>成立日期</em>
					<i>{{allData.ESDATE}}</i>
				</span>
			</div>
			<div class="companyRisk">
				<div class="riskTop">
					<span>风险评估</span>
					<em>{{fxText}}风险</em>
					<i @click="monitor">{{isJKong ? '取消监控' : '监控'}}</i>
				</div>
				<div class="plan"><i class="planCon" :style="fengxianStyle"></i></div>
			</div>
			<!--<div class="Unveiled">-->
				<!--<span class="UnveiledName"><em>预警</em><img src="/static/images/icon-26.png"></span>-->
				<!--<div class="Unveiledscroll">-->
					<!--<div class="bd">-->
						<!--<ul>-->
							<!--<li>{{yuqing.ENTERPRISE}}</li>-->
							<!--&lt;!&ndash; <li>1997全国大学生集成电路大赛开始报名</li>-->
                        <!--<li>1998全国大学生集成电路大赛开始报名</li> &ndash;&gt;-->
						<!--</ul>-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->
      <div class="Unveiled indexUnveiled">
        <span class="UnveiledName"><img src="/static/images/icon-42.png"><em>预警</em></span>
        <div class="Unveiledscroll">
          <div class="bd">
            <swiper :options="swiperOption" class="swiper-no-swiping" style="margin-top: 0;">
              <swiper-slide v-for="(item,index) in FYGG.length ? FYGG : SHIXINCount ? SHIXIN : [{GGCONTENT: '暂无预警信息'}]" :key="index" class="clearfix">
                <span @click="goNoticeDetail(item)" class="swiperTitle fl">{{item.FYNAME || '——'}}</span><em class="swiperTime fr">{{item.time || `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}}</em>
              </swiper-slide>
              <!--<swiper-slide v-else class="clearfix">fwefe-->
                <!--<span class="swiperTitle fl" style="text-align: center">暂无预警信息</span>-->
              <!--</swiper-slide>-->
            </swiper>
          </div>
        </div>
      </div>
			<div class="companyWrap">
				<h3 class="companyTitle">机构信息</h3>
				<ul class="mechanismList">
					<li>
						<a @click="$router.push({name: 'companyDetail', params: {type: 1}})">
							<img src="/static/images/icon-2.png">
							<p>工商信息</p>
						</a>
					</li>
					<li>
						<a @click="type2 ? $router.push({name: 'companyDetail', params: {type: 2}}) : ''">
							<img :src="type2 ? '/static/images/icon-3.png' : '/static/images/icon-3un.png'">
							<p>股东出资情况</p>
						</a>
					</li>
					<li>
						<a @click="type3 ? $router.push({name: 'companyDetail', params: {type: 3}}) : ''">
							<img :src="type3 ? '/static/images/icon-4.png' : '/static/images/icon-4un.png'">
							<p>企业管理人员</p>
						</a>
					</li>
					<li>
						<a @click="type4 ? $router.push({name: 'companyDetail', params: {type: 4}}) : ''">
							<img :src="type4 ? '/static/images/icon-5.png' : '/static/images/icon-5un.png'">
							<p>历史变更</p>
						</a>
					</li>
					<li>
						<a @click="type5 ? $router.push({name: 'companyDetail', params: {type: 5}}) : ''">
							<img :src="type5 ? '/static/images/icon-6.png' : '/static/images/icon-6un.png'">
							<p>分支机构</p>
						</a>
					</li>
					<li>
						<a @click="type6 ? $router.push({name: 'companyDetail', params: {type: 6}}) : ''">
							<img :src="type6 ? '/static/images/icon-7.png' : '/static/images/icon-7un.png'">
							<p>行政处罚历史</p>
						</a>
					</li>
					<li>
						<a href="javascript:;" @click="type7 ? $router.push({name: 'companyDetail', params: {type: 7}}) : ''">
							<img :src="type7 ? '/static/images/icon-8.png' : '/static/images/icon-8un.png'">
							<p>股权冻结历史</p>
						</a>
					</li>
					<!--<li class="gray">-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-10.png">-->
							<!--<p>动产抵押</p>-->
						<!--</a>-->
					<!--</li>-->
					<li>
						<a href="javascript:;" @click="type8 ? $router.push({name: 'companyDetail', params: {type: 8}}) : ''">
							<img :src="type8 ? '/static/images/icon-12.png' : '/static/images/icon-12un.png'">
							<p>动产抵押物</p>
						</a>
					</li>
					<li>
            <a href="javascript:;" @click="type9 ? $router.push({name: 'companyDetail', params: {type: 9}}) : ''">
              <img :src="type9 ? '/static/images/icon-9.png' : '/static/images/icon-9un.png'">
							<p>清算信息</p>
						</a>
					</li>
          <!--<li class="gray">-->
            <!--<a href="javascript:;" @click="type10 ? $router.push({name: 'companyDetail', params: {type: 10}}) : ''">-->
              <!--<img :src="type10 ? '/static/images/icon-11.png' : '/static/images/icon-11un.png'">-->
              <!--<p>对外投资</p>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li class="gray">-->
            <!--<a href="javascript:;">-->
              <!--<img src="/static/images/icon-9.png">-->
              <!--<p>动产抵押</p>-->
            <!--</a>-->
          <!--</li>-->
				</ul>
			</div>
      <div class="companyWrap">
        <h3 class="companyTitle">预警信息<a href="javascript:;" class="more warningMore">
          <!--<img src="/static/images/icon-28.png">-->
        </a></h3>
        <ul class="warningList">
          <li  @click="FYGG.length ? $router.push({name: 'noticeList', params: {title: '法院公告', list: FYGG}}) : ''">
            <a href="javascript:;" class="oneTitle"><em class="name">法院公告</em><i class="label" :style="FYGGCount ? {} : {background: '#ccc'}">司法</i></a>
            <!--<a v-for="item in FYGG" href="javascript:;" class="labelList"><em class="name">{{item.FYNAME}}</em>-->
              <!--<i class="time"></i>-->
            <!--</a>-->
            <!--<span v-show="!FYGG.length" class="noData">—</span>-->
            <!--<a href="javascript:;" class="labelList"><em class="name">怎么查询个人征信,查询征信记录的几种方法</em><i class="time">2018-09-20</i></a>-->
          </li>
          <li @click="getFYGGType('flss').length ? $router.push({name: 'litigationList', params: {title: '法律诉讼', list: FYGG}}) :''">
            <a  href="javascript:;" class="oneTitle"><em class="name">法律诉讼</em><i class="label" :style="getFYGGType('flss').length ? {} : {background: '#ccc'}">司法</i></a>
            <!--<a v-for="item in FYGG" href="javascript:;" class="labelList" v-if="item.REMARK == '起诉状副本' || item.REMARK == '开庭传票'"><em class="name">{{item.ID}}</em></a>-->
            <!--<span v-show="!getFYGGType('flss').length" class="noData">—</span>-->
            <!--<a href="javascript:;" class="labelList"><em class="name">北京旅游行业信用监管平台“信用旅游”上线 可查全市所有旅行社和</em><i class="time">2018-09-20</i></a>-->
          </li>
          <li @click="getFYGGType('ktcp').length ? $router.push({name: 'openList', params: {title: '开庭传票', list: FYGG}}) :''">
            <a href="javascript:;" class="oneTitle"><em class="name">开庭传票</em><i class="label" :style="getFYGGType('ktcp').length ? {} : {background: '#ccc'}">司法</i></a>
            <!--<a v-for="item in FYGG" href="javascript:;" class="labelList" v-if="item.REMARK == '开庭传票'"><em class="name">{{item.FYNAME}}</em></a>-->
            <!--<span v-show="!getFYGGType('ktcp').length" class="noData">—</span>-->
          </li>
          <li @click="SHIXIN.length ? $router.push({name: 'brokenList', params: {title: '失信人信息', list: SHIXIN}}) : ''">
            <a href="javascript:;" class="oneTitle"><em class="name">失信人信息</em><i class="label" :style="SHIXIN.length ? {} : {background: '#ccc'}">司法</i></a>
            <!--<a v-for="item in SHIXIN" href="javascript:;" class="labelList"><em class="name">案号:{{item.caseCode}}</em></a>-->
            <!--<span v-show="!SHIXIN.length" class="noData">—</span>-->
          </li>
          <li @click="getFYGGType('pmgg').length ? $router.push({name: 'auctionList', params: {title: '拍卖公告', list: FYGG}}) :''">
            <a href="javascript:;" class="oneTitle"><em class="name">拍卖公告</em><i class="label" :style="getFYGGType('pmgg').length ? {} : {background: '#ccc'}">经营</i></a>
            <!--<a v-for="item in FYGG" href="javascript:;" class="labelList" v-if="item.REMARK == '拍卖公告'"><em class="name">{{item.FYNAME}}</em></a>-->
            <!--<span v-show="!getFYGGType('pmgg').length" class="noData">—</span>-->
          </li>
          <li @click="getFYGGType('cpws').length ? $router.push({name: 'documentsList', params: {title: '裁判文书', list: FYGG}}) : ''">
            <a href="javascript:;" class="oneTitle"><em class="name">裁判文书</em><i class="label" :style="getFYGGType('cpws').length ? {} : {background: '#ccc'}">经营</i></a>
            <!--<a v-for="item in FYGG" href="javascript:;" class="labelList" v-if="item.REMARK == '裁判文书'"><em class="name">{{item.FYNAME}}</em></a>-->
            <!--<span v-show="!getFYGGType('cpws').length" class="noData">—</span>-->
          </li>
        </ul>
      </div>
			<div class="companyWrap" @click="$router.push('/echarts')">
				<h3 class="companyTitle">图谱</h3>
				<a href="javascript:;"><img src="/static/images/pic-1.jpg" class="wb100"></a>
			</div>
			<div class="companyWrap">
				<h3 class="companyTitle">机构发展
          <!--<a href="javascript:;" class="more institutionMore"><img src="/static/images/icon-28.png"></a>-->
        </h3>
				<ul class="institutionList">
					<li :class="{layerModal: Object.keys(SHUIWU[0]).length <= 0}" @click="Object.keys(SHUIWU[0]).length > 0 ? $router.push({name: 'Taxcredit', params: {list: SHUIWU}}) : ''">
						<a href="javascript:;">
							<div class="left">
								<img src="/static/images/icon-29.png">
								<p>税务信用</p>
							</div>
							<div class="center">
								<p>{{SHUIWU[0].TAXCODE}}</p>
								<p>{{SHUIWU[0].ANNUALEVALUATION || '--'}}年</p>
							</div>
							<div class="right">
								<em>{{SHUIWU[0].TAXGRADE || '--'}}</em>
								<p>纳税信用级别</p>
							</div>
							<!--<div class="arrow">-->
								<!--<img src="/static/images/icon-33.png">-->
							<!--</div>-->
						</a>
					</li>

					<li :class="{layerModal: zhaoPin.count <= 0}"  @click="zhaoPin.count > 0 ? $router.push({name: 'Job', params: {list: zhaoPin.list}}) : ''">
						<a href="javascript:;">
							<div class="left">
								<img src="/static/images/icon-30.png">
								<p>招聘</p>
							</div>
							<div class="center">
								<p>更新日期</p><br/>
								<p>{{zhaoPin.time || '--'}}</p>
							</div>
							<div class="right">
								<em>{{zhaoPin.count}}</em>
								<p>招聘岗位</p>
							</div>
							<!--<div class="arrow">-->
								<!--<img src="/static/images/icon-33.png">-->
							<!--</div>-->
						</a>
					</li>
					 <!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<div class="left">-->
								<!--<img src="/static/images/icon-31.png">-->
								<!--<p>融资信息</p>-->
							<!--</div>-->
							<!--<div class="center">-->
								<!--<p>更新日期</p>-->
								<!--<p>2019年02月20日</p>-->
							<!--</div>-->
							<!--<div class="right">-->
								<!--<em>3000万</em>-->
								<!--<p>融资金额</p>-->
							<!--</div>-->
							<!--<div class="arrow">-->
								<!--<img src="/static/images/icon-33.png">-->
							<!--</div>-->
						<!--</a>-->
					<!--</li> -->
					<li :class="{layerModal: person <= 0 && GDCZ <= 0}">
						<a href="javascript:;">
							<div class="left">
								<img src="/static/images/icon-32.png">
								<p>人才发展</p>
							</div>
							<div class="right center" @click="person > 0 ? $router.push({name:'companyDetail', params: {type:3}}) : ''">
								<em>{{person}}</em>
								<p>企业管理人员</p>
							</div>
							<div class="right" @click="GDCZ > 0 ? $router.push({name:'companyDetail', params: {type:2}}):''">
								<em>{{GDCZ}}</em>
								<p>股东</p>
							</div>
							<!--<div class="arrow">-->
								<!--<img src="/static/images/icon-33.png">-->
							<!--</div>-->
						</a>
					</li>
				</ul>
			</div>
			<div class="companyWrap knowledgeWrap">
				<h3 class="companyTitle">知识产权</h3>
				<!-- <div class="knowledgeList">
					<span><em>商标</em><i>2</i></span>
					<span><em>专利</em><i>2</i></span>
					<span><em>网站</em><i>2</i></span>
					<span class="widhTwo"><em>软件著作权</em><i>2</i></span>
					<span class="widhTwo"><em>作品著作权</em><i>2</i></span>
				</div> -->
        <!--<div></div>-->
				<div class="knowledgeList">
					<!--<span><em>商标</em><i>2</i></span>-->
					<span @click="goKnowledgeList('Patent', {list: zhuanli.list})"><em>专利</em><i>{{zhuanli.numFound}}</i></span>
					<span @click="goKnowledgeList('Website', {list: beian.list})"><em>网站</em><i>{{beian.numFound}}</i></span>
					<span @click="goKnowledgeList('Soft', {list: SoftWare.list})" class="widhTwo"><em>软件著作权</em><i>{{SoftWare.numFound}}</i></span>
					<span @click="goKnowledgeList('Works', {list: zuopin.list})" class="widhTwo"><em>作品著作权</em><i>{{zuopin.numFound}}</i></span>
				</div>
			</div>
		</section>
		<!--预警信息-->
		<!--<div class="companyLayer warningLayer">-->
			<!--<div class="companyLayerBg "></div>-->
			<!--<div class="companyLayerCon ">-->
				<!--<h3 class="companyLayerTitle">预警信息</h3>-->
				<!--<a href="javascript:;" class="iconfont close">&#xe601;</a>-->
				<!--<h5 class="warningLayerTitle">经营预警</h5>-->
				<!--<ul class="warningLayerList">-->
					<!--<li><a href="javascript:;">失信人</a></li>-->
					<!--<li><a href="javascript:;">被执行人</a></li>-->
					<!--<li><a href="javascript:;">开庭公告</a></li>-->
				<!--</ul>-->
				<!--<h5 class="warningLayerTitle">司法预警</h5>-->
				<!--<ul class="warningLayerList">-->
					<!--<li><a href="javascript:;">司法拍卖</a></li>-->
					<!--<li><a href="javascript:;">严重违法</a></li>-->
					<!--<li><a href="javascript:;">黑名单</a></li>-->
					<!--<li><a href="javascript:;">欠税公告</a></li>-->
					<!--<li><a href="javascript:;">股权出资</a></li>-->
				<!--</ul>-->
			<!--</div>-->
		<!--</div>-->
		<!--机构发展-->
		<!--<div class="companyLayer institutionLayer">-->
			<!--<div class="companyLayerBg "></div>-->
			<!--<div class="companyLayerCon ">-->
				<!--<h3 class="companyLayerTitle">机构发展</h3>-->
				<!--<a href="javascript:;" class="iconfont close">&#xe601;</a>-->
				<!--<ul class="institutionLayerList">-->
					<!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-36.png">-->
							<!--<p>招投标</p>-->
						<!--</a>-->
					<!--</li>-->
					<!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-37.png">-->
							<!--<p>财务信息</p>-->
						<!--</a>-->
					<!--</li>-->
					<!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-38.png">-->
							<!--<p>投资事件</p>-->
						<!--</a>-->
					<!--</li>-->
					<!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-39.png">-->
							<!--<p>企业年报</p>-->
						<!--</a>-->
					<!--</li>-->
					<!--<li>-->
						<!--<a href="javascript:;">-->
							<!--<img src="/static/images/icon-40.png">-->
							<!--<p>债券信息</p>-->
						<!--</a>-->
					<!--</li>-->
				<!--</ul>-->
			<!--</div>-->
		<!--</div>-->
		<Footer :isJKong="isJKong" :monitor="monitor" :unMonitor="unMonitor"></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer1.vue"

  import "swiper/dist/css/swiper.css";
  import {
    swiper,
    swiperSlide
  } from "vue-awesome-swiper";

    // import { MessageBox,Popup  } from 'vant';
	export default {
		components: {
			Header,
			Footer,
      swiper,
      swiperSlide
		},
		data() {
			return {
        show1:false,
        show2:false,
        show3:false,
        ENTNAME: this.$store.state.baseInfo.ENTNAME, //企业名称
        // ENTNAME: '', //企业名称
        PRIPID: this.$store.state.baseInfo.PRIPID, //企业PRIPID
        NAME: this.$store.state.baseInfo.NAME,
        isClain: false, //是否被认领
        allData: {}, //企业全部信息
        yuqing: {}, //热点  暂时取第一条
        FYGG: [], //法院公告
        FYGGCount: 0,
        SHUIWU: [{}], //税务
        SHIXIN: [], //失信人
        SHIXINCount: 0,
        zhaoPin: {}, //招聘
        person: '', //管理人员
        GDCZ: '', //股东
        zhuanli: {}, //专利
        beian: {}, //网站
        SoftWare: {}, //软件
        zuopin: {}, //著作
        HMD: {}, //黑名单
        JYYC: {}, //经营异常
        GZCQ: {}, //股质出权
        isJKong: false,
        starCount: 0, //关注量

        type2: true,
        type3: true,
        type4: true,
        type5: true,
        type6: true,
        type7: true,
        type8: true,
        type9: true,
        type10: true,

        swiperOption: {
          // 显示分页
          direction: 'vertical',
          pagination: {
            el: ".swiper-pagination",
            clickable: false
          },
          waitForTransition: true,
          // 设置自动播放速度
          autoplay: {
            disableOnInteraction: false,
            delay: 3000
          },
          // 开启无限循环
          loop: true,
          //设置点击箭头
          paginationClickable: false,
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
        },
      }
		},
    computed: {
		  //风险值
      fengxianNum() {
        return this.FYGGCount + this.SHIXINCount + this.HMD.numFound + this.JYYC.numFound + this.GZCQ.numFound;
      },
      //
      fxText() {
        if (this.fengxianNum < 50) {
          return '低';
        } else if (this.fengxianNum >= 50 && this.fengxianNum < 100) {
          return '中';
        } else if (this.fengxianNum >= 100) {
          return '高';
        }
      },
      fengxianStyle() {
        return {
          width: `${this.fengxianNum}%`,
          background: this.fxText == '高' ? '#ed4014' : this.fxText == '中' ? '#ff9900' : '#19be6b'
        }
      }
    },
		methods:{
		  //去预警详情
      goNoticeDetail(item) {
        this.$router.push({name: 'noticeList', params: {list: [item]}})
      },
		  //获取法院公告的子类别
      getFYGGType(type) {
        switch (type) {
          case 'flss':
            return this.FYGG.filter(item => {
              return item.REMARK == '开庭传票' || item.REMARK == '起诉状副本'
            })
          case 'ktcp':
            return this.FYGG.filter(item => {
              return item.REMARK == '开庭传票'
            })
          case 'pmgg':
            return this.FYGG.filter(item => {
              return item.REMARK == '拍卖公告'
            })
          case 'cpws':
            return this.FYGG.filter(item => {
              return item.REMARK == '裁判文书'
            })
        }
      },
		  //认领跳页
      clain() {
        if (this.$store.state.userInfo) {
          this.$router.push({name: 'attestation', params: this.allData})
        } else {
          //未登录跳转登录作用，无意义
          this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1)
        }
      },
      show(){
        MessageBox({
          title: '提示',
          message: '确定执行此操作?',
          showCancelButton: true
        });
      },
		  //监控
      monitor() {
        if (this.isJKong) {
          this.unMonitor();
          return;
        }
        this.$axios.post(this.$config.URI(`rest/monitor/monitor`), {enterpriseId: this.PRIPID, enterpriseName: this.ENTNAME}, 1).then(res=>{
          this.isJKong = true;
          Toast('监控成功');
        })
      },
      //取消监控
      unMonitor() {
        this.$axios.post(this.$config.URI(`rest/monitor/unMonitor`), {enterpriseId: this.PRIPID}, 1).then(res=>{
          this.isJKong = false;
          Toast('取消成功');
        })
      },
      //查询是否已经监控
      isMonitor() {
        this.$axios.post(this.$config.URI(`rest/monitor/isMonitored`), {enterpriseIds: this.PRIPID}, 1).then(res=>{
          // Toast(res.message);
          this.isJKong = res.data[this.PRIPID];
        })
      },
      //查询是否被认领rest/space/isClained
      isClained() {
        this.$axios.post(this.$config.URI(`rest/space/isClained`), {enterpriseIds: this.PRIPID}, 1).then(res=>{
          // Toast(res.message);
          this.isClain = res.data[this.PRIPID];
        })
      },
      //查询关注量rest/star/starCount
      getStarCount() {
        this.$axios.get(this.$config.URI(`rest/star/starCount?enterpriseId=${this.PRIPID}`), {enterpriseId: this.PRIPID}, 1).then(res=>{
          // Toast(res.message);
          this.starCount = res.data;
        })
      },
		  getBaseData() {
        this.$axios.post(
          `qst_entinfobypripid/select`,
          {params:
              {'q': `ENTNAME: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.allData = Object.assign({}, this.allData,  res.response.docs[0])
          this.allData.DOM = this.allData.DOM.replace(/<em style=\"color: red;\">/g, "").replace(/<\/em>/g, "");


        })
      },
      //新闻热点
      getYUQING() {
        this.$axios.post(
          `yuqing/select`,
          {params:
              {'q': `*:*`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
            this.yuqing = res.response.docs[0] || {}
          // this.allData = Object.assign({}, this.allData,  res.response.docs[0])
        })
      },
      //法院公告
      getFYGG() {
        this.$axios.post(
          `fygg/select`,
          {params:
              {'q': `ENTNAME:${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.FYGG = res.response.docs
          this.FYGGCount = res.response.numFound
        })
      },
      //失信人
      getSHIXIN() {
        this.$axios.post(
          `shixin_info/select`,
          {params:
              {'q': `iname:${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.SHIXIN = res.response.docs
          this.SHIXINCount = res.response.numFound
        })
      },
      //税务PAC_TAXBRACKETS
      getSHUIWU() {
        this.$axios.post(
          `PAC_TAXBRACKETS/select`,
          {params:
              {'q': `TAXENTNAME:${this.ENTNAME}`,
                'indent':'true',
                'rows': 50,
                'wt':'json'
              }
          }).then(res=>{
          this.SHUIWU = res.response.docs.length ? res.response.docs : [{}]
        })
      },
      //招聘PAC_RECRUIT
      getzhaoPin() {
        this.$axios.post(
          `PAC_RECRUIT/select`,
          {params:
              {'q': `ENTNAME:${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.zhaoPin = {
            count: res.response.numFound,
            time: res.response.docs.length ? res.response.docs[0].TIME : '',
            list: res.response.docs
          }
        })
      },
      //管理人员
      getPerson() {
        this.$axios.post(
          `qst_epripersonbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          this.person = res.response.numFound;
        })
      },
      //股东
      getGDCZ() {
        this.$axios.post(
          `qst_einvinvestmentbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {

        })
      },
      //专利zhuanli_info
      getZL() {
        this.$axios.post(
          `zhuanli_info/select`,
          {params:
              {'q': `name: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.zhuanli = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //网站备案beian_inf
      getBA() {
        this.$axios.post(
          `beian_info/select`,
          {params:
              {'q': `host_name: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.beian = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //软件著作权
      getSoftWare() {
        this.$axios.post(
          `software/select`,
          {params:
              {'q': `SoftwareOwner: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.SoftWare = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //作品著作权
      getWorks() {
        this.$axios.post(
          `zuopin/select`,
          {params:
              {'q': `CopyrightOwner: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
            try{
              this.zuopin = {
                numFound: res.response.numFound,
                list: res.response.docs
              }
            }catch (e) {

            }

        })
      },
      //黑名单
      getHMD() {
        this.$axios.post(
          `PAC_CREDIT_UN/select`,
          {params:
              {'q': `UNCREDNAME: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.HMD = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //PAC_BLACKLIST经营异常
      getJYYC() {
        this.$axios.post(
          `PAC_BLACKLIST/select`,
          {params:
              {'q': `ENTNAME: ${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.JYYC = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //qst_sharesimpawnbyid股权出质
      getGZCQ() {
        this.$axios.post(
          `qst_sharesimpawnbyid/select`,
          {params:
              {'q': `PRIPID: ${this.PRIPID}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.GZCQ = {
            numFound: res.response.numFound,
            list: res.response.docs
          }
        })
      },
      //知识产权详情页
      goKnowledgeList(name, params) {
        if (params.list.length == 0) {
          return ;
        }
        this.$router.push({name: name, params: params});
      },

      //判断某个详情是否可点击
      getGDCZ() {
        this.$axios.post(
          `qst_einvinvestmentbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type2 = false : true;
          this.GDCZ = res.response.numFound;
        })
      },
      //管理人员
      getGLRY() {
        this.$axios.post(
          `qst_epripersonbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type3 = false : true;
        })
      },
      //历史变更
      getLSBG() {
        this.$axios.post(
          `qst_alterrecoderbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type4 = false : true;
        })
      },
      //分支机构
      getFZJG() {
        this.$axios.post(
          `qst_fzjgbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type5 = false : true;
        })
      },
      //行政处罚
      getXZCF() {
        this.$axios.post(
          `pub_penalty/select`, {
            params: {
              'q': `CF_XDR_MC: ${this.NAME} AND CF_XDR_SHXYM: ${this.$store.state.ENTCODES.credcode}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type6 = false : true;
        })
      },
      //对外投资ENTBASE_INVESTMENT1  ENTNAME
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
              'wt': 'json'
            }
          }).then(res => {
          res.response.numFound == 0 ? this.type10 = false : true;
        })
        // this.$axios.post(
        //   `ENTBASE_INVESTMENT1/select`, {
        //     params: {
        //       'q': `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`,
        //       'indent': 'true',
        //       'wt': 'json'
        //     }
        //   }).then(res => {
        // })
      },
      //qst_sharesfrostbyid股权冻结
      getGQDJ(){
        this.$axios.post(
          `qst_sharesfrostbyid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          // this.GQDJ = res.response.docs;
          res.response.numFound == 0 ? this.type7 = false : true;
        })
      },
      //动产抵押物qst_dcdywxxbyid
      getDCDYW() {
        this.$axios.post(
          `qst_dcdywxxbyid/select`,
          {params:
              {'q': `PRIPID: ${this.PRIPID}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          // this.DCDYW = res.response.docs;
          res.response.numFound == 0 ? this.type8 = false : true;
        })
      },
      //清算信息qst_qingsuanbypripid
      getQSXX(){
        this.$axios.post(
          `qst_qingsuanbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          console.log(this);
          res.response.numFound == 0 ? this.type9 = false : true;
        })
      },
    },
		created(){

      this.allData = Object.assign({}, this.allData,  this.$route.params)
      this.getBaseData();
      this.getYUQING();
      this.getFYGG();
      this.getSHIXIN();
      this.getSHUIWU();
      this.getzhaoPin();
      this.getPerson();
      this.getGDCZ();
      this.getZL();
      this.getBA();
      this.getSoftWare();
      this.getWorks();
      this.getHMD();
      this.getJYYC();
      this.getGZCQ();
      this.$store.state.userInfo ? this.isMonitor() : '';
      this.isClained();
      this.getStarCount();

      this.getGDCZ();
      this.getGLRY();
      this.getLSBG();
      this.getFZJG();
      this.getTZ();
      this.getXZCF();
      this.getGQDJ();
      this.getDCDYW();
      this.getQSXX();

    },
    mounted() {
      window.scrollTo(0, 50);
      window.scrollTo(0, 0);
    }
	}
</script>

<style scoped>
	.credited,.title,.claimNum{
		margin-left: 1rem;
		line-height: 1rem;
    text-align: left!important;
    color: #fff;
	}
	.credited {
		width: 100%;
		font-size: .34rem;
	}
	.title{
		margin-top: .6rem;
	}
  .warningList{
    margin-left: 5%;
  }
  .warningList li {
    height: 1.2rem;
    line-height: 1.2rem;
    margin: auto;
  }
  .warningList li a{

  }
  .warningList li:nth-child(odd) {
    margin-right: 5%;
    border-right: 1px solid #ccc;
  }
  .noData{
    width: 100%;
    display: block;
    overflow: hidden;
    margin-top: .25rem;
    font-size: .4rem;
    color: #999;
    /*text-align: center;*/
  }
  .detailDetail{
    display: inline-block;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    vertical-align: middle;
    color: #666;
  }
.mint-popup { padding: .6rem; border-radius: 3%;}
  .warningList li{
    float: left;
    width: 45%;
    /*margin-bottom: .2rem;*/
  }
  .warningList li:nth-child(odd){
    float: left;
    width: 45%;
    /*margin-bottom: .2rem;*/
  }
  .warningList li .oneTitle:after{
    content: none;
  }
  .warningList li .labelList .name{
    width: 100%;
  }

  /deep/ .swiper-slide{
    height: 1.3rem!important;
    line-height: 1.3rem!important;
  }
  /deep/ .swiper-container{
    height: 1.3rem!important;
    margin-top: .1rem;
  }
  .swiperTitle{
    display: inline-block;
    max-width: 66%;
    /*margin-top: .1rem;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 1.3rem;
    line-height: 1.3rem;
  }
  .swiperTime{
    color: #898989;
    display: inline-block;
    overflow: hidden;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-right: .3rem;

  }
  .Unveiled{
    height: 6vh!important;
  }
  .Unveiledscroll{
    height: 6vh!important;
  }


  .institutionList li .right{
    /*width: 33%;*/
  }
  .institutionList li .right::after{
    content: none;
  }
  .layerModal:after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.1rem;
    background: #f5f5f5;
    opacity: .7;
  }
</style>
