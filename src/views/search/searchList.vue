<template>
	<div>
		<header class="mui-bar mui-bar-nav header">
		    <a @click="goBack" class="iconfont headerIco headLeft">&#xe792;</a>
      <form action="#" @submit="search">
        <div class="headerSerach headerSerachCenter2">
          <input type="search" class="headerSerachText" v-model="kw" placeholder="企业名称、信用代码、姓名等">
          <button class="headerSerachBtn"></button>
        </div>
      </form>
		</header>

		<section class="wb100 dis-ib conTop">
			<div class="hotSearch">
				<span href="javascript:;" class="hotSearchTit">最近搜索 <span class="del" @click="delHistory"></span></span>
				<div class="hotSearchList">
					<a v-for="item in $store.state.searchHistory" v-if="item.type == searchType || !searchType" @click="$router.push({name: 'search', query: {kw: item.text, XYZM: XYZM}})">{{item.text}}</a>
					<!--<a @click="$router.push('/search')">腾讯科技</a>-->
				</div>
			</div>

			<!--<div class="hotSearch">-->
				<!--<a href="javascript:;" class="hotSearchTit">浏览历史</a>-->
				<!--<div class="hotSearchHistory">-->
					<!--<a @click="$router.push('/search')">小米科技公司</a>-->
					<!--<a @click="$router.push('/search')">腾讯科技</a>-->
				<!--</div>-->
			<!--</div>-->


		</section>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        XYZM: '',
        kw: '', //搜索关键字
        //搜索历史
        // searchHistory: this.$store.state.searchHistory,
        searchType: this.$store.state.searchType,
      }
    },
    methods: {
      search(e) {
        e.preventDefault();
        let flag = true;
        this.$store.state.searchHistory.forEach(item => {
          if (item.text === this.kw) {
            flag = false;
            return ;
          }
        })
        flag && this.kw ? this.$store.dispatch('setSearchHistory', {text: this.kw, type: this.searchType}) : '';
        this.$router.push({name: 'search', query: {kw: this.kw, XYZM: this.XYZM}});
      },
      goBack() {
        if (this.$route.params.flag == 'search') {
          this.$router.go(-1);
        } else {
          this.$router.push('/');
        }
      },
      delHistory() {
        this.$store.dispatch('removeSearchHistory');
        console.log(this.$store.state.searchHistory);
      }
    },
    created() {
      // if (this.$route.params.type) {
      //   this.$store.dispatch('setXYZM', true);
      // }
      this.XYZM = this.$route.params.XYZM;
      console.log(this.XYZM);
    }
  }
</script>

<style>
  .hotSearchTit:before{
    content: '';
    top: 0;
    left: 0;
  }
  .del:before{
    content: '\E60D';
    color: #999;
    font-size: .4rem;
    position: absolute;
    right: 0%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-right: .3rem;
  }
</style>
