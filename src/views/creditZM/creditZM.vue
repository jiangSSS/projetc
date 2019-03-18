<template>
	<div>
		<!-- <Header></Header> -->
		<!-- <img src="/static/images/icon-35.png" class="logo"> -->
		<header class="mui-bar mui-bar-nav header">
			<!--<a @click="$router.back()" class="iconfont headerIco headLeft">&#xe792;</a>-->
      <form action="" @click="initData">
        <div class="headerSerach headerSerachCenter2 topSearch">
          <input type="search" class="headerSerachText" v-model="kw" placeholder="企业名称、信用代码、姓名等">
          <button class="headerSerachBtn" @click="initData"></button>
        </div>
      </form>
		</header>

		<!--<div class="statisticsResult statisticsResult2">为你找到<i class="c-e70016">1258</i>家公司</div>-->
    <div class="statisticsResult statisticsResult2">为你找到 <i class="c-e70016">{{numFound}} </i>家公司</div>
    <div class="statisticsResultRight statisticsResult2">
      <!--当前 <i class="c-e70016">{{Math.ceil(numFound/rows) == 0 ? 0 : pageNo}}/{{Math.ceil(numFound/rows)}} </i>页-->
    </div>

		<!--<div id="creditZMList" class="mui-scroll-wrapper mui-active searchListMargin searchListMargin2">-->
			<!--<div class="mui-scroll">-->
        <div v-infinite-scroll="loadMore" class="scroller-box"
             infinite-scroll-immediate-check=false
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
					<div class="pageListBox" v-for="(item,index) in pageList" :key="index" >
						<div class="searchListTop"  @click="goDetail(item)">
							<div class="photo"><img src="/static/images/logo/logo3.png"></div>
							<h5 class="title">{{item.ENTNAME}}</h5>
							<span class="label">{{item.label}}</span>
						</div>
						<div class="searchListBottom">
							<span class="labelList">
								<em>法定代表人</em>
								<i class="c-e70016">{{item.NAME}}</i>
							</span>
							<span class="labelList">
								<em>注册资本</em>
								<i>{{item.REGCAP}}</i>
							</span>
							<span class="labelList">
								<em>成立日期</em>
								<i>{{item.ESDATE}}</i>
							</span>
						</div>
						<div class="creditLine"></div>
						<div class="creditBtton" @click="goPDF(item)">信用证明</div>
					</div>
				</div>
			<!--</div>-->
		<!--</div>-->
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Footer from "@/components/Footer.vue";
	export default {
		components: {
			Header,
			Footer
		},
		data() {
			return {
        kw: '', //搜索关键字
        pageList: [],
				loading: false,
        pageNo: 1,
        start: 0,
        rows: 10,
        numFound: 0,
			}
		},
    computed: {

    },
		methods: {
			loadMore() {
        this.pageNo ++;
        this.start = this.pageNo * this.rows - this.rows;
        this.getData((res) => {
          if (res.response.docs.length > 0) {
            this.pageList.push(...res.response.docs);
            // this.$refs.myscroller.finishInfinite(false);
            // this.loading = false;
          }else {
            // this.$refs.myscroller.finishInfinite(true);
            this.loading = true;
            this.pageNo --;
          }

          console.log(this.pageList);
        })
			},
			getData(fn) {
        this.$axios.post(`qst_entfind_djg/select`,
          {params:{
              'q': `ENTNAME:${this.kw || '*'} OR PRIPID:${this.kw || '*'} OR NAME:${this.kw || '*'}`,//AND DOM:${this.selectDOM}?济南市天桥区太平庄工业园
              start: this.start,
              rows: this.rows,
              'indent':'true',
              'wt':'json'}}).then(res=>{  //济南奥凯机械制造有限公司
          fn && fn(res);
        })
			},
      initData(e) {
			  e ? e.preventDefault() : '';
			  this.start = 0;
			  this.pageNo = 1;
        this.getData(res => {
          this.pageList = res.response.docs;
          this.numFound = res.response.numFound;
        })
      },
      goDetail(item) {
        this.$store.dispatch('setENTNAME', item.ENTNAME);
        this.$store.dispatch('setPRIPID', item.PRIPID);
        this.$store.dispatch('setNAME', item.NAME);
        this.$router.push({name: 'company'});
      },
      goPDF(item) {
        this.$store.dispatch('setENTNAME', item.ENTNAME);
        this.$store.dispatch('setPRIPID', item.PRIPID);
        this.$store.dispatch('setNAME', item.NAME);
        console.log(item);
        this.$router.push({name: 'creditPDFs', params: item});
      }
		},
		created() {
			this.initData();
		}
	}
</script>

<style scoped>
	.pageListBox {
		background: #fff;
		border-bottom: .2rem solid #f3f5f7;
	}

	.searchListMargin {
		margin-bottom: 1.6rem;
	}
  .topSearch{
    left: .35rem;
  }
  .scroller-box{
    position: relative;
    width: 100%;
    top: 2.3rem;
  }
</style>
