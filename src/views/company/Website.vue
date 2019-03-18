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
						<div class="PublicName">{{item.website_name}}</div>
						<div class="PublicCon">
							<span>网站首页：{{item.website_url}}</span>
							<span>单位性质：{{item.host_nature}}</span>
							<span>显示审核时间：{{item.host_check}}</span>
							<span>备案号：{{item.license_key}}</span>
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
				// 		name1:"中宏网(北京)文化传媒有限责任公司",
				// 		name2:"www.zhonghong.com",
				// 		name3:"国企",
				// 		name4:"2019-03-08",
				// 		name5:"京ICP05******号",
				// 	},
				// 	{
				// 		name1:"中宏汇投信息产业有限责任公司",
				// 		name2:"www.zhonghong.com",
				// 		name3:"政府机关",
				// 		name4:"2018-08-14",
				// 		name5:"京ICP05******号",
				// 	},
				// ]
			}
		},
    computed: {

    },
		methods:{
      getData(data) {
        this.$axios.post(
          `beian_info/select`,
          {params:
              {'q': `host_name: ${this.$store.state.baseInfo.ENTNAME}`,
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
