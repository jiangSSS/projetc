<template>
  <div>
    <Ech :data="json"></Ech>
  </div>
</template>

<script>
  import Ech from './echarts'
  export default {
    name: "chartJson",
    components: { Ech },
    data() {
      return {
        PRIPID: this.$store.state.baseInfo.PRIPID,
        ENTNAME: this.$store.state.baseInfo.ENTNAME,
        GD: [],
        TZ: [],
        GG: [],
        json: {
          edges: [],
          nodes: [
            {
              "color": "#4f19c7",
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
    props: ['res'],
    methods: {
      //股东EINVINVESTMENT
      getGD() {
        this.$axios.post(
          `qst_einvinvestmentbypripid/select`, {
            params: {
              'q': `PRIPID: 6104000000383371`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          this.GD = res.response.docs;
          this.json.nodes.push(...res.response.docs.map((item, i) => {
            return {
              "color": "#c71969",
              "label": item.INV,
              name: '股东',
              "attributes": {},
              "y": -50,
              "x": 10 * i,
              "id": item.INV,
              "size": 50
            }
          }))
          this.json.edges.push(...res.response.docs.map((item, i) => {
            return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.INV, "size": 1}
          }))
        })
      },
      //对外投资ENTBASE_INVESTMENT1  ENTNAME
      getTZ() {
        this.$axios.post(
          `ENTBASE_INVESTMENT1/select`, {
            params: {
              'q': `PRIPID: 6206020006201404140012X`,
              'indent': 'true',
              'wt': 'json'
            }
          }).then(res => {
          this.json.nodes.push(...res.response.docs.map((item, i) => {
            return {
              "color": "#c71969",
              "label": item.ENTNAME,
              name: '对外投资',
              "attributes": {},
              "y": 50,
              "x": 10 * i,
              "id": item.ENTNAME,
              "size": 50
            }
          }))
          this.json.edges.push(...res.response.docs.map((item, i) => {
            return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.INV, "size": 1}
          }))
          console.log(this.json);
        })
      }
    },
    created() {
      this.getGD();
      this.getTZ();
    }

  }
</script>

<style scoped>

</style>
