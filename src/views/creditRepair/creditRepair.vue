<template>
	<div>
		<Header></Header>
         <section class="wb100 dis-ib">
        <img src="/static/images/g-10.png" class="creditRepairBg">
        <div class="creditRepairCon conTop">
            <img src="/static/images/g-21.png" class="creditRepairTitle">
            <div class="creditRepair">
                <ul>
                    <li class="active">
                        <img src="/static/images/g-11.png" class="icoImg">
                        <h5 class="title">企业自检</h5>
                    </li>
                    <li class="active">
                        <img src="/static/images/g-13.png" class="icoImg">
                        <h5 class="title">准备材料</h5>
                    </li>
                    <li class="active" @click="$router.push('/submitRepair')">
                        <img src="/static/images/g-15.png" class="icoImg">
                        <h5 class="title">在线提交修复材料</h5>
                    </li>
                    <li>
                        <img src="/static/images/g-18.png" class="icoImg">
                        <h5 class="title">信用查工作人员审核材料</h5>
                    </li>
                    <li>
                        <img src="/static/images/g-20.png" class="icoImg">
                        <h5 class="title">完成修复，对外公示</h5>
                    </li>
                </ul>
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
