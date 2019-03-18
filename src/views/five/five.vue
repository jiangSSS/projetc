<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<section class="wb100 dis-ib conTop">
			<div class="loginList">
				<div class="Five tc">
					<img src="/static/images/logo/FiveLogo.jpg">
						<dl class="swiper-slide">
						<dd id="radio" class="errorGray">城镇职工</dd>
						<dd id="radio">城乡居民</dd>
					</dl>
					<!-- <van-radio-group v-model="radio">
						<van-radio class="fl" name="1">城镇职工</van-radio>
						<van-radio class="fl" name="2">城乡居民</van-radio>
					</van-radio-group> -->
				</div>
				<ul>
					<li>
						<input type="text" placeholder="请输入用户名">
					</li>
					<li>
						<input type="text" placeholder="请输入密码">
					</li>
					<li class="verifica">
						<input type="text" placeholder="请输入验证码">
						<img src="/static/images/code.jpg" class="codeImg fr">
					</li>
					<li class="verifica">
						<input type="text" placeholder="请输入手机验证码">
						<span class="code">获取验证码</span>
					</li>
				</ul>
			</div>
			<div class="loginLabel">
				<a class="right">忘记密码？</a>
			</div>
			<div class="wb100 dis-ib tc mtb5">
				<a class="BtnSmall" @click="$router.push('/fiveQuery')">登录</a>
				<a class="BtnSmall">注册</a>
			</div>
			<!-- <div class="loginLabel">
            <span class="left"><i class="iconfont">&#xe9e9;</i><em>注：我已阅读并同意<a>《信用查服务协议》</a></em></span>
        </div>  -->
			<div class="loginLabel">
				<span class="left" @click="checked = false" v-if="checked"><i class="iconfont">&#xe9e9;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
				<span class="left" @click="checked = true" v-else><i style="color: #f00;" class="iconfont">&#xe9ed;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
			</div>
		</section>
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
				checked: true,
				radio: "1"
			}
		},
		methods: {},
		created() {}
	}
</script>

<style scoped>

</style>
