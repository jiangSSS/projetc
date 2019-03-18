<template>
	<div class="container">
		<Header></Header>
		<img src="/static/images/icon-35.png" class="logo">
		<div class="marginTop marginBottom">
			<div class="userList">
				<ul :model="formData">
					<li class="clearfix">
						<span class="fl">企业名称：</span>
						<input class="fr tr" type="text" v-model="formData.enterpriseName" placeholder="请输入企业名称">
					</li>
					<li class="clearfix">
						<span class="fl">联系电话：</span>
						<input class="fr tr" type="text" v-model="formData.tel"  placeholder="请输入电话号码">
					</li>
					<li class="clearfix">
						<span class="fl">邮箱：</span>
						<input class="fr tr" type="text" v-model="formData.email"  placeholder="请输入联系邮箱">
					</li>
					<li class="clearfix">
						<span class="fl">企业网址：</span>
						<input class="fr tr" type="text" v-model="formData.website"  placeholder="请输入企业网址">
					</li>
					<li class="clearfix">
						<span class="fl">公司地址：</span>
						<input class="fr tr" type="text" v-model="formData.address"  placeholder="请输入公司地址">
					</li>

          <li class="clearfix imgLi">
            <span class="fl">荣誉资质：</span>
            <p class="fr tr" @click="addJSON('honorJSON')">添加荣誉</p>
          </li>
          <div class="imgAllBox">
            <div class="clearfix imgItem" v-for="(item, index) in formData.honorJSON">
              <div style="display: none">{{img}}</div>

              <!--<img src="http://115.28.208.176:8888/api/xyc/rest/file/download?accessoryUrl=2647e867-1853-46ac-9563-7b8c69811238.png&introduction=micisty.png" alt="">-->
              <Upload
                ref="upload"
                :show-upload-list="false"
                :on-success="(data) => {uploadSuccess('honorJSON', index, data)}"
                type="drag"
                accept=""
                :action="$config.srcURI('rest/file/upload')"
                style="display: inline-block;width:58px; margin-left: .4rem;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                  <img :src="item.img ? $config.srcURI(`rest/file/download?accessoryUrl=${item.img}&accessoryName=${item.introduction}`) : defaultImg" class="imgStyle">
                </div>
              </Upload>
              <div @click="delImg(index, 'honorJSON')" class="delImg"><span class="delIcon">x</span></div>
              <input class="fr imgTitle" placeholder="请填写图片标题" v-model="item.name"/>
            </div>
          </div>

					<li class="clearfix imgLi">
						<span class="fl">产品服务：</span>
            <p class="fr tr" @click="addJSON('productsJSON')">添加产品服务</p>
					</li>
          <div class="imgAllBox">
            <div class="clearfix imgItem" v-for="(item, index) in formData.productsJSON">
              <div style="display: none">{{img}}</div>
              <!--<img src="http://115.28.208.176:8888/api/xyc/rest/file/download?accessoryUrl=2647e867-1853-46ac-9563-7b8c69811238.png&introduction=micisty.png" alt="">-->
              <Upload
                ref="upload"
                :show-upload-list="false"
                :on-success="(data) => {uploadSuccess('productsJSON', index, data)}"
                type="drag"
                accept=""
                :action="$config.srcURI('rest/file/upload')"
                style="display: inline-block;width:58px; margin-left: .4rem;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                  <img :src="item.img ? $config.srcURI(`rest/file/download?accessoryUrl=${item.img}&accessoryName=${item.introduction}`) : defaultImg" class="imgStyle">
                </div>
              </Upload>
              <div @click="delImg(index, 'productsJSON')" class="delImg"><span class="delIcon">x</span></div>
              <input class="fr imgTitle" placeholder="请填写图片标题" v-model="item.name"/>
            </div>
          </div>

          <li class="clearfix">
            <span class="fl">公司简介：</span>
            <textarea class="fr tr textarea" v-model="formData.introduction"  rows="3" placeholder="请填写公司描述"></textarea>
          </li>
				</ul>
				<van-button class="submit" @click="saveInfo">保存</van-button>
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
				formData: {
          enterpriceId: '',
          enterpriseName: "",
					address: "",
          tel: "",
					email: "",
          website:"",
          introduction:"",
          productsJSON: [{}], //荣誉资质
          honorJSON: [{}], //产品服务
				},
				checked: false
			}
		},
    computed: {
      enterpriseId() {
        return this.$route.params.enterpriseId
      }
    },
		methods: {
      //
      saveInfo() {
        if (!/^1[34578]\d{9}$/.test(this.formData.tel)) {
          Toast('请正确填写手机号码');
          return;
        }
        this.$axios.post(this.$config.URI(`rest/space/update`),
        {
          enterpriseId: this.enterpriseId,
          enterpriseName: this.formData.enterpriseName,
          address: this.formData.address,
          tel: this.formData.tel,
          email: this.formData.email,
          website: this.formData.website,
          introduction: this.formData.introduction,
          productsJSON: JSON.stringify(this.formData.productsJSON),
          // productsJSON: this.formData.productsJSON,
          honorJSON: JSON.stringify(this.formData.honorJSON),
          // honorJSON: this.formData.honorJSON,
        },
          1).then(res=>{
          Toast('保存成功');
          this.$router.go(-1);
        })

      },
      ///xyc/rest/space/info
      getInfo() {
        this.$axios.get(this.$config.URI(`rest/space/info?enterpriseId=${this.enterpriseId}`), {enterpriseId: this.enterpriseId}, 1).then(res=>{
          // Toast('申请成功');
          this.formData = Object.assign({}, this.formData, res.data);
        })
        //产品
        this.$axios.get(this.$config.URI(`rest/space/products/list?enterpriseId=${this.enterpriseId}`), {enterpriseId: this.enterpriseId}, 1).then(res=>{
          // Toast('申请成功');
          this.formData.productsJSON = res.rows || [{}];
        })
        //honor/list 荣誉
        this.$axios.get(this.$config.URI(`rest/space/honor/list?enterpriseId=${this.enterpriseId}`), {enterpriseId: this.enterpriseId}, 1).then(res=>{
          // Toast('申请成功');
          this.formData.honorJSON = res.rows || [{}];
        })
      },
      uploadSuccess(type, index, data) {
        this.formData[type][index].img = data.data.accessoryUrl;
        this.formData[type][index].introduction = data.data.accessoryName;

        this.img = data.data.accessoryUrl;
      },
      delImg(index, type) {
        this.formData[type].splice(index, 1);
      },
      addJSON(type) {
        this.formData[type].push({
          img: '',
          name: '',
          introduction: ''
        });
      },
		},
		created() {
      // console.log(this.$route.params);
      this.getInfo()
    }
	}
</script>

<style scoped>
  @import "https://cdn.bootcss.com/iview/3.3.0-rc.2/styles/iview.css";
	.userList li {
		margin: 0rem .4rem;
		border-bottom: 1px solid rgb(241, 241, 241);
		padding: .3rem 0;
	}
  /*.imgLi{*/
    /*border-bottom: none!important;*/
    /*padding: .3rem 0 0!important;*/
  /*}*/

	.marginTop {
		border-top: 1px solid rgb(241, 241, 241)
	}

	.userList li span {
		font-family: "Microsoft YaHei";
		color: #444;
		font-size: .4rem;
		display: inline-block;
		line-height: .9rem;
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
		border: none;
	}

	.submit {
		color: #fff;
		background: #e50015;
		width: 100%;
    height: 1.5rem;
		position: fixed;
		bottom: 0;
	}
  .imgAllBox{
    padding: .2rem 0;
    /*display: flex;*/
    /*justify-content: space-around;*/
  }
  .imgBox{
    margin: .2rem .2rem .2rem .6rem;
    width: 1.8rem;
    height: 1.8rem;
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
  .imgStyle{
    width: 100%;
    height: 100%;
  }
  .textarea{
    border: none;
    width: 70%;
    padding: 0;
    font-size: .4rem;
  }
  .serverDesc{
    border: none;
    padding: 0 .6rem;
  }
  input[type="file"]{
    display: none !important;
  }
  input.ivu-upload-input{
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
