<template>
	<div>
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
        <section class="wb100 dis-ib conTop conBottom">
        <ul class="shopInspectForm">
            <!--<li class="ListAfter"><span class="inName">选择高级法院</span><em class="inInput">请选择</em></li>-->
            <!--<li class="ListAfter"><span class="inName">选择中级法院</span><em class="inInput">请选择</em></li>-->
            <!--<li class="ListAfter"><span class="inName">选择低级法院</span><em class="inInput">请选择</em></li>-->
            <!--<li><span class="inName">选择高级法院</span><input type="text" class="inInput wb50" placeholder="请输入"></li>-->
            <!--<li><span class="inName">选择中级法院</span><input type="text" class="inInput wb50" placeholder="请输入"></li>-->
            <li><span class="inName">执行法院</span><input v-model="gistUnit" type="text" class="inInput wb50" placeholder="请输入"></li>
            <li><span class="inName">被执行人姓名/名称</span><input v-model="iname" type="text" class="inInput wb50" placeholder="请输入"></li>
            <li><span class="inName">身份证/组织机构代码</span><input v-model="cardNum" type="text" class="inInput wb50" placeholder="请输入"></li>
        </ul>
        <div class="buttonBIg buttonBIgWidth">
            <span @click="search">查询</span>
        </div>

    </section>
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
        gistUnit: '',
        iname: '',
        cardNum: ''
      }
		},
		methods:{
		  search() {
        if(!this.gistUnit && !this.iname && this.cardNum) {
          Toast('请至少输入一个查询条件')
          return;
        }
        this.$axios.post(
          `shixin_info/select`,
          {params:
              {'q': `gistUnit: ${this.gistUnit || '*'} AND iname: ${this.iname || '*'} AND cardNum: ${this.cardNum || '*'}`,
                'indent':'true',
                'wt':'json'
              }
          }).then(res=>{
          this.$router.push({name: 'breakList', params: {list: res.response.docs}})
        })
      }
    },
		created(){}
	}
</script>

<style scoped>

</style>
