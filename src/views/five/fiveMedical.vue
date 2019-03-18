<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">    
				<div class="perList marginTop02">
			      <div class="perListL">
			        <span><img src="/static/images/iconQuery04.png"></span>
			        <em>薇薇</em>
			      </div>
			      <div class="perListR">
			        <div class="perInfo"><h3>单位名称</h3>北京迅达科技有限公司<h3>缴费区县</h3>北京迅达科技有限公司</div>
			      </div>
			    </div>
			    
			    <div class="queryNew mtb5">
			        <div class="quertTit"><span>年度2019</span></div>
			        <div class="queryTab mtb3">
			          <table border="1" width='100%'>
			          	<thead class="one">
			              <tr class="tc">
			                <td rowspan="2" >门诊年度支出累计额</td>
			              </tr>
			            </thead>
			            <tbody>
			              <tr>
			                <td>统筹基金累计支付:</td>
			                <td>0元</td>
			              </tr>
			              <tr>
			                <td>大额基金累计支付:</td>
			                <td>0元</td>
			              </tr>
			              <tr>
			                <td>年度住院医保内费用累计:</td>
			                <td>0元</td>
			              </tr>
			            </tbody>
			          </table>
			        </div>
			        <div class="queryTab mtb3">
			          <table border="1" width='100%'>
			          	<thead class="one">
			              <tr class="tc">
			                <td rowspan="2" >住院年度支出累计</td>
			              </tr>
			            </thead>
			            <tbody>
			              <tr>
			                <td>大额基金累计支付:</td>
			                <td>0元</td>
			              </tr>
			              <tr>
			                <td>年度门诊医保内费用累计:</td>
			                <td>0元</td>
			              </tr>
			            </tbody>
			          </table>
			        </div>
			        <div class="queryNote c-e50015">注：查询结果均依据查询库中的当前信息提示，存在同步时差，请您以医院端查询结果为准</div>
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
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	.queryNote{
		color: #f00;;
	}
</style>
