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
						<div class="PublicName">{{item.WorkTitle}}</div>
						<div class="PublicCon">
							<span>登记号：{{item.RegistrationMark}}</span>
							<span>类别：{{item.Classifications}}</span>
							<span>创作完成日期：{{item.CompletionDate}}</span>
							<span>登记日期：{{item.RegistrationDate}}</span>
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
				// 		name1:"零售通如意LOGO",
				// 		name2:"美术",
				// 		name3:"国作登字-2018-F-00642958",
				// 		name4:"2019-02-02",
				// 		name5:"2019-02-08",
				// 	},
				// 	{
				// 		name1:"商+直播LOGO",
				// 		name2:"美术",
				// 		name3:"国作登字-2018-F-00602361",
				// 		name4:"2018-12-12",
				// 		name5:"2019-03-07",
				// 	},
				// 	{
				// 		name1:"ALIBABA FUSION DESIGN LOGO",
				// 		name2:"美术",
				// 		name3:"国作登字-2018-F-00597611",
				// 		name4:"2018-08-08",
				// 		name5:"2019-03-06",
				// 	},
				// ]
			}
		},
    computed: {

    },
		methods:{
      getData(data) {
        this.$axios.post(
          `zuopin/select`,
          {params:
              {'q': `CopyrightOwner: ${this.$store.state.baseInfo.ENTNAME}`,
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
