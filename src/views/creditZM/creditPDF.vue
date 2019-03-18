<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="statisticsResult statisticsResult2 credited credit">
			<h5 class="title">订单：小米科技公司信用证明PDF</h5>
		</div>
		<div class="searchListMargin2">
			<!-- <div class="creditPDF"></div> -->
			<img class="creditPDF" @click="$router.push('/creditPDFs')" src="/static/images/pic-6.jpg"/>
			<div class="creditEmail">
				<input type="email" placeholder="填写邮箱地址">
				<button id="toastBtn" type="button" class="mui-btn Creditbotton fr">发送邮箱</button>
			</div>
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
		methods:{},
		created(){}
	}
</script>

<style scoped>
	.credited{
		margin: 0% 0% 2%!important;
	}
</style>
