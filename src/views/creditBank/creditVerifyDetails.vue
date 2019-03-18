<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
         <section class="wb100 dis-ib conTop">
        <div class="foodSearch credit">
            <input type="text" class="foodSearchText" placeholder="请填写征信查询码">
        </div>
        <div class="creditVerifyDetails">征信中心将在24小时内，把申请结果短信发送到您注册征信账号时预留的手机号。收到身份验证码后再来取报告！ </div>  
        <div class="creditVerifyWait">
        <div class="buttonBIg mtb10">
            <a href="javascript:;">查看征信报告</a>
        </div></div>
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
