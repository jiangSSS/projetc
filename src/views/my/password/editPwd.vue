<template>
    <div class="container">
        <Header backRouteName="my"></Header>
		<img src="/static/images/icon-35.png" class="logo">
        <section class="wb100 dis-ib conTop">   
            <div class="loginList">
                <ul :model="formData">
                    <li>
                        <input type="text" v-model="formData.oldPassword" placeholder="初始化密码不用输入旧密码">
                    </li>
                    <li>
                        <input type="text" v-model="formData.newPassword" placeholder="请输入新密码">
                    </li>
                    <li>
                        <input type="text" v-model="formData.surePwd" placeholder="请确认新密码">
                    </li>
                </ul>
                <!--<div class="forget fr" @click="$router.push('/findPwd')">-->
                    <!--忘记密码，通过手机号重置-->
                <!--</div>-->
            </div>
            <div class="wb100 dis-ib tc mtb5">
                <a @click="submit" class="BtnSmall">提交</a>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {
                formData: {
                  oldPassword: "",
                  // oldPwd: '',
                  newPassword: "",
                  surePwd: ""
                }
            }
        },
        methods: {
            submit() {
              if (this.formData.newPassword != this.formData.surePwd) {
                Toast("两次新密码输入不一致");
                return ;
              }
              // this.formData.oldPassword = this.formData.oldPwd ? this.formData.oldPwd : '111111';
              this.$axios.post(this.$config.URI(`rest/user/resetPassword`), this.formData, 1).then(res=>{
                Toast('修改成功');
                this.$router.push({name: 'my'});
              })
            }
        }
    }
</script>

<style scoped>

    .forget{
        color: #999
    }
</style>
