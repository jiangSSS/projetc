<template>
	<div class="container">
		<Header></Header>
        <section class="wb100 dis-ib conTop">
    <div class="dis-ib creditVerifyWait tc">
		<img src="/static/images/Verify.png" class="isA">    
		<h3>报告申请中</h3>
		<p>征信中心将在24小时内，把申请结果短信发送到您注册征信账号时预留的手机号。收到身份验证码后再来取报告！</p>
        <div class="buttonBIg mtb10">
            <a @click="$router.push('/home')">完成</a>
        </div>
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
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	
</style>
