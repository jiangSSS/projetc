<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div>
			<ul class="HeadlinesList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="itemAll" v-for="(item,index) in pageList" :key="index">
						<div class="companyLine">
							<div class="company">{{item.content}}</div>
							<div class="clearfix">
                                <div class="content fl">{{item.content}}</div><div class="time fr">{{moment(item.sendTm).format('YYYY-MM-DD HH:mm:ss')}}</div>
                            </div>
						</div>
					<!-- </a> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header"
  import moment from 'moment'
	export default {
		components: {
			Header
		},
		data() {
			return {
				pageList:[],
        pageSize: 10,
        pageNo: 1,
        loading: false,
        moment: moment,
			}
		},
		methods: {
			loadMore(){

			},
      //rest/notice/myNotice
			getData(){
        this.$axios.get(this.$config.URI(`rest/notice/myNotice`), {}, 1).then(res=>{
          this.pageList.push(...res.rows);
        })
			}
		},
		created() {
		  this.getData()
    }
	}
</script>

<style scoped>
	.focusItem{
		padding: .5rem;
		border-bottom: .3rem solid #fafafa
	}
	.HeadlinesList{
		margin-top: 1.5rem;
	}
	.companyLine{
		
		padding: .3rem .5rem;
	}
	.HeadlinesList li{ background: #fff; margin-bottom: .2rem}
	.itemAll:first-child{
		border-top: 1px solid #fafafa
	}
	.company{
		font-weight: 400;
		font-size: .44rem;
		color: #444;
    }
    .content{
        color: #777;
        padding: .2rem 0;
    }
    .time{
        color: #999;
         padding: .2rem 0;
    }
	.cancle{
		font-size: .5rem;
		font-weight: 700;
		color: #ccc;
	}
</style>
