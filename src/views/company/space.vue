  <template>
	<div>
		<!-- <Header></Header> -->
		<header class="header">
			<a class="iconfont headerIco headLeft" @click="$router.back()">&#xe792;</a>
			<h1 class="mui-title headTit headTitLabel">
				<a href="javascript:;" @click="$router.push('/company')">企业</a>
				<img src="/static/images/icon-25.png">
				<a href="javascript:;" class="acticve" @click="$router.push('/space')">空间</a>
			</h1>
			<a class="iconfont headerIco headRight headRightImg" href="javascript:;"><img src="/static/images/icon-21.png"></a>
		</header>
		 <section class="wb100 dis-ib conTop">
		    <div class="companyTop spaceTop">
		        <img src="/static/images/bg-03.jpg" class="wb100 fl">
		        <div class="content">
					<div class="tc mtb5"><img class="spacelogo" src="/static/images/logo/logo.png"></div>
		            <div class="title">

		                <em>{{allData.ENTNAME}}</em>
		            </div>
		            <div class="claim" v-if="!isClain" @click="clain">
		                <span><img src="/static/images/icon-1.png"></span>
		                <p class="claimCon">认领</p>
		            </div>
					<!--<div class="claim" v-else @click="$router.push('/attestation')">-->
					    <!--&lt;!&ndash; <span><img src="/static/images/icon-1.png"></span> &ndash;&gt;-->
					    <!--<p class="claimCon">认领企业</p>-->
					<!--</div>-->
		        </div>
		    </div>
		    <div class="companyWrap spaceDetails">
		        <h3 class="companyTitle">公司简介</h3>
		        <div class="spaceDetailsCon">
		            <p class="content">{{allData.OPSCOPE}}</p>
		            <div class="spaceOpen" @click="$router.push({name:'companyDetail', params: {type: 1}})">展开详情</div>
		        </div>
		        <div class="spaceNull spaceNullBg">暂无</div>
		    </div>
		    <ul class="spaceDetailsList">
		        <li>
		            <img src="/static/images/icon-22.png">{{allData.TEL}}
		        </li>
		        <li>
		            <img src="/static/images/icon-23.png">{{allData.EMAIL}}
		        </li>
		        <li>
		            <img src="/static/images/g-01.png">www.baidu.com
		        </li>
		        <li>
		            <img src="/static/images/icon-24.png">{{allData.DOM}}
		        </li>
		    </ul>
		    <!--<div class="companyWrap spaceDetails mt2">-->
		        <!--<h3 class="companyTitle">产品/服务</h3>-->
		        <!--<ul class="institutionList spaceInstitution">-->
		            <!--<li>-->
		                <!--<a href="javascript:;">-->
		                    <!--<div class="left">-->
		                        <!--<img src="/static/images/g-02.png">-->
		                    <!--</div>-->
		                    <!--<div class="center">-->
		                        <!--<p class="name">淘宝APP</p>-->
		                        <!--<p>6354128796534515478</p>-->
		                    <!--</div>-->
		                <!--</a>-->
		            <!--</li>-->
		            <!--<li>-->
		                <!--<a href="javascript:;">-->
		                    <!--<div class="left">-->
		                        <!--<img src="/static/images/g-03.png">-->
		                    <!--</div>-->
		                    <!--<div class="center">-->
		                        <!--<p class="name">支付宝</p>-->
		                        <!--<p>6354128796534515478</p>-->
		                    <!--</div>-->
		                <!--</a>-->
		            <!--</li>-->
		        <!--</ul>-->
		        <!--<div class="spaceNull">暂无</div>-->
		    <!--</div>-->
		    <div class="companyWrap spaceDetails mt2">
		        <h3 class="companyTitle">荣誉资质</h3>
		        <div class="spaceScorll">
		            <ul>
		                <li v-for="item in honorJSON"><a href="javascript:;"><img :src="$config.srcURI(`rest/file/download?accessoryUrl=${item.img}&accessoryName=${item.introduction}`)"><p>{{item.name}}</p></a></li>
		                <!--<li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>-->
		                <!--<li><a href="javascript:;"><img src="/static/images/pic-4.jpg"><p>高薪企业证书</p></a></li>-->
		                <!--<li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>-->
		            </ul>
		        </div>
		        <div class="spaceNull">暂无</div>
		    </div>
       <div class="companyWrap spaceDetails mt2">
         <h3 class="companyTitle">产品服务</h3>
         <div class="spaceScorll">
           <ul>
             <li v-for="item in productsJSON"><a href="javascript:;"><img :src="$config.srcURI(`rest/file/download?accessoryUrl=${item.img}&accessoryName=${item.introduction}`)"><p>{{item.name}}</p></a></li>
             <!--<li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>-->
             <!--<li><a href="javascript:;"><img src="/static/images/pic-4.jpg"><p>高薪企业证书</p></a></li>-->
             <!--<li><a href="javascript:;"><img src="/static/images/pic-5.jpg"><p>高薪企业证书</p></a></li>-->
           </ul>
         </div>
         <div class="spaceNull">暂无</div>
       </div>
		    <!--<div class="companyWrap spaceDetails mt2">-->
		        <!--<h3 class="companyTitle">企业公告</h3>-->
		        <!--<ul class="spaceNoticeList">-->
		            <!--<li>-->
		                <!--<a href="javascript:;">-->
		                    <!--<p class="time">2019年02月20日</p>-->
		                    <!--<h5 class="title">个人信用报告怎么查?“不良信息”在哪儿看?</h5>-->
		                <!--</a>-->
		            <!--</li>-->
		            <!--<li>-->
		                <!--<a href="javascript:;">-->
		                    <!--<p class="time">2019年02月20日</p>-->
		                    <!--<h5 class="title">个人信用报告怎么查个人信用报告怎么查个人信用报告怎么查?“不良信息”在哪儿看?</h5>-->
		                <!--</a>-->
		            <!--</li>-->
		        <!--</ul>-->
		        <!--<div class="spaceNull">暂无</div>-->
		    <!--</div>-->
		</section>
		<a @click="$router.push('/disclaimer')" class="spaceFoot">免责声明</a>

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
        isClain: true,
        ENTNAME: this.$store.state.baseInfo.ENTNAME, //企业名称
        PRIPID: this.$store.state.baseInfo.PRIPID, //企业PRIPID
        NAME: this.$store.state.baseInfo.NAME,
        allData: this.$route.params,  //全部企业信息
        honorJSON: [], //荣誉资质
        productsJSON: [], //产品服务
			}
		},
		methods: {
      //认领跳页
      clain() {
        if (this.$store.state.userInfo) {
          this.$router.push({name: 'attestation', params: this.allData})
        } else {
          //未登录跳转登录作用，无意义
          this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1)
        }
      },
      //查询是否被认领rest/space/isClained
      isClained() {
        this.$axios.post(this.$config.URI(`rest/space/isClained`), {enterpriseIds: this.PRIPID}, 1).then(res=>{
          // Toast(res.message);
          this.isClain = res.data[this.PRIPID];
          console.log(res.data[this.PRIPID]);
        })
      },
      getProductsAndHonor() {
        //产品
        this.$axios.get(this.$config.URI(`rest/space/products/list?enterpriseId=${this.PRIPID}`), {}, 1).then(res=>{
          // Toast('申请成功');
          this.productsJSON = res.rows;
        })
        //honor/list 荣誉
        this.$axios.get(this.$config.URI(`rest/space/honor/list?enterpriseId=${this.PRIPID}`), {}, 1).then(res=>{
          // Toast('申请成功');
          this.honorJSON = res.rows;
        })
      },
    },
		created() {
		  this.getProductsAndHonor();
		  this.isClained();
    }
	}
</script>

<style scoped>
	.spacelogo{
		width: .8rem;;
	}
  .companyTop .title{
     margin-left: 0;
  }
</style>
