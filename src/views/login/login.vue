<template>
	<div class="container">
		<Header class="header" v-bind:backRouteName="backRouteName"></Header>
		<section class="wb100 dis-ib conTop">
		    <div class="loginTop">
		        <p class="label">你好，欢迎加入</p>
		        <img src='/static/images/icon-16.png' class="loginImg">
		        <span @click="$router.push('/reg')" class="loginHref"><img src='/static/images/icon-17.png'><em>短信验证码登录</em></span>
		    </div>
		    <div class="loginList">
		        <ul :model="formData">
              <li>
                <input type="text" v-model="formData.userName" placeholder="请输入手机号">
              </li>
              <!--<li>-->
              <!--<input class="codeInput" type="text" v-model="formData.captcha" placeholder="请输入图形验证码">-->
              <!--<img class="tCode" alt="" @click="changeImg" :src="TuCodeUri" />-->
              <!--</li>-->
              <!--<li>-->
                <!--<input class="codeInput" type="text" v-model="formData.secureCode" placeholder="请输入短信验证码">-->
                <!--<span v-show="codeTextCon" @click="getCode" class="code">{{codeText}}</span>-->
                <!--<span v-show="!codeTextCon" class="code">{{reCodeTime}}s后重新获取</span>-->
              <!--</li>-->
              <li>
                <input type="password" v-model="formData.secureCode" placeholder="请输入密码">
              </li>
		        </ul>
		    </div>
		    <!--<div class="loginLabel">-->
				  <!--<span class="left" @click="checked = false" v-if="checked"><i style="color: #f00;" class="iconfont">&#xe9ed;</i><em>两周内自动登录</em></span>-->
				  <!--<span class="left" @click="checked = true" v-else><i class="iconfont">&#xe9e9;</i><em>两周内自动登录</em></span>-->
          <!--<span @click="$router.push('/password')" class="right">忘记密码？</span>-->
		    <!--</div>-->
		    <div class="wb100 dis-ib tc mtb5">
		        <span @click="login" class="BtnSmall">登录</span>
		    </div>
		    <div class="loginFoot">
		        <a href="javascript:;"><img src="/static/images/icon-18.png"><i>微博登录</i></a>
		        <a href="javascript:;"><img src="/static/images/icon-19.png"><i>微信登录</i></a>
		        <a href="javascript:;"><img src="/static/images/icon-20.png"><i>QQ登录</i></a>
		    </div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import { Toast } from 'mint-ui'
	 export default {
		 components:{
			 Header,
		 },
		 data(){
			 return{
         backRouteName: 'my',
				 checked:false,
				 formData:{
           userName :"13717762494",
           secureCode:"888888",
           loginType: 2,
				 },
         beforePageInfo: {},
			 }
		 },
		 methods:{
       login() {
         if (!/^1[34578]\d{9}$/.test(this.formData.userName)) {
           Toast('请正确填写手机号码');
           return;
         }
         if (!/^[a-zA-Z0-9]{6,21}$/.test(this.formData.secureCode)) {
           Toast('请填写6-21位密码');
           return;
         }
         // if (!this.checked) {
         //   Toast('请阅读并同意信用查服务协议');
         //   return;
         // }

         // this.formData.userName = this.formData.mobile;
         this.$axios.post(this.$config.URI(`login`), this.formData, 1).then(res=>{
           this.$store.dispatch('setUserInfo', true);
           Toast(res.message);
           console.log(this.beforePageInfo);
           if (this.beforePageInfo.name && (this.beforePageInfo.query || this.beforePageInfo.params)) {
              this.$router.push({name: this.beforePageInfo.name, query: this.beforePageInfo.query, params: this.beforePageInfo.params});
           } else {
             this.$router.push({name: 'my'});
           }
         })
       },

		 },
     created() {
		   //获取登录前页面信息
		   this.beforePageInfo = this.$route.params;
     }
	 }
</script>

<style scoped>
	/deep/ .header-title{
		background: #e70000!important;
		color: #fff!important;
		height: 1.5rem;
		font-size: .6rem;
		border-bottom: none;
	}
		/deep/ .van-checkbox__icon--checked .van-icon{
		background-color:#e70000;
		border-color: #e70000;
	}

	/deep/ .mint-header-title{
		height: .8rem!important;
		line-height: .8rem!important;
	}

</style>
