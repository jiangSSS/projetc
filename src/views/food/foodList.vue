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
                <span>{{item.SPMC}}</span>

              </div>
              <div class="label">
                <div class="labelList">标示生产企业名称：{{item.BCSCQYMC}}</div>
                <div class="labelList">标示生产企业地址：{{item.BCSCQYDZ}}</div>
                <div class="labelList">被抽检单位名称：{{item.BCYDWMC}}</div>
                <div class="labelList">分类：{{item.FL}}</div>
                <div class="labelList">规格型号：{{item.GGXH}}</div>
                <div class="labelList">生产日期/批号：{{item.SCRIHPH}}</div>
                <div class="labelList">检验机构：{{item.JYJG}}</div>
                <div class="labelList">检验结果：{{item.JYJGO}}</div>

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

			}
		},
		methods:{
      getData(data) {
        this.$axios.post(
          `/sh_food_pass/select`, {
            params: {
              'q': `BCYDWMC: ${this.kw || '*'}`,
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
