<template>
	<div class="">
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
			    <ul class="indexNav queryNav">
			        <li>
			            <a @click="$router.push('/fiveMedical')">
			                <img src="/static/images/iconQuery01.png">
			                <p>医疗待遇</p>
			            </a>
			        </li>
			        <li>
			            <a @click="$router.push('/fiveHospital')">
			                <img src="/static/images/iconQuery02.png">
			                <p>定点医院</p>
			            </a>
			        </li>
			        <li>
			            <a @click="$router.push('/fivePay')">
			                <img src="/static/images/iconQuery03.png">
			                <p>缴费信息</p>
			            </a>
			        </li>
			    </ul>
			    <div class="perList marginTop02">
			      <div class="perListL">
			        <span><img src="/static/images/iconQuery04.png"></span>
			        <em>薇薇</em>
			      </div>
			      <div class="perListR">
			        <div class="perListRDetails"><span>性别：女</span><span>民族：汉族</span></div>
			        <div class="perListRDetails">出生日期：1990-05-21</div>
			        <div class="perListRDetails">身份证号：110100199005210616</div>
			      </div>
			    </div>
			    <div class="queryTop">
			      <div class="queryNew">
			        <div class="quertTit"><span>参保单位</span></div>
			        <div class="queryName">北京迅达科科技有限公司</div>
			      </div>
			      <div class="queryNew">
			        <div class="quertTit"><span>参保区县</span></div>
			        <div class="queryName">北京市东城区社会保险基金中心</div>
			        <div class="queryTab">
			          <table border="1" width='100%'>
			            <tbody>
			              <tr>
			                <td>缴费人员类别</td>
			                <td>农村劳动力</td>
			              </tr>
			              <tr>
			                <td>医疗参保人员类别</td>
			                <td>在职员工</td>
			              </tr>
			              <tr>
			                <td>养老保险实际缴费年限</td>
			                <td>4年10个月</td>
			              </tr>
			              <tr>
			                <td>医疗保险实际缴费年限</td>
			                <td>4年10个月</td>
			              </tr>
			            </tbody>
			          </table>
			        </div>
			      </div>
			      <div class="queryNew queryTop">
			        <div class="quertTit"><span>申报工资</span></div>
			        <div class="queryName">申报月均工资收入（元）：3600</div>
			        <div class="queryTab queryTabThree">
			          <table border="1" width='100%'>
			            <thead>
			              <tr>
			                <td>参加险种</td>
			                <td>险种状态</td>
			                <td>缴费基数（元）</td>
			              </tr>
			            </thead>
			           <!-- <tbody>
			              <% for i=1 to 5 %>
			              <tr>
			                <td><%if i=1 then%>养老<%elseif i=2 then%>失业<%elseif i=3 then%>工伤<%elseif i=4 then%>生育<%else%>医疗<%end if%></td>
			                <td>正常缴费</td>
			                <td>3600</td>
			              </tr>
			              <%next%>
			            </tbody> -->
						<tbody>
							<tr>		
								<td>养老</td>
								<td>正常缴费</td>
								<td>3600</td>
							</tr>
							<tr>		
								<td>失业</td>
								<td>正常缴费</td>
								<td>3600</td>
							</tr>
							<tr>		
								<td>工伤</td>
								<td>正常缴费</td>
								<td>3600</td>
							</tr>
							<tr>		
								<td>生育</td>
								<td>正常缴费</td>
								<td>3600</td>
							</tr>
							<tr>		
								<td>医疗</td>
								<td>正常缴费</td>
								<td>3600</td>
							</tr>
						</tbody>
			          </table>
			        </div>
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
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	
</style>
