export const getGuDong = () => {
  this.$axios.post(
    `EINVINVESTMENT/select`, {
      params: {
        'q': `PRIPID: ${this.$store.state.baseInfo.PRIPID}`,
        'indent': 'true',
        'wt': 'json'
      }
    }).then(res => {
    this.GD = res.response.docs;
    let len = res.response.docs.length;
    let points = getPoint(100, 0, 0, 14);
    console.log(points);
    this.json.nodes.push(...res.response.docs.map((item, i) => {
      return {
        "color": "#FD485E",
        "label": item.INV,
        name: '股东',
        "attributes": {},
        // "y": -50,
        // "x": 10 * i,
        "x": points[i + 3]['x'],
        "y": points[i + 3]['y'],
        "id": item.INV,
        "size": 50
      }
    }))
    this.json.edges.push(...res.response.docs.map((item, i) => {
      return {"sourceID": this.$store.state.baseInfo.ENTNAME, "attributes": {}, "targetID": item.INV, "size": 1}
    }))
    // console.log(JSON.stringify(this.json));
    this.myChart();

  })
}
