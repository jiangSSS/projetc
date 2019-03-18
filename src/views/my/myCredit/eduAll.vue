<template>
	<div class="container marginTop">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="clearfix eduListBox">
			<li @click="$router.push('/edu')" class="eduBox fl">
				<img src="/static/images/icon-49.png">
				<p>个人学历查询</p>
			</li>
			<li @click="$router.push('/companyEdu')" class="eduBox fl">
				<img src="/static/images/icon-49.png">
				<p>企业学历查询</p>
			</li>
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
	.eduListBox{
		margin-top: 3rem;
	}
	.eduBox{
		text-align: center;
		width: 50%;
	}
</style>
