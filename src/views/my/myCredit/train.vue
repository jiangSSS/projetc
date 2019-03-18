<template>
  <div class="container">
    <Header></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div class="marginTop marginBottom" :model="formData">
      <div class="school">
        <div class="subTitle">培训课程</div>
        <div class="clearfix"><input type="text" class="input fl" v-model="formData.course" placeholder="例：xxxx公司"></div>
      </div>
      <div class="school">
        <div class="subTitle">培训机构</div>
        <div class="clearfix"><input type="text" class="input fl" v-model="formData.organization" placeholder="例：xxxx公司"></div>
      </div>
      <div class="school">
        <div class="subTitle">培训时间</div>
        <div class="clearfix timeFont">
              <span class="date-time-input" @click="getStartDate">
                    <input type="text" class="inputS fl" v-model="formData.trainingStart" placeholder="请选择">
                  </span>
          <date-time ref="dateStartTime" type="date" @confirm="startTime" format="yyyy-MM-dd"></date-time>
          <span class=" font fl">至</span>
          <span class="date-time-input" @click="getEndDate">
                    <input type="text" class="inputS fl" v-model="formData.trainingEnd" placeholder="请选择">
                  </span>
          <date-time ref="dateEndTime" type="date" @confirm="endTime" format="yyyy-MM-dd"></date-time>
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
  import moment from "moment"
  export default {
    components: {
      Header,
      DateTime
    },
    mixins: [mixins],
    data() {
      return {
        formData:{
          course:"",
          organization:"",
          trainingStart:"",
          trainingEnd:"",
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
        this.formData.trainingStart = val
        console.log(val)
      },
      getEndDate() {
        this.$refs.dateEndTime.show()
      },
      endTime(val) {
        this.formData.trainingEnd = val
        console.log(val)
      },
      submit() {
        this.$axios.post(this.$config.URI(`rest/credit/personal/addTraining`), this.formData, 1).then(res=>{
          Toast("提交成功");
          setTimeout(()=>{
            this.$router.push({name: 'myCredit'});
          },1000)
        })
      },
      getData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/myTraining`), {}, 1).then(res=>{
          this.formData = res.data
          this.formData.trainingStart = moment(this.formData.trainingStart).format('YYYY-MM-DD')
          this.formData.trainingEnd = moment(this.formData.trainingEnd).format('YYYY-MM-DD')
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
  .desc{ font-size: .45rem; color: rgb( 153, 153, 153 );}
  .textArea{ width: 100%; resize:none; font-size: .4rem; background: #fff; margin-top: .2rem; border: none;}
  .font{ display: inline-block; margin: 0 .5rem;font-size: .4rem; color: #666; font-weight: 700;  }
  .input{ background: #fff; font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none;padding: 0;margin: 0}
  .inputS{width: 2.6rem;background: #fff;font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none; padding: 0;margin: 0;}
  .iconfont{font-size: .7rem;margin-top: .2rem;font-weight: 700;color: #999;}
  .subTitle{font-size: .44rem;margin-bottom: .3rem;color: #333;font-family: "PingFang";}
  .school{padding: .3rem 0;border-bottom:  .06rem solid #f3f5f7}
  .submit {color: #fff;background: #e50015;width: 100%;position: fixed;bottom: 0;}
  /deep/ .van-dialog__confirm,.van-dialog__confirm:active { color: #e50015 }
  /deep/ .d-date-time-header,.d-date-time-bg{ background: #e50015!important;}
  /deep/ .d-date-time-button a{ color: #e50015!important;}
</style>
