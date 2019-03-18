<template>
    <div class="container">
        <Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="userList" v-model="formData">
                <ul>
                    <li class="clearfix">
                        <span class="fl">企业名称：</span>
                        <input class="fr tr" type="text" placeholder="请输入企业名称" v-model="formData.enterpriseName">
                    </li>
                    <li class="clearfix">
                        <span class="fl">身份证：</span>
                        <input class="fr tr" type="text" placeholder="请输入企业法人身份证账号" v-model="formData.idcard">
                    </li>
                    <li class="clearfix">
                        <span class="fl">联系人：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的真实姓名" v-model="formData.linkMan">
                    </li>
                    <li class="clearfix">
                        <span class="fl">联系电话：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的电话号码" v-model="formData.linkManTel">
                    </li>
                    <li class="clearfix">
                        <span class="fl">邮箱：</span>
                        <input class="fr tr" type="text" placeholder="请输入您的联系邮箱" v-model="formData.linkManEmail">
                    </li>
                    <li class="clearfix imgRows">
                        <span class="fl">营业执照：</span>
                        <!--<input class="fr tr" type="text">-->
                      <!--<p class="fr tr" @click="addImg">添加营业执照</p>-->
                    </li>
                  <div class="imgAllBox">
                    <div class="clearfix imgItem">
                      <div style="display: none">{{img}}</div>
                      <!--<img src="http://115.28.208.176:8888/api/xyc/rest/file/download?accessoryUrl=2647e867-1853-46ac-9563-7b8c69811238.png&introduction=micisty.png" alt="">-->
                      <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :on-success="uploadSuccess"
                        type="drag"
                        accept=""
                        :action="$config.srcURI('rest/file/upload')"
                        style="display: inline-block;width:58px; margin-left: .4rem;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                          <img :src="this.img ? $config.srcURI(`rest/file/download?accessoryUrl=${this.img}&accessoryName=${this.formData.accessoryName}`) : defaultImg" class="imgStyle">
                        </div>
                      </Upload>
                      <!--<div @click="delImg(index, 'productsJSON')" class="delImg"><span class="delIcon">x</span></div>-->
                      <input class="fr imgTitle" placeholder="请输入营业执照标题" v-model="formData.businessLicenseTitle"/>
                    </div>
                  </div>
                </ul>
              <div class="loginLabel">
                <span class="left" @click="checked = !checked" ><i :style="checkedStyle" class="iconfont" v-html="!checked ? '&#xe9e9;' : '&#xe9ed;'"></i><em>我已阅读并同意<span>《认证服务协议》</span></em></span>
              </div>
              <van-button class="submit" @click="submit">提交个人信息</van-button>
            </div>
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
              img:'',
              defaultImg: '/static/images/upload.png',
              allData: {},
              formData: {
                // enterpriseId: this.allData.PRIPID,
                enterpriseName: '',
                // legalPerson: this.allData.NAME,
                // regcap: this.allData.REGCAP,
                // regcapcur: this.allData.REGCAPCUR,
                // esdate: this.allData.ESDATE,
                idcard: "",
                linkMan: "",
                linkManTel: "",
                linkManEmail: "",
                businessLicenseUrl: "",
                businessLicenseTitle: "",
                accessoryName: '',
              },
              checked:false
            }
        },
        computed: {
          enterpriseId() {
            return this.$route.params.PRIPID;
          },
          legalPerson() {
            return this.$store.state.baseInfo.NAME;
          },
          regcap() {
            return this.$route.params.REGCAP;
          },
          regcapcur() {
            return this.$route.params.REGCAPCUR;
          },
          esdate() {
            return this.$route.params.ESDATE;
          },
          submitData() {
            return {
              enterpriseId: this.enterpriseId,
              legalPerson: this.legalPerson,
              regcap: this.regcap,
              regcapcur: this.regcapcur,
              esdate: this.esdate,
              ...this.formData
            }
          },
          checkedStyle() {
            return {
              color: this.checked ? "#e50015" : "#ccc"
            }
          },
          // img() {
          //   return this.$config.URI('rest/file/download/' + this.formData.businessLicenseUrl) || '/static/images/upload.png';
          // }
        },
        methods: {
          delImg(index, type) {
            this.formData[type].splice(index, 1);
          },
          uploadSuccess(item) {
            this.img = item.data.accessoryUrl;
            this.formData.businessLicenseUrl = item.data.accessoryUrl;
            this.formData.accessoryName = item.data.accessoryName;
          },
          submit() {
            if (!/^1[34578]\d{9}$/.test(this.formData.linkManTel)) {
              Toast('请正确填写手机号码');
              return;
            }
            if (!this.checked) {
              Toast('请阅读并同意认证服务协议');
              return ;
            }
            this.$axios.post(this.$config.URI(`rest/clain/add`), this.submitData, 1).then(res=>{
              Toast('提交成功')
              this.$router.go(-1);
            })
          }
        },
        created() {
          this.allData = this.$route.params;
          this.formData.enterpriseName = this.$route.params.ENTNAME;
        },
        mounted() {
          $('.ivu-upload-input').hide()
        }
    }
</script>

<style scoped>
  @import "https://cdn.bootcss.com/iview/3.3.0-rc.2/styles/iview.css";
  .imgStyle{
    width: 100%;
    height: 100%;
  }
  .read{
        font-size: .38rem;
        color: #ccc;
        padding: .4rem .4rem;
    }
    /deep/ .van-radio__label{
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
        background: #fff
        /* border: 1px solid #ccc; */
    }
    /deep/ .van-checkbox__icon--checked .van-icon{
        background: #e50015;
        border-color: #e50015;
    }
    .submit{
        color: #fff;
        background: #e50015;
        width: 100%;
        position: absolute;
        bottom: 0;
      padding: .3rem 0;
      line-height: 1;
      height: 1.3rem;
      font-size: .45rem;
    }
    .imgAllBox{
      padding: .2rem 0;
      /*display: flex;*/
      /*justify-content: space-around;*/
    }
    .imgRows{
      border: none!important;
    }
    .imgBox{
      margin: .2rem .2rem .2rem .6rem;
      width: 1.4rem;
      height: 1.4rem;
      background: url("/static/images/upload.png");
      background-size: 100% 100%;
      /*width: 26%;*/
    }
    .imgTitle{
      width: 70%;
      vertical-align: middle;
      padding: 0 .4rem;
      margin: .3rem 0;
      text-align: right;
      height: .9rem;
      font-size: .4rem;
    }
    .imgItem{
      border-bottom: 1px solid rgb(241, 241, 241);
    }


  .ivu-upload-input{
    display: none !important;
  }

  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  .delImg{
    width: 1rem;
    height: 1.8rem;
    line-height: 1.3rem;
    text-align: right;
    display: inline-block;
    vertical-align: bottom;
    font-size: 1rem;
  }
  .delIcon{
    display: inline-block; height: .5rem;width:.5rem;color:#fff;background: red;border-radius: 50%;font-size: .4rem;
    text-align: center;line-height: .5rem;
  }
</style>
