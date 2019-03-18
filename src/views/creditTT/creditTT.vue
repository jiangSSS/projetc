<template>
	<div class="container">
		<Header v-bind:isBack="true"></Header>
		<!-- <img src="/static/images/icon-35.png" class="logo"> -->
		<div class="swiper">
			<swiper v-if="banner.length > 0" :options="swiperOption">
				<swiper-slide v-for="(item,index) in banner" :key="index">
					<div>
						<img :src="item.img" class="swiperImg">
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<ul class="HeadlinesList scroller-box">
				<li class="itemR" v-for="(item,index) in pageList" :key="index">
					<a @click="$router.push({name: 'creditDetail', params: item})" class="HeadlinesListItem">
						<div class="photo fr"><img :src="item.img"></div>
						<h5 class="title">{{item.title}}</h5>
						<p class="info" v-html="item.content"></p>
						<div class="bottom">
							<span class="time">{{item.time}}</span>
							<!--<span class="time">{{item.publishTm}}</span>-->
							<!--<span class="number"><i class="iconfont">&#xe612;</i><em>{{item.read}}人阅读</em></span>-->
						</div>
					</a>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer"
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	export default {
		components: {
			Header,
			Footer,
			swiper,
			swiperSlide
		},
		data() {
			return {
				banner: [
				  {img: "/static/images/tt.jpg",},
					{img: "/static/images/tt.jpg",},
					{img: "/static/images/tt.jpg",},
				],
				swiperOption: {
					// 显示分页
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					},
					waitForTransition: true,
					// 设置自动播放速度
					autoplay: {
						disableOnInteraction: false,
						delay: 2000
					},
					// 开启无限循环
					loop: true,
					//设置点击箭头
					paginationClickable: true,
					prevButton: ".swiper-button-prev",
					nextButton: ".swiper-button-next",
					//设置同屏显示的数量，默认为1，使用auto是随意的意思。
					slidesPerView: 1,
					//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
					mousewheel: false,
					//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
					// freeMode:true,
					on: {
						// click() {
						//     const realIndex = this.realIndex
						//     vm.toSwiper(realIndex)
						// }
					}
				},

				pageList: [{
						title: "信物——看得见的诚信",
            content: "<p>\n" +
              "    诚信是一个道德范畴，是公民的第二个“身份证”。在中国这个礼仪之邦，诚信是国人历代相传的美德之一。诚信是立人之本。孔子曰：“人而无信，不知其可也。”认为人若是不讲信用，在社会上就无立足之地，什么事情也做不成。诚信是齐家之道。唐代著名大臣魏征说：“夫妇有恩矣，不成则离。”只要夫妻、父子和兄弟之间以诚相待，诚实守信，就能和睦相处，达到“家和万事兴”的目的。诚信是为政之基。《左转》云：“信，国之宝也。”指出诚信是治国的根本法宝。\n" +
              "　　\n" +
              "</p>\n" +
              "<p>\n" +
              "    但是，诚信也需要凭证，无论是立人、齐家，还是为政、经商，都需要一件小小的器物，使诚信幻化为具体的实物，作为信誉的保证，世代流传，无论世事如何变化，其作为信物的特征，具有恒定性。\n" +
              "\n" +
              "　　那一件件形态各异的信物，分量虽轻，却承载着诚信的重量。\n" +
              "</p>",
						time: "2019-03-14",
						lookNum: "168",
						img: "https://www.creditchina.gov.cn/chengxinwenhua/chengxinwenhualunbotu/201903/W020190306345322373984.jpg"
					},
					{
						title: "上海开展信用条例执法检查 公共信用信息平台需增容",
            content: "<p>\n" +
              "    《上海市信用管理条例》自2017年10月1日实施以来，公共信用信息的归集和管理的情况如何？公共信用信息与市场、金融信用信息互通、共享的程度怎样？市人大常委会正在开展条例执法检查工作。3月5日，市人大财经委与市发改委、市商务委、市公安局等多家部门就社会信用信息的融合共享召开专题座谈会。市人大财经委主任委员戴柳主持会议。\n" +
              "\n" +
              "　　据了解，条例实施以来，各政府部门不仅做好系统内公共信用信息的归集和管理，而且加强对接市公共信用信息平台。目前上海已初步构建了“1个市级平台+16个区子平台+N个行业领域子平台”互通共享的平台体系。全市共有 96家单位提供了近4万项信息事项（共包括监管类、资质类、登记类、管理类、履约类、执行类、公益类、判决类等8类），覆盖全市200万法人、2400万自然人各类公共信用信息3.2亿条。\n" +
              "</p>",
						time: "2019-03-14",
						lookNum: "168",
						img: "https://www.creditchina.gov.cn/xinyongdongtai/xinyongdongtaijiaodianwenzhang/201903/W020190311433262103506.jpg"
					},
					{
						title: "从根本上解决“数据出官”“官出数据”将有新动作",
            content: "<article><p >\n" +
              "    3月10日，在十三届全国人大二次会议记者会上，全国人大相关负责人就“人大监督工作”答中外记者问。会上有记者就统计数据造假及去年全国人大常委会开展的统计法执法检查情况进行了提问，全国人大财政经济委员会副主任委员尹中卿表示，执法检查推动查处统计违法案件，督促有关部门和地方落实对数据造假、弄虚作假责任人一票否决制，加大案件的通报、曝光、查处的力度，全面排查、专项整治以数谋私、数字腐败的问题，从根本上解决“数据出官”“官出数据”的问题。\n" +
              "</p>\n" +
              "<p>\n" +
              "    尹中卿表示，全国人大常委会对统计法的执法检查十分重视。全国人大财经委分三个组具体组织了这次执法检查，先后赴6省检查，同时还委托7个省区市进行自查。据尹中卿介绍，执法检查发现，一些地方GDP总量大于全国核算，统计数据有水分，导致统计数据的公信度被怀疑；一些地方搞攀比、争位次，在源头上对数据弄虚作假，虚报、瞒报、漏报；部门统计的标准、方法、口径和数据不一致，出现了数据打架，形成了“数据孤岛”，也有“数据烟囱”，统计信息共享推进缓慢。此外，一些地方对统计违法违纪行为追究不到位，对统计的违法行为处罚偏轻。\n" +
              "</p>\n" +
              "<p>\n" +
              "    <br/>\n" +
              "</p></article>",
						time: "2019-03-13",
						lookNum: "168",
						img: "https://www.creditchina.gov.cn/xinyongdongtai/zhengwuchengxin/201903/W020190311628772577722.jpg"
					},
					{
						title: "最高检：严惩“打假官司” 民事检察监督亮剑虚假诉讼",
            content: '<article><p>最高人民检察院第六检察厅厅长元明近日在做客“新时代四大检察”网络访谈时透露，惩治民事诉讼中滥用诉讼权利、虚假陈述、伪造证据、提供虚假证据等诉讼失信问题，是检察机关开展民事审判和执行监督工作的重要内容。<br />\n' +
              '<p>检察机关打击虚假诉讼从不手软，2018年更是频频亮剑。最高检部署在全国检察机关开展虚假诉讼专项监督；发布《最高人民检察院关于充分发挥检察职能为打好“三大攻坚战”提供司法保障的意见》，强调要加强对涉“三大攻坚战”虚假诉讼的监督和惩治；“两高”联合发布《关于办理虚假诉讼刑事案件适用法律若干问题的解释》。<br />\n' +
              '<p>除了虚假诉讼专项监督外，2018年最高检还开展了为期一年半的民事和行政非诉执行监督专项，以此来加强打击虚假诉讼的力度。\n' +
              '</p></article>',
						time: "2019-03-13",
						lookNum: "168",
						img: "https://www.creditchina.gov.cn/xinyongdongtai/sifachengxin/201902/W020190227631455391288.jpg"
					},
          {
            title: "天津严打成品油市场违法行为 违法失信企业纳入黑名单",
            content: "<article><p>近日，记者从天津市市场监督管理委员会获悉，为进一步促进本市成品油市场有序发展，提高成品油质量水平，促进大气污染防治，切实保护消费者合法权益，本市将进一步加强成品油市场监管工作，严厉打击成品油市场违法行为，依法将严重违法失信的成品油生产经营企业纳入经营异常名录和信用“黑名单”。\n" +
              "<p>严格检查企业生产经营资质，加大对辖区内成品油生产、经营企业的监督检查力度和频次，重点检查企业营业执照的经营范围是否包括成品油批发、零售，严厉查处有证无照经营行为。严厉查处标号和标识不相符、质量不合格、国家明令淘汰并停止销售的油品；对掺杂掺假、虚假广告、商标侵权、虚假宣传、不正当竞争、无证生产车用汽油以及违规生产销售非标油等违法行为，坚决依法查处。加强对加油站的计量监督管理。及时处理举报投诉，加大“诉转案”力度。加大对成品油生产、销售企业的产品质量监督抽查力度，特别是对消费者投诉比较集中、近年来产品质量监督抽查不合格的生产经营单位，加大监督抽查比例，并及时公布抽查结果。\n" +
              "</p><article>",
            time: "2019-03-12",
            lookNum: "168",
            img: "https://www.creditchina.gov.cn/xinyongdongtai/shangwuchengxin/201903/W020190311591876761911.png"
          },
          {
            title: "山东省出台严重违法失信企业信用修复制度",
            content:'<article><p> 日前，山东省政府新闻办召开了新闻发布会，会上，山东省市场监管局介绍2018年全省市场主体发展情况。据悉，2018年年底，山东省出台了严重违法失信企业信用修复制度。<br />\n' +
              '<p>对于申请条件，山东省市场监管局副局长田治颖表示，并不是原来进入黑名单的企业都可申请信用修复。企业提交的信用修复材料必须准确真实，没有任何虚假伪造，监管部门审核通过后方可移出。企业申请材料存在问题，自然不能移出黑名单。<br />\n' +
              '<p>据了解，符合条件的企业申请信用修复时，必须签订诚信守法经营承诺书，承诺在完成本轮信用修复后，不再发生同类失信行为，否则自动放弃信用修复机会。也就是说只为企业提供一次信用修复机会，企业在完成本轮信用修复后，必须严格自我管理，维护好自身信用。\n' +
              '</p></article>',
            time: "2019-03-12",
            lookNum: "168",
            img: "https://www.creditchina.gov.cn/xinyongdongtai/shangwuchengxin/201903/W020190308662314010654.png"
          },
          {
            title: "青海省部署开展劳动用工年检和企业诚信等级评价工作",
            content: "<article><p>据青海省人力资源社会保障厅消息，青海省于3月1日至6月30日集中开展劳动用工年检和诚信等级评价工作，加快推进劳动保障信用体系建设，实行用人单位分类监管，督促用人单位遵守劳动保障法律法规，促进劳动关系和谐稳定。<br />\n" +
              "<p>据了解，主要检查用人单位遵守劳动保障法律法规、劳动合同签订及履行、女职工和未成年工特殊劳动保护、遵守工作时间和休息休假规定、支付劳动者工资和执行最低工资标准、参加各项社会保险和缴纳社会保险费、保障农民工工资支付以及非法用工等情况。此外，各级人社部门还将组织开展企业诚信等级评价工作，对不同的信用等级企业实行分级分类动态监管。<br />\n" +
              "<p>青海省人力资源社会保障厅表示，劳动用工年检和诚信等级评价是加强劳动保障监察信用制度建设以及维护劳动者合法权益的重要基础性工作。对发现的重大劳动保障违法行为，会依法纳入“黑名单”管理，并纳入信用信息共享平台，会同有关部门实施联合惩戒，确保工作取得实效。<br /><article>",
            time: "2019-03-11",
            lookNum: "168",
            img: "https://www.creditchina.gov.cn/xinyongdongtai/shehuichengxin/201903/W020190308666354099664.png"
          },
          {
            title: "四川省公布今年首批重大劳动保障违法案件",
            content: "<article><p>\n" +
              "\t<span style=\"font-family:&quot;font-size:14px;color:#666666;background-color:#F6F6F6;\">最高人民检察院第六检察厅厅长元明近日在做客“新时代四大检察”网络访谈时透露，惩治民事诉讼中滥用诉讼权利、虚假陈述、伪造证据、提供虚假证据等诉讼失信问题，是检察机关开展民事审判和执行监督工作的重要内容。</span>\n" +
              "</p>\n" +
              "<p style=\"font-family:&quot;font-size:14px;color:#666666;background-color:#F6F6F6;\">\n" +
              "\t检察机关打击虚假诉讼从不手软，2018年更是频频亮剑。最高检部署在全国检察机关开展虚假诉讼专项监督；发布《最高人民检察院关于充分发挥检察职能为打好“三大攻坚战”提供司法保障的意见》，强调要加强对涉“三大攻坚战”虚假诉讼的监督和惩治；“两高”联合发布《关于办理虚假诉讼刑事案件适用法律若干问题的解释》。<br />\n" +
              "<p style=\"font-family:&quot;font-size:14px;color:#666666;background-color:#F6F6F6;\">\n" +
              "除了虚假诉讼专项监督外，2018年最高检还开展了为期一年半的民事和行政非诉执行监督近日，四川省人社厅向社会公布2019年第一批重大劳动保障违法行为案件。此次公布的案件，涉及6家企业和2名自然人。这些企业和自然人共计拖欠农民工工资440余万元，因涉嫌拒不支付劳动报酬罪，均已被移送公安机关调查处理，并且还将受到多部门的失信联合惩戒。<br />\n" +
              "<p style=\"font-family:&quot;font-size:14px;color:#666666;background-color:#F6F6F6;\">\n" +
              "被公布有重大劳动保障违法行为的企业分别为：成都永慧家居、富顺金姊妹制衣有限公司、自贡市毓祥农业开发有限公司、四川亚泰建设有限公司、重庆通用安装工程有限公司、达州市艺匠装饰材料有限公司等6家企业，以及黄晓波和胡浩两名自然人。上述企业和自然人拖欠农民工工资从数万元到数百万元不等，在接到人社部门《劳动保障监察限期改正指令书》，要求限期整改支付拖欠的工资后，在规定期限内均无任何整改行为，拒不支付拖欠的工资。其中，四川亚泰建设有限公司是此次被公布案件中拖欠工资数额最多的企业，该公司拖欠121名工人2016年11月至2018年5月工资约225万元。<br />\n" +
              "<p style=\"font-family:&quot;font-size:14px;color:#666666;background-color:#F6F6F6;\">\n" +
              "四川省人社厅劳动监察处相关负责人介绍，上述违法对象将被记入用人单位劳动保障守法诚信档案，纳入人力资源社会保障信用体系。人社部门与其他部门和社会组织将依法依规对上述违法对象实施信息共享和联合惩戒，使其“一处违法、处处受限”，切实维护劳动者合法权益。专项，以此来加强打击虚假诉讼的力度。\n" +
              "</p>\n" +
              "<p>\n" +
              "\t<br />\n" +
              "</p><article>",
            time: "2019-03-10",
            lookNum: "168",
            img: "https://www.creditchina.gov.cn/xinyongdongtai/shehuichengxin/201903/W020190311591977854660.png"
          },
        ],
				loading: false,
        pageNo: 1,
        start: 0,
        rows: 4,
			}
		},
		methods: {
			loadMore() {

			},
			getData() {
        this.$axios.get(this.$config.URI(`rest/cms/article/list`), {params:{ start: this.start,
            rows: this.rows,}}, 1).then(res=>{
          res.rows.length ? this.pageList = res.rows : [];
        })
			}
		},
		created() {
			// this.getData()
		}
	}
</script>

<style scoped>
	.swiper {
		margin-top: 1.3rem;
		margin-bottom: 1.5rem;
	}

	.swiperImg {
		width: 100%;
	}

	.photo {
		margin-left: .5rem
	}
  /deep/.info p:first-child{
    font-size: .42rem;
    color: #555555;
    margin: .25rem 0 .2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  /deep/ .info p:nth-child(n+2){
    display: none;
  }
</style>
