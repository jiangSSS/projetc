<template>
	<div class="container">
		<Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop marginBottom" :model="formData">
            <div class="lone">
                <div class="title">教育经历</div>
                <!-- <div class="desc"><input type="textarea" placeholder="详细的教育经历能为简历加分哦"></div> -->
                <div class="desc"><textarea class="textArea" rows="3" v-model="formData.eduDescription" placeholder="详细的教育经历能为简历加分哦"></textarea></div>
                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
            </div>
            <div class="school">
                <div class="subTitle">学校</div>
                <div class="clearfix"><input type="text" class="input fl" v-model="formData.school" placeholder="请输入学校"></div>
            </div>
			<div class="school">
			    <div class="subTitle">专业</div>
			    <div class="clearfix"><input type="text" class="input fl" v-model="formData.professional" placeholder="请输入专业"></div>
			</div>
            <div class="school">
                <div class="subTitle">学历</div>
                <div class="clearfix"><input type="text" class="input fl" v-model="formData.degree" placeholder="请输入学历"></div>
            </div>
			<div class="school">
			    <div class="subTitle">最高学历</div>
			    <div class="clearfix"><input type="text" class="input fl" v-model="formData.higestDegree" placeholder="请输入最高学历"></div>
			</div>

          <div class="school">
            <div class="subTitle">时间段</div>
            <div class="clearfix timeFont">
              <span class="date-time-input" @click="getStartDate">
                    <input type="text" class="inputS fl" v-model="formData.studyStart" placeholder="请选择">
                  </span>
              <date-time ref="dateStartTime" type="date" @confirm="startTime" format="yyyy-MM-dd"></date-time>
              <span class=" font fl">至</span>
              <span class="date-time-input" @click="getEndDate">
                    <input type="text" class="inputS fl" v-model="formData.studyEnd" placeholder="请选择">
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
    import mixins from '@/components/mixins/myInfo'
    import  moment from "moment"
    import DateTime from 'vue-date-time-m'
	export default {
		components: {
      Header,
      DateTime
		},
    mixins: [mixins],
		data() {
			return {
			  formData:{
          school:"",
          professional:"",
          degree:"",
          higestDegree:"",
          studyStart:"",
          studyEnd:"",
          eduDescription:''
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
        this.formData.studyStart = val
        console.log(val)
      },
      getEndDate() {
        this.$refs.dateEndTime.show()
      },
      endTime(val) {
        this.formData.studyEnd = val
        console.log(val)
      },
		  getData(){
        this.$axios.get(this.$config.URI(`rest/credit/personal/myEdu`), {}, 1).then(res=>{
            this.formData = res.data;
            this.formData.studyStart = moment(this.formData.studyStart).format('YYYY-MM-DD')
            this.formData.studyEnd = moment(this.formData.studyEnd || new Date().getTime()).format('YYYY-MM-DD')
        })
      },
      submit() {
        this.$axios.post(this.$config.URI(`rest/credit/personal/addEdu`), this.formData, 1).then(res=>{
          Toast("提交成功");
          setTimeout(()=>{
            this.$router.push({name: 'myCredit'});
          },1000)
        })
      },
    },

		created(){
		  this.getData()
    }
	}
</script>

<style scoped>
    .title{
        font-weight: 700;
        font-size: .44rem;
    }
    .lone{
        padding: .4rem 0 0 0;
    }
    .marginTop{
        padding: 0 .5rem
    }
    .desc{
        font-size: .4rem;
        color: rgb( 153, 153, 153 );
    }
    .textArea{
        width: 100%;
        resize:none;
        background: #fff;
        margin-top: .2rem;
      border: 0;
    }
    .input{
        background: #fff;
        font-size: .4rem;
        color: rgb( 51, 51, 51 );
        font-weight: 500;
      border: none;
      padding: 0;
      margin: 0;
    }
    .iconfont{
        font-size: .7rem;
        margin-top: .2rem;
        font-weight: 700;
        color: #999;
    }
    .subTitle{
        font-size: .44rem;
        margin-bottom: .3rem;
        color: rgb( 102, 102, 102 );
        font-family: "PingFang";
    }
    .school{
        padding: .3rem 0;
        border-bottom:  .06rem solid #f3f5f7
    }
    /*.submit{*/
        /*color: #fff;*/
        /*background-color: rgb( 229, 0, 21 );*/
        /*width: 7rem;*/
        /*border-radius: 4%;*/
        /*font-size: .5rem;*/
        /*margin-top: 1rem;*/
    /*}*/
    .submit {
      color: #fff;
      background: #e50015;
      width: 100%;
      position: fixed;
      bottom: 0;
    }
    .inputS{width: 3.2rem;background: #fff;font-size: .4rem;color: rgb( 51, 51, 51 );font-weight: 500;border: none; padding: 0;margin: 0;}
    .font{ display: inline-block; margin: .05rem .5rem 0;font-size: .36rem; color: #666; font-weight: 700; }
    /deep/ .van-dialog__confirm,.van-dialog__confirm:active { color: #e50015 }
    /deep/ .d-date-time-header,.d-date-time-bg{ background: #e50015!important;}
    /deep/ .d-date-time-button a{ color: #e50015!important;}

</style>
