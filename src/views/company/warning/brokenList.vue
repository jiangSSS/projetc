<template>
  <div class="marginTop container">
    <Header></Header>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-immediate-check=false
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <ul>
        <!-- （没有数据项的数据，全部以为“--”代替显示）。 -->
        <li class="userBox" v-for="item in pageList">
          <div class="username">{{item.iname}}</div>
          <div class="clearfix">
            <!--<div class="board fl">-->
            <!--<span>法定代表人或负责人姓名</span>-->
            <!--<span>{{item.businessEntity}}</span>-->
            <!--<span>省份</span>-->
            <!--<span>{{item.areaName}}</span>-->
            <!--<span>做出执行依据单位</span>-->
            <!--<span>{{item.courtName}}</span>-->
            <!--</div>-->
            <div class="board fl">
              <span>立案时间</span>
              <span>{{item.regDate}}</span>
              <span>案号</span>
              <span>{{item.caseCode}}</span>
              <span>执行法院</span>
              <span>{{item.gistUnit}}</span>
            </div>
            <!--<div class="board fr">-->
            <!--<span>发布时间</span>-->
            <!--<span>{{item.publishDate}}</span>-->
            <!--<span>生效法律文件确定的义务</span>-->
            <!--<span>{{item.duty}}</span>-->
            <!--</div>-->
            <div class="board fr">
              <!--<span>失信被执行人行为具体情形</span>-->
              <!--<span>{{item.disruptTypeName}}</span>-->
              <span>履行状态</span>
              <span>{{item.performance}}</span>
              <span>执行依据文号</span>
              <span>{{item.gistId}}</span>
            </div>
          </div>
        </li>
      </ul>
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
          `shixin_info/select`,
          {params:
              {'q': `iname: ${this.$store.state.baseInfo.ENTNAME}`,
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
