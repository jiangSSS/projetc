<template>
	<div class="container">
		<Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="tc">
                <img src="/static/images/Aing.png" alt="" class="isA">
                <div class="statusAll status">提交成功</div>
                <div class="statusAll company">您的信息正在审核</div>
                <van-button class="submit" @click="$router.push('/fastList')">返回</van-button>    
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
			return {
            }
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>

    .isA{
        width: 50%;
        margin-top: 2rem;
    }
    .statusAll{
        font-size: .5rem;
        font-family: "Microsoft YaHei";
    }
    .status{
        color: rgb( 49, 49, 49 );
        margin-top: .4rem;
    }
    .company{
        color: rgb( 153, 153, 153 );
        margin-top: .2rem
    }
    .submit{
        background: #e50015;
        color: #fff;
        width: 7rem;
        border-radius: 2%;
        margin-top: 1.2rem;
    }

</style>
