<template>
	<div class="container">
		<Header :backRouteName="backRouteName"></Header>
		<section class="wb100 dis-ib conTop">
			<div class="loginTop">
				<p class="label">你好，欢迎加入</p>
				<img src='/static/images/icon-16.png' class="loginImg">
				<!--<span @click="$router.push('/login')" class="loginHref"><img src='/static/images/icon-17.png'><em>登录</em></span>-->
			</div>
			<form class="loginList" :model="formData">
				<ul>
					<li>
						<input type="text" v-model="formData.mobile" placeholder="请输入手机号">
					</li>
          <li>
            <input class="codeInput" type="text" v-model="formData.captcha" placeholder="请输入图形验证码">
            <img class="tCode" alt="" @click="changeImg" :src="TuCodeUri" />
          </li>
          <!--<li>-->
            <!--<input v-show="code" class="codeInput" type="text" v-model="formData.secureCode" placeholder="请输入短信验证码">-->
            <!--<span v-show="codeTextCon" @click="getCode" class="code">{{codeText}}</span>-->
            <!--<span v-show="!codeTextCon" class="code">{{reCodeTime}}s后重新获取</span>-->
          <!--</li>-->
					<!--<li>-->
						<!--&lt;!&ndash;<input type="text" v-model="formData.password" placeholder="请输入密码">&ndash;&gt;-->
					<!--</li>-->
				</ul>
			</form>
			<div class="loginLabel">
				<span class="left" @click="checked = true" v-if="!checked"><i  class="iconfont">&#xe9e9;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
				<span class="left" @click="checked = false" v-else><i style="color: #f00;" class="iconfont">&#xe9ed;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
			</div>

			<div class="wb100 dis-ib tc mtb5">
				<span @click="reg" class="BtnSmall">登录</span>
			</div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import {
		Toast
	} from 'mint-ui'
	import {
		RadioGroup,
		Radio
	} from 'vant';
	export default {
		components: {
			Header
		},
		data() {
			return {
        backRouteName: 'login',
        code:false,
				formData: {
					mobile: "",
          captcha: '',
					secureCode: "888888",
					password: "",
          loginType: 1
				},
        codeText: '获取验证码',
        reCodeTime: 60,
        codeTextCon: true,
        loginFlag: false,
				checked: false
			}
		},
    computed: {
      TuCodeUri() {
        // return this.$config.URI("rest/user/loginCaptchaImage");
        return "http://115.28.208.176:8888/api/xyc/rest/user/loginCaptchaImage";
      }
      // TuCodeUri: {
      //   get() {
      //     return this.$config.URI("rest/user/loginCaptchaImage");
      //   },
      //   set(val) {
      //
      //   }
      // }
    },
		methods: {
      changeImg() {
        // this.TuCodeUri = this.$config.URI("rest/user/loginCaptchaImage");
        $('.tCode').attr('src', "http://115.28.208.176:8888/api/xyc/rest/user/loginCaptchaImage");
      },
			reg() {
        if (!/^1[34578]\d{9}$/.test(this.formData.mobile)) {
          Toast('请正确填写手机号码');
          return;
        }
        if (!this.formData.captcha) {
          Toast('请正确填写验证码');
          return;
        }
        // if (!/^[a-zA-Z0-9]{6,21}$/.test(this.formData.password)) {
        //   Toast('请填写6-21位密码');
        //   return;
        // }
        if (!this.checked) {
          Toast('请阅读并同意信用查服务协议');
          return;
        }

        this.formData.userName = this.formData.mobile;
        this.$axios.post(this.$config.URI(`login`), this.formData, 1).then(res=>{
          this.$store.dispatch('setUserInfo', true);
          Toast(res.message);
          this.$router.push({name: 'editPwd'});
        })
			},
      getCode() {
        // if (!this.loginFlag) {
        //   Toast('请正确填写验证码');
        //   return;
        // }
        if (!/^1[34578]\d{9}$/.test(this.formData.mobile)) {
          Toast('请正确填写手机号码');
          return;
        }

        this.$axios.post(this.$config.URI(`rest/user/sendLoginSms`), this.formData, 1).then(res=>{
          Toast(res.message);
          this.codeTextCon = false;
          let timer = setInterval(() => {
            if (this.reCodeTime == 0) {
              this.codeText = '重新获取';
              this.codeTextCon = true;
              this.reCodeTime = 60;
              clearInterval(timer);
            } else {
              this.reCodeTime --;
            }
          }, 1000)
          // console.log(res)
          // Toast(res.data.message);
          // this.$router.push({name: 'my'});
        })
      },
		}
	}
</script>

<style scoped>
	/deep/ .header-title {
		background: #e70000 !important;
		color: #fff!important;
		height: 1.5rem;
		font-size: .6rem;
		border-bottom: none;
	}
	/deep/ .mint-header-title{
		height: .8rem!important;
		line-height: .8rem!important;
	}
  .codeInput{
    width: 65%;
  }
  .code{
    display: inline-block;
    width: 35%;
    height: .7rem;
    color: #fff;
    text-align: center;
    line-height: .7rem;
    /*border: 1px solid #999;*/
    border-radius: 3px;
    background: #e50015;
  }
  .tCode{
    width: 2.5rem;
    height: .9rem;
  }
</style>
