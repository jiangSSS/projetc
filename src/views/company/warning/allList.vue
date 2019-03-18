<template>
  <div class="container">
    <Header></Header>
    <ul v-if="title == '法院公告'">
      <!-- （没有数据项的数据，全部以为“--”代替显示）。 -->
      <li class="userBox">
        <div class="username">公司名称
        </div>
        <div class="clearfix">
          <div class="board fl">
            <span>公告时间</span><span>2018-12-12</span>
            <span>上诉方</span><span>xxxxx</span>
            <span>被诉方</span><span>xxxx</span>
          </div>
          <div class="board fr">
            <span>公告类型</span><span>xxxx</span>
            <span>法院</span><span>xxxxxx</span>
          </div>
        </div>
      </li>
      <li class="userBox">
        <div class="username">公司名称
        </div>
        <div class="clearfix">
          <div class="board fl">
            <span>公告时间</span><span>2018-12-12</span>
            <span>上诉方</span><span>xxxxx</span>
            <span>被诉方</span><span>xxxx</span>
          </div>
          <div class="board fr">
            <span>公告类型</span><span>xxxx</span>
            <span>法院</span><span>xxxxxx</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  export default {
        name: "allList",
      components: {
        Header
      },
      data() {
          return {
            title: this.$route.params.title,
          //   pageList: [
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //     {text: 'sdfsdfsdfsdfsdfasdfsafdadfdsaf'},
          //   ]
          }
      },
      computed: {
        pageList() {
          return this.$route.params.list;
        }
      },
      created() {
          this.$route.meta.title = this.$route.params.title;
      }
  }
</script>

<style scoped >
.item{
  height: 1.2rem;
  line-height: 1.2rem;
  margin: auto;
  position: relative;
}
.item:after{
  content: '\E6FF';
  position: absolute;
  right: -.2rem;
  color: #949494;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: .8rem;
}
</style>

