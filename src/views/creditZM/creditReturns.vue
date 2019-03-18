<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="marginTop">
			<div class="pdfHeader clearfix">
				<p class="tc pdfLogoBox"><img src="/static/images/logo/logo.png" class="pdfLogo"/></p>
				<div class="pdfTitle">信用查企业信用报告</div>
				<div><ul class="pdfTypeBox">
					<li><span>报告编号：</span><span>QST432783827132</span></li>
					<li><span>报告日期：</span><span>{{date}}</span></li>
					<li><span>报告类型：</span><span>机构深度信用报告</span></li>
				</ul></div>
				<div class="tips">
					<p>您所看到的报告内容为截止到{{date}}该公司的数据快照</p>
					<p>敬启者：本报告内容是中宏数据接受您的委托，查询信息所查的信息。中宏数据不对该查询结果的全面、准确、真实性负责。本报告应仅为您的决策提供参考。</p>
				</div>
				<div style="opacity: 0;">111</div>
			</div>
			<div class="PDFBox">
				<div class="detailTitle"> <img src="/static/images/pdfbLE.png" class="leftImg"/>
					<span class="detailDesc" @click="isShow1 = !isShow1">一、基本信息</span> </div>
				<div v-show="isShow1">
          <div class="companyBox">
            <div class="companyP">1.工商基本信息</div>
            <ul>
              <li class="infoItem"><span>社会统一信用代码：</span>{{$store.state.ENTCODES.credcode || '—'}}</li>
              <li class="infoItem"><span>组织机构代码：</span>{{$store.state.ENTCODES.orgcode || '—'}}</li>
              <li class="infoItem"><span>注册号：</span>{{allData.REGNO || '—'}}</li>
              <li class="infoItem"><span>原注册号：</span>{{allData.ORIREGNO || '—'}}</li>
              <li class="infoItem"><span>企业名称：</span>{{allData.ENTNAME || '—'}}</li>
              <li class="infoItem"><span>企业类型：</span>{{$config.getDicName('ENTTYPE', allData.ENTTYPE) || '—'}}</li>
              <li class="infoItem"><span>法定代表人：</span>{{NAME}}</li>
              <li class="infoItem"><span>币种：</span>{{$config.getDicName('PEGCAPCUR', allData.REGCAPCUR) || '—'}}</li>
              <li class="infoItem"><span>注册资本(万元)：</span>{{$accounting.formatMoney(allData.REGCAP, '') || '—'}}</li>
              <li class="infoItem"><span>实收资本(万元)：</span>{{$accounting.formatMoney(allData.RECCAP, '') || '—'}}</li>
              <li class="infoItem"><span>成立时间：</span>{{allData.ESDATE || '--'}}</li>
              <li class="infoItem"><span>营业期限：</span>{{allData.OPFROM || '--'}} — {{allData.OPTO || '--'}}</li>
              <li class="infoItem"><span>地址：</span>{{allData.DOM || '--'}}</li>
              <li class="infoItem"><span>经营(业务)范围：</span>{{allData.OPSCOPE || '--'}}</li>
              <li class="infoItem"><span>一般经营项目：</span>{{allData.CBUITEM || '--'}}</li>
              <li class="infoItem"><span>许可经营项目：</span>{{allData.ABUITEM || '--'}}</li>
              <li class="infoItem"><span>登记机关：</span>{{$config.getDicName('REGORG', allData.REGORG) || '—'}}</li>
              <li class="infoItem"><span>经营状态：</span>{{$config.getDicName('ENTSTATUS', allData.ENTSTATUS) || '—'}}</li>
              <li class="infoItem"><span>行业分类名称：</span>{{$config.getDicName('INDUSTRYPHY', allData.INDUSTRYPHY) || '—'}}</li>
              <!--<li class="infoItem"><span>行业门类代码：</span>{{allData.INDUSTRYCO || '&#45;&#45;'}}</li>-->
              <!--<li class="infoItem"><span>注销日期：</span>&#45;&#45;</li>-->
              <!--<li class="infoItem"><span>吊销日期：</span>&#45;&#45;</li>-->
            </ul>
          </div>
          <div class="companyBox">
            <div class="companyP">2.分支机构</div>
            <div>
              <div class="queryTab tab queryTabFour"  v-if="FZJG && FZJG.length != 0">
                <table border="1" width='100%'>
                  <thead>
                  <tr>
                    <td>序号</td>
                    <td>名称</td>
                    <td>注册号</td>
                    <td>负责人</td>
                    <td>地址</td>
                    <td>一般经营项目</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,i) in FZJG">
                    <td>{{i+1}}</td>
                    <td>{{item.BRNAME || '--'}}</td>
                    <td>{{item.BRREGNO || '--'}}</td>
                    <td>{{item.BRPRINCIPAL || '--'}}</td>
                    <td>{{item.BRADDR || '--'}}</td>
                    <td>{{item.CBUITEM || '--'}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="queryTab queryTabThree queryTabFour"  v-else>
                暂无数据
              </div>
            </div>
          </div>
          <div class="">
            <div class="companyP">3.变更记录</div>
            <div>
              <div class="queryTab tab queryTabFour"  v-if="LSBG && LSBG.length != 0">
                <table border="1" width='100%'>
                  <thead>
                  <tr>
                    <td>序号</td>
                    <td>变更事项</td>
                    <td>变更前内容</td>
                    <td>变更后内容</td>
                    <td>变更日期</td>
                  </tr>
                  </thead>
                  <tbody  v-for="(item,i) in LSBG">
                  <tr>
                    <td>{{i+1}}</td>
                    <td>{{$config.getDicName('ALTITEM', item.ALTITEM) || '--'}}</td>
                    <td>{{item.ALTBE || '--'}}</td>
                    <td>{{item.ALTAF || '--'}}</td>
                    <td>{{item.ALTDATE || '--'}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="queryTab queryTabThree queryTabFour"  v-else>
                暂无数据
              </div>
            </div>
          </div>
          <div class="">
            <div class="companyP">4.股东信息</div>
            <div>
              <div class="queryTab tab queryTabFour"  v-if="GDCZ && GDCZ.length != 0">
                <table border="1" width='100%'>
                  <thead>
                  <tr>
                    <td>序号</td>
                    <td>股东</td>
                    <td>出资比例</td>
                    <td>认缴出资额</td>
                    <td>出资日期</td>
                  </tr>
                  </thead>
                  <tbody  v-for="(item, i) in GDCZ">
                  <tr>
                    <td>{{i+1}}</td>
                    <td>{{item.INV || '--'}}</td>
                    <td>{{$accounting.formatMoney(item.CONPROP, '')}}%</td>
                    <td>{{$accounting.formatMoney(item.SUBCONAM, '')}}</td>
                    <td>{{item.CONDATE || '--'}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="queryTab queryTabThree queryTabFour"  v-else>
                暂无数据
              </div>
            </div>
          </div>
          <div class="">
            <div class="companyP">5.管理人员</div>
            <div>
              <div class="queryTab tab queryTabThree fiveTab"  v-if="GLRY && GLRY.length != 0">
                <table border="1" width='100%'>
                  <thead>
                  <tr>
                    <td>序号</td>
                    <td>姓名</td>
                    <td>职位</td>
                  </tr>
                  </thead>
                  <tbody  v-for="(item,i) in GLRY">
                  <tr>
                    <td>{{i+1}}</td>
                    <td>{{item.NAME || '--'}}</td>
                    <td>{{$config.getDicName('POSITION', item.POSITION) || '—'}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="queryTab queryTabThree queryTabFour"  v-else>
                暂无数据
              </div>
            </div>
          </div>
          <div class="">
            <div class="companyP">6.清算信息</div>
            <div>
              <div class="queryTab tab queryTabFour fiveTab"  v-if="QSXX && QSXX.length != 0">
                <table border="1" width='100%'>
                  <thead>
                  <tr>
                    <td>序号</td>
                    <td>清算责任人</td>
                    <td>清算负责人</td>
                    <td>清算组成员</td>
                    <td>清算完结情况</td>
                    <td>清算完结日期</td>
                    <td>债务承接人</td>
                    <td>债权承接人</td>
                  </tr>
                  </thead>
                  <tbody  v-for="(item, i ) in QSXX">
                  <tr>
                    <td>{{i+1}}</td>
                    <td>{{item.LIGENTITY || '--'}}</td>
                    <td>{{item.LIGPRINCIPAL || '--'}}</td>
                    <td>{{item.LIQMEN || '--'}}</td>
                    <td>{{$config.getDicName('LIGST', item.LIGST) || '--'}}</td>
                    <td>{{item.LIGENDDATE || '--'}}</td>
                    <td>{{item.DEBTTRANEE || '--'}}</td>
                    <td>{{item.CLAIMTRANEE || '--'}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="queryTab queryTabThree queryTabFour"  v-else>
                暂无数据
              </div>
            </div>
          </div>
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">二、企业深度关联背景</span>
        </div>
        <div class="companyP">1.因法定代表人对外投资/任职引起的关联</div>
        <div class="">
          <div class="companyP">1.1法定代表人（{{NAME}}）对外投资</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="FRTZ && FRTZ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>所投资机构</td>
                  <td>注册资本</td>
                  <td>登记机关</td>
                  <td>出资比例</td>
                  <td>注册日期</td>
                  <td>企业状态</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in FRTZ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{item.REGCAP || '--'}}</td>
                  <td>{{$config.getDicName('REGORG', item.REGORG) || '--'}}</td>
                  <td>{{item.CONPROP || '--'}}</td>
                  <td>{{item.ESDATE || '--'}}</td>
                  <td>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS) || '—'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">1.2法定代表人（{{NAME}}）在外任职</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="FRRZ && FRRZ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>任职机构</td>
                  <td>注册号</td>
                  <td>担任职务</td>
                  <td>注册资本（万元）</td>
                  <td>注册日期</td>
                  <td>登记机关</td>
                  <td>企业状态</td>
                  <td>是否法人</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in FRRZ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{item.REGNO || '--'}}</td>
                  <td>{{$config.getDicName('POSITION', item.POSITION) || '--'}}</td>
                  <td>{{item.REGCAPCUR || '--'}}</td>
                  <td>{{item.ESDATE || '--'}}</td>
                  <td>{{$config.getDicName('REGORG', item.REGORG) || '--'}}</td>
                  <td>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS) || '--'}}</td>
                  <td>{{item.LEREPSIGN == 1 ? '是' : '否'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">2.因目标公司对外投资引起的关联</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="QYTZ && QYTZ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>所投资机构</td>
                  <td>持股比例</td>
                  <td>出资金额</td>
                  <td>币种</td>
                  <td>出资日期</td>

                  <!--<td>注册资本（万元）</td>-->
                  <!--<td>登记机关</td>-->
                  <!--<td>出资比例</td>-->
                  <!--<td>注册日期</td>-->
                  <!--<td>企业状态</td>-->
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in QYTZ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{$accounting.formatMoney(item.CONPROP, '') || '--'}}</td>
                  <td>{{$accounting.formatMoney(item.SUBCONAM, '') || '--'}}</td>
                  <td>{{$config.getDicName('PEGCAPCUR', item.CURRENCY) || '--'}}</td>
                  <td>{{item.CONDATE || '--'}}</td>


                  <!--<td>{{item.CONPROP || '&#45;&#45;'}}</td>-->
                  <!--<td>{{item.ESDATE || '&#45;&#45;'}}</td>-->
                  <!--<td>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS) || '—'}}</td>-->
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="companyP">3.因公司高管对外投资/任职引起的关联</div>
        <div class="">
          <div class="companyP">3.1高管对外投资</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="GGTZ && GGTZ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>高管姓名</td>
                  <td>所投资机构</td>
                  <td>注册资本</td>
                  <td>登记机关</td>
                  <td>出资比例</td>
                  <td>注册日期</td>
                  <td>企业状态</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in GGTZ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.INV || '--'}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{item.REGCAP || '--'}}</td>
                  <td>{{$config.getDicName('REGORG', item.REGORG) || '--'}}</td>
                  <td>{{item.CONPROP || '--'}}</td>
                  <td>{{item.ESDATE || '--'}}</td>
                  <td>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS) || '—'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">3.2高管在外任职</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="GGRZ && GGRZ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>高管姓名</td>
                  <td>任职机构</td>
                  <td>注册号</td>
                  <td>担任职务</td>
                  <td>注册资本（万元）</td>
                  <td>注册日期</td>
                  <td>登记机关</td>
                  <td>企业状态</td>
                  <td>是否法人</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in GGRZ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.NAME || '--'}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{item.REGNO || '--'}}</td>
                  <td>{{$config.getDicName('POSITION', item.POSITION) || '--'}}</td>
                  <td>{{item.REGCAPCUR || '--'}}</td>
                  <td>{{item.ESDATE || '--'}}</td>
                  <td>{{$config.getDicName('REGORG', item.REGORG) || '--'}}</td>
                  <td>{{$config.getDicName('ENTSTATUS', item.ENTSTATUS) || '--'}}</td>
                  <td>{{item.LEREPSIGN == 1 ? '是' : '否'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <!--<div class="">-->
          <!--<div class="companyP">3.因公司高管对外投资/任职引起的关联</div>-->
          <!--<div>-->
            <!--<div class="queryTab tab queryTabFour fiveTab"  v-if="QSXX && QSXX.length != 0">-->
              <!--<table border="1" width='100%'>-->
                <!--<thead>-->
                <!--<tr>-->
                  <!--<td>序号</td>-->
                  <!--<td>姓名</td>-->
                  <!--<td>职位</td>-->
                  <!--<td>职位</td>-->
                  <!--<td>职位</td>-->
                  <!--<td>职位</td>-->
                  <!--<td>职位</td>-->
                <!--</tr>-->
                <!--</thead>-->
                <!--<tbody  v-for="(item, i ) in QSXX">-->
                <!--<tr>-->
                  <!--<td>{{i+1}}</td>-->
                  <!--<td>{{item.NAME || '&#45;&#45;'}}</td>-->
                  <!--<td>{{item.POSITION || '&#45;&#45;'}}</td>-->
                <!--</tr>-->
                <!--</tbody>-->
              <!--</table>-->
            <!--</div>-->
            <!--<div class="queryTab queryTabThree queryTabFour"  v-else>-->
              <!--暂无数据-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">三、年报信息</span>
        </div>
        <div class="queryTab queryTabThree queryTabFour">
          暂无数据
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">四、知识产权</span>
        </div>
        <div class="">
          <div class="companyP">1.专利</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="zhuanli && zhuanli.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>名称</td>
                  <td>申请号</td>
                  <td>申请公布号</td>
                  <td>显示申请公布日</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in zhuanli">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.title || '--'}}</td>
                  <td>{{item.request_nums || '--'}}</td>
                  <td>{{item.public_num || '--'}}</td>
                  <td>{{item.public_data || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">2.网站</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="wangzhan && wangzhan.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>名称</td>
                  <td>网站首页</td>
                  <td>单位性质</td>
                  <td>显示审核时间</td>
                  <td>备案号</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in wangzhan">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.website_name || '--'}}</td>
                  <td>{{item.website_url || '--'}}</td>
                  <td>{{item.host_nature || '--'}}</td>
                  <td>{{item.host_check || '--'}}</td>
                  <td>{{item.license_key || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">3.软件著作</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="softWare && softWare.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>名称</td>
                  <td>软件简称</td>
                  <td>登记号</td>
                  <td>分类号</td>
                  <td>版本号</td>
                  <td>显示批准日期</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in softWare">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.Dynacomm || '--'}}</td>
                  <td>{{item.SoftwareAbbreviated || '--'}}</td>
                  <td>{{item.RegistrationDate || '--'}}</td>
                  <td>{{item.ClassNumber || '--'}}</td>
                  <td>{{item.VersionNumber || '--'}}</td>
                  <td>{{item.RegistrationDate || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">4.作品著作</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="zuopin && zuopin.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>名称</td>
                  <td>登记号</td>
                  <td>类别</td>
                  <td>创作完成日期</td>
                  <td>登记日期</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in zuopin">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.WorkTitle || '--'}}</td>
                  <td>{{item.RegistrationMark || '--'}}</td>
                  <td>{{item.Classifications || '--'}}</td>
                  <td>{{item.CompletionDate || '--'}}</td>
                  <td>{{item.RegistrationDate || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">五、行政监督信息</span>
        </div>
        <div class="">
          <div class="companyP">1.行政处罚</div>
          <div>
            <div v-if="XZCF && XZCF.length">
              <ul v-for="item in XZCF">
                <li class="infoItem"><span>处罚名称：</span>{{item.CF_CFMC || '—'}}</li>
                <li class="infoItem"><span>决定文书号：</span>{{item.CF_WSH || '—'}}</li>
                <li class="infoItem"><span>处罚类别：</span>{{item.CF_CFLB1}};{{item.CF_CFLB2}}</li>
                <li class="infoItem"><span>处罚结果：</span>{{item.CF_JG}}</li>
                <li class="infoItem"><span>处罚事由：</span>{{item.CF_SY}}</li>
                <li class="infoItem"><span>处罚依据：</span>{{item.CF_YJ}}</li>
                <li class="infoItem"><span>处罚机关：</span>{{item.CF_XZJG}}</li>
                <li class="infoItem"><span>处罚决定日期：</span>{{item.CF_JDRQ || '—'}}</li>
                <li class="infoItem"><span>处罚期限：</span>{{item.CF_QX || '—'}}</li>
              </ul>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">六、企业经营信息</span>
        </div>
        <div class="">
          <div class="companyP">1.经营异常信息</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="JYYC && JYYC.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>企业名称</td>
                  <td>列入经营异常名录原因类型名称</td>
                  <td>设立日期</td>
                  <td>列入决定机关名称</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in JYYC">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.ENTNAME || '--'}}</td>
                  <td>{{item.SPECAUSENAME || '--'}}</td>
                  <td>{{item.ABNTIME || '--'}}</td>
                  <td>{{item.DECORGNAME || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">2.股权冻结历史</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="GQDJ && GQDJ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>冻结文号</td>
                  <td>冻结金额（万元）</td>
                  <!--<td>股权冻结比例</td>-->
                  <td>冻结机关</td>
                  <td>冻结起止日期</td>
                  <!--<td>冻结原因</td>-->
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in GQDJ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.FRODOCNO}}</td>
                  <td>{{$accounting.formatMoney(item.FROAM, '') || '--'}}</td>
                  <!--<td>{{$accounting.formatMoney(item.SHARFROPROP, '') || '&#45;&#45;'}}%</td>-->
                  <td>{{item.FROAUTH || '--'}}</td>
                  <td>{{item.FROFROM}} - {{item.FROTO}}</td>
                  <!--<td>{{item.FROREASON || '&#45;&#45;'}}</td>-->
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">3.股质出权</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="GZCQ && GZCQ.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>质权人</td>
                  <td>质权人类别</td>
                  <td>质押金额</td>
                  <td>备案日期</td>
                  <td>审批部门</td>
                  <td>批准日期</td>
                  <td>截止日期</td>
                  <td>执行状态</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in GZCQ">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.IMPORG || '--'}}</td>
                  <td>{{$config.getDicName('IMPORGTYPE', item.IMPORGTYPE) || '--'}}</td>
                  <td>{{item.IMPAM || '--'}}</td>
                  <td>{{item.IMPONRECDATE || '--'}}</td>
                  <td>{{item.IMPEXAEEP || '--'}}</td>
                  <td>{{item.IMPSANDATE || '--'}}</td>
                  <td>{{item.IMPTO || '--'}}</td>
                  <td>{{item.EXESTATE || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="">
          <div class="companyP">4.动产抵押物</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="DCDYW && DCDYW.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>抵押物</td>
                  <td>所有权属</td>
                  <td>抵押机构</td>
                  <td>抵押机构地址</td>
                  <td>抵押物详细描述</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in DCDYW">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.GUANAME || '--'}}</td>
                  <td>{{item.OWN || '--'}}</td>
                  <td>{{item.MORE || '--'}}</td>
                  <td>{{item.MORE_LOC || '--'}}</td>
                  <td>{{item.GUADES || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">七、司法信用信息</span>
        </div>
        <div class="">
          <div class="companyP">1.被执行人信息</div>
          <div>
            <div class="queryTab tab queryTabFour fiveTab"  v-if="shixin && shixin.length != 0">
              <table border="1" width='100%'>
                <thead>
                <tr>
                  <td>序号</td>
                  <td>被执行人姓名</td>
                  <td>做出执行依据单位</td>
                  <td>立案时间</td>
                  <td>执行法院</td>
                </tr>
                </thead>
                <tbody  v-for="(item, i ) in shixin">
                <tr>
                  <td>{{i+1}}</td>
                  <td>{{item.iname || '--'}}</td>
                  <td>{{item.courtName || '--'}}</td>
                  <td>{{item.regDate || '--'}}</td>
                  <td>{{item.gistUnit || '--'}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="queryTab queryTabThree queryTabFour"  v-else>
              暂无数据
            </div>
          </div>
        </div>
        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">八、信用综合分析</span>
        </div>
        <div>目的机构依法登记成立，资金实力较强。截止目前，目标机构有过行政处罚，司法诉讼纠纷，建议加强考察，在确定商务合作时应 多加慎重。(目标机构虽然发生过司法纠纷但并不意味着未来一定违约行为，仅供参考)。</div>

        <div class="detailTitle"><img src="/static/images/pdfbLE.png" class="leftImg"/>
          <span class="detailDesc" @click="isShow1 = !isShow1">九、风险评估</span>
        </div>
        <div>风险等级：3级</div>
        <div>等级说明:目标机构的风险预警评分为“3”，表示目标机构存在一定风险。</div>
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
			  NAME: this.$store.state.baseInfo.NAME,
        isShow1:true,
        isShow2:false,
        ENTNAME: this.$store.state.baseInfo.ENTNAME, //企业名称
        PRIPID: this.$store.state.baseInfo.PRIPID, //企业PRIPID
        NAME: this.$store.state.baseInfo.NAME,
        allData:{}, // 基本信息
        GDCZ: [], //股东出资
        GLRY: [], //管理人员
        LSBG: [], //历史变更
        FZJG: [], //分支机构
        XZCF: [], //行政处罚
        // GDXX:[],  //股东信息
        QSXX:[],  //清算信息
        FRTZ: [],
        FRRZ: [],
        GGTZ: [],
        GGRZ: [],
        QYTZ: [],
        zhuanli: [],
        wangzhan: [],
        softWare: [],
        zuopin: [],
        JYYC: [], //经营异常
        GQDJ: [],//股权冻结
        GZCQ: [],//估质出权
        DCDYW: [],//动产抵押物
        shixin: [],//失信
        date:""
     }
		},
    mounted(){
		  var date = new Date()
      var nbsp = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.date = year + nbsp + month + nbsp + strDate;
    },
		methods: {
		  //工商基本信息
      getGSXX() {
        this.$axios.post(
          `/qst_entinfobypripid/select`, {
            params: {
              'q': `ENTNAME: ${this.ENTNAME}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
            console.log("基本信息",res)
          this.allData = Object.assign({}, this.allData, res.response.docs[0])
        })
      },
      //分支机构
      getFZJG() {
        this.$axios.post(
          `qst_fzjgbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.FZJG = res.response.docs;
        })
      },
      //历史变更
      getLSBG() {
        this.$axios.post(
          `qst_alterrecoderbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.LSBG = res.response.docs;

        })
      },
      //股东信息
      getGDCZ() {
        this.$axios.post(
          `/qst_einvinvestmentbypripid/select`, {
            params: {
            'q': `PRIPID: ${this.PRIPID}`,
            'indent': 'true',
            'rows': 99,
            'wt': 'json'
          }
        }).then(res => {
        this.GDCZ = res.response.docs;
    })
  },
      //管理人员
      getGLRY(){
        this.$axios.post(
          `qst_epripersonbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.GLRY = res.response.docs;
          console.log("管理人员",res)
        })
      },
      //清算信息qst_qingsuanbypripid
      getQSXX(){
        this.$axios.post(
          `qst_qingsuanbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.QSXX = res.response.docs;
        })
      },
      //通过企业名查法人cerno qst_frcernobyentnameregno
      getFRcerno() {
        this.$axios.post(
          `qst_frcernobyentnameregno/select`, {
            params: {
              'q': `NAME: ${this.NAME} AND ENTNAME:${this.ENTNAME}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          let cernos = res.response.docs.map(item => {
            return item.CERNO || '\\\"\\\"';
          })
          let queryStr = `CERNO:${cernos.join(' OR CERNO:')}`;
          this.getFRTZ(queryStr);
          this.getFRRZ(queryStr);
        })
      },
      //再查法人cerno qst_einvinvestmentypebypripid
      getFRcerno2() {
        this.$axios.post(
          `qst_einvinvestmentypebypripid/select`, {
            params: {
              'q': `INV: ${this.NAME}`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          let cernos = res.response.docs.map(item => {
            return item.CERNO || '\\\"\\\"';
          })
          let queryStr = `CERNO:${cernos.join(' OR CERNO:')}`;
          this.getFRTZ(queryStr);
          this.getFRRZ(queryStr);
        })
      },
      //  再通过cerno查法人对外投资qst_frdwtz
      getFRTZ(queryStr){

        this.$axios.post(
          `qst_frdwtz/select`, {
            params: {
              'q': queryStr,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.FRTZ.push(...res.response.docs);
        })
      },
      //法人在外任职qst_frqtgsrz
      getFRRZ(queryStr){
        this.$axios.post(
          `qst_frqtgsrz/select`, {
            params: {
              'q': queryStr,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.FRRZ.push(...res.response.docs);
        })
      },
      //企业对外投资ENTBASE_INVESTMENT1
      getQYTZ(){
        let query = '';
        if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
          query = `INV: ${this.$store.state.baseInfo.ENTNAME} OR INV: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
        } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
          query = `INV: ${this.$store.state.baseInfo.ENTNAME} OR INV: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
        } else {
          query = `INV: ${this.$store.state.baseInfo.ENTNAME}`;
        }
        this.$axios.post(
          `ENTBASE_INVESTMENT1/select`, {
            params: {
              'q': query,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          let list = res.response.docs.map(item => {
            return item.PRIPID || '\\\"\\\"';
          })
          let query = `PRIPID:${list.join(' OR PRIPID:')}`;
          this.getQYTZQK(query, res.response.docs);
        })
      },
      //查对外企业投资情况
      getQYTZQK(query, arr) {
        // query = query.replace(/\(/g, '（').replace(/\)/g, '）') + ' OR ' + query.replace(/（/g, '\(').replace(/）/g, '\)');
        this.$axios.post(
          `qst_einvinvestmentbypripid/select`, {
            params: {
              'q': query,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
            let list = res.response.docs.filter(item => {
              return item.INV == this.ENTNAME;
            })
          list.map(item => {
            arr.map(opt => {
              item.PRIPID == opt.PRIPID ? item.ENTNAME = opt.ENTNAME : '';
            })
          })
          this.QYTZ = list;
          })
      },
      //通过PRIPID查高管cerno qst_epripersonbypripid
      getGGcerno() {
        return this.$axios.post(
          `qst_epripersonbypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          })
          // .then(res => {
          // let cernos = res.response.docs.map(item => {
          //   return item.CERNO || '\\\"\\\"';
          // })
          // let queryStr = `CERNO:${cernos.join(' OR CERNO:')}`;
          // this.getGGTZ(queryStr);
          // this.getGGRZ(queryStr);
        // })
      },
      //再查高管cerno qst_einvinvestmentypebypripid
      getGGcerno2() {
        return this.$axios.post(
          `qst_einvinvestmentypebypripid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          })
          // .then(res => {
          // let cernos = res.response.docs.map(item => {
          //   return item.CERNO || '\\\"\\\"';
          // })
          // let queryStr = `CERNO:${cernos.join(' OR CERNO:')}`;
          // this.getGGTZ(queryStr);
          // this.getGGRZ(queryStr);
        // })
      },
      getAllGGcerno() {
        axios.all([this.getGGcerno(), this.getGGcerno2()])
          .then(axios.spread((acct, perms) => {
            console.log(acct, perms)
            // 两个请求现在都执行完成
            let list = acct.response.docs.concat(perms.response.docs);
            let cernos = list.map(item => {
              return item.CERNO || '\\\"\\\"';
            })
            let queryStr = `CERNO:${cernos.join(' OR CERNO:')}`;
            this.getGGTZ(queryStr);
            this.getGGRZ(queryStr);
          }));
      },
      //高管投资
      getGGTZ(queryStr){

        this.$axios.post(
          `qst_frdwtz/select`, {
            params: {
              'q': queryStr,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          res.response.docs = _.uniqWith(res.response.docs, function(obj,other){
            return obj.INV == other.INV && obj.ENTNAME == other.ENTNAME;
          });

          this.GGTZ.push(...res.response.docs.filter(item => {
            return item.ENTNAME != this.ENTNAME;
          }));
        })
      },
      //高管在外任职qst_frqtgsrz
      getGGRZ(queryStr){
        this.$axios.post(
          `qst_frqtgsrz/select`, {
            params: {
              'q': queryStr,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          res.response.docs = _.uniqWith(res.response.docs, function(obj,other){
            return obj.NAME == other.NAME && obj.ENTNAME == other.ENTNAME;
          });

          this.GGRZ.push(...res.response.docs.filter(item => {
            return item.ENTNAME != this.ENTNAME;
          }));
        })
      },
      //qst_sharesfrostbyid股权冻结
      getGQDJ(){
        this.$axios.post(
          `qst_sharesfrostbyid/select`, {
            params: {
              'q': `PRIPID: ${this.PRIPID}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.GQDJ = res.response.docs;
        })
      },



      //专利zhuanli_info
      getZL() {
        this.$axios.post(
          `zhuanli_info/select`,
          {params:
              {'q': `name: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.zhuanli = res.response.docs;
        })
      },
      //网站备案beian_inf
      getBA() {
        this.$axios.post(
          `beian_info/select`,
          {params:
              {'q': `host_name: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.wangzhan = res.response.docs;
        })
      },
      //软件著作权
      getSoftWare() {
        this.$axios.post(
          `software/select`,
          {params:
              {'q': `SoftwareOwner: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.softWare = res.response.docs;
        })
      },
      //作品著作权
      getWorks() {
        this.$axios.post(
          `zuopin/select`,
          {params:
              {'q': `CopyrightOwner: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.zuopin = res.response.docs;
        })
      },
      //行政处罚
      getXZCF() {
        this.$axios.post(
          `pub_penalty/select`, {
            params: {
              'q': `CF_XDR_MC: ${this.NAME} AND CF_XDR_SHXYM: ${this.$store.state.ENTCODES.credcode}`,
              'indent': 'true',
              'rows': 99,
              'wt': 'json'
            }
          }).then(res => {
          this.XZCF = res.response.docs;
        })
      },
      //PAC_BLACKLIST经营异常
      getJYYC() {
        this.$axios.post(
          `PAC_BLACKLIST/select`,
          {params:
              {'q': `ENTNAME: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.JYYC = res.response.docs;
        })
      },
      //qst_sharesimpawnbyid股权出质
      getGZCQ() {
        this.$axios.post(
          `qst_sharesimpawnbyid/select`,
          {params:
              {'q': `PRIPID: ${this.PRIPID}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.GZCQ = res.response.docs;
        })
      },
      //动产抵押物qst_dcdywxxbyid
      getDCDYW() {
        this.$axios.post(
          `qst_dcdywxxbyid/select`,
          {params:
              {'q': `PRIPID: ${this.PRIPID}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.DCDYW = res.response.docs;
        })
      },
      //失信人  被执行人  shixin_info
      getshixin() {
        this.$axios.post(
          `shixin_info/select`,
          {params:
              {'q': `iname: ${this.ENTNAME}`,
                'indent':'true',
                'rows': 99,
                'wt':'json'
              }
          }).then(res=>{
          this.shixin = res.response.docs;
        })
      },
    },
		created() {
      this.getGSXX()
      this.getFZJG()
      this.getLSBG()
      this.getGDCZ()

      // this.getFRTZ()
      this.getFRcerno();
      // this.getFRcerno2();
      // this.getGGcerno();
      // this.getGGcerno2();
      // this.getFRRZ()
      this.getAllGGcerno();
      this.getQYTZ()
      this.getGQDJ()

      this.getGLRY()
      this.getQSXX()
      this.getZL()
      this.getBA()


      this.getSoftWare()
      this.getWorks()
      this.getXZCF()
      this.getJYYC()
      this.getGZCQ()
      this.getDCDYW()
      this.getshixin()
    }
	}
</script>

<style scoped>
	.PDFBox {
		padding: 0 .5rem;
		margin-top: .5rem;
	}
	.pdfLogo{
		width: 1.6rem;
		vertical-align: middle;
	}
	.pdfLogoBox{
		padding: .5rem 0;
	}
	.pdfTypeBox{
		margin-left:2.7rem;
		font-size: .4rem;
		padding: .5rem 0;
	}
	.pdfTypeBox li{
		padding: .06rem 0;
	}
	.tips{
		margin:0 .5rem;
		border: 1px solid #fff;
		padding: .3rem;
		font-size: .3rem;
	}
  .tips p{
    color: #f5f5f5;
  }

	.companyP {
		font-weight: 700;
		font-size: .5rem;
		padding: .2rem 0;
		color: #ce1422;
	}

	.noData {
		padding: .2rem 0;
	}

	/* .companyBox {margin-top: .5rem;border: 1px solid pink;padding: .3rem;box-shadow: .1rem .1rem 0rem pink;} */
	.companyBox .infoItem {
		line-height: 1rem;
	}

	.companyBox .infoItem span {
		font-weight: 700;
	}

	.pdfHeader {
		background: #DC143C;
		width: 100%;
		/* height: 9.8rem; */
		color: #fff;

	}

	.pdfTitle {
		text-align: center;
		/* padding: .5rem 0; */
		font-size: .6rem;
		font-weight: 700;
	}

	.pdfa {
		width: 5rem;
		height: .9rem;
		vertical-align: middle;
	}

	.detailTitle {
    margin: .2rem 0;
	}

	.detailDesc {
		color: #fff;
		font-size: .45rem;
    padding: .15rem .6rem .15rem 0;
    background: url("/static/images/pdfb.png") no-repeat right;
    display: inline-block;
	}
  .leftImg{
    width: 1rem;
    height: .95rem;
    float: left;
  }

	.moreDetail {
		display: block !important;
		float: none !important;
	}

	.nextSpan {
		display: block !important;
		float: none !important;
		width: 100% !important;
		padding: .07rem;
	}

	.detailBox li span:first-child {
		font-weight: 700;
		width: 4.2rem;
		float: left;
	}

	.detailBox li span:nth-child(2) {
		float: left;
		width: 5.5rem;
	}

	.detailBox li {
		clear: both;
		content: "";
		padding: .2rem 0;
	}

	.detailBox li span {
		line-height: .6rem;
		display: inline-block;
	}

	.detailBox1 li span:first-child {
		font-weight: 700;
		width: 3.2rem;
		float: left;
	}

	.detailBox1 li span:nth-child(2) {
		float: left;
		width: 6.5rem;
	}

	.detailBox1 li {
		clear: both;
		content: "";
		padding: .2rem 0;
	}

	.detailBox1 li span {
		line-height: .6rem;
		display: inline-block;
	}

	.queryNew {
		display: block;
		overflow: hidden;
	}

	.quertTit {
		display: block;
		overflow: hidden;
		color: #fff;
	}

	.quertTit span {
		display: inline-block;
		background: url(/static/images/iconQuery05.png) no-repeat;
		background-size: cover;
		width: 4.06rem;
		height: 1.03rem;
		line-height: 1.03rem;
		text-indent: 0.4rem;
		font-size: .42rem;
	}

	.queryName {
		display: block;
		padding: 0rem 0.4rem;
		overflow: hidden;
		line-height: 1.4rem;
		font-size: .42rem;
		color: #313131;
		font-weight: 600;
	}

	.queryNote {
		display: block;
		padding: 0.2rem 0.4rem;
		overflow: hidden;
		line-height: .6rem;
		font-size: .36rem;
	}

	.queryTab {
		display: block;
		overflow: hidden;
		padding: 0;
	}

	.queryTab table {
		background: #fff;
		border-collapse: collapse;
		border-right: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #e70000;
	}

	.queryTab table tr {
		display: flex;
		overflow: hidden;
    height: auto;
	}

	.queryTab table td {
		display: inline-block;
		float: left;
		width: 50%;
		line-height: .5rem!important;
		border-left: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		padding: 0 0.1rem!important;
		font-size: 0.26rem;
		color: #535151;
    word-wrap: break-word;

	}

	.queryTab table td:first-child {
		text-align: center;
	}
  .queryTab table td:nth-child(2) {
    text-align: center;
  }

	.queryTab table td:last-child {
		text-align: center;
	}

	.queryTop {
		display: block;
		overflow: hidden;
		margin-top: 0.4rem;
	}

	.queryTabThree table tr {
		overflow: hidden;
    display:flex;
		/*height: 1rem;*/
	}

	.queryTabThree table td {
		display: inline-block;
		float: left;
		line-height: 1rem;
		border: 1px solid #f5f5f5;
		padding: 0;
		text-align: center;
	}

	.queryTabThree table td{
		text-align: center;
	}


	.queryTabThree thead tr {
		display: block;
		border-top: 1px solid #e70000!important;
	}

	.queryTabThree thead td {
		background: #f3f3f3;
		display: inline-block;
		float: left;width:33.33%;
	}

	.queryTabFour table td:first-child {
		width: 10%;
	}
	.queryTabFour table td {
		width: 22.5%;
	}

  .fiveTab table td:first-child{
    width: 20% !important;
  }

  .queryTab thead td {
		color: #313131;
		font-size: .34rem;
    background: #f3f3f3;
    line-height: 1rem;
	}

	.queryTab thead.one td {
		width: 100%;
	}
</style>
