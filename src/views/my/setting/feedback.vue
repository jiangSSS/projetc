<template>
    <div class="">
        <Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
        <div>
            <section class="conTop wb100 dis-ib">
                <h5 class="feedbackTitle">反馈内容</h5>
                <div class="feedbackCon">
                    <textarea placeholder="请填写问题描述以使我们提供更好的帮助" v-model="content"></textarea>
                </div>
                <div class="buttonBIg buttonBIgWidth">
                    <a @click="submit">提交</a>
                </div>
            </section>
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
              content: ''
            }
        },
        methods: {
          submit() {
            this.$axios.post(this.$config.URI(`rest/suggestion/add`), {content: this.content}, 1).then(res=>{
              Toast('提交成功');
              this.$router.go(-1);
            })
          }
        },
        created() { }
    }
</script>

<style scoped>
</style>
