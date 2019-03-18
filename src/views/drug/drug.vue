<template>
	<div class="container">
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
			    <div class="foodSearch">
			        <input type="text" class="foodSearchText" v-model="name" placeholder="请输入被抽查企业名称">
			    </div>
			    <div class="foodSearchCon">

			        <div class="buttonBIg">
			            <div class="submit" @click="submit">查询</div>
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
			return {
			  name: ''
      }
		},
		methods:{
      submit() {
        this.$router.push({name: 'drugList', params: {kw: this.name}});


      }
    },
		created(){}
	}
</script>

<style scoped>

</style>
