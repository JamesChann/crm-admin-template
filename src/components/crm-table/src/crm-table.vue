<template>
  <section class="crm-table">
    <div class="table-wrap">
      <div class="content-wrap">
        <!-- table list -->
        <el-table :data="dataList"
                  width="100%"
                  stripe
                  v-loading="_tableConfig.loading"
                  :border="_tableConfig.border"
                  @selection-change="_handle_selection_change">
              <!-- checkbox -->
              <el-table-column v-if="_tableConfig.showCheckbox"
                               type="selection"
                               width="55"
                               align="center">
              </el-table-column>

              <!-- table columns -->
              <template v-for="(_item, _index) in _tableConfig.headers">
                  <el-table-column
                      v-if="!_item.tdTemplate"
                      :prop="_item.field"
                      :label="_item.title"
                      :key="_index"
                      :width="_item.width"
                      :show-overflow-tooltip="_item.toolTip"
                  ></el-table-column>

                  <el-table-column
                      v-if="_item.tdTemplate"
                      :prop="_item.field"
                      :label="_item.title"
                      :key="_index"
                      :width="_item.width"
                      :show-overflow-tooltip="_item.toolTip"
                  >
                      <template slot-scope="scope">
                          <div slot="reference" class="name-wrapper">
                              <slot
                                  :row="scope.row"
                                  :name="_tableConfig.headers[_index].tdTemplate"
                              ></slot>
                          </div>
                      </template>
                  </el-table-column>
              </template>
          </el-table>

          <!-- operation buttons -->
          <div class="operation-wrap" v-if="_tableConfig.showOperationBtn">
              <slot name="operationBtnTql"></slot>
          </div>

          <!-- paginations -->
          <el-pagination
              v-if="_tableConfig.showPagination"
              class="page-wrap"
              :page-sizes="_tableConfig.pageSizeOptions"
              :page-size="_tableConfig.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="_tableConfig.total"
              @size-change="_handlePageSizeChange"
              @current-change="_handleCurrentPage"
          ></el-pagination>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'crm-table',
  props: {
    dataList: {
      type: Array,
      default: [],
    },
    tableConfig: {
      type: Object,
      default: {
        showPagination: true,
        pageNum: 1,
        total: 0,
        loading: false,
        pageSize: 20,
        pageSizeOptions: [10, 20, 30, 40, 50],
        headers: []
      }
    },
    getListHandle: {
      type: Function,
      default: function () {}
    }
  },
  data() {
    return {
      _tableConfig: {},
      _data_list: []
    }
  },
  watch: {
    tableConfig(val) {
        this._tableConfig = this.tableConfig
    },

    _tableConfig(val) {
        this.tableConfig = val
        this.$emit('update:tableConfig', val)
    },

    dataList(val) {
        this._data_list = val
        this._handle_pipe()
    },
    immediate: true,
    deep: true,
  },
  created() {
    this._tableConfig = this.tableConfig
    this._data_list = this.dataList
  },
  methods: {
    _handle_pipe() {
      var _pipe_name_arr = []

      for (let _i = 0; _i < this._tableConfig['headers'].length; _i++) {
        if (this._tableConfig['headers'][_i].pipe) {
          _pipe_name_arr.push({
            [this._tableConfig['headers'][_i].field]: this._tableConfig['headers'][_i].pipe,
          })
        }
      }

      _pipe_name_arr.forEach((_v, _i) => {
        if (_v[Object.keys(_v)[0]].indexOf('date|') != -1) {
          let _a = _v[Object.keys(_v)[0]].split('|')
          this.dataList.forEach((_ele, _j) => {
            let _date = new Date(Number(_ele[Object.keys(_v)[0]]))
            _ele[Object.keys(_v)[0]] = this._conversion_date(
                _date,
                _a[1]
            )
          })
        } else {
          this._data_list.forEach((_e, _j) => {
            _e[Object.keys(_v)[0]] = eval(_v[Object.keys(_v)[0]])[
              _e[Object.keys(_v)[0]]
            ]
          })
        }
      })
    },

    _handlePageSizeChange(_page_size) {
      this._tableConfig.pageSize = _page_size
      this._tableConfig.pageNum = 1
      this.getListHandle()
    },

    _handleCurrentPage(_page_num) {
      this._tableConfig.pageNum = _page_num
      this.getListHandle()
    },

    _handle_selection_change(_val) {
      this.$emit('handleSelectChange', _val)
    },

    _conversion_date(_date, _type) {
      var _y = _date.getFullYear()
      var _m = _date.getMonth() + 1
      var _d = _date.getDate()
      var _hou =
          _date.getHours() < 10
              ? '0' + _date.getHours()
              : _date.getHours()
      var _min =
          _date.getMinutes() < 10
              ? '0' + _date.getMinutes()
              : _date.getMinutes()
      var _sec =
          _date.getSeconds() < 10
              ? '0' + _date.getSeconds()
              : _date.getSeconds()

      if (_m < 10) {
          _m = '0' + _m
      }
      if (_d < 10) {
          _d = '0' + _d
      }
      if (_type == 'yyyy-MM-dd') {
          return _y + '-' + _m + '-' + _d
      }
      if (_type == 'yyyy-MM-dd hh:mm:ss') {
        return (
          _y +
          '-' +
          _m +
          '-' +
          _d +
          ' ' +
          _hou +
          ':' +
          _min +
          ':' +
          _sec
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./crm-table.scss"></style>