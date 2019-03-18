<template>
  <div class="container">
    <Header></Header>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <section class="wb100 dis-ib conTop conBottom">
        <ul class="Taxcredit">
          <li v-for="(item,index) in pageList" :key="index">
            <div class="PublicName">{{item.ENTNAME}}</div>
            <div class="PublicCon">
              <span>法院名称: {{item.FYNAME || '--'}}</span>
              <span>类型: {{item.REMARK || '--'}}</span>
              <span>公告时间: {{item.GGSJ || '--'}}</span>
              <span>公告内容: </span><span>{{item.GGCONTENT || '--'}}</span>
              <span>网址链接: </span><span>{{item.URL || '--'}}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>

  import { mixins } from "../../../components/mixins/noticeList";

  export default {
    mixins: [mixins],
    data() {
      return {
        type: ''
      };
    },
    methods: {
      getData(data) {
        this.$axios.post(
          `fygg/select`,
          {params:
              {'q': this.$route.params.type == 'index' ? `*:*` : `ENTNAME: ${this.$store.state.baseInfo.ENTNAME || '*'}`,
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
      this.type = this.$route.params.type;
      console.log(this.type);
    }
  };
</script>

<style scoped>
  .allBox {
    padding: 0 .4rem;
  }
  .Taxcredit li {
    border-bottom: 1px solid #f5f5f5;
    margin: 0;
  }
  .userBox {
    padding: .3rem .6rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .username {
    padding: .2rem 0;
    font-size: .46rem;
    font-weight: 700;
    color: #666;
  }

  .board {
    width: 50%;
  }

  .board span {
    display: block;
    line-height: .8rem;

  }

  .board span:nth-child(odd) {
    color: #ccc;
    font-size: .3rem;
  }

  .board span:nth-child(even) {
    color: #666;
    font-size: .4rem;
  }
</style>
