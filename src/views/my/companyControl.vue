<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div>
			<ul class="HeadlinesList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="itemAll" v-for="(item,index) in pageList" :key="index">
					<!-- <a href="javascript:;" class="focusItem"> -->
						<!-- <div class="photo fl mrb3">
							<img :src="item.img">
						</div>
						<h5 class="title">{{item.title}}</h5>
						<p class="info">{{item.info}}</p>
						<div class="bottom">
							<span class="time">{{item.time}}</span>
							<span class="number">
								<i class="iconfont">&#xe612;</i>
								<em>{{item.lookNum}}人阅读</em>
							</span>
						</div> -->
						<div class="clearfix companyLine">
							<span class="company fl" @click="goDetail(item)">{{item.enterpriseName}}</span><span class="cancle fr" @click="unMonitor(item)">取消监控</span>
						</div>
					<!-- </a> -->
				</li>
			</ul>
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
				pageList:[]
			}
		},
		methods: {
			loadMore(){

			},
			getData(){
        this.$axios.get(this.$config.URI(`rest/monitor/myMonitors`), {}, 1).then(res=>{
          this.pageList = res.rows;
        })
			},
      //取消监控
      unMonitor(item) {
        this.$axios.post(this.$config.URI(`rest/monitor/unMonitor`), {enterpriseId: item.enterpriseId}, 1).then(res=>{
          Toast('取消成功');
          this.getData();
        })
      },
      goDetail(item) {
			  this.$store.dispatch('setyujingInfo', item);
			  this.$store.dispatch('setENTNAME', item.enterpriseName);
			  this.$store.dispatch('setPRIPID', item.enterpriseId);
			  this.$router.push({name: 'myControl', params: {ENTNAME: item.enterpriseName, PRIPID: item.enterpriseId}});
      }
		},
		created() {
		  this.getData()
    }
	}
</script>

<style scoped>
	.focusItem{
		padding: .5rem;
		/* border-bottom: .3rem solid #f3f5f7 */
		margin-bottom: .3rem;
		background: #fff;
	}
	.HeadlinesList{
		margin-top: 1.3rem;
	}
	.companyLine{
		
		padding: .5rem .5rem;
		/* border-bottom: .2rem solid #f3f5f7; */
		/* border-top: 1px solid #f00 */
		margin-bottom: .2rem;
		background: #fff;
	}
	.itemAll:first-child{
		border-top: 1px solid #f3f5f7
	}
	.company{
		font-weight: 700;
		font-size: .44rem;
		color: #444;
	}
	.cancle{
		font-size: .44rem;
		font-weight: 700;
		color: #999;
	}
</style>
