
<template>
    <div class="container">
        <Header></Header>
        <img src="/static/images/icon-35.png" class="logo">
        <div class="marginTop">
            <div class="userList">
                <ul :model="formData">
                    <li class="title">个人信息</li>
                    <li class="clearfix">
                        <span class="fl">姓名：</span>
                        <input class="fr tr" type="text" v-model="formData.realName" placeholder="请输入姓名">
                    </li>
                    <li class="clearfix">
                        <span class="fl">身份证号：</span>
                        <input class="fr tr" type="text" v-model="formData.realIdcard" placeholder="请输入身份证号码">
                    </li>
                </ul>
                <van-button class="submit" @click="submit">提交身份认证</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import mixins from '@/components/mixins/myInfo'
    export default {
        components: {
            Header
        },
      mixins: [mixins],
        data() {
            return {
                formData: {
                  realName: "",
                  realIdcard: "",
                },
            }
        },
        methods: {
            submit() {
            this.$axios.post(this.$config.URI(`rest/credit/personal/addIdentity`), this.formData, 1).then(res=>{
                Toast("提交成功");
                setTimeout(()=>{
                  this.$router.push({name: 'myCredit'});
                },1000)
            })
          }
        },
      mounted(){
        console.log(this.formData);
      },
        created() { }
    }
</script>

<style scoped>
        .title {
        font-weight: bold;
        font-size: .44rem
    }
    .read {
        font-size: .36rem;
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
        background: #fff
        /* border: 1px solid #ccc; */
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
</style>
