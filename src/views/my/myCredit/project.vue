<template>
  <div class="container">
    <Header></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div class="marginTop marginBottom">
      <div class="school">
        <div class="subTitle">项目名称</div>
        <div class="clearfix"><input type="text" class="input fl" v-model="formData.projectName" placeholder="例：xxxx公司"></div>
      </div>
      <div class="school">
        <div class="subTitle">时间段</div>
        <!--<div class="clearfix timeFont">-->
          <!--<input type="text" class="inputS fl" v-model="formData.projectStart" placeholder="请选择">-->
          <!--<span class="f5 fl">至</span>-->
          <!--<input type="text" v-model="formData.projectEnd" class="inputS ff" placeholder="请选择">-->
        <!--</div>-->
        <div class="clearfix timeFont">
          <span class="date-time-input" @click="getStartDate">
                    <input type="text" class="inputS fl" v-model="formData.projectStart" placeholder="请选择">
                  </span>
          <date-time ref="dateStartTime" type="date" @confirm="startTime" format="yyyy-MM-dd"></date-time>
          <span class=" font fl">至</span>
          <span class="date-time-input" @click="getEndDate">
                    <input type="text" class="inputS fl" v-model="formData.projectEnd" placeholder="请选择">
                  </span>
          <date-time ref="dateEndTime" type="date" @confirm="endTime" format="yyyy-MM-dd"></date-time>
        </div>
      </div>
      <div class="school">
        <div class="subTitle">项目角色</div>
        <div class="clearfix"><input type="text" class="input fl" v-model="formData.projectRole" placeholder="例：产品经理"></div>
      </div> <div class="school">
      <div class="subTitle">项目链接</div>
      <div class="clearfix"><input type="text" class="input fl" v-model="formData.projectUrl" placeholder="例：http://www.xxx.com"></div>
    </div>

      <div class="school">
        <div class="subTitle">项目描述</div>
        <div class="clearfix">
          <textarea class="textArea fl" rows="3" v-model="formData.projectDescription" placeholder="请描述该项目"></textarea>
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
    mixins:[mixins],
    data() {
      return {
        formData:{
          projectName:"",
          projectStart:"",
          projectEnd:"",
          projectRole:"",
          projectUrl:"",
          projectDescription:""
        },
        showStartDate:false,
        showEndDate:false,
        moment:moment
      }
    },
    methods:{
      // 时间选择
      getStartDate() {
        this.$refs.dateStartTime.show()
      },
      startTime(val) {
        this.formData.projectStart = val
        console.log(val)
      },
      getEndDate() {
        this.$refs.dateEndTime.show()
      },
      endTime(val) {
        this.formData.projectEnd = val
        console.log(val)
      },
      submit() {
        this.$axios.post(this.$config.URI(`rest/credit/personal/addProject`), this.formData, 1).then(res=>{
          Toast("提交成功");
          setTimeout(()=>{
            this.$router.push({name: 'myCredit'});
          },1000)
        })
      },
      getData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/myProject`), {}, 1).then(res=>{
          this.formData = res.data
          this.formData.projectStart = moment(this.formData.projectStart).format('YYYY-MM-DD')
          this.formData.projectEnd = moment(this.formData.projectEnd || new Date().getTime()).format('YYYY-MM-DD')
        })
      },
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>
  .marginTop{ padding: 0 .5rem }
  .textArea{ width: 100%; resize:none; font-size: .4rem; background: #fff; margin-top: .2rem; border: none;}
  .font{ font-size: .4rem; color: #666; font-weight: 700; display: inline-block; margin: 0 .5rem; }
  .input{ background: #fff; font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none;padding: 0;margin: 0}
  .inputS{width: 2.6rem;background: #fff;font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none; padding: 0;margin: 0;}
  .subTitle{font-size: .44rem;margin-bottom: .3rem;color: #333;font-family: "PingFang";}
  .school{padding: .3rem 0;border-bottom:  .06rem solid #f3f5f7}
  .submit {color: #fff;background: #e50015;width: 100%;position: fixed;bottom: 0;}
  /deep/  .d-date-time-bg:active { color: #e50015 }
  /deep/ .selectedDay:active{ color: #e50015}
  /deep/ .d-date-time-header,.d-date-time-bg{ background: #e50015!important;}
  /deep/ .d-date-time-button a{ color: #e50015!important;}
</style>
