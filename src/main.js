// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stroe'
import "@/style/base.css"
import "@/style/style.css"
import "normalize.css/normalize.css"


import MintUI from 'mint-ui'
import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import accounting from 'accounting'
Vue.use(MintUI)
window.Toast = Toast;

import moment from 'moment'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios'
window.axios = axios

import _ from 'lodash'
window._ = _;
import $ from 'jquery'
window.$ = $;

import vueScroller from 'vue-scroller'
Vue.use(vueScroller)

import iView from 'iview';
// import 'iview/dist/styles/iview.css';
Vue.use(iView)

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import dateTime from 'vue-date-time-m';
Vue.component('data-time', dateTime);

import VueDND from 'awe-dnd'
Vue.use(VueDND)
import { config } from './util/config'

// import echarts from 'echarts' //引入echarts
// Vue.prototype.$echarts = echarts //引入组件
//引入基本模板
// let echarts = require('echarts/lib/echarts')
//


Vue.config.productionTip = false;

// import  echarts from "echarts"
// Vue.prototype.$echarts = echarts

Vue.prototype.$config = config

Vue.prototype.$moment = moment

Vue.prototype.$accounting = accounting

import {$axios} from "./util/index"
Vue.prototype.$axios = $axios

Vue.config.productionTip = false
/* eslint-disable no-new */
window.$VM = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

var arr = [
  {a: '王晓', b: '订单', c:'dd'},
  {a: '王晓', b: '订单', c:'cc'},
  {a: '王e晓', b: '订单', c:'cc'},
];

arr = _.uniqWith(arr, function(obj,other){
  return obj.a == other.a && obj.b == other.b;
});
console.log(arr);
