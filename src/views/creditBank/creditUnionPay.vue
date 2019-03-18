<template>
	<div class="container">
		<Header></Header>
        <div>
             <section class="wb100 dis-ib conTop creditBank">
        <ul>
        	<li><input type="text" placeholder="请填写银联验证码" class="creditInput"><span class="code fr">获取验证码</span></li>
        	<li><input type="text" placeholder="请填写验证码" class="creditInput"><img src="/static/images/code.jpg" class="codeImg fr"></li>
        </ul>  
        <div class="prompt"><a href="javascript:;" class="fl">支持的银行</a><a href="javascript:;" class="fr">注意事项</a></div>
        <div class="buttonBIg mtb10">
            <a @click="$router.push('/creditVerify')">提交</a>
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
		methods:{},
		created(){}
	}
</script>

<style scoped>
	
</style>
