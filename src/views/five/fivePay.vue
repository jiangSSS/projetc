<template>
	<div>
		<Header></Header>
		<div>
			 <section class="wb100 dis-ib conTop">        
				<div class="FiveSearch"> 
					<span class="FiveTitle fl">选择年月</span>
					<div class="FiveLine FiveText fl"><input id='demo6' data-options='{"type":"month"}' class="btn"><i class="iconfont">&#xe6e5;</i>
						<div id='result' class="time"></div>
					</div>
					<a href="javascript:;" class="FiveButton fr">查询</a>
				</div>
				<div class="perList marginTop02">
			      <div class="perListL">
			        <span><img src="/static/images/iconQuery04.png"></span>
			        <em>薇薇</em>
			      </div>
			      <div class="perListR">
			        <div class="perInfo"><h3>单位名称</h3>北京迅达科技有限公司<h3>缴费区县</h3>北京迅达科技有限公司</div>
			      </div>
			    </div>
			    
			    <div class="queryNew queryTop">
			        <div class="queryTab queryTabThree queryTabFour">
			         <table border="1" width='100%'>
			            <thead>
			              <tr>
			                <td>参加险种</td>
			                <td>缴费基数</td>
			                <td>单位基数</td>
			                <td>个人基数</td>
			              </tr>
			            </thead>
						<tbody>
							<tr>
								<td>养老</td>
								<td>3600</td>
								<td>688</td>
								<td>218</td>
							</tr>							
							<tr>
								<td>失业</td>
								<td>3600</td>
								<td>688</td>
								<td>218</td>
							</tr>
							<tr>
								<td>工伤</td>
								<td>3600</td>
								<td>688</td>
								<td>218</td>
							</tr>
							<tr>
								<td>生育</td>
								<td>3600</td>
								<td>688</td>
								<td>218</td>
							</tr>
							<tr>
								<td>医疗</td>
								<td>3600</td>
								<td>688</td>
								<td>218</td>
							</tr>
						</tbody>
			          </table>
			        </div>            
			        <div class="queryNote">单位：元（保留两位小数）</div>
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
	
</style>
