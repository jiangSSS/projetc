<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
			<a @click="$router.push('/')" class="iconfont headerIco headLeft">&#xe792;</a>
			<div class="headerSerach headerSerachCenter" @click="$router.push({name: 'searchList', params: {flag: 'search'}})">
				<input type="search" @click="$router.push({name: 'searchList', params: {flag: 'search'}})" class="headerSerachText" :value="kw" placeholder="">
				<button class="headerSerachBtn"></button>
			</div>
			<a class="iconfont headerIco headRight headRightText">排序</a>
		</header>
		<div class="screenHead">
			<span class="label provinces" @click="citySearch">
				<em>省份地区</em>
				<i class="iconfont">&#xe628;</i>
			</span>
			<span class="label guild" @click="hangYeToggle = !hangYeToggle">
				<em>行业分类</em>
				<i class="iconfont">&#xe628;</i>
			</span>
			<span class="label moreScreen" @click="search">
				<em>更多筛选</em>
				<i class="iconfont">&#xe628;</i>
			</span>
		</div>

		<div class="statisticsResult">为你找到
			<i class="c-e70016">{{numFound}} </i>家公司
			<!--<a href="JavaScript:;" class="batch">批量导出</a>-->
		</div>
    <div class="statisticsResultRight">
      <!--当前-->
      <!--<i class="c-e70016">{{pageNo}}/{{Math.ceil(numFound/rows)}} </i>页-->
      <!--<a href="JavaScript:;" class="batch">批量导出</a>-->
    </div>
		<!--<div class="scroller-box" :style="scrollerStyle">-->
			<!--<scroller :on-infinite="loadMore"  ref="myscroller">-->
    <div v-infinite-scroll="loadMore" class="scroller-box" :style="scrollerStyle"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
				<div class="pageListBox" v-for="(item,index) in pageList" :key="index">
          <div @click="goDetail(item)">
						<div class="searchListTop">
							<div class="photo">
								<img src="/static/images/logo/logo3.png">
							</div>
							<h5 class="title" v-html="getName(item.ENTNAME)"></h5>
							<div class="info" v-if="look">
								<span>信用查认证</span>
								<em>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS)}}</em>
							</div>
							<span class="label">{{item.label}}</span>
						</div>
						<div class="searchListBottom">
							<span class="labelList">
								<span class="emBlock">法定代表人</span>
								<i class="" style="font-size: .36rem;" v-html="getFDName(item)" v-if="item.NAME"></i>
								<i v-else>---</i>
							</span>
							<span class="labelList">
								<span class="emBlock">注册资本(万)</span>
								<i v-if="item.REGCAP">{{$accounting.formatMoney(item.REGCAP, '')}}</i>
								<i v-else>---</i>
							</span>
							<span class="labelList">
								<span class="emBlock">成立日期</span>
								<i v-if="item.REGCAP">{{item.ESDATE}}</i>
								<i v-else>---</i>
							</span>
						</div>
					</div>
          <template v-if="XYZM">
            <div class="creditLine"></div>
            <div class="creditBtton" @click="goPDF(item)">信用证明</div>
          </template>
				</div>
      </div>

			<!--</scroller>-->

		<!--</div>-->


		<!--<div id="searchList" class="mui-scroll-wrapper mui-active searchListMargin">-->
		<!--<div class="">-->
		<!--<ul class=" ">-->

		<!--</ul>-->
		<!--</div>-->
		<!--</div> -->
		<!--省份地区-->
		<div v-show="cityToggle" class="searchLayerCon provincesLayer">
			<div class="layerBack"></div>
			<div class="searchLayer">
        <div class="leftOne">
          <ul>
            <li v-for="item in [{title: '不限', code: ''}].concat($store.state.dicData.PROVINCE)" @click="sProvince(item)" :class="{active: selectedPro == item.code}">{{item.title}}</li>
          </ul>
        </div>
				<!--<div class="leftOne">-->
					<!--<ul>-->
						<!--<li v-for="province in cityData" @click="selectCity('province', province.sub, province.name)" :class="{active: selectedprovince == province.name}">{{province.name}}</li>-->
					<!--</ul>-->
				<!--</div>-->
				<!--<div class="leftTwo">-->
					<!--<ul>-->
						<!--<li v-for="city in province" @click="selectCity('city', city.sub, city.name)" :class="{active: selectedcity == city.name}">{{city.name}}</li>-->
					<!--</ul>-->
				<!--</div>-->
				<!--<div class="leftThree">-->
					<!--<ul>-->
						<!--<li v-for="area in city" @click="selectCity('area', area.name, area.name)" :class="{active: selectedarea == city.name}">{{area.name}}</li>-->
					<!--</ul>-->
				<!--</div>-->
			</div>
		</div>
		<!--行业分类-->
		<div class="searchLayerCon guildLayer" v-show="hangYeToggle">
		    <div class="layerBack"></div>
		    <div class="searchLayer">
		        <div class="leftOne hangyeItem" style="width: 100%;">
		            <ul>
		                <li @click="selectHangYe(item)" :class="{active: selectedHangYe == item.code}" v-for="item in hangYeType">{{item.title}}</li>
		            </ul>
		        </div>
		        <!--<div class="leftTwo">-->
		            <!--<ul>-->
		                <!--<li>全部行业</li>-->
		                <!--<li>房屋建筑业</li>-->
		                <!--<li>土木工程建筑业</li>-->
		                <!--<li>建筑安装业</li>-->
		            <!--</ul>-->
		        <!--</div>-->
		    </div>
		</div>
		<!--更多筛选-->
    <div v-show="moreSearch" class="">
      <div class="layerBack"></div>
      <div class="searchLayer">
        <ul class="moreScreenList">
          <li>
            <h5 class="title">企业状态：
              <em class="arrow"></em>
            </h5>
            <div class="label">
              <!-- :class="{active:item.checked}" -->
              <span v-for="(item,index) in statusList" @click="selectedStatus = item.code" :class="{active: selectedStatus == item.code}" :key="index">{{item.title}}</span>
            </div>
          </li>
          <li>
            <h5 class="title">注册资本(万)：
              <em class="arrow"></em>
            </h5>
            <div class="label">
              <span v-for="item in moneyList" @click="selectedMoney = item.code" :class="{active: selectedMoney == item.code}">{{item.text}}</span>
            </div>
          </li>
          <li>
            <h5 class="title">成立年限：
              <em class="arrow"></em>
            </h5>
            <div class="label">
              <span v-for="item in yearList" @click="selectedYear = item.code" :class="{active: selectedYear == item.code}">{{item.text}}</span>

            </div>
          </li>
          <!--<li>-->
          <!--<h5 class="title">信用分：-->
          <!--<em class="arrow"></em>-->
          <!--</h5>-->
          <!--<div class="label">-->
          <!--<span v-for="(score,scoreIndex) in scoreList" :key="scoreIndex">{{score}}</span>-->
          <!--</div>-->
          <!--</li>-->
          <div v-if="isVip">
            <li>
              <h5 class="title">税务信用等级(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(level,levelIndex) in levelList" :key="levelIndex">{{level}}</span>
              </div>
            </li>
            <li>
              <h5 class="title">联系电话(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
              </div>
            </li>
            <li>
              <h5 class="title">联系邮箱(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
              </div>
            </li>
            <li>
              <h5 class="title">商标信息(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>

              </div>
            </li>
            <li>
              <h5 class="title">专利信息(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
              </div>
            </li>
            <li>
              <h5 class="title">著作权(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
              </div>
            </li>
            <li>
              <h5 class="title">失信信息(VIP 特权)：
                <em class="arrow"></em>
              </h5>
              <div class="label">
                <span v-for="(item,itemIndex) in ItemList" :key="itemIndex">{{item}}</span>
              </div>
            </li>
          </div>
        </ul>
        <div class="vipTip">
          <a href="javascript:;">开通VIP</a> 更多筛选特权</div>
        <div class="buttonBIg buttonBIgTwo">
          <a @click="remove" class="fl shallow" id="productBtn">重置</a>
          <a @click="submit" class="fr" id="nodesBtn">确定</a>
        </div>
      </div>
    </div>
    <!--排序-->
    <!--<div class="searchLayer" style="height: auto">-->
      <!--<ul class="moreScreenList" style="height: auto">-->
        <!--<li>-->
          <!--&lt;!&ndash;<h5 class="title">企业状态：&ndash;&gt;-->
            <!--&lt;!&ndash;<em class="arrow"></em>&ndash;&gt;-->
          <!--&lt;!&ndash;</h5>&ndash;&gt;-->
          <!--<div class="label">-->
            <!--&lt;!&ndash; :class="{active:item.checked}" &ndash;&gt;-->
            <!--<span v-for="(item,index) in statusList" @click="selectedStatus = item.code" :class="{active: selectedStatus == item.code}" :key="index">{{item.title}}</span>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import {
		Popup,
		InfiniteScroll,
		loading
	} from 'mint-ui';
	// import Vue from 'vue'


	// import { Popup } from 'vant';
	import {
		city
	} from './city.js'
	export default {
		components: {
			Header
		},
		data() {
			return {
        XYZM: false,
				cityData: city, //城市级联数据
        hangYeType: [{title: '全部行业'}].concat(this.$store.state.dicData.INDUSTRYPHY),//行业分类
        kw: this.$route.query.kw, //搜索页面传的关键字
				cityToggle: false,
        hangYeToggle: false,
				scrollerHeight: 0, //scroller高度
				province: [], //下拉数据
				city: [],
				area: [],
				selectedprovince: '', //选中数据
				selectedcity: '',
				selectedarea: '',
				selectedHangYe: '', //hangye
        selectedStatus: '', //状态
        selectedMoney: '', //注册资金
        selectedYear: '', //成立年限
				pageList: [],
        numFound: '',
				statusList: [{title: '不限', code: ''}].concat(this.$store.state.dicData.ENTSTATUS),//企业状态,
				moneyList: [
          {text: '不限', code: ''},
          {text: '0-100万', code: '0-100'},
          {text: '100-200万', code: '100-200'},
          {text: '200-500万', code: '200-500'},
          {text: '500-1000万', code: '500-1000'},
          {text: '1000万以上', code: '1000-'},
        ], // ["不限", "0-100万", "100-200万", "500-1000万", "200-500万", "1000万以上"],
				yearList: [
          {text: '不限', code: ''},
          {text: '1年内', code: '-1'},
          {text: '1-5年', code: '1-5'},
          {text: '15年以上', code: '15-'},
        ],
          //["不限", "1年内", "1-5年", "15年以上"],
				scoreList: ["不限", "60分以下", "60-70分", "85分以上"],
				levelList: ["不限", "A", "B", "M", "C", "D"],
				ItemList: ["不限", "有", "无"],
				loading: false,
				moreSearch: false,
				isVip: false,
				look: true,
        pageNo: 1,
        start: 0,
        rows: 10,
        isPripid: false,  //根据用户是否输入的PRIPID确定是否精准搜索
        selectedPro: '',
      }
		},
    computed: {
      scrollerStyle() {
        return {
          height: `${this.scrollerHeight}px`
        };
      },
      selectDOM: {
        get() {
          return (this.selectedprovince + this.selectedcity + this.selectedarea).replace(/不限/g, '');
        },
        set(val) {
          // this.selectedprovince
          //   = this.selectedcity
          //   = this.selectedarea = val;
        }
      },

    },
    methods: {
      getFDName(item) {
        return item.NAME;
      },
      getName(val) {
        console.log(val);
        // return val.replace(this.kw, `<span style="color: #e70000">${this.kw}</span>`);
        return val;
      },
      // refresh() {
      //   this.getData(res => {
      //     this.pageList = res.response.docs;
      //     this.$refs.my_scroller.finishPullToRefresh();
      //   })
      // },
      sProvince(item) {
        this.selectedPro = item.code;
        this.initData();
        this.cityToggle = false;
      },
      loadMore() {
        this.loading = true;
        this.pageNo ++;
        this.start = this.pageNo * this.rows - this.rows;
        this.getData((res) => {
          if (res.response.docs.length > 0) {
            this.pageList.push(...res.response.docs);
            // this.$refs.myscroller.finishInfinite(false);
            this.loading = false;
          }else {
            // this.$refs.myscroller.finishInfinite(true);
            this.loading = true;
            this.pageNo --;
          }

          console.log(this.pageList);
        })
      },
      getData(fn){
        //如果是信用码查出来的企业名称需要精确查询
        if (this.isPripid) {
          this.getPripidData(fn);
          return;
        }
        let fq = '';
        fq += this.selectDOM ? `DOM:${this.selectDOM}` : '';
        fq += this.selectedHangYe ? ((fq ? ' AND ' : '') + `INDUSTRYPHY:${this.selectedHangYe} `) : '';
        fq += this.selectedStatus ? ((fq ? ' AND ' : '') + `ENTSTATUS:${this.selectedStatus} `): '';
        this.$axios.get(`http://115.28.208.176:8888/solr/xyc/groupinfo/searchList?value=${this.kw}&key=ENTNAME%2CNAME%2CDOM%2COPSCOPE&queryType=all&pageNo=${this.pageNo}&entstatus=${this.selectedStatus}&capital=${this.selectedMoney}&year=${this.selectedYear}&province=${this.selectedPro}&industry=${this.selectedHangYe}`,
          // {params:{
          //   'q': `(ENTNAME:${this.kw || '*'} NAME:${this.kw || '*'}) `,
          //   fq: fq,
          //   start: this.start,
          //   rows: this.rows,
          //   'indent':'true',
          //   defType: 'edismax',
          //   mm: '50%',
          //   stopwords: true,
          //   pf: 'ENTNAME NAME DOM OPSCOPE',
          //   qf: 'ENTNAME^100 NAME^80 DOM^60 OPSCOPE^40',
          //   bf: 'product(LIULAN,10)^1000',
          //   lowercaseOperators: true,
          //     'wt':'json'}})
          {
            // value: this.kw,
            // key: 'ENTNAME,NAME,DOM,OPSCOPE',
            // queryType: 'all',
            // pageNo: this.pageNo,
            // entstatus: this.selectedStatus,
            // capital: '',
            // year: '',
            // province: this.selectDOM,
            // industry: this.selectedHangYe
          }, 1)
          .then(res=>{  //
            res.response = {};
            res.response.docs = res.page.solrResults;
            res.response.numFound = res.page.totalRecord;
            console.log(res);
            fn && fn(res);
        })
      },
      // delData(data) {
      //   data.map(item => {
      //     return {
      //       ENTNAME: item.aaa,
      //       NAME: item.aaa,
      //       PRIPID: item.aaa,
      //       ENTNAME: item.aaa,
      //     }
      //   })
      // },
      getPripidData(fn) {
        let fq = '';
        fq += this.selectDOM ? `DOM:${this.selectDOM}` : '';
        fq += this.selectedHangYe ? ((fq ? ' AND ' : '') + `INDUSTRYPHY:${this.selectedHangYe} `) : '';
        fq += this.selectedStatus ? ((fq ? ' AND ' : '') + `ENTSTATUS:${this.selectedStatus} `): '';
        this.$axios.post(`qst_entfind_djg/select`,
          {params:{
              'q': 'ENTNAME: \"' + this.kw + '\"',
              fq: fq,
              start: this.start,
              rows: this.rows,
              'indent':'true',
              defType: 'edismax',
              stopwords: true,
              pf: 'ENTNAME NAME DOM OPSCOPE',
              qf: 'ENTNAME^100 NAME^80 DOM^60 OPSCOPE^40',
              bf: 'product(LIULAN,10)^1000',

              'wt':'json'}}).then(res=>{  //济南奥凯机械制造有限公司
          fn && fn(res);
        })
      },
      citySearch() {
        this.cityToggle = !this.cityToggle;
      },
      search() {
        this.moreSearch = !this.moreSearch
      },
      goDetail (item) {
        item.ENTNAME = item.ENTNAME.replace(/<em style=\"color: red;\">/g, "").replace(/<\/em>/g, "");
        item.NAME = item.NAME.replace(/<em style=\"color: red;\">/g, "").replace(/<\/em>/g, "");
        this.setPRIPID(item.ENTNAME);
        this.$store.dispatch('setENTNAME', item.ENTNAME);
        this.$store.dispatch('setPRIPID', item.PRIPID);
        this.$store.dispatch('setNAME', item.NAME);
        this.$router.push({name: 'company', params: item});
      },
      goPDF(item) {
        item.ENTNAME = item.ENTNAME.replace(/<em style=\"color: red;\">/g, "").replace(/<\/em>/g, "");
        item.NAME = item.NAME.replace(/<em style=\"color: red;\">/g, "").replace(/<\/em>/g, "");
        this.setPRIPID(item.ENTNAME);
        this.$store.dispatch('setENTNAME', item.ENTNAME);
        this.$store.dispatch('setPRIPID', item.PRIPID);
        this.$store.dispatch('setNAME', item.NAME);
        this.$router.push({name: 'creditPDFs', params: item});
      },
      //储存统一社会信用码
      setPRIPID(name) {
        if (name.indexOf('（') > 0) {
          name = name.replace(/（/g, '\\(').replace(/）/g, '\\)');
        }
        this.$axios.post(`tb_tyshxydm_tran/select`,
          {params:{
              'q': `entname:${name}`,
              'indent':'true',
              'wt':'json'}}).then(res=>{  //济南奥凯机械制造有限公司
          if (res.response.docs.length) {
            this.$store.dispatch('setENTCODES', res.response.docs[0]);
          } else {
            this.$store.dispatch('setENTCODES', {});
          }
        })

      },
      // getYear() {
      //   return new Date().getFullYear();
      // },
      // getYear() {
      //   let val = '20180208'
      //   let myDate = new Date();
      //   let _year = val.substring(0,4);
      //   let _month = val.substring(4,6);
      //   let _day = val.substring(6,9);
      //   let year = myDate.getFullYear() - _year - 1;
      //   let month = myDate.getMonth() - _month - 1;
      //   let day = myDate.getDate() - _day - 1;
      //   if (_month < month || _month == month && _day <= day) {
      //     year ++;
      //   }
      //   return year;
      // },
      remove() {
        this.moreSearch = false
        this.selectedStatus = '';
        this.selectedMoney = '';
        this.initData()
      },
      submit() {
        this.moreSearch = false
        this.initData()
      },
      //选择省市区
      selectCity(type, obj, text) {
        this[type] = obj;
        this[`selected${type}`] = text;
        switch (type) {
          case 'province':
            this['selectedcity'] = ''; this['selectedarea'] = ''; this.city = []; this.area = [];
            if (text == '不限') {
              this.cityToggle = false;
              this[`selected${type}`] = '';
              this.initData();
              return ;
            }
            break
          case 'city':
            this['selectedarea'] = ''; this.area = [];
            if (!obj) {
              this.cityToggle = false;
              console.log(this.selectDOM);
              this.initData();
            }
            if (text == '不限') {
              this[`selected${type}`] = '';
              this.cityToggle = false;
              this.initData();
              return ;
            }
            break
          case 'area':
            this.cityToggle = false;
            console.log(this.selectDOM);
            this.initData();
            break
        }
      },
      selectHangYe(item) {
        this.selectedHangYe = item.code || '';
        this.hangYeToggle = false;
        this.initData();
      },
      initData() {
        this.start = 0;
        this.pageNo = 1;
        this.getData((res) => {
          this.pageList = res.response.docs;
          this.numFound = res.response.numFound;
          // this.$refs.myscroller.finishInfinite(true);
        });
      },
      getENTNAMEkw() {
        this.$axios.post(`tb_tyshxydm_tran/select`,
          {params:{
              'q': `credcode:${this.kw}`,
              'indent':'true',
              'wt':'json'}}).then(res=>{  //济南奥凯机械制造有限公司
          if (res.response.docs.length) {
            this.kw = res.response.docs[0].entname;
            this.isPripid = true;
          }
          this.initData();
        })
      },
    },
    watch: {
      cityToggle(val) {
        console.log(val)
        if (val) {
          this.hangYeToggle = false;
          this.moreSearch = false;
        }
      },
      hangYeToggle(val) {
        if (val) {
          this.cityToggle = false;
          this.moreSearch = false;
        }
      },
      moreSearch(val) {
        if (val) {
          this.hangYeToggle = false;
          this.cityToggle = false;
        }
      },
    },
    created() {
		  this.XYZM = this.$route.query.XYZM;
      console.log(this.XYZM);
      this.kw = this.$route.query.kw;
		  //如果输入的是社会统一信用码查询，先根据输入查找ENTNAME
		  if (/^[0-9a-zA-Z]+$/g.test(this.kw)) {
		    this.getENTNAMEkw();
      } else {
        this.initData();
      }
      window.scrollTo(0, 0);
    },
    mounted() {
      let height = $(window).height();
      let fontSize = parseFloat($('html')[0].style.fontSize);
      this.scrollerHeight = height - fontSize * 3.6
    }
  }
</script>

<style scoped>
  .listBox {
    margin-top: 3.6rem;
  }

  /deep/ .mint-popup-top {
    width: 100%;
    height: 10rem;
  }
  .pageListBox{
    /* border-bottom: .2rem solid #f3f5f7 */
    width: 100%;
    display: block;
    background: #fff;
    margin-bottom: .2rem;
    overflow: hidden;
  }
  .scroller-box{
    position: relative;
    width: 100%;
    top: 3.4rem;
  }
  .hangyeItem{
    width: 100%;
  }
  .searchListBottom .labelList em{
    display:inline-block!important;
  }
  .searchListBottom .labelList .emBlock{
    display: block;
  }
</style>
