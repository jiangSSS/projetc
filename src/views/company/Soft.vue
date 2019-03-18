<template>
	<div>
		<Header></Header>
		<div v-infinite-scroll="loadMore"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
			<section class="wb100 dis-ib conTop conBottom">
				<ul class="Taxcredit">
					<li v-for="(item,index) in pageList" :key="index">
						<div class="PublicName">{{item.Dynacomm || '--'}}</div>
						<div class="PublicCon">
							<span>软件简称：{{item.SoftwareAbbreviated || '--'}}</span>
							<span>登记号：{{item.RegistrationDate || '--'}}</span>
							<span>分类号：{{item.ClassNumber || '--'}}</span>
							<span>版本号：{{item.VersionNumber || '--'}}</span>
							<span>发布日期：{{item.Issue || '--'}}</span>
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
    import Header from "@/components/Header"
    import { mixins } from '../../components/mixins/noticeList'
    export default {
    mixins: [mixins],
		components: {
            Header
		},
		data() {
			return {
				// pageList:[
				// 	{
				// 		name1:"实力商家服务软件(V10.0)",
				// 		name2:"实力商家",
				// 		name3:"2018SR878410",
				// 		name4:"1719368250",
				// 		name5:"V10.0",
				// 		name6:"2019-03-08",
				// 	},
				// 	{
				// 		name1:"智能数据路由聚合引擎软件",
				// 		name2:"智能引擎",
				// 		name3:"2019SR875120",
				// 		name4:"3719368250",
				// 		name5:"V3.1.1",
				// 		name6:"2019-03-07",
				// 	},
				// 	{
				// 		name1:"CyberT无限插槽动态化解决方案Android版软件(V1.0)",
				// 		name2:"CyberT",
				// 		name3:"2018SR878410",
				// 		name4:"1234968250",
				// 		name5:"V1.0",
				// 		name6:"2019-03-06",
				// 	},
				// ]
			}
		},
    computed: {

    },
		methods:{
      getData(data) {
        this.$axios.post(
          `software/select`,
          {params:
              {'q': `SoftwareOwner: ${this.$store.state.baseInfo.ENTNAME}`,
                rows: data.rows,
                start: data.start,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          if (res.response.docs.length > 0) {
            this.loading = false;
            this.pageList.push(...res.response.docs);
          } else {
            this.loading = true;
          }
        })
      }
    },
		created(){}
	}
</script>
