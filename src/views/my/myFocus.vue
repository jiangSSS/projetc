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
							<span class="company fl" @click="goDetail(item)">{{item.enterpriseName}}</span><span class="cancle fr" @click="unStar(item.enterpriseId)">取消关注</span>
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
      //rest/star/myStars
			getData(){
        this.$axios.get(this.$config.URI(`rest/star/myStars`), {}, 1).then(res=>{
          this.pageList = res.rows;
        })
			},
      unStar(id) {
        this.$axios.post(this.$config.URI(`rest/star/unStar`), {enterpriseId: id}, 1).then(res=>{
          Toast('取消关注成功');
          this.getData();
        })
      },
      goDetail(item) {
        this.setPRIPID(item.enterpriseName);
        this.$store.dispatch('setPRIPID', item.enterpriseId);
			  this.$store.dispatch('setENTNAME', item.enterpriseName);
			  this.$router.push('/company');
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
              'wt':'json'}}).then(res=>{
          if (res.response.docs.length) {
            this.$store.dispatch('setENTCODES', res.response.docs[0]);
          } else {
            this.$store.dispatch('setENTCODES', {});
          }
        })
      },
		},
		created() {
		  this.getData();
    }
	}
</script>

<style scoped>
	.focusItem{
		padding: .5rem;
		background: #fff;
	}
	.HeadlinesList{
		margin-top: 1.3rem;
	}
	.companyLine{	
		padding: .4rem .5rem;
		margin-bottom: .2rem;
		background: #fff;
	}
	.itemAll:first-child{
		border-top: 1px solid #f3f5f7
	}
	.company{
		font-size: .44rem;
		font-weight: 700;
		color: #444;
	}
	.cancle{
		font-size: .44rem;
		color: #999;
	}
</style>
