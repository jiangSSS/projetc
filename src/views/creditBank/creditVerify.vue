<template>
	<div class="container">
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
				<div class="footListTip tc bg-f4f4f4">提交查询申请，需要验证本人身份<br />请在10分钟内回答一下问题，您还有9分57秒的答题时间</div>
				<div class="dis-ib creditVerify">
					<dl class="swiper-slide">
						<dt>1. 2013年01月只2015年10月期间，您办理的所有正在使用的信用卡中，最高授信额度为多少？</dt>
						<dd>15001-25000</dd>
						<dd class="errorRed">25001-35000</dd>
						<dd>35001-45000</dd>
						<dd>45001-55000</dd>
						<dd>以上都不是</dd>
					</dl>
					<dl class="swiper-slide">
						<dt>2. 您于2015年09月在哪家机构办理过信用卡？</dt>
						<dd>中信银行</dd>
						<dd class="errorRed">光大银行</dd>
						<dd>中国邮政</dd>
						<dd>招商银行</dd>
						<dd>工商银行</dd>
					</dl>
					<div class="buttonBIg mtb3">
						<a @click="$router.push('/creditVerifyWait')">提交</a>
					</div>
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
		methods: {},
		created() {}
	}
</script>

<style scoped>

</style>
