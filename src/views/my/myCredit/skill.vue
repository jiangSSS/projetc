
<template>
  <div class="container allPage">
    <Header></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div class="scorllPage" style="padding-top: 1.6rem; margin-bottom: 1.5rem">
      <div @click="addSkill" class="addSkill"> <span class="icon iconfont">&#xe770;</span> 添加技能</div>
      <form style="background: #f5f5f5; border: 1px solid #f6f8fa; margin-top: .2rem" class="userList" v-for="(item, index) in skillJSON">
        <div @click="deleteSkill(index)" class="deleteSkill"> <span class="icon iconfont"></span>删除</div>
        <ul>
          <li class="clearfix">
            <span class="fl">技能名称：</span>
            <input class="fr tr" type="text" v-model="item.skillName" placeholder="必填">
          </li>
          <li class="clearfix">
            <span class="fl">使用时长：</span><span class="fr">月</span>
            <input class="fr tr" type="text" v-model="item.useMonth" placeholder="请填写">
          </li>
          <li class="clearfix">
            <span class="fl">掌握程度: </span>
            <van-radio-group v-model="item.degree" class="fr">
              <van-radio name="1">一般</van-radio>
              <van-radio name="2">良好</van-radio>
              <van-radio name="3">熟练</van-radio>
              <van-radio name="4">精通</van-radio>
            </van-radio-group>
          </li>
        </ul>
        <van-button class="submit" @click="submit">提交</van-button>
      </form>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/Header"
  import mixins from '@/components/mixins/myInfo'
  import moment from "moment"
  export default {
    components: {
      Header
    },
    // mixins: [mixins],
    data() {
      return {
        skillJSON: [{skillName:"",useMonth:"",degree:""}],
        moment:moment,
        formData:{}
      }
    },
    methods:{
      addSkill(e) {
        e.preventDefault();
        this.skillJSON.push({
          skillName:"",
          useMonth:"",
          degree:""
        });
      },
      deleteSkill(index) {
        this.skillJSON.splice(index, 1);
      },
      submit() {
          this.$axios.post(this.$config.URI(`rest/credit/personal/removeAddSkill`), {skillJSON:JSON.stringify(this.skillJSON)}, 1).then(res=>{
            Toast("提交成功");
            console.log("111",res);
            setTimeout(()=>{
              this.$router.push({name: 'myCredit'});
            },1000)
          })
      },
      getData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/mySkills`), {}, 1).then(res=>{
          this.skillJSON = res.rows
          this.skillJSON.map(item => {
            item.degree = item.degree + '';
          })
          console.log(res);
        })
      },
      getAllData() {
        this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1).then(res=>{
          this.formData = res.data;
          console.log(res);
        })
      }
    },
    created(){
      this.getData()
      this.getAllData()
    },
    // mounted() {
    //   $('.van-radio__label').css('margin-left', '.1rem')
    // }
  }
</script>

<style scoped>
  .userList li {
    margin: 0rem .4rem;
    border-bottom: 1px solid rgb(241, 241, 241);
    padding: .3rem 0;
  }
  .userList li span {
    font-family: "Microsoft YaHei";
    color: #444;
    font-size: .4rem;
    display: inline-block;
    line-height: .9rem;
  }

  .userList li input {
    height: .9rem;
    width: 7rem;
    overflow: hidden;
    line-height: .7rem;
    font-size: .4rem;
    color: #383838;
    font-family: inherit;
    margin: 0;
    padding: 0 .15rem;
    background: #f5f5f5;
    border: 1px solid transparent;
  }

  /deep/ .van-checkbox__icon--checked .van-icon {
    background: #e50015;
    border-color: #e50015;
  }

  .submit {
    color: #fff;
    background: #e50015;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .van-radio-group{
    margin-top: .2rem;
    text-align: right;
    display: inline;
    vertical-align: -.1rem;
  }
  .van-radio{
    display: inline-block;
    margin-right: .2rem;
  }
  .sexBox{
    margin: 0 .3rem ;
  }
  /deep/ .van-icon-success:before{
    content:"";
  }
  /deep/ .van-radio__icon--checked .van-icon{
    border-color: #e50015;
    background-color: #e50015;
  }
  .addSkill{
    width: 80%;
    text-align: center;
    font-weight: 700;
    margin: .2rem auto;
    padding: .2rem .2rem;
    border: 1px solid #e50015;
    font-size: .3rem;
    /*display: inline-block;*/
    border-radius: 5px;
    color: #e50015;
  }
  .deleteSkill{
    font-weight: 700;
    margin:.3rem .5rem 0;
    padding: .1rem .1rem;
    border: 1px solid #e50015;
    font-size: .3rem;
    display: inline-block;
    border-radius: 6%;
    color: #e50015;
  }
  /deep/ .van-radio__label{
    margin-left: .15rem;
  }
</style>
