<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
         <div class="screenHead screenHeadTwo">
        <span class="label provinces"><em>行政区划</em><i class="iconfont">&#xe628;</i></span>
        <span class="label moreScreen"><em>类型</em><i class="iconfont">&#xe628;</i></span>
    </div>
    <section class="wb100 dis-ib conTopSearch">
        <div class="foodSearch foodSearch2">
            <input type="text" class="foodSearchText" placeholder="请输入社会组织名称或统一社会信用代码">
        </div>
        <div class="foodSearch foodSearch3">
            <input type="text" class="foodSearchText" placeholder="成立登记日期">
        </div>
        <div class="foodSearchCon">
            <h5 class="foodSearchTitle">状态：</h5>
            <div class="stateCheck">
              <!-- <label class="active"><i class="iconfont"></i><em>全部</em></label>
                <label><i class="iconfont"></i><em>正常</em></label>
                <label><i class="iconfont"></i><em>注销</em></label>
                <label><i class="iconfont"></i><em>撤销</em></label> -->
				<label v-for="(item,index) in label" :key="index" @click="check(item.value,index)"><i class="iconfont" :class="{'active':item.checked}"></i><em :class="{'actived':item.checked}">{{item.name}}</em></label>
            </div>
            <div class="buttonBIg">
                <a @click="$router.push('/publicList')">查询</a>
            </div>
        </div>
    </section>
    <!--省份地区-->
    <!--<div class="searchLayerCon provincesLayer">-->
        <!--<div class="layerBack"></div>-->
        <!--<div class="searchLayer">-->
            <!--<div class="leftOne">-->
                <!--<ul>-->
                    <!--<li>不限</li>-->
                    <!--<li>北京市</li>-->
                    <!--<li>上海市</li>-->
                    <!--<li>河北省</li>-->
                    <!--<li>山西省</li>-->
                    <!--<li>河北省</li>-->
                    <!--<li>山西省</li>-->
                    <!--<li>河北省</li>-->
                    <!--<li>山西省</li>-->
                    <!--<li>山西省</li>-->
                    <!--<li>河北省</li>-->
                    <!--<li>山西省</li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="leftTwo">-->
                <!--<ul>-->
                    <!--<li>北京市</li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="leftThree">-->
                <!--<ul>-->
                    <!--<li>海淀区</li>-->
                    <!--<li>朝阳区</li>-->
                    <!--<li>昌平区</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <!--end-->
    <!--类型-->
    <div class="searchLayerCon moreScreenLayer classiferLayer">
        <div class="layerBack"></div>
        <div class="searchLayer">
            <ul class="moreScreenList">
                <li>
                    <div class="label">
                        <span>社会团体</span>
                        <span>事业单位</span>
                        <span>国家机关</span>
                    </div>
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
			return {
				label:[
					{
						name:"全部",
						checked:true,
						value:'1'
					},
					{
						name:"正常",
						checked:false,
						value:'2'
					},
					{
						name:"注销",
						checked:false,
						value:'3'
					},
					{
						name:"撤销",
						checked:false,
						value:'4'
					},
				]
			}
		},
		methods:{
			check(e,index){
				if(this.label[index].checked){
					this.label[index].checked = !this.label[index].checked
				}else{
					this.label.forEach(item =>{
						item.checked = false
					})
					this.label[index].checked = true
				}
			}
		},
		created(){}
	}
</script>

<style scoped>
	.active::before{
		content: '\E9ED';
		color: #e50015;
	}
	.actived{
		color: #e50015;
	}
</style>
