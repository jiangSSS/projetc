<template>
	<div>
		<Header></Header>
		<!--<span class="logoW" @click="$router.push('/companyControl')">监控企业</span>-->
		<div class="marginTop">
			<!-- <mt-navbar v-model="title">
				<mt-tab-item id="1">全部动态</mt-tab-item>
				<mt-tab-item id="2">经营预警</mt-tab-item>
				<mt-tab-item id="3">司法预警</mt-tab-item>
			</mt-navbar> -->
			<van-tabs v-model="active">
        <van-tab title="司法预警">
					<span :class="{active:active}">
						<div>
              <div v-show="!sifa.length" class="noData">暂无数据</div>
							<div v-for="(item,index) in sifa" :key="index" class="companyBox" @click="goList(item)">
								<div v-if="item.TYPE == 'fy'" class="clearfix">
									<span class="company fl">{{item.FYNAME}}</span>
									<span class="status fr already">司法</span>
								</div>
                <div v-else class="clearfix">
									<span class="company fl">案号：{{item.caseCode}}</span>
									<span class="status fr already">司法</span>
								</div>
							</div>
						</div>
					</span>
        </van-tab>
				<van-tab title="经营预警">
					<span :class="{active:active}">
						<div>
              <div v-show="!sifa.length" class="noData">暂无数据</div>
							<div v-for="(item,index) in jingying" :key="index" class="companyBox" @click="goList(item)">
								<div v-if="item.TYPE == 'fy'" class="clearfix">
									<span class="company fl">{{item.FYNAME}}</span>
									<span class="status fr already">经营</span>
								</div>
							</div>
						</div>
					</span>
				</van-tab>
			</van-tabs>
			<!-- <van-tabs v-model="active">
				<van-tab v-for="index in 2">
					<div slot="title">
						<van-icon name="more-o" />选项
					</div>
					内容 {{ index }}
				</van-tab>
			</van-tabs> -->
			<!-- <van-tabs v-model="active">
				<van-tab v-for="(title,index) in titleList" :title="title.title" :class="{active:title.checked}">
					内容
				</van-tab>
			</van-tabs> -->
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
				active: 0,
        FYGG: [], //法院公告
        SHIXIN: [], //失信人
        sifa: [],
        jingying: [],
			}
		},
    computed: {
		  ENTNAME() {
		    return this.$store.state.yujingInfo.enterpriseName;
      },
      PRIPID() {
        return this.$store.state.yujingInfo.enterpriseId;
      },
    },
		methods: {
			loadMore() {

			},
      goList(item) {
        switch (item.TYPE) {
          case 'fy':
            this.$router.push({name: 'noticeList'});
            break;
          case 'sx':
            this.$router.push({name: 'brokenList'});
            break;
        }
      },
      // getData(){
      //   this.$axios.get(this.$config.URI(`rest/monitor/myMonitors`), {}, 1).then(res=>{
      //     this.getNotice();
      //   })
      // },
      getNotice() {
        this.getFYGG();
        this.getSHIXIN();
        // this.getHMD();
        // this.getJYYC();
        // this.getGZCQ();
      },
      //法院公告
      getFYGG() {
        return this.$axios.post(
          `fygg/select`,
          {params:
              {'q': `ENTNAME:${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          });
      },
      //失信人
      getSHIXIN() {
        return this.$axios.post(
          `shixin_info/select`,
          {params:
              {'q': `iname:${this.ENTNAME}`,
                'indent':'true',
                'wt':'json'
              }
          })
      },
      getAll() {
        axios.all([this.getFYGG(), this.getSHIXIN()])
          .then(axios.spread((acct, perms) => {
            console.log(acct, perms);
            acct.response.docs.map(item => {
              item.TYPE = 'fy';
            });
            this.FYGG = acct.response.docs;

            perms.response.docs.map(item => {
              item.TYPE = 'sx';
            })
            this.SHIXIN = perms.response.docs;
            console.log(this.SHIXIN);
            this.sifa = this.FYGG.filter(item => {
              return item.REMARK != '拍卖公告' && item.REMARK != '裁判文书';
            }).concat(this.SHIXIN);
            this.jingying = this.FYGG.filter(item => {
              return item.REMARK == '拍卖公告' || item.REMARK == '裁判文书';
            });
            console.log(this.sifa);
          }));
      }
		},
		created() {
		  this.getAll();
    }
	}
</script>

<style scoped>
	/deep/ .mint-tab-item-label {
		font-size: .5rem
	}

	/deep/ .van-ellipsis {
		line-height: 44px;
		font-size: .48rem
	}
	/deep/ .van-tabs__line{ background: #e50015}

	.acticve {
		color: #f44
	}

	.companyBox {
		padding: .35rem .5rem;
    border-bottom: 1px solid #e6e6e6;
		margin-bottom: .2rem;
		background: #fff;
	}

	.companyBox:first-child {
		/* border-top: .2rem solid #f3f5f7 */
		margin-top: .2rem;
		/* background: #fff; */
	}

	.company {
		font-size: .44rem;
		font-weight: 400;
    height: 1rem;
    line-height: 1rem;
	}

	.status {
		border: 1px solid #333;
		padding: .05rem .2rem;
		border-radius: 8%;
		    font-size: .36rem;
	}

	.already {
		border: 1px solid #ff4050;
		color: #ff4050
	}

	.being {
		border: 1px solid #ff7e00;
		color: #ff7e00;
	}

	.content {
		color: #666;
		font-size: .36rem;
	}

	.time {
		color: #999;
		font-size: .36rem;
	}
  .noData{
    width: 100%;
    height: 3rem;
    margin: auto;
    text-align: center;
    line-height: 2rem;
    background: #fff;
  }
</style>
