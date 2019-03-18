<template>
    <div>
        <Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
        <div class="statisticsResult publicUnitListTip">搜索到符合条件的社会组织共<i class="c-e70016">18</i>个
            <a href="JavaScript:;" class="scree">筛选</a>
        </div>
        <div id="publicUnitList" class="searchListMargin publicUnitListTop">
            <div class="">
                <ul class="publicUnitList mainHref">
                    <li>
                        <a @click="$router.push('/publicDetail')">
                            <div class="title">
                                <span>中国互联网金融协会</span>
                                <em class="c-e70016">正常</em>
                            </div>
                            <div class="label">
                                <div class="labelList">
                                    <span>统一社会信用代码</span>
                                    <em>5110022200MJ01200632D</em>
                                </div>
                                <div class="labelList">
                                    <span>社会组织类型</span>
                                    <em>社会团体</em>
                                </div>
                                <div class="labelList">
                                    <span>法定代表人</span>
                                    <em>李希贵</em>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a @click="$router.push('/publicDetail')">
                            <div class="title">
                                <span>中国房地产金融协会</span>
                                <em class="c-ff7e00">注销</em>
                            </div>
                            <div class="label">
                                <div class="labelList">
                                    <span>统一社会信用代码</span>
                                    <em>51100443000MJ00230632D</em>
                                </div>
                                <div class="labelList">
                                    <span>社会组织类型</span>
                                    <em>社会团体</em>
                                </div>
                                <div class="labelList">
                                    <span>法定代表人</span>
                                    <em>---</em>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a @click="$router.push('/publicDetail')">
                            <div class="title">
                                <span>中国金融协会</span>
                                <em class="c-999">撤销</em>
                            </div>
                            <div class="label">
                                <div class="labelList">
                                    <span>统一社会信用代码</span>
                                    <em>511032300MJ0032632D</em>
                                </div>
                                <div class="labelList">
                                    <span>社会组织类型</span>
                                    <em>社会团体</em>
                                </div>
                                <div class="labelList">
                                    <span>法定代表人</span>
                                    <em>李希贵</em>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
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
            return {}
        },
        methods: {},
        created() { }
    }
</script>

<style scoped>

</style>