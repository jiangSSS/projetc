<template>
	<div>
		<footer class="footer">
			<router-link to="/creditPDFs" class="tab-item" :class="{active:$route.name === 'creditPDFs'}">
				<span class="iconfont footProve"></span>
				<p>信用证明</p>
			</router-link>
			<router-link to="/creditReturns" class="tab-item" :class="{active:$route.name === 'creditReturns'}">
				 <span class="iconfont footReport"></span>
				<p>信用报告</p>
			</router-link>
			<a class="tab-item" @click="star" :class="{active: is}">
				 <span class="iconfont footFollow"></span>
				<p>{{isStar ? '取消关注' : '关注'}}</p>
			</a>
			<a class="tab-item" @click="monitor" :class="{active: is}">
				 <span class="iconfont footMonitor"></span>
				<p>{{isJKong ? '取消监控' : '监控'}}</p>
			</a>		
		</footer>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
        // PRIPID: this.$store.state.PRIPID,
        // ENTNAME: this.$store.state.ENTNAME,
        isStar: false,
        // isJKong: false,
        is: false,
      }
    },
    props: [
      'isJKong',
      'monitor',
      'unMonitor',
    ],
    methods: {
      star() {
        if (this.isStar) {
          this.unStar();
          return;
        }
        this.$axios.post(this.$config.URI(`rest/star/star`), {enterpriseId: this.$store.state.baseInfo.PRIPID, enterpriseName: this.$store.state.baseInfo.ENTNAME}, 1).then(res=>{
          Toast('关注成功');
          this.isStar = true;
        })
      },
      //是否已经关注
      getIsStar() {
        this.$axios.post(this.$config.URI(`rest/star/isStared`), {enterpriseIds: this.$store.state.baseInfo.PRIPID}, 1).then(res=>{
          this.isStar = res.data[this.$store.state.baseInfo.PRIPID];
        })
      },
      unStar() {
        this.$axios.post(this.$config.URI(`rest/star/unStar`), {enterpriseId: this.$store.state.baseInfo.PRIPID}, 1).then(res=>{
          Toast('取消关注成功');
          this.isStar = false;
        })
      },
    },
    created() {
      this.$store.state.userInfo ? this.getIsStar() : '';
    }
  }
</script>

<style >
	/*底部菜单*/
	.footer{ width: 100%; position: fixed; bottom: 0; left: 0; background: #fff; box-shadow: 0px 0px 5px #eee; height:1.5rem; z-index: 20;}
	.footer a{ width: 25%; float: left; text-align: center; color: #ccc;}
	.footer a span{ font-size:.7rem; position:relative; width: 100%; display: inline-block; float: left; padding-top: .11rem; height: .73rem; margin: .12rem 0 .05rem; }
	.footer a p{ font-size:.32rem;color:#888;float:left; width:100%;}
	.footer a.active{ color:#cb0013}
	.footer a.active p{ color:#cb0013}
	.footer a .footProve{ background: url(/static/images/foot-1.png) center center no-repeat;background-size:.62rem;}
	.footer a.active .footProve{background: url(/static/images/foot-1xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footReport{ background: url(/static/images/foot-2.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footReport{background: url(/static/images/foot-2xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footFollow{ background: url(/static/images/foot-3.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footFollow{background: url(/static/images/foot-3xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footMonitor{ background: url(/static/images/foot-4.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footMonitor{background: url(/static/images/foot-4xz.png) center center no-repeat;background-size: .62rem;}
	
	.footer a .footHome{ background: url(/static/images/foot-5.png) center center no-repeat;background-size:.62rem;}
	.footer a.active .footHome{background: url(/static/images/foot-5xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footTestify{ background: url(/static/images/foot-6.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footTestify{background: url(/static/images/foot-6xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footHeadlines{ background: url(/static/images/foot-7.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footHeadlines{background: url(/static/images/foot-7xz.png) center center no-repeat;background-size: .62rem;}
	.footer a .footMy{ background: url(/static/images/foot-8.png) center center no-repeat;background-size: .62rem;}
	.footer a.active .footMy{background: url(/static/images/foot-8xz.png) center center no-repeat;background-size: .62rem;}
</style>
