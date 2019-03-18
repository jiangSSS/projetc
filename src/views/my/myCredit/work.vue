<template>
	<div class="container">
		<Header></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div class="marginTop marginBottom" :model="formData">
      <div class="lone">
                <div class="title">最近一份工作经历</div>
                <div class="desc"><textarea class="textArea" rows="3" v-model="formData.lastJobDescription" placeholder="99%的Boss关注您最近一份工作经历"></textarea></div>
      </div>
      <div class="school">
                <div class="subTitle">公司名称</div>
                <div class="clearfix"><input type="text" class="input fl" v-model="formData.jobCompName" placeholder="请填写公司名称"></div>
      </div>
      <div class="school">
                <div class="subTitle">时间段</div>
                <div class="clearfix timeFont">
                  <!--<input type="text" class="inputS fl" v-model="formData.jobStart" placeholder="">-->
                  <span class="date-time-input" @click="getStartDate">
                    <input type="text" class="inputS fl" v-model="formData.jobStart" placeholder="请选择">
                  </span>
                  <date-time ref="dateStartTime" type="date" @confirm="startTime" format="yyyy-MM-dd"></date-time>
                  <span class=" font fl">至</span>
                  <!--<input type="text" class="inputS fl" v-model="formData.jobEnd" placeholder="">-->
                  <span class="date-time-input" @click="getEndDate">
                    <input type="text" class="inputS fl" v-model="formData.jobEnd" placeholder="请选择">
                  </span>
                  <date-time ref="dateEndTime" type="date" @confirm="endTime" format="yyyy-MM-dd"></date-time>
                </div>
      </div>
      <div class="school">
                <div class="subTitle">职位类型</div>
                <div class="clearfix"><input type="text" class="input fl" v-model="formData.jobType" placeholder="请填写职位类型"></div>
      </div>
      <div class="school">
        <div class="subTitle">工作内容</div>
        <div class="">
          <textarea class="textArea fl" rows="3" placeholder="请填写工作内容" v-model="formData.jobContent"></textarea>
        </div>
      </div>

    </div>
    <van-button class="submit" @click="submit">提交</van-button>
  </div>
</template>

<script>
    import Header from "@/components/Header"
    import DateTime from 'vue-date-time-m'
    import mixins from '@/components/mixins/myInfo'
    import  moment from "moment"
	export default {
		components: {
		  Header,
      DateTime
		},
    mixins: [mixins],
		data() {
			return {
        formData:{
          jobCompName:"",
          jobContent:"",
          jobEnd:"",
          jobStart:"",
          jobType:"",
          lastJobDescription:""
        },
        showStartDate:false,
        showEndDate:false,
        moment:moment
      }
		},
		methods:{
      getStartDate() {
        this.$refs.dateStartTime.show()
      },
      startTime(val) {
        this.formData.jobStart = val
        console.log(val)
      },
      getEndDate() {
        this.$refs.dateEndTime.show()
      },
      endTime(val) {
        this.formData.jobEnd = val
        console.log(val)
      },

      submit() {
        this.$axios.post(this.$config.URI(`rest/credit/personal/addJob`), this.formData, 1).then(res=>{
          Toast("提交成功");
          setTimeout(()=>{
            this.$router.push({name: 'myCredit'});
          },1000)
        })
      },
      getData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/myJob`), {}, 1).then(res=>{
          this.formData = res.data
          this.formData.jobStart = moment(this.formData.jobStart).format('YYYY-MM-DD')
          this.formData.jobEnd = moment(this.formData.jobEnd || new Date().getTime()).format('YYYY-MM-DD')
        })
      },
    },
		created(){
		  this.getData()
    }
	}
</script>

<style scoped>
    .title{ font-weight: 700; font-size: .44rem;}
    .lone{ padding: .4rem 0 0 0; }
    .marginTop{ padding: 0 .5rem }
    .desc{ font-size: .36rem; color: rgb( 153, 153, 153 );}
    .textArea{ width: 100%; resize:none; font-size: .4rem; background: #fff; margin-top: .2rem; border: none;}
    .font{ display: inline-block; margin: 0 .5rem;font-size: .36rem; color: #666; font-weight: 700; }
    .input{ background: #fff; font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none;padding: 0;margin: 0;}
    .inputS{width: 3.2rem;background: #fff;font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none; padding: 0;margin: 0;}
    .iconfont{font-size: .7rem;margin-top: .2rem;font-weight: 700;color: #999;}
    .subTitle{font-size: .44rem;margin-bottom: .3rem;color: #333;font-family: "PingFang";}
    .school{padding: .3rem 0;border-bottom:  .06rem solid #f3f5f7}
    .submit {color: #fff;background: #e50015;width: 100%;position: fixed;bottom: 0;left: 0}
   /deep/ .van-dialog__confirm,.van-dialog__confirm:active { color: #e50015 }
   /deep/ .d-date-time-header,.d-date-time-bg{ background: #e50015!important;}
   /deep/ .d-date-time-button a{ color: #e50015!important;}
</style>
