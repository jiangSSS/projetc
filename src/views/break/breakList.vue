<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div id="breakList" class="mui-scroll-wrapper mui-active conTop">
		    <div class="mui-scroll">
		        <ul class="mui-table-view publicUnitList breakList mainHref">
					<li v-for="item in pageList">
					    <a>
					        <div class="title" style="width: 150%">
					            <span>{{item.iname}}</span>

					        </div>
					        <div class="label">
					            <div class="labelList">案号：{{item.caseCode}}</div>
					            <div class="labelList">身份证号码/组织机构代码：{{item.cardNum}}</div>
					            <div class="labelList">法定代表人：{{item.caseCode}}</div>
					            <div class="labelList">做出执行依据单位：{{item.courtName}}</div>
					            <div class="labelList">省份：{{item.areaName}}</div>
					            <div class="labelList">执行依据文号：{{item.gistId}}</div>
                      <div class="labelList">立案时间：{{item.regDate}}</div>
                      <div class="labelList">执行法院：{{item.gistUnit}}</div>
                      <div class="labelList">生效法律文书确定的义务：{{item.duty}}</div>
                      <div class="labelList">被执行人的履行情况：{{item.performance}}</div>
                      <div class="labelList">失信被执行人行为具体情况：{{item.disruptTypeName}}</div>
                      <div class="labelList">发布时间：{{item.publishDate}}</div>

					        </div>
					    </a>
					</li>
					<!--<li>-->
					    <!--<a>-->
					        <!--<div class="title">-->
					            <!--<span>陈彦祖</span>-->
					            <!--<em class="c-999">立案时间：2017-05-20</em>-->
					        <!--</div>-->
					        <!--<div class="label">-->
					            <!--<div class="labelList">案号：（2015）穗越法执字第7634号</div>-->
					            <!--<div class="labelList">杭州萌萌哒连锁店</div>-->
					        <!--</div>-->
					    <!--</a>-->
					<!--</li>-->
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
			  pageList: []
      }
		},
		methods:{},
		created(){
		  this.pageList = this.$route.params.list;
    }
	}
</script>

<style scoped>

</style>
