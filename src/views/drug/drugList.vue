<template>
	<div>
    <Header></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div v-infinite-scroll="loadMore"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div class="mui-scroll">
        <ul class="mui-table-view publicUnitList breakList mainHref">
          <li v-for="item in pageList">
            <a>
              <div class="title" style="width: 150%">
                <span>{{item.YPMC}}</span>

              </div>
              <div class="label">
                <div class="labelList">标示生产企业：{{item.BSSCQY}}</div>
                <div class="labelList">生产批号：{{item.SCPH}}</div>
                <div class="labelList">药品规格：{{item.YPGG}}</div>
                <div class="labelList">检品来源：{{item.JPLY}}</div>
                <div class="labelList">检验依据：{{item.JYYJ}}</div>
                <div class="labelList">检验结果：{{item.JYJGO}}</div>
                <div class="labelList">不合格项目：{{item.BFHXM}}</div>
                <div class="labelList">检验机构：{{item.JYJG}}</div>
                <div class="labelList">备注：{{item.BZ}}</div>
                <div class="labelList">年份：{{item.NF}}</div>

              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
  import Header from "@/components/Header"
  import { mixins } from "../../components/mixins/noticeList";

  export default {
    mixins: [mixins],
		components: {
            Header
		},
		data() {
			return {
				pageList:[
					// {
					// 	title:"维生素E、C颗粒(86901268000415)",
					// 	label:"国药准字H21023781",
					// 	company:"辽宁美大康华邦药业有限公司"
					// },
					// {
					// 	title:"维生素E、C颗粒(86901268000415)",
					// 	label:"国药准字H21023781",
					// 	company:"辽宁美大康华邦药业有限公司"
					// },
				],
				loading:false

			}
		},
		methods:{
			getData(data){
        this.$axios.post(
          `/zj_medical_unpass/select`, {
            params: {
              'q': `BSSCQY: ${this.kw || '*'}`,
              'indent': 'true',
              rows: data.rows,
              start: data.start,
              'wt': 'json'
            }
          }).then(res => {
          if (res.response.docs.length > 0) {
            this.loading = false;
            this.pageList.push(...res.response.docs);
          } else {
            this.loading = true;
          }
        })
			}
		},
		created(){
      this.kw = this.$route.params.kw;

    }
	}
</script>

<style scoped>

</style>
