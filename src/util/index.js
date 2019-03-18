import axios from "axios"
import * as Cookies from 'js-cookie'
import qs from 'qs';
import { Toast } from 'mint-ui';
import  { config as $config } from './config'
import md5 from 'md5'
import { Decrypt, Encrypt } from './AES'

console.log(md5);


// const env = 'production' //生产环境下  被设置为production
const env = process.env.NODE_ENV //生产环境下  被设置为production
//开发环境下  被设置为development
let baseURL = env == "development" ?
	"http://124.193.149.90:8086/solr/" : //开发环境地址
	"/api/" //线上地址

const instance = axios.create({
	baseURL,
	timeout: 60000,
})
const xhr = {
	fetch(url, data, config, methods) {
	  let URI = url;
		if (config) {
			data = qs.stringify(data);
		}
		if (!config && env == "production") { //调用solr需要加解密
		  url = baseURL;
		//   data = {
      //   _appId: 'android',
      //   _sign: md5(JSON.stringify(data)),
      //   _timestamp: new Date().getTime() + '',
      //   _requestmethod: URI,
      //   _requestbody: Encrypt(JSON.stringify(data))
      // }
      data = {
        _appId: 'android',
        _sign: '不验证',
        _timestamp: new Date().getTime() + '',
        _requestmethod: URI,
        _requestbody: JSON.stringify(data)
      }
    }
		return new Promise((resolve, reject) => {
			instance[methods](url, data, config).then(res => {
        if (!config && env == "production") {

          // resolve(JSON.parse(Decrypt(res.data._responsebody)))
          resolve(JSON.parse(res.data._responsebody))
        }
        if (config && res.data.success) {
					resolve(res.data)
				} else if (config && !res.data.success) {
          resolve(res.data)
          // Toast(res.message)
				} else {
          // console.log(res);
					resolve(res.data)
          // window.$VM.$router.push({name: 'my'})
				}

			}).catch((err) => {
        if (String(err).indexOf('401') != -1) {
          Toast('请先登录')
          window.$VM.$router.push({name: 'login', params: {
              name: window.$VM.$route.name,
              params: window.$VM.$route.params,
              query: window.$VM.$route.query
            }})
        }

				reject(err)
			})
		})
	},
	get(url, data, config) {
		return this.fetch(url, data, config, "get")
	},
	put(url, data, config) {
		return this.fetch(url, data, config, "put")
	},
	post(url, data, config) {
		return this.fetch(url, data, config, "post")
	}
}


export const $axios = xhr
