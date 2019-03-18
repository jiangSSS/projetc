<template>
    <div class="container">
        <Header></Header>
        <div id="chart" class="chart" ref="chart"></div>

    </div>
</template>

<script>
    import Header from "@/components/Header"
    import echarts from "echarts"
    import axios from 'axios'
    import { getPoint } from './chartUtil'

    // import data from './json'
    export default {
        components: {
            Header
        },
      props: ['data'],
        data() {
            return {
              GD: [],
              TZ: [],
              json: {
                edges: [],
                nodes: [
                  {
                    "color": "#FFA819",
                    "label": this.$store.state.baseInfo.ENTNAME,
                    "attributes": {},
                    "y": 0,
                    "x": 0,
                    "id": this.$store.state.baseInfo.ENTNAME,
                    "size": 80
                  }
                ]
              }
            }
        },
        computed: {
          dataLen() {
            return this.GD.length + this.TZ.length;
          }
        },
        mounted() {
            this.myChart()
        },
        methods: {
          //股东EINVINVESTMENT
          getGD() {
           return this.$axios.post(
              `EINVINVESTMENT/select`, {
                params: {
                  'q': `PRIPID: ${this.$store.state.baseInfo.PRIPID}`,
                  'indent': 'true',
                  'rows': 99,
                  'wt': 'json'
                }
              }).then(res => {
              this.GD = res.response.docs;
              // let len = res.response.docs.length;
              // let points = getPoint(100, 0, 0, 14);
              // console.log(points);
              // this.json.nodes.push(...res.response.docs.map((item, i) => {
              //   return {
              //     "color": "#FD485E",
              //     "label": item.INV,
              //     name: '股东',
              //     "attributes": {},
              //     // "y": -50,
              //     // "x": 10 * i,
              //     "x": points[i + 3]['x'],
              //     "y": points[i + 3]['y'],
              //     "id": item.INV,
              //     "size": 50
              //   }
              // }))
              // this.json.edges.push(...res.response.docs.map((item, i) => {
              //   return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.INV, "size": 1}
              // }))
              // // console.log(JSON.stringify(this.json));
              // this.myChart();

            })
          },
          //对外投资ENTBASE_INVESTMENT1  ENTNAME
          getTZ() {
            let query = '';
            if (this.$store.state.baseInfo.ENTNAME.indexOf('(') > 0) {
              query = `INV: ${this.$store.state.baseInfo.ENTNAME} OR INV: ${this.$store.state.baseInfo.ENTNAME.replace(/\(/g, '（').replace(/\)/g, '）')}`;
            } else if (this.$store.state.baseInfo.ENTNAME.indexOf('（') > 0) {
              query = `INV: ${this.$store.state.baseInfo.ENTNAME} OR INV: ${this.$store.state.baseInfo.ENTNAME.replace(/（/g, '\\(').replace(/）/g, '\\)')}`;
            } else {
              query = `INV: ${this.$store.state.baseInfo.ENTNAME}`;
            }
            return this.$axios.post(
              `ENTBASE_INVESTMENT1/select`, {
                params: {
                  'q': query,
                  'rows': 99,
                  'indent': 'true',
                  'wt': 'json'
                }
              }).then(res => {
                this.TZ = res.response.docs;
              //   let len = res.response.docs.length;
              // let points = getPoint(100, 0, 0, 14);
              // this.json.nodes.push(...res.response.docs.map((item, i) => {
              //   return {
              //     "color": "#4EA2F0",
              //     "label": item.ENTNAME,
              //     name: '对外投资',
              //     "attributes": {},
              //     // "y": 50,
              //     // "x": 10 * i,
              //     "x": points[7 + i]['x'],
              //     "y": points[7 + i]['y'],
              //     "id": item.ENTNAME,
              //     "size": 50
              //   }
              // }))
              // this.json.edges.push(...res.response.docs.map((item, i) => {
              //   return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.ENTNAME, "size": 1}
              // }))
              // // console.log(JSON.stringify(this.json));
              // this.myChart()
            })
          },
          myChart() {
            var that = this;
            let myChart = echarts.init(this.$refs.chart);
            myChart.setOption({
              title: {
                text: "", //正标题
                top: 'top',//上下位置
                left: 'center',//左右位置
                //正标题样式
                textStyle: {
                  fontSize:24
                },
                //副标题样式
                subtextStyle: {
                  fontSize:12,
                  color:"red"
                }
              },
              animationDurationUpdate: 1500,
              animationEasingUpdate: 'quinticInOut',
              // graphic:{ elements: [...echarts.util.map(data, function (item) {
              //     return {
              //       type: 'circle',
              //
              //       draggable: true,
              //     }
              //   })]},
              series : [
                {
                  type: 'graph',
                  layout: 'none',
                  // progressiveThreshold: 700,
                  data: that.json.nodes.map(function (node) {
                    return {
                      x: node.x,
                      y: node.y,
                      id: node.id,
                      name: node.label,
                      symbolSize: node.size,
                      itemStyle: {
                        normal: {
                          color: node.color
                        }
                      },
                    };
                  }),
                  edges: that.json.edges.map(function (edge) {
                    return {
                      source: edge.sourceID,
                      target: edge.targetID,
                      lineStyle: {
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                          }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                          }],
                          global: false // 缺省为 false
                        },
                        normal: {
                          show : true,
                          color: 'target',//决定边的颜色是与起点相同还是与终点相同
                          curveness: 0//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                        }
                      },


                    };
                  }),
                  roam: true,
                  force : { //力引导图基本配置
                    initLayout: 'circular',//力引导的初始化布局，默认使用xy轴的标点
                    repulsion : [10, 50],//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                    gravity : 0.3,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                    edgeLength: [30, 80],//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                    layoutAnimation : true
                    //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
                  },
                  edgeLabel: {//线条的边缘标签
                    normal: {
                      show: true,
                      //通过回调函数设置连线上的标签
                      formatter: function (x) {
                        if (x.color == "#FD485E") {
                          return '<股东';
                        } else if(x.color == '#4EA2F0') {
                          return '对外投资>';
                        }
                      }
                    }
                  },
                  label: {
                    emphasis: {
                      position: 'inside',
                      show: true
                    }
                  },
                  roam: true,
                  focusNodeAdjacency: true,
                  lineStyle: {
                    normal: {
                      width: 0.5,
                      curveness: 0.3,
                      opacity: 0.7
                    }
                  },

                }
              ]
            }, true);

          },
          getJson() {
            let type = this.GD.length > this.TZ.length ? 'GD' : 'TZ';
            let stype = this.GD.length < this.TZ.length ? 'GD' : 'TZ';
            let points = getPoint(100, 0, 0, this.GD.length > this.TZ.length ? this.GD.length * 2 : this.TZ.length * 2);
            let pLen = Math.ceil(points.length / 2); //数量多的点开始位置
            // let gdStart = Math.floor(pLen / this.GD.length)
            // let tzStart = Math.floor(pLen / this.TZ.length)
            let s = Math.floor(pLen / (this[stype].length + 1)); //数量少的点的开始位置以及间隔
            //GD
            this.json.nodes.push(...this.GD.map((item, i) => {
              return {
                "color": "#FD485E",
                "label": item.INV,
                name: '股东',
                "attributes": {},
                // "y": -50,
                // "x": 10 * i,
                "x": type == 'GD' ? points[i]['x'] : points[s + s * i]['x'],
                "y": type == 'GD' ? points[i]['y'] : points[s + s * i]['y'],
                "id": item.INV,
                "size": 50
              }
            }))
            this.json.edges.push(...this.GD.map((item, i) => {
              return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.INV, "size": 1}
            }))
            //TZ
            this.json.nodes.push(...this.TZ.map((item, i) => {
              return {
                "color": "#4EA2F0",
                "label": item.ENTNAME,
                name: '对外投资',
                "attributes": {},
                // "y": 50,
                // "x": 10 * i,
                "x": type == 'TZ' ? points[pLen + i]['x'] : points[pLen + s + s * i]['x'],
                "y": type == 'TZ' ? points[pLen + i]['y'] : points[pLen + s + s * i]['y'],
                "id": item.ENTNAME,
                "size": 50
              }
            }))
            this.json.edges.push(...this.TZ.map((item, i) => {
              return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.ENTNAME, "size": 1}
            }))
          }
        },
      watch: {
        json() {
          this.myChart()
        }
      },
      created() {
          // this.getGD();
          // this.getTZ();
        axios.all([this.getGD(), this.getTZ()])
          .then(axios.spread( (acct, perms) => {
            // 两个请求现在都执行完成
            this.getJson();
            this.myChart();
          }));
      }
    }
</script>

<style scoped>
    .chart {
        width: 100%;
        height: 100%;
    }
</style>
