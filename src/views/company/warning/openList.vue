<template>
  <div>
    <Header></Header>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <section class="wb100 dis-ib conTop conBottom">
        <ul class="Taxcredit">
          <li class="userBox" v-for="item in pageList" v-if="item.REMARK == '开庭传票'">
          <div class="PublicName">{{item.ENTNAME}}</div>
            <div class="PublicCon">
              <span>法院名称: {{item.FYNAME || '--'}}</span>
              <span>类型: {{item.REMARK || '--'}}</span>
              <span>公告时间: {{item.GGSJ || '--'}}</span>
              <span>公告内容: </span><span>{{item.GGCONTENT || '--'}}</span>
              <span>网址链接: </span><span>{{item.URL || '--'}}</span>
            </div>
          </li>
        </ul>ß
      </section>
    </div>
  </div>
</template>

<script>
  import { mixins } from "../../../components/mixins/noticeList";

  export default {
    mixins: [mixins],
    data() {
      return {};
    },
    methods: {
      getData(data) {
        this.$axios.post(
          `fygg/select`,
          {params:
              {'q': `ENTNAME: ${this.$store.state.baseInfo.ENTNAME}`,
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
    created() {

    }
  };
</script>

<style scoped>
.allBox {
  padding: 0 0.4rem;
}

.userBox {
  padding: 0.3rem 0.6rem;
  border-bottom: 1px solid #f5f5f5;
}

.username {
  padding: 0.2rem 0;
  font-size: 0.46rem;
  font-weight: 700;
  color: #666;
}

.board {
  width: 50%;
}

.board span {
  display: block;
  line-height: 0.8rem;
}

.board span:nth-child(odd) {
  color: #ccc;
  font-size: 0.3rem;
}

.board span:nth-child(even) {
  color: #666;
  font-size: 0.4rem;
}
</style>
