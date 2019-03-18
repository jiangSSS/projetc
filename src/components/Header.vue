<template>
    <div class="header">
        <mt-header :title="title" fixed class="header-title">
			  <span v-if="!isBack" slot="left" @click="backBtn"><i class="iconfont">&#xe792;</i></span>
        </mt-header>
    </div>
</template>
<script>
	import {Header} from "mint-ui"
    export default {
        computed:{
            title(){
                return this.$route.meta.title
            }
        },
      props: ['isBack', 'backRouteName'],
      methods: {
          backBtn() {
            if (this.backRouteName) {
              this.$router.push({name: this.backRouteName});
            } else {
              this.$router.back();
            }
          }
      }
    }
</script>

<style>
	.mint-header{
		background: #fff!important;
		color: #333!important;
		height: 1.3rem!important;
		font-size: .45rem!important;
    /*z-index: 999;*/
    border-bottom: 1px solid #f5f5f5;
    line-height: 1;
	}
  .mint-header-title{
    height: .8rem!important;
    line-height: .8rem!important;
    font-size:.45rem!important;
  }
</style>
