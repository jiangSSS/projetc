import Header from "@/components/Header";
export const mixins = {
  data() {
    return {
      pageNo: 0,
      rows: 10,
      start: 0,
      loading: false,
      pageList: []
    }
  },
  components: {
    Header
  },
  computed: {

  },
  methods: {
    loadMore() {
      this.loading = true;
      this.pageNo ++;
      this.getData({
        rows: this.rows,
        start: this.pageNo * this.rows
      });
    }
  },
  created() {
    this.getData({
      rows: this.rows,
      start: this.pageNo * this.rows
    })
  }
}
