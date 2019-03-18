<template>
	<div class="container">
		<!--<Header></Header>-->
    <div class="header">
      <mt-header title="我的信用" fixed class="header-title">
        <span slot="left" @click="$router.push('/my')"><i class="iconfont goback">&#xe792;</i></span>
      </mt-header>
    </div>
		<div class="marginTop">
			<van-tabs>
				<van-tab title="个人信用">
					<!-- <img src="/static/images/myCredit.png" alt="" class="myCredit"> -->
	<!-- 				<div class="companyTop">
						<img src="/static/images/bg-01.jpg" class="wb100 fl">
						<div class="content">
							<div class="title">
								<span><img src="/static/images/logo/logo.png"></span>
								<em>腾讯科技（上海）有限公司</em>
							</div>
							<p class="credited ">社会信用码 010111852364152</p>
							<p class="claimNum">浏览量 3万+</p>
							<div class="claim">
								<span><img src="/static/images/icon-1.png"></span>
								<p class="claimCon">认领</p>
								<p class="claimnumber">浏览量 3万+</p>
							</div>
							<div class="number">
								<img src="/static/images/bg-02.png">
								<em>98</em>
							</div>
						</div>
					</div> -->
					<div class="desc">完成下列任务，提高个人信用分</div>
					<ul>
						<li class="creditItem clearfix" @click="$router.push('/identity')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doRealAuth = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-3.png" alt="" class="cImg">
								<span class="itemAll itemTitle">身份认证</span>
							</div>
						</li>
						<li class="creditItem clearfix" @click="$router.push('/work')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doJobExperience = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-2.png" alt="" class="cImg">
								<span class="itemAll itemTitle">工作经历</span>
							</div>
						</li>
            <li class="creditItem clearfix" @click="$router.push('/project')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doProjectExperience = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-1.png" alt="" class="cImg">
								<span class="itemAll itemTitle">项目经历</span>
							</div>
						</li>
						<li class="creditItem clearfix"  @click="$router.push('/education')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doEduExperience = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-1.png" alt="" class="cImg">
								<span class="itemAll itemTitle">教育背景</span>
							</div>
						</li>
							<li class="creditItem clearfix" @click="$router.push('/train')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doTraining = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-4.png" alt="" class="cImg">
								<span class="itemAll itemTitle">培训经历</span>
							</div>
						</li>
							<li class="creditItem clearfix" @click="$router.push('/skill')">
							<div class="fr">
								<span class="itemAll itemStatus" v-if="formData.doSkills = 1">已完成<i class="iconfont">&#xe6ff;</i></span>
                <span class="itemAll itemStatus" v-else>未完成<i class="iconfont">&#xe6ff;</i></span>
							</div>
							<div class="">
								<img src="/static/images/c-4.png" alt="" class="cImg">
								<span class="itemAll itemTitle">职业技能</span>
							</div>
						</li>

						<li class="creditItem clearfix" @click="$router.push('/five')">
							<div class="fr">
								<span class="itemAll itemStatus">未完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-4.png" alt="" class="cImg">
								<span class="itemAll itemTitle">五险查询</span>
							</div>
						</li>
					<!-- 	<li class="creditItem clearfix">
							<div class="fr" @click="$router.push('/edu')">
								<span class="itemAll itemStatus">已完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-5.png" alt="" class="cImg">
								<span class="itemAll itemTitle">学历认证</span>
							</div>
						</li> -->
						<li class="creditItem clearfix" @click="$router.push('/creditVerifyDetails')">
							<div class="fr">
								<span class="itemAll itemStatus">未完成
									<i class="iconfont">&#xe6ff;</i>
								</span>
							</div>
							<div class="">
								<img src="/static/images/c-6.png" alt="" class="cImg">
								<span class="itemAll itemTitle">征信报告</span>
							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="企业信用">
					<!-- <img src="/static/images/companyCredit.png" alt="" class="myCredit"> -->
					<div class="companyTop">
						<img src="/static/images/bg-01.jpg" class="wb100 fl">
						<div class="content">
							<div class="title">
								<span><img src="/static/images/logo/logo.png"></span>
								<em>腾讯科技（上海）有限公司</em>
							</div>
							<p class="credited ">社会信用码 010111852364152</p>
							<p class="claimNum">浏览量 3万+</p>
							<div class="claim">
								<span><img src="/static/images/icon-1.png"></span>
								<p class="claimCon">认领</p>
								<!-- <p class="claimnumber">浏览量 3万+</p> -->
							</div>
						<!-- 	<div class="number">
								<img src="/static/images/bg-02.png">
								<em>98</em>
							</div> -->
						</div>
					</div>
					<div class="creditVerifyWait">
						<div class="buttonBIg mtb10"><a @click="$router.push('/creditRepair')">信用修复</a></div>
					</div>					
				</van-tab>
			</van-tabs>
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
          formData:{
            doCreditReport:"",
            doEduExperience:"",
            doInsurance5:"",
            doSkills:"",
            doTraining:"",
            realIdcard:"",
            realName:"",
            score:"",
            doRealAuth:""
          }
      }
		},
		methods: {
      getData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1).then(res=>{
            this.formData = res.data;
          console.log(res);
        })
      }
    },
		created() {
		  this.getData()
    }
	}
</script>

<style scoped>
	/deep/ .van-ellipsis {
		line-height: 1.15rem;
		color: #333;
    font-size: .44rem;
	}
	.myCredit {
		width: 100%;
		vertical-align: middle
	}

	.desc {
		padding: .3rem .3rem;
		background: #f2f2f2;
	}

	.creditItem {
		padding: .3rem .4rem;
		background: #fff;
		margin-bottom: .2rem;
    border-bottom: 1px solid #f5f5f5;
	}

	.iconfont {
		font-size: .6rem;
		color: #777;
		font-weight: 700;

	}

	.cImg {
		width: .6rem;
		vertical-align: middle;
		margin-bottom: .1rem;
	}

	.itemAll {
		display: inline-block;
		line-height: 1rem;
		font-size: .4rem;
	}

	.itemTitle {
		/* font-size: .6rem; */
		font-family: "PingFang";
		color: rgb(51, 51, 51);
		/* line-height: 0.909; */
		margin-left: .5rem;
		line-height: 1rem;
	}

	.itemStatus {
		font-family: "PingFang";
		color: rgb(179, 179, 179);
	}

	.submit {
		width: 5rem;
		border-radius: 4%;
		background: rgb(229, 0, 21);
		;
		color: #fff;
		margin-top: 3rem;
	}


		.credited,.title,.claimNum{
		margin-left: 1rem;
		line-height: 1rem;
	}
	.credited {
		width: 100%;
		font-size: .34rem;
		color: #fff;
    text-align: left;
	}
	.title{
		margin-top: .6rem;
		text-align: left;
	}
	.claimNum{
		text-align: left;
		color: #fff;
	}
  .header-title{
    background: #fff!important;
    color: #333!important;
    height: 1.3rem!important;
    font-size: .45rem!important;
    z-index: 999;
    border-bottom: 1px solid #f5f5f5;
    line-height: 1;
  }
  .goback{
    font-size: .4rem;
  }
</style>
