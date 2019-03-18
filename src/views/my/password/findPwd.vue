<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<section class="wb100 dis-ib conTop">
			<!--    <div class="loginTop">
                <p class="label">你好，欢迎加入</p>
                <img src='/static/images/icon-16.png' class="loginImg">
                <span @click="$router.push('/login')" class="loginHref">
                    <img src='/static/images/icon-17.png'>
                    <em>登录</em>
                </span>
            </div> -->
			<div class="loginList">
				<ul :model="formData">
					<li>
						<input type="text" v-model="formData.mobile" placeholder="请输入手机号码">
					</li>
					<li>
						<input class="codeInput fl" type="text" v-model="formData.code" placeholder="请输入短信验证码">
						<span class="code fl">获取验证码</span>
					</li>
					<li>
						<input type="text" v-model="formData.newPwd" placeholder="设置新密码">
					</li>
				</ul>
			</div>
			<div class="wb100 dis-ib tc mtb5">
				<a @click="submit" class="BtnSmall">提交</a>
			</div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	export default {
		components: {
			Header
		},
		data() {
			return {
				formData: {
					mobile: "",
					code: "",
					newPwd: ""
				}
			}
		},
		methods: {
			submit() {
				this.formData.mobile = ""
				this.formData.code = ""
				this.formData.newPwd = ""
				let instance = Toast('修改成功');
				setTimeout(() => {
					instance.close();
				}, 2000);
			}
		},
	}
</script>

<style scoped>
	.loginList li {
		/* border: none */
		    border-bottom: 1px solid #f5f5f5;
	}

	.submit {
		background: #e70000;
		border-color: #e70000
	}
	.codeInput{
		width: 65%;
	}
	.code{
    display: inline-block;
    width: 35%;
    height: .7rem;
    color: #fff;
    text-align: center;
    line-height: .7rem;
    border-radius: 3px;
    background: #e50015;
}

</style>
