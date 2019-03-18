<template>
	<div class="container">
		<Header></Header>
        <div>
             <section class="wb100 dis-ib conTop creditBank">
        <div class="creditDesc">
        	<h3 class="title">身份验证</h3>
        	<textarea rows="3" placeholder="本系统仅支持查询本人征信，请如实填写姓名、身份证号。" class="textArea"></textarea>
        </div>
        <ul>
        	<li><span class="creditTitle">姓名</span><input type="text" placeholder="请输入姓名" class="creditInput fr tr"></li>
        	<li><span class="creditTitle">身份证号</span><input type="text" placeholder="请输入姓名" class="creditInput fr tr"></li>
        </ul>  
        <div class="buttonBIg mtb10">
            <a @click="$router.push('/creditUnionPay')">下一步</a>
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
