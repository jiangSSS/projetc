<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop conBottom">
				<ul class="Taxcredit">					
					<li>
						<div class="PublicName">交互设计师<i class="fr">15000-3000</i></div>
						<div class="PublicCon">
							<a @click="$router.push('/company')">小米科技有限责任公司</a>
							<span><em>北京</em><em>海淀区</em><em>1-3年</em><em>10人</em></span>
							<span>2019-03-08</span>
						</div>
					</li>	
					<li>
						<div class="PublicName">职位描述</div>
						<div class="PublicCon">
							工作内容
						</div>
					</li>			
				</ul>
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
		methods:{},
		created(){}
	}
</script>

<style scoped>
</style>
