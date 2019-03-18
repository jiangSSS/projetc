<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		 <section class="wb100 dis-ib conTop">
		    <ul class="educationResult">
		        <li class="title">
		            <em>姓名</em>
		            <em>验证结果</em>
		        </li>
		        <li>
		            <span>张晓丽</span>
		            <em class="c-e70016">匹配</em>
		        </li>
		        <li>
		            <span>王爱李</span>
		            <em class="c-999">不匹配</em>
		        </li>
		        <li>
		            <span>李强华</span>
		            <em class="c-ff7e00">未核对</em>
		        </li>
		    </ul>
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
	.educationResult li{
		border-bottom: 1px solid #ccc;
	}
	.educationResult li:first-child{
		border-bottom: none;
	}
</style>
