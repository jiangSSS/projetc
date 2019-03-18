<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<section class="wb100 dis-ib conTop conBottom">
		    <div class="educationList">
		        <ul class="shopInspectForm">
		            <li><span class="inName">姓名</span><input type="text" class="inInput" value="张丽华"></li>
		            <li><span class="inName">身份证号</span><input type="text" class="inInput" placeholder="请输入身份证号"></li>
		            <li><span class="inName">证书编号</span><input type="text" class="inInput" placeholder="请输入证书编号"></li>
		        </ul>
		        <span class="close"><img src="/static/images/g-09.png"></span>
		    </div>
		    <div class="educationList">
		        <ul class="shopInspectForm">
		            <li><span class="inName">姓名</span><input type="text" class="inInput" value="张丽华"></li>
		            <li><span class="inName">身份证号</span><input type="text" class="inInput" placeholder="请输入身份证号"></li>
		            <li><span class="inName">证书编号</span><input type="text" class="inInput" placeholder="请输入证书编号"></li>
		        </ul>
		        <span class="close"><img src="/static/images/g-09.png"></span>
		    </div>
		</section>
		<div class="educationFoot">
		    <a href="javascript:;"><i class="iconfont">&#xe770;</i><em>增加</em></a>
		    <a @click="$router.push('/eduResult')" class="bg-e50015">查询</a>
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
