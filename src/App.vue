<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'App',
  methods: {
    //字典表
    getDic() {
      this.$axios.get(this.$config.URI(`rest/dict/get?${this.$config.dics()}`), {}, 1).then(res=>{
        // this.$store.dispatch('setDicData', res.data);
        localStorage.setItem('dicData', JSON.stringify(res.data))
        this.$store.dispatch('setDicData', res.data)
      })
    },
    //获取用户信息
    getUserInfo() {
      this.$axios.get(this.$config.URI(`rest/user/loginUser`), {}, 1).then(res=>{
        let isLogin = res.data ? true : false;
        this.$store.dispatch('setUserInfo', isLogin);
      })
    },
  },
  mounted() {
    // localStorage.getItem('dicData') ? '' : this.getDic();
    this.getDic();
    this.getUserInfo();
  }
}

  $(document).on('blur', 'input, textarea', function (e) {
    e.preventDefault();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
</script>

<style>
 .container{position:absolute;width:100%;height:100%;top:0;left:0;overflow-y:auto;background-color:#fff}
	#app{
    background: #f4f4f4;
    font-family: "PingFang";padding-top: constant(safe-area-inset-top);
padding-top: env(safe-area-inset-top);
padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
  }
  body{
    font-family: "PingFang";
    font-size: .4rem!important;
  }
  a{
    color: #3f3f3f
  }
h1, h2, h3, h4, h5, h6 {line-height: 1;}
header {height: constant(safe-area-inset-top);height: env(safe-area-inset-top);}
/*iPhoneX的适配*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	   /*添加底部适配*/
	.footer{padding-bottom: 1.7rem;
			padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);}
	 /*增加头部适配层*/

}
</style>
