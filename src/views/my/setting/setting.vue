<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
				<div class="setTop">
					<img src="/static/images/g-08.png">
					<p>v1.0.0</p>
				</div>
				<ul class="setList">
					<li class="version"><a @click="update" href="javascript:;">版本更新</a></li>
					<li><a @click="$router.push('/about')">关于信用查</a></li>
					<li class="cache"><a href="javascript:;">清除缓存<em class="right">100KB</em></a></li>
					<li><a @click="$router.push('/feedback')">意见反馈</a></li>
				</ul>
				<div class="buttonBIg buttonBIgWidth">
					<a href="javascript:;" @click="loginOut">退出登录</a>
				</div>
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
			return {}
		},
		methods: {
			update() {
				this.$axios.get(this.$config.URI(`rest/version/newestVersion?type=1&versionNo=0.0.1`), {}, 1).then(res => {
					Toast(res.message);
				})
			},
      loginOut() {
			  if (!this.$store.state.userInfo) {
			    Toast('您当前没有登录');
			    return ;
        }
        this.$axios.get(this.$config.URI(`logout`), {}, 1).then(res => {
          this.$store.dispatch('setUserInfo', false);
          Toast('退出成功');
          this.$router.push('my');
        })
      }
		},
		created() {}
	}
</script>

<style scoped>
	/deep/ .header-title{
		background: #e70000!important;
		color: #fff!important;
		height: 1.5rem;
		font-size: .5rem;
		border-bottom: none;
	}
	/deep/ .mint-header-title{
		height: .8rem!important;
		line-height: .8rem!important;
	}
  a:hover{
    color: #333;
  }
</style>
