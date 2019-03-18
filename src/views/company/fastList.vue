<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
         <section class="wb100 dis-ib conTop">
        <ul class="indexNav">
          <li v-for="(typeItem,index) in typeList" :key="index" v-dragging="{ item: typeItem, list: typeList, group: 'typeItem'}">    <!-- item(可拖动的对象) list(可拖拽对象的数组) group(唯一键)-->
          <a  @click="toTypePage(typeItem)">
            <img :src="typeItem.img">
            <p>{{typeItem.name}}</p>
          </a>
        </li>
            <!--<li>-->
                <!--<a  @click="$router.push('/search')">-->
                    <!--<img src="/static/images/icon-43.png">-->
                    <!--<p>工商企业</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a  @click="$router.push('/publicUnit')">-->
                    <!--<img src="/static/images/icon-44.png">-->
                    <!--<p>国家机关</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a  @click="$router.push('/publicUnit')">-->
                    <!--<img src="/static/images/icon-45.png">-->
                    <!--<p>事业单位</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a  @click="$router.push('/publicUnit')">-->
                    <!--<img src="/static/images/icon-46.png">-->
                    <!--<p>社会团队</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a @click="$router.push('/creditBank')">-->
                    <!--<img src="/static/images/icon-47.png">-->
                    <!--<p>人行征信</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a @click="$router.push('/five')">-->
                    <!--<img src="/static/images/icon-48.png">-->
                    <!--<p>五险一金</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a @click="$router.push('/eduAll')">-->
                    <!--<img src="/static/images/icon-49.png">-->
                    <!--<p>学历验证</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a @click="$router.push('/identity')">-->
                    <!--<img src="/static/images/icon-50.png">-->
                    <!--<p>身份验证</p>-->
                <!--</a>-->
            <!--</li>-->
        <!--&lt;!&ndash;    <li>-->
                <!--<a @click="$router.push('/shop/shopInspect')">-->
                    <!--<img src="/static/images/icon-62.png">-->
                    <!--<p>商品抽检</p>-->
                <!--</a>-->
            <!--</li> &ndash;&gt;-->
           <!--<li>-->
                <!--<a @click="$router.push('/food/food')">-->
                    <!--<img src="/static/images/icon-63.png">-->
                    <!--<p>食品抽检</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a @click="$router.push('/drug/drug')">-->
                    <!--<img src="/static/images/icon-65.png">-->
                    <!--<p>药品抽查</p>-->
                <!--</a>-->
            <!--</li>-->
            <!--&lt;!&ndash; <li>-->
                <!--<a @click="$router.push('/publicUnit')">-->
                    <!--<img src="/static/images/icon-63.png">-->
                    <!--<p>公共单位查询</p>-->
                <!--</a>-->
            <!--</li> &ndash;&gt;-->
            <!--<li>-->
          <!--<a @click="$router.push('/creditRepair')">-->
            <!--<img src="/static/images/icon-64.png">-->
            <!--<p>信用修复</p>-->
          <!--</a>-->
        <!--</li>-->
          <!--<li>-->
            <!--<a @click="$router.push('/break')">-->
              <!--<img src="/static/images/icon-66.png">-->
              <!--<p>失信名录</p>-->
            <!--</a>-->
          <!--</li>-->
        </ul>
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
			  typeList:[
          {
            img:"/static/images/icon-43.png",
            name:"工商企业",
            src:"/searchList",
            status:"1"
          },
          {
            img:"/static/images/icon-44.png",
            name:"国家机关",
            src:"/publicUnit",
            status:"2"

          },
          {
            img:"/static/images/icon-45.png",
            name:"事业单位",
            src:"/publicUnit",
            status:"3"
          },{
            img:"/static/images/icon-46.png",
            name:"社会团队",
            src:"/publicUnit",
            status:"4"
          },
          {
            img:"/static/images/icon-47.png",
            name:"人行征信",
            src:"/creditBank",
            status:"5"
          },
          {
            img:"/static/images/icon-48.png",
            name:"五险一金",
            src:"/five",
            status:"6"
          },
          {
            img:"/static/images/icon-49.png",
            name:"学历认证",
            src:"/eduAll",
            status:"7"
          },
          {
            img:"/static/images/icon-50.png",
            name:"身份认证",
            src:"/identity",
            status:"8"
          },
          {
            img:"/static/images/icon-63.png",
            name:"食品抽查",
            src:"/food/food",
            status:"9"
          },

          {
            img:"/static/images/icon-65.png",
            name:"药品抽查",
            src:"/drug/drug",
            status:"10"
          },
          {
            img:"/static/images/icon-64.png",
            name:"信用修复",
            src:"/creditRepair",
            status:"11"
          },
          {
            img:"/static/images/icon-66.png",
            name:"失信名录",
            src:"/break",
            status:"12"
          },
        ]
      }
		},
    mounted(){
      //拖拽排序
      this.$dragging.$on('dragged', ({ value }) => {
        console.log(value.item)
        console.log(value.list)
      })
      this.$dragging.$on('dragend', () => {
        //  拖拽之后后端记录顺序
      })

    },
		methods:{
      toTypePage: function(typeItem) {
        if(typeItem.status == '1'){
          // this.$router.push('/five')
          this.goSearch('GS')
        }
        if(typeItem.status == '2'){
          // this.$router.push('/publicUnit')
          this.goSearch('GJ')
        }
        if(typeItem.status == '3'){
          // this.$router.push('/publicUnit')
          this.goSearch('SY')
        }
        if(typeItem.status == '4'){
          // this.$router.push('/publicUnit')
          this.goSearch('SH')
        }
        if(typeItem.status == '5'){
          this.$router.push('/creditBank')
        }
        if(typeItem.status == '6'){
          this.$router.push('/five')
        }
        if(typeItem.status == '7'){
          this.$router.push('/eduAll')
        }
        if(typeItem.status == '8'){
          this.$router.push('/identity')
        }
        if(typeItem.status == '9'){
          this.$router.push('/food/food')
        }
        if(typeItem.status == '10'){
          this.$router.push('/drug/drug')
        }
        if(typeItem.status == '11'){
          this.$router.push('/creditRepair')
        }
        if(typeItem.status == '12'){
          this.$router.push('/break')
        }
      },
      goSearch(type) {
        this.$store.dispatch('setSearchType', type);
        this.$router.push({
          name: 'searchList'
        });
      },
    },
		created(){}
	}
</script>

<style scoped>

</style>
