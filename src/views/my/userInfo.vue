
<template>
  <div class="container">
    <Header v-bind:backRouteName="backRouteName"></Header>
    <img src="/static/images/icon-35.png" class="logo">
    <div class="marginTop">
      <form :bind="userInfo" class="userList">
        <ul>
          <li class="title">个人信息</li>
          <li class="clearfix">
            <span class="fl">账号：</span>
            <span class="fr tr">{{userInfo.loginId}} </span>
            <!--<input v-model="userInfo.loginId" class="fr tr" type="text" placeholder="请输入账号">-->
          </li>
          <li class="clearfix">
            <span class="fl">姓名：</span>
            <input v-model="userInfo.name" class="fr tr" type="text" placeholder="请输入姓名">
          </li>
          <!--<li class="clearfix">-->
          <!--<span class="fl">性别：</span>-->
          <!--<input v-model="userInfo.sex" class="fr tr" readonly @focus="sexCon = true" type="text" placeholder="请选择性别">-->
          <!--</li>-->
          <li class="clearfix">
            <span class="fl">性别：</span>
            <van-radio-group v-model="radio" :change="radioChange">
              <van-radio name="1">男</van-radio>
              <van-radio name="0">女</van-radio>
            </van-radio-group>
          </li>
          <li class="clearfix">
            <span class="fl">联系电话：</span>
            <span class="fr tr">{{userInfo.loginId}} </span>
          </li>
          <li class="clearfix">
            <span class="fl">邮箱：</span>
            <input v-model="userInfo.email" class="fr tr" type="text" placeholder="请输入您的联系邮箱">
          </li>
          <li class="title">公司信息</li>
          <li class="clearfix">
            <span class="fl">公司名称：</span>
            <input v-model="userInfo.compName" class="fr tr" type="text" placeholder="请输入您的公司名称">
          </li>
          <li class="clearfix">
            <span class="fl">职位：</span>
            <input v-model="userInfo.job" class="fr tr" type="text" placeholder="请输入您的职位">
          </li>
          <li class="clearfix">
            <span class="fl">行业：</span>
            <input v-model="userInfo.industry" class="fr tr" type="text" placeholder="请输入您的所属行业">
          </li>
        </ul>
        <van-button class="submit" @click="submit">提交个人信息</van-button>
      </form>
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
        backRouteName: 'my',
        radio: '1',
        userInfo: {
          loginId: "",
          name: "",
          sex: '0',
          loginId: "",
          email: '',
          compName: "",
          job: "",
          industry: "",
        },
        checked: false,
        checked1:false
      }
    },
    computed: {
      submitData() {
        return {
          name: this.userInfo.name,
          sex: this.radio,
          email: this.userInfo.email,
          compName: this.userInfo.compName,
          job: this.userInfo.job,
          industry: this.userInfo.industry,
        }
      }
    },
    watch:{
      "userInfo.sex"(val) {
        this.radio = val + '';
      }
    },
    methods: {
      radioChange(val) {
        console.log(val);
      },
      submit() {
        // console.log(this.userInfo);
        // if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.submit.email)) {
        //   Toast('邮箱格式不正确');
        //   return;
        // }
        this.$axios.post(this.$config.URI(`rest/user/updateUserInfo`), this.submitData, 1).then(res=>{

          this.$router.push("/userInfoStatus")
        })
      },
      getUserInfo() {
        this.$axios.get(this.$config.URI(`rest/user/loginUser`), {}, 1).then(res=>{
          // Toast(res.message);
          // this.$router.push({name: 'my'});
          this.userInfo = Object.assign({}, this.userInfo, res.data);
        })
      },
      onChange(that, val) {
        // this.userInfo.sex = val.text;
        // this.userInfo.sexId = val.id;
      },
      onConfirm(val, index) {
        this.userInfo.sex = val.text;
        this.userInfo.sexId = val.id;
        this.sexCon = false;
      },
      onCancel() {
        this.sexCon = false;
      }
    },
    created() {
      this.getUserInfo();
    }
  }


</script>

<style scoped>
  /*.container{*/
    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
  /*}*/
  .title {
    font-weight: bold;
    font-size: .44rem
  }
  .read {
    font-size: .38rem;
    color: #ccc;
    padding: .4rem .4rem;
  }

  /deep/ .van-radio__label {
    color: #999;
  }

  .userList li {
    margin: 0rem .4rem;
    border-bottom: 1px solid rgb(241, 241, 241);
    padding: .3rem 0;
  }

  .marginTop {
    border-top: 1px solid rgb(241, 241, 241)
  }

  .userList li span {
    font-family: "Microsoft YaHei";
    color: #444;
    font-size: .4rem;
    display: inline-block;
    line-height: .9rem;
    /* width: 2.4rem */
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
    background: #fff;
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
    position: absolute;
    bottom: 0;
  }
  .van-radio-group{
    margin-top: .2rem;
    text-align: right;
  }
  .van-radio{
    display: inline-block;
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
</style>
