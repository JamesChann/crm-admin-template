const TableMixin = {
  data() {
    return {
      MTable: {
        config: {
          pageNum: 1,
          pageSizes: [5, 10, 50, 100],
          pageSize: 5,
          total: 0,
          showPagination: true,
          headers: []
        },
        list: []
      }
    }
  },
  methods: {
    $$setMTableData(result, headers) {
      this.MTable.config.headers = headers
      const { total, list } = result.data
      this.MTable.list = list.slice()
      this.MTable.config.total = total
    } 
  }
}

export { TableMixin }
