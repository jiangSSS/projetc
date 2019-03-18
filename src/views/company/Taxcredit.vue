<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop conBottom">
				<ul class="Taxcredit">					
					<li v-for="(item,index) in pageList" :key="index">
						<ul class="TaxcreditLine">
							<li><span>纳税人识别号: </span>{{item.TAXCODE}}</li>
							<li><span>纳税人名称: </span>{{item.TAXENTNAME}}</li>
						</ul>
						<ul class="TaxcreditB">		
							<li><span>评价年度</span><br />{{item.ANNUALEVALUATION}}</li>
							<li><span>纳税评级</span><br />{{item.TAXGRADE}}</li>
						</ul>	
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
		data() {
			return {
				// pageList:[
				// 	{
				// 		name1:"110897797897970",
				// 		name2:"小米科技有限责任公司",
				// 		name3:"2018",
				// 		name4:"A级",
				// 	},
				// 	{
				// 		name1:"9330100716105852F",
				// 		name2:"阿里巴巴（中国）网络技术有限公司",
				// 		name3:"2017",
				// 		name4:"A级",
				// 	},
				// 	{
				// 		name1:"88601007161058329",
				// 		name2:"腾讯科技（深圳）有限公司",
				// 		name3:"2017",
				// 		name4:"A级",
				// 	},
				// ]
			}
		},
    computed: {
		  pageList() {
		    return this.$route.params.list;
      }
    },
		methods:{},
		created(){}
	}
</script>

<style scoped>
</style>
