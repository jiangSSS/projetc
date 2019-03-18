<template>
	<div class="container">
		<Header v-bind:isBack="isBack"></Header>
		<div class="marginBottom">
			<div class="headerBox clearfix">
				<img src="/static/images/user.png" class="userImg fl">
				<div class="fl">
					<p class="title">{{userInfo.name || '欢迎来到信用查'}}</p>
					<p class="vipBox"><img src="/static/images/vip.png" class="vip"> <span class="vipDesc">升级为VIP</span></p>
				</div>
				<div v-if="!isLogin" class="login fr" @click="$router.push('/login')">登录/注册</div>
			</div>
			<ul class="indexNavBox">
				<li>
					<div @click="goUserInfo">
						<img src="/static/images/icon-54.png">
						<p>个人信息</p>
					</div>
				</li>
				<li>
					<div @click="goEditPwd">
						<img src="/static/images/icon-55.png">
						<p>密码设置</p>
					</div>
				</li>
				<!--        <li>
			        <router-link :to="{name:'home'}">
			            <img src="/static/images/icon-56.png">
			            <p>我的订单</p>
			        </router-link>
			    </li> -->
				<li>
					<router-link :to="{name:'myFocus'}">
						<img src="/static/images/icon-57.png">
						<p>我的关注</p>
					</router-link>
				</li>
				<li>
					<!--<router-link :to="{name:'myControl'}">-->
					<router-link :to="{name:'companyControl'}">
						<img src="/static/images/icon-58.png">
						<p>我的监控</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'myCredit'}">
						<img src="/static/images/icon-59.png">
						<p>我的信用</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'messageCenter'}">
						<img src="/static/images/icon-60.png">
						<p>消息中心</p>
					</router-link>
				</li>
				<!-- <li>
			        <router-link :to="{name:'home'}">
			            <img src="/static/images/icon-61.png">
			            <p>发票管理</p>
			        </router-link>
			    </li> -->
				<li>
					<router-link :to="{name:'attestationList'}">
						<img src="/static/images/icon-53.png">
						<p>企业空间管理</p>
					</router-link>
				</li>
			</ul>
			<img src="/static/images/setting.png" class="setting" @click="$router.push('/setting')">
			<div class="shareBox">
				<img src="/static/images/share.png" class="share">
				<span class="share1">1</span>
				<span class="share2">2</span>
				<span class="share3">3</span>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "@/components/Footer.vue";
	import Header from "@/components/Header.vue"
	export default {
		components: {
			Footer,
			Header
		},
		data() {
			return {
        isBack: true,
        isLogin: false,
        userInfo: {}
			}
		},
    methods: {
      getUserInfo() {
        this.$axios.get(this.$config.URI(`rest/user/loginUser`), {}, 1).then(res=>{
          // Toast(res.message);
          // this.$router.push({name: 'my'});

          this.isLogin = res.data ? true : false;
          this.userInfo = Object.assign({}, this.userInfo, res.data);
        })
      },
      goUserInfo() {
        if (this.$store.state.userInfo) {
          this.$router.push({name:'userInfo'});
        } else {
          //未登录跳转登录作用，无意义
          this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1)
        }
      },
      goEditPwd() {
        if (this.$store.state.userInfo) {
          this.$router.push({name:'editPwd'});
        } else {
          //未登录跳转登录作用，无意义
          this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1)
        }
      }
    },
    created() {
		  this.getUserInfo();
    }
	}
</script>

<style scoped>
	.headerBox {
		border-bottom: 3px solid #f3f5f7;
		margin-top: 1.3rem
	}

	.userImg {
		width: 2.3rem;
		height: 2.3rem;
		margin: .5rem
	}

	.title {
		color: #333;
		margin-top: .6rem;
    font-size:.5rem;font-weight:300
	}

	.vipBox {
		margin-top: .5rem
	}

	.vip {
		width: .5rem;
	}

	.vipDesc {
		color: #ff6000
	}

	.login {
		background: #e70000;
		color: #fff;
		padding: .15rem .4rem;
		border-radius: 6%;
		margin: 1.7rem .4rem 0 0;
	}

	/*  */
	.iconItem {
		text-align: center;
		padding: .3rem;
		display: inline-block;
	}

	.icon {
		width: 1.4rem;
	}

	.iconTitle {
		display: inline-block
	}

	/* -------------------------- */
	.indexNavBox {
		width: 100%;
		display: block;
		overflow: hidden;
		border-bottom: 3px solid #f3f3f3;
		background: #fff
	}

	.indexNavBox li {
		width: 25%;
		float: left;
		border-bottom: 1px solid #f3f3f3;
		text-align: center;
		height: 2.7rem;
	}

	.indexNavBox li img {
		width: .88rem;
		height: .88rem;
		margin-top: .54rem;
		margin-bottom: .05rem
	}

	.indexNavBox li p {
		color: #575757;
		font-size: .4rem
	}

	.setting {
		width: 100%;
		vertical-align: middle
	}

	.iconfont {font-size: .6rem}
	.shareBox {background: #f0f1f5;position: relative;}
	.shareBox span {opacity: 0;}
	.share1 {position: absolute;display: inline-block;top: 1.85rem;left: 3rem;width: 1.2rem;height: 1.2rem;}
	.share2 {position: absolute;display: inline-block;top: 1.85rem;left: 5.4rem;width: 1.2rem;height: 1.2rem;}
	.share3 {position: absolute;display: inline-block;top: 1.85rem;left: 7.9rem;width: 1.2rem;height: 1.2rem;}
	.share {width: 100%}
</style>
