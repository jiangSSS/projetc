<template>
    <div class="container">
        <Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
        <div>
            <section class="conTop">
                <div class="inforDetails">
                    <h2 class="inforDetailsTitle">{{item.title}}</h2>
                    <p class="inforDetailsTime">
                        <i class="iconfont">&#xe6ae;</i>{{item.time}}</p>
                    <div class="inforDetailsContent">
                        <img :src="item.img">
                        <!--{{item.content}}-->
                      <div v-html="item.content" class="detail"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Header from "@/components/Header"
    export default {
        components: {
            Header
        },
        data() {
            return {
              item: {},
            }
        },
        methods: {},
        created() {
          this.item = this.$route.params;
        }
    }
</script>

<style scoped>
  /deep/ .detail p{
    text-indent: 2em;
    line-height: 1.8;
  }
</style>
