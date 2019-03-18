<template>
  <div class="marginTop container">
    <Header></Header>
    <div class="allBox">
      <div class="itemBox">
        <p>决定文书号</p>
        <div>京工商海处字[2018]第2309号</div>
      </div>
      <div class="itemBox">
        <p>违法行为类型</p>
        <div>-</div>
      </div>
      <div class="itemBox">
        <p>行政处罚内容</p>
        <div>1、予以警告;2、罚款1000元</div>
      </div>
      <div class="itemBox">
        <p>处罚决定日期</p>
        <div>2018-11-11</div>
      </div>
      <div class="itemBox">
        <p>公示日期</p>
        <div>-</div>
      </div>
      <div class="itemBox">
        <p>决定机关</p>
        <div>北京市工商行政管理局</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
.allBox{
    padding: 0 .4rem;
}
    .itemBox{
        border-bottom: 1px solid #f5f5f5
    }
    .itemBox p {
        color: #333;
        font-size: .35rem;
        line-height: 1rem
    }
     .itemBox div {
        color: #999;
        line-height: 1rem
    }
</style>
