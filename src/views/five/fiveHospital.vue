<template>
	<div>
		<Header></Header>
		<div>
			<section class="wb100 dis-ib conTop">
				<div class="queryNew queryTop">
					<div class="queryTab queryTabThree queryTabtwo">
						<table border="1" width='100%'>
							<thead>
								<tr>
									<td>序号</td>
									<td>定点医院</td>
								</tr>
							</thead>
							<tbody>
								<!-- <% for i=1 to 5 %>
			              <tr>
			                <td><%=i%></td>
			                <td><%if i=1 then%>北京协和医院<%elseif i=2 then%>四川大学华西医院<%elseif i=3 then%>中国人民解放军总医院<%elseif i=4 then%>空军军区大学西京医院<%else%>复旦大学附属华山医院<%end if%></td>
			              </tr>
			              <%next%> -->
								<tr>
									<td>1</td>
									<td>北京协和医院</td>
								</tr>
								<tr>
									<td>2</td>
									<td>四川大学华西医院</td>
								</tr>
								<tr>
									<td>3</td>
									<td>中国人民解放军总医院</td>
								</tr>
								<tr>
									<td>4</td>
									<td>空军军区大学西京医院</td>
								</tr>
								<tr>
									<td>5</td>
									<td>复旦大学附属华山医院</td>
								</tr>
							</tbody>
						</table>
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
		methods: {},
		created() {}
	}
</script>

<style scoped>

</style>
