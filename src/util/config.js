
const env = process.env.NODE_ENV

export const config = {
  // online: 2, //1:线上环境 2：开发
  URI: (uri) => {
    if (env === 'development') {
      return 'http://115.28.208.176:8888/api/xyc/' + uri;
    } else {
      return '/xyc/' + uri;
    }
  },
  srcURI: (uri) => {
    return 'http://115.28.208.176:8888/api/xyc/' + uri;

  },
  dics: () => {
    return `pcode=${[
      'ENTSTATUS',  //企业状态
      'INDUSTRYCO', //行业代码
      'ENTTYPE',  //企业类型
      'INDUSTRYPHY',  //行业门类
      'S_EXT_ENTPROPERTY', //企业性质
      'PEGCAPCUR', //币种
      'REGORG', // 登记机关
      'ALTITEM', //变更类型
      'POSITION', //职务
      'LIGST', //清算完结情况
      'PROVINCE', //省份
      'IMPORGTYPE', //质权人类别

    ].join('&pcode=')}`;
  },
  getDicName: (key, id) => {
    let result;
    let list = JSON.parse(localStorage.getItem('dicData'))[key] || [];
    list.map(item => {
      if (item.code == id) {
        result = item.title;
      }
    })
    return result || '';
  }
}
