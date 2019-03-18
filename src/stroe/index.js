import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
  searchType: '',
  baseInfo: {
    ENTNAME: '',
    PRIPID: '',
    NAME: '',
  },
  currRoute: '/',
  dicData: JSON.parse(localStorage.getItem('dicData')),
  userInfo: false,
  XYZM: false, //判断是否信用证明搜索
  ENTCODES: {}, //信用码等
  yujingInfo: {}, //监控预警用信息
}

const getters = {

}

const mutations = {
  setSearchHistory(state, obj) {
    state.searchHistory.push(obj);
    localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
  },
  removeSearchHistory(state) {
    state.searchHistory = [];
    localStorage.setItem('searchHistory', '[]');
  },
  setSearchType(state, text) {
    state.searchType = text;
  },
  setENTNAME(state, text) {
    state.baseInfo.ENTNAME = text;
  },
  setPRIPID(state, text) {
    state.baseInfo.PRIPID = text;
  },
  setNAME(state, text) {
    state.baseInfo.NAME = text;
  },
  setCurrRoute(state, text) {
    state.currRoute = text;
  },
  setDicData(state, obj) {
    state.dicData = obj;
  },
  setUserInfo(state, flag) {
    state.userInfo = flag;
  },
  setXYZM(state, flag) {
    state.XYZM = flag;
  },
  setENTCODES(state, obj) {
    state.ENTCODES = obj;
  },
  setyujingInfo(state, obj) {
    state.yujingInfo = obj;
  },
}

const actions = {
  setSearchHistory({commit}, obj) {
    let list = JSON.parse(localStorage.getItem('searchHistory') || '[]').push(obj);

    commit('setSearchHistory', obj)
  },
  removeSearchHistory({commit}) {
    commit('removeSearchHistory')
  },
  setSearchType({commit}, text) {
    commit('setSearchType', text)
  },
  setENTNAME({commit}, text) {
    commit('setENTNAME', text)
  },
  setPRIPID({commit}, text) {
    commit('setPRIPID', text)
  },
  setNAME({commit}, text) {
    commit('setNAME', text)
  },
  setCurrRoute({commit}, text) {
    commit('setCurrRoute', text)
  },
  setDicData({commit}, obj) {
    commit('setDicData', obj)
  },
  setUserInfo({commit}, flag) {
    commit('setUserInfo', flag)
  },
  setXYZM({commit}, flag) {
    commit('setXYZM', flag)
  },
  setENTCODES({commit}, obj) {
    commit('setENTCODES', obj)
  },
  setyujingInfo({commit}, obj) {
    commit('setyujingInfo', obj)
  },
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
