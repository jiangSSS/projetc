<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
         <section class="wb100 dis-ib conTop">
        <div class="publicDetailsTitle" @click="isDetail = !isDetail">基础登记信息</div>
        <ul class="shopDetailsList" v-show="isDetail">
            <li>
                <h5 class="title">社会组织名称</h5>
                <div class="content">
                    中国网络社会组织联合会
                </div>
            </li>
            <li>
                <h5 class="title">统一社会信用代码</h5>
                <div class="content">
                    51100000MJ0000632D
                </div>
            </li>
            <li>
                <h5 class="title">登记管理机关</h5>
                <div class="content">
                    民政部
                </div>
            </li>
            <li>
                <h5 class="title">登记管理机关</h5>
                <div class="content">
                    民政部
                </div>
            </li>
            <li>
                <h5 class="title">业务主管单位</h5>
                <div class="content">
                    国家互联网信息办公室
                </div>
            </li>
            <li>
                <h5 class="title">法定代表人</h5>
                <div class="content">
                    赵晖
                </div>
            </li>
            <li>
                <h5 class="title">成立登记日期</h5>
                <div class="content">
                    2018/6/12
                </div>
            </li>
        </ul>
        <div class="publicDetailsTitle" @click="isDetail1 = !isDetail1">变更公示</div>
        <ul class="shopDetailsList" v-show="isDetail1">
            <li>
                <h5 class="title">食品名称</h5>
                <div class="content">
                    AD甜牛奶
                </div>
            </li>
            <li>
                <h5 class="title">商标</h5>
                <div class="content">
                    /
                </div>
            </li>
            <li>
                <h5 class="title">标称生产企业名称</h5>
                <div class="content">
                    广西合浦南国乳品厂
                </div>
            </li>
        </ul>
        <div class="publicDetailsTitle" @click="isDetail2 = !isDetail2">年检结果</div>
        <ul class="shopDetailsList" v-show="isDetail2">
            <li>
                <h5 class="title">食品名称</h5>
                <div class="content">
                    AD甜牛奶
                </div>
            </li>
            <li>
                <h5 class="title">商标</h5>
                <div class="content">
                    /
                </div>
            </li>
            <li>
                <h5 class="title">标称生产企业名称</h5>
                <div class="content">
                    广西合浦南国乳品厂
                </div>
            </li>
        </ul>
        <div class="publicDetailsTitle" @click="isDetail3 = !isDetail3">评估信息</div>
        <ul class="shopDetailsList" v-show="isDetail3">
            <li>
                <h5 class="title">食品名称</h5>
                <div class="content">
                    AD甜牛奶
                </div>
            </li>
            <li>
                <h5 class="title">商标</h5>
                <div class="content">
                    /
                </div>
            </li>
            <li>
                <h5 class="title">标称生产企业名称</h5>
                <div class="content">
                    广西合浦南国乳品厂
                </div>
            </li>
        </ul>
        <div class="publicDetailsTitle" @click="isDetail4 = !isDetail4">表彰信息</div>
        <ul class="shopDetailsList" v-show="isDetail4">
            <li>
                <h5 class="title">食品名称</h5>
                <div class="content">
                    AD甜牛奶
                </div>
            </li>
            <li>
                <h5 class="title">商标</h5>
                <div class="content">
                    /
                </div>
            </li>
            <li>
                <h5 class="title">标称生产企业名称</h5>
                <div class="content">
                    广西合浦南国乳品厂
                </div>
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
			return {
				isDetail:false,
				isDetail1:false,
				isDetail2:false,
				isDetail3:false,
				isDetail4:false,
			}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	
</style>
