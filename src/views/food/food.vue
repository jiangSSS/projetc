<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div>
			<section class="wb100 dis-ib conTop">
			    <div class="foodSearch">
			        <input type="text" class="foodSearchText" v-model="name" placeholder="请输入被抽查企业名称">
			        <!--<span class="scan"><img src="/static/images/g-04.png"></span>-->
			    </div>
			    <div class="foodSearchCon">
			        <!--<h5 class="foodSearchTitle">最近热搜：</h5>-->
			        <!--<div class="foodSearchLabel">-->
			            <!--<a href="javascript:;">可口可乐</a>-->
			            <!--<a href="javascript:;">康师傅</a>-->
			            <!--<a href="javascript:;">面膜</a>-->
			            <!--<a href="javascript:;">康师傅</a>-->
			            <!--<a href="javascript:;">面膜</a> <a href="javascript:;">可口可乐</a>-->
			            <!--<a href="javascript:;">康师傅</a>-->
			            <!--<a href="javascript:;">面膜</a>-->
			            <!--<a href="javascript:;">康师傅</a>-->
			            <!--<a href="javascript:;">面膜</a>-->
			            <!--<a href="javascript:;">可口可乐</a>-->
			        <!--</div>-->
			        <div class="buttonBIg">
			            <div class="submit" @click="submit">搜索</div>
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
        this.$router.push({name: 'foodList', params: {kw: name}});
      },
    },
		created(){
		  // this.getFood();
    }
	}
</script>

<style scoped>

</style>
