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
            <div class="PublicName">{{item.title}}</div>
            <div class="PublicCon">
              <span>申请号：{{item.request_nums || '--'}}</span>
              <span>申请公布号：{{item.public_nums || '--'}}</span>
              <span>显示申请公布日：{{item.public_data || '--'}}</span>
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

      }
    },
    computed: {

    },
    methods:{
      getData(data) {
        this.$axios.post(
          `zhuanli_info/select`,
          {params:
              {'q': `name: ${this.$store.state.baseInfo.ENTNAME}`,
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

