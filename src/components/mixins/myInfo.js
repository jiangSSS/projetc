export default {
  data () {
    formData: {

    }
  },
  methods: {
    getMyInfo() {
      this.$axios.get(this.$config.URI(`rest/credit/personal/my`), {}, 1).then(res=>{
          this.formData = Object.assign({},this.formData, res.data);
      })
    }
  },
  created() {
    this.getMyInfo();
  }
}
