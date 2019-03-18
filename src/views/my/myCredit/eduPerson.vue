<template>
	<div class="container ">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="marginTop">
			<div class="isName">
				<span class="name">信用查</span>
				<span>男</span>
				<span>2019-01-01出生</span>
			</div>
			 <div class="userList">
			    <ul>
			        <li class="clearfix">
			            <span class="fl">专业：</span>
			            <input class="fr tr" disabled type="text" placeholder="轻工信息技术与工程">
			        </li>
			        <li class="clearfix">
			            <span class="fl">毕业时间：</span>
			            <input class="fr tr" disabled type="text" placeholder="2005-09-10">
			        </li>
			        <li class="clearfix">
			            <span class="fl">证书编号：</span>
			            <input class="fr tr" disabled type="text" placeholder="3705***********2325">
			        </li>
			        <li class="clearfix">
			            <span class="fl">学历层次：</span>
			            <input class="fr tr" disabled type="text" placeholder="博士研究生">
			        </li>
					 <li class="clearfix">
					    <span class="fl">学习方式：</span>
					    <input class="fr tr" disabled type="text" placeholder="全日制">
					</li>
					 <li class="clearfix">
					    <span class="fl">毕业结论：</span>
					    <input class="fr tr" disabled type="text" placeholder="毕业">
					</li>        
			    </ul>     
			</div>
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
	.userList li {
	    margin: 0rem .4rem;
	    border-bottom: 1px solid rgb(241, 241, 241);
	    padding: .3rem 0;
	}
	
	.marginTop {
	    border-top: 1px solid rgb(241, 241, 241)
	}
	
	.userList li span {
	    font-family: "Microsoft YaHei";
	    color: #444;
	    font-size: .44rem;
	    display: inline-block;
	    line-height: .9rem;
	    /* width: 2.4rem */
	}
	
	.userList li input {
	    height: .9rem;
	    width: 7rem;
	    overflow: hidden;
	    line-height: .7rem;
	    font-size: .44rem;
	    color: #383838;
	    font-family: inherit;
	    margin: 0;
	    padding: 0 .15rem;
	    background: #fff
	    /* border: 1px solid #ccc; */
	}
	.isName{
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #666;
		padding: .5rem 0;
	}
	.isName span{
		display: inline-block;
		line-height: .6rem;
	}
	.name{
		font-weight: 700;
		font-size: .6rem;
		line-height: .6rem;
	}
	
</style>
